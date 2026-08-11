import { test, expect } from "@playwright/test";
import { fetchSsr, readHtmlLang } from "./helpers";

/**
 * AB-134 item 4 — a CES judge (or anyone outside Korea) must land on English
 * without clicking anything. Verifies server/middleware/locale.ts and its
 * consumer in plugins/i18n.js: q-value Accept-Language parsing, the
 * unsupported-language -> en fallback, the ?lang= override, cookie
 * precedence, and the no-signal Korean default staying unchanged.
 */

const HANGUL = /[가-힣]/;

test.describe("server-side locale resolution", () => {
  const matrix: Array<{
    name: string;
    path: string;
    acceptLanguage?: string;
    cookie?: string;
    headers?: Record<string, string>;
    expectLang: "en" | "ko";
  }> = [
    {
      name: "en-US browser",
      path: "/skin_arch",
      acceptLanguage: "en-US,en;q=0.9",
      expectLang: "en",
    },
    {
      name: "ko-KR browser",
      path: "/skin_arch",
      acceptLanguage: "ko-KR,ko;q=0.9,en;q=0.8",
      expectLang: "ko",
    },
    {
      name: "fr-FR browser (regression: used to fall through to Korean)",
      path: "/skin_arch",
      acceptLanguage: "fr-FR,fr;q=0.9",
      expectLang: "en",
    },
    {
      name: "mixed header with Korean ranked lowest (q-values honoured)",
      path: "/skin_arch",
      acceptLanguage: "fr-CA,en-US;q=0.9,ko;q=0.5",
      expectLang: "en",
    },
    {
      name: "no Accept-Language at all (crawler, curl) stays Korean",
      path: "/skin_arch",
      acceptLanguage: "",
      expectLang: "ko",
    },
    {
      name: "a pre-existing lang=ko cookie beats an English browser",
      path: "/skin_arch",
      acceptLanguage: "en-US,en;q=0.9",
      cookie: "lang=ko",
      expectLang: "ko",
    },
    {
      name: "a pre-existing lang=en cookie beats a Korean browser",
      path: "/skin_arch",
      acceptLanguage: "ko-KR,ko;q=0.9",
      cookie: "lang=en",
      expectLang: "en",
    },
    {
      name: "geo hint used only when Accept-Language gives no signal",
      path: "/skin_arch",
      acceptLanguage: "",
      headers: { "x-country-code": "US" },
      expectLang: "en",
    },
    {
      name: "geo hint for Korea, no Accept-Language",
      path: "/skin_arch",
      acceptLanguage: "",
      headers: { "x-country-code": "KR" },
      expectLang: "ko",
    },
  ];

  for (const c of matrix) {
    test(c.name, async ({ request }) => {
      const { html, headers } = await fetchSsr(request, c.path, {
        acceptLanguage: c.acceptLanguage,
        cookie: c.cookie,
        headers: c.headers,
      });

      expect(readHtmlLang(html)).toBe(c.expectLang);
      expect(headers["vary"] || "").toContain("Accept-Language");
      expect(headers["vary"] || "").toContain("Cookie");
    });
  }

  test("?lang=en overrides everything and persists an explicit cookie", async ({
    request,
  }) => {
    const { html, headers } = await fetchSsr(
      request,
      "/skin_arch?lang=en",
      { acceptLanguage: "ko-KR,ko;q=0.9" }
    );

    expect(readHtmlLang(html)).toBe("en");
    expect(headers["set-cookie"] || "").toContain("lang=en");
    expect(headers["set-cookie"] || "").toContain("Max-Age=31536000");
    // Auto-detected locales must never write a cookie or this header — only
    // an explicit ?lang= may, so a cache can never replay a stale
    // Set-Cookie onto the wrong visitor.
    expect(headers["cache-control"] || "").toContain("no-store");
  });

  test("auto-detection never sets a cookie", async ({ request }) => {
    const { headers } = await fetchSsr(request, "/skin_arch", {
      acceptLanguage: "en-US,en;q=0.9",
    });
    expect(headers["set-cookie"]).toBeUndefined();
  });

  test("English SSR HTML contains no Hangul in the visible page content", async ({
    request,
  }) => {
    const { html } = await fetchSsr(request, "/skin_arch", {
      acceptLanguage: "en-US,en;q=0.9",
    });
    // Scoped to the <body>, not the whole document: an unrelated dead config
    // value (nuxt.config.ts siteKeywords) embeds Korean text inside the
    // hydration payload <script> tag, which is never rendered as visible
    // text. That is a pre-existing, out-of-scope issue — this assertion
    // guards what a judge actually reads, not raw markup.
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const body = bodyMatch ? bodyMatch[1] : html;
    const withoutScripts = body.replace(
      /<script[\s\S]*?<\/script>/gi,
      ""
    );
    expect(withoutScripts).not.toMatch(HANGUL);
  });
});

test.describe("hydration agrees with SSR (no client-side re-detection)", () => {
  test("no hydration mismatch for an English-preferring browser", async ({
    browser,
  }) => {
    const context = await browser.newContext({ locale: "en-US" });
    const page = await context.newPage();
    const consoleIssues: string[] = [];
    page.on("console", (msg) => {
      if (/hydration|mismatch/i.test(msg.text())) consoleIssues.push(msg.text());
    });
    page.on("pageerror", (err) => {
      if (/hydration|mismatch/i.test(err.message)) consoleIssues.push(err.message);
    });

    await page.goto("/skin_arch");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    expect(consoleIssues).toEqual([]);

    await context.close();
  });

  test("the status pill is present without JavaScript", async ({ browser }) => {
    const context = await browser.newContext({
      locale: "en-US",
      javaScriptEnabled: false,
    });
    const page = await context.newPage();
    await page.goto("/skin_arch");

    await expect(page.getByText(/Official launch H1 2027/i)).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    await context.close();
  });

  test("the switcher's language links are real hrefs in the no-JS SSR HTML", async ({
    request,
  }) => {
    // Language.vue used to render nothing at all without JS (ClientOnly
    // fallback=""). A no-JS visitor, a crawler, or a link unfurler must now
    // see real navigable links to both languages, honoured by
    // server/middleware/locale.ts's ?lang= handling.
    const { html } = await fetchSsr(request, "/skin_arch", {
      acceptLanguage: "en-US,en;q=0.9",
    });
    expect(html).toMatch(/<a[^>]*href="[^"]*\?lang=en"[^>]*hreflang="en"/);
    expect(html).toMatch(/<a[^>]*href="[^"]*\?lang=ko"[^>]*hreflang="ko"/);
  });

  test("clicking the switcher changes the rendered language", async ({
    page,
  }) => {
    await page.goto("/skin_arch?lang=en");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    // daisyUI dropdown: the label must be focused/hovered to reveal
    // .dropdown-content before the option inside it is clickable.
    await page.locator(".dropdown > label").first().click();
    await page.locator('a[hreflang="ko"]').first().click();

    await expect(page.locator("html")).toHaveAttribute("lang", "ko");
  });
});

test.describe("/newsroom no longer caches the wrong language", () => {
  test("a Korean request followed by an English request both get the right language", async ({
    request,
  }) => {
    const first = await fetchSsr(request, "/newsroom", {
      acceptLanguage: "ko-KR,ko;q=0.9",
    });
    expect(readHtmlLang(first.html)).toBe("ko");

    const second = await fetchSsr(request, "/newsroom", {
      acceptLanguage: "en-US,en;q=0.9",
    });
    expect(readHtmlLang(second.html)).toBe("en");
    // A shared cache serving the first response to the second request would
    // show up as an Age header or a cache hit; the route is now
    // "private, no-cache" specifically to prevent that.
    expect(second.headers["age"]).toBeUndefined();
  });
});
