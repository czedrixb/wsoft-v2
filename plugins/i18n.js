import { createI18n } from "vue-i18n";
import enMessages from "~/locales/en.json";
import koMessages from "~/locales/ko.json";

const SUPPORTED = ["en", "ko"];
const DEFAULT_LOCALE = "ko";
const COOKIE_NAME = "lang";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
// Namespaced so it cannot collide with a future useState key.
const STATE_KEY = "app.locale";

const normalise = (value) => {
  const base = String(value ?? "")
    .trim()
    .toLowerCase()
    .split(/[-_]/)[0];
  return SUPPORTED.includes(base) ? base : null;
};

export default defineNuxtPlugin((nuxtApp) => {
  // One locale per request, decided by server/middleware/locale.ts and
  // carried to the client in the Nuxt payload. useState serialises into
  // __NUXT__, so on the client the initialiser below does not run and the
  // value read here is byte-identical to the one SSR rendered with.
  // Hydration cannot disagree. The client must never re-detect. AB-134.
  const localeState = useState(STATE_KEY, () => {
    if (import.meta.server) {
      const event = useRequestEvent?.();
      return normalise(event?.context?.locale) || DEFAULT_LOCALE;
    }
    // Reached only when there is no payload (e.g. a client-only render).
    // Cookie first so an explicit choice wins over the browser default.
    return (
      normalise(readCookie(COOKIE_NAME)) ||
      normalise(navigator.language) ||
      DEFAULT_LOCALE
    );
  });

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: localeState.value,
    // Korean remains the fallback so a missing EN key never renders blank —
    // e2e/locale-parity.spec.ts guards against a missing EN key silently
    // rendering Korean text on an English page instead.
    fallbackLocale: DEFAULT_LOCALE,
    messages: {
      en: enMessages,
      ko: koMessages,
    },
  });

  if (!nuxtApp.vueApp.config.globalProperties.$i18n) {
    nuxtApp.vueApp.use(i18n);
  }

  if (import.meta.client) {
    document.documentElement.lang = localeState.value;

    // Persist an explicit switch so the next server request honours it.
    // Fires on change only, so an auto-detected locale is never persisted.
    const unwatch = watch(
      () => i18n.global.locale.value,
      (next) => {
        const locale = normalise(next) || DEFAULT_LOCALE;
        localeState.value = locale;
        document.documentElement.lang = locale;
        writeCookie(COOKIE_NAME, locale, COOKIE_MAX_AGE);
        try {
          localStorage.setItem(COOKIE_NAME, locale);
        } catch {
          /* private mode */
        }
      }
    );
    nuxtApp.hook("app:beforeUnmount", () => unwatch?.());

    // Migration for visitors from before AB-134 whose `lang` cookie has
    // expired but whose localStorage preference survives. Deliberately
    // applied AFTER hydration so it is an ordinary reactive update, not a
    // hydration mismatch.
    nuxtApp.hook("app:mounted", () => {
      if (readCookie(COOKIE_NAME)) return;
      let stored = null;
      try {
        stored = normalise(localStorage.getItem(COOKIE_NAME));
      } catch {
        /* private mode */
      }
      if (stored && stored !== i18n.global.locale.value) {
        i18n.global.locale.value = stored; // the watcher above persists it
      }
    });
  }
});

function readCookie(name) {
  if (typeof document === "undefined") return null;
  const parts = `; ${document.cookie}`.split(`; ${name}=`);
  return parts.length === 2
    ? decodeURIComponent(parts.pop().split(";").shift())
    : null;
}

function writeCookie(name, value, maxAge) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; path=/; max-age=${maxAge}; samesite=lax`;
}
