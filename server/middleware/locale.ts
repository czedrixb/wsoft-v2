// server/middleware/locale.ts
//
// The single place the request locale is decided. Nothing else may decide it:
// plugins/i18n.js reads event.context.locale on the server and hands the
// result to the client through the Nuxt payload, so SSR HTML and hydration
// cannot disagree. AB-134 item 4.
//
// Resolution order, highest priority first:
//   1. ?lang=en|ko   explicit and shareable — the CES submission uses ?lang=en
//   2. `lang` cookie an explicit earlier choice (cookies predating AB-134 count)
//   3. Accept-Language, q-values honoured, highest-ranked supported tag
//   4. Accept-Language present but naming neither en nor ko -> en
//   5. a geo hint header, if the proxy or a CDN ever supplies one
//   6. no signal at all (crawlers, curl, unfurlers) -> ko, deliberately unchanged
//
// Deliberately NOT changed: the no-signal default stays Korean. Real browsers
// always send Accept-Language, so a CES judge never reaches that branch, and
// flipping it would change what Google/Naver index for the whole site (see
// site.defaultLocale in nuxt.config.ts, and e2e/og-thumbnail.spec.ts which
// pins exactly this behaviour for a crawler with no cookie or language hint).

const SUPPORTED = ["en", "ko"] as const;
type Locale = (typeof SUPPORTED)[number];

const DEFAULT_LOCALE: Locale = "ko";
const COOKIE_NAME = "lang";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

// Countries served Korean by the optional geo hint. Everything else gets en.
const KOREAN_COUNTRIES = new Set(["KR"]);

// No geo header exists on the current Bitnami VM (no CDN in front of it) —
// these are read opportunistically so that adding nginx's
// ngx_http_geoip2_module (proxy_set_header X-Country-Code
// $geoip2_data_country_code;) or putting Cloudflare in front needs no
// application change.
const GEO_HEADERS = ["x-country-code", "cf-ipcountry", "x-vercel-ip-country"];

declare module "h3" {
  interface H3EventContext {
    locale?: Locale;
    localeSource?: string;
  }
}

/** "en-US" | "EN" | "en_us" -> "en" */
const baseTag = (tag: string) => tag.trim().toLowerCase().split(/[-_]/)[0];

const isLocale = (v?: string | null): v is Locale =>
  !!v && (SUPPORTED as readonly string[]).includes(v);

/**
 * Accept-Language, q-values honoured.
 * "fr-CA,en-US;q=0.9,ko;q=0.5" -> ["fr", "en", "ko"]
 * q=0 means "refused" and is dropped; "*" is no preference and is dropped.
 * An empty result means the client expressed no usable preference.
 */
export function parseAcceptLanguage(header: string): string[] {
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.split(";").map((s) => s.trim());
      if (!tag || tag === "*") return null;
      const qParam = params.find((p) => /^q=/i.test(p));
      const quality = qParam ? Number.parseFloat(qParam.slice(2)) : 1;
      if (!Number.isFinite(quality) || quality <= 0) return null;
      return { tag: baseTag(tag), quality };
    })
    .filter((x): x is { tag: string; quality: number } => !!x?.tag);

  // Array.prototype.sort is stable in Node >= 12, so equal-q tags keep the
  // order the client listed them in.
  ranked.sort((a, b) => b.quality - a.quality);
  return [...new Set(ranked.map((r) => r.tag))];
}

function resolveLocale(event: any): { locale: Locale; source: string } {
  const raw = getQuery(event).lang;
  const queryLang = Array.isArray(raw) ? raw[0] : raw;
  if (typeof queryLang === "string") {
    const q = baseTag(queryLang);
    if (isLocale(q)) return { locale: q, source: "query" };
  }

  // Any pre-existing cookie is honoured as an explicit choice. Korean
  // visitors who already have lang=ko must keep seeing Korean.
  const cookieLang = getCookie(event, COOKIE_NAME);
  if (isLocale(cookieLang)) return { locale: cookieLang, source: "cookie" };

  const ranked = parseAcceptLanguage(
    getRequestHeader(event, "accept-language") || ""
  );
  if (ranked.length) {
    const match = ranked.find(isLocale);
    if (match) return { locale: match, source: "accept-language" };
    // The client listed its languages and Korean is not among them.
    return { locale: "en", source: "accept-language-unsupported" };
  }

  for (const name of GEO_HEADERS) {
    const country = getRequestHeader(event, name)?.trim().toUpperCase();
    if (country && country !== "XX") {
      return {
        locale: KOREAN_COUNTRIES.has(country) ? "ko" : "en",
        source: `geo:${name}`,
      };
    }
  }

  // No signal whatsoever: crawlers, curl, link unfurlers. Korean stays the
  // default so the indexed language of the site does not change.
  return { locale: DEFAULT_LOCALE, source: "default" };
}

export default defineEventHandler((event) => {
  const path = event.path || "";
  // Only documents carry a locale. Skipping assets keeps Vary off the
  // immutable /_nuxt and /_ipx responses and off API routes.
  if (
    path.startsWith("/_nuxt") ||
    path.startsWith("/_ipx") ||
    path.startsWith("/api/") ||
    /\.[a-z0-9]+(\?|$)/i.test(path)
  ) {
    return;
  }

  const { locale, source } = resolveLocale(event);
  event.context.locale = locale;
  event.context.localeSource = source;

  // The rendered document depends on both of these. No intermediary — the
  // nginx proxy_cache this repo cannot see, a browser cache, a future CDN —
  // may hand a Korean document to an English visitor, or vice versa.
  appendResponseHeader(event, "Vary", "Accept-Language, Cookie");

  // Persist an explicit choice only. Auto-detection never writes a cookie, so
  // a single wrong guess cannot be pinned for a year and no Set-Cookie ever
  // lands on a cacheable HTML response.
  if (source === "query") {
    setCookie(event, COOKIE_NAME, locale, {
      path: "/",
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax",
      httpOnly: false, // Language.vue reads it from document.cookie
    });
    setResponseHeader(event, "Cache-Control", "private, no-store");
  }
});
