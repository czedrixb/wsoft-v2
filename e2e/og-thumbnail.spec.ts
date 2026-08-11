import { test, expect } from "@playwright/test";
import { fetchSsr, readMeta } from "./helpers";

/**
 * WOS-275 — the Skin Arch share thumbnail must be locale-correct, absolute, and
 * present in the SSR HTML (crawlers never run JS).
 */

const SITE_ORIGIN = "https://wsoft.space";
const KO_IMAGE = `${SITE_ORIGIN}/images/thumbnail-ko.png`;
const EN_IMAGE = `${SITE_ORIGIN}/images/thumbnail-en.png`;

// Scrapers such as WhatsApp and KakaoTalk skip images past roughly this size.
const MAX_IMAGE_BYTES = 600 * 1024;

test.describe("share thumbnail (og:image / twitter:image)", () => {
  test("KO is the default for a crawler with no cookie or language hint", async ({
    request,
  }) => {
    const { html } = await fetchSsr(request, "/");

    expect(readMeta(html, "og:image")).toBe(KO_IMAGE);
    expect(readMeta(html, "og:locale")).toBe("ko_KR");
    expect(readMeta(html, "og:locale:alternate")).toBe("en_US");
  });

  test("EN is served when the lang cookie says so", async ({ request }) => {
    const { html } = await fetchSsr(request, "/", { cookie: "lang=en" });

    expect(readMeta(html, "og:image")).toBe(EN_IMAGE);
    expect(readMeta(html, "og:locale")).toBe("en_US");
    expect(readMeta(html, "og:locale:alternate")).toBe("ko_KR");
  });

  test("KO is served when the lang cookie says so", async ({ request }) => {
    const { html } = await fetchSsr(request, "/", { cookie: "lang=ko" });

    expect(readMeta(html, "og:image")).toBe(KO_IMAGE);
    expect(readMeta(html, "og:locale")).toBe("ko_KR");
  });

  test("og:image is absolute with no double slash, and declares true size", async ({
    request,
  }) => {
    const { html } = await fetchSsr(request, "/");
    const image = readMeta(html, "og:image")!;

    expect(image).toMatch(/^https:\/\//);
    // The regression this guards: baseUrl carries a trailing slash, which used
    // to yield https://wsoft.space//images/...
    expect(image.replace(/^https:\/\//, "")).not.toContain("//");

    expect(readMeta(html, "og:image:width")).toBe("1200");
    expect(readMeta(html, "og:image:height")).toBe("628");
  });

  test("twitter:image matches og:image", async ({ request }) => {
    for (const cookie of ["lang=ko", "lang=en"]) {
      const { html } = await fetchSsr(request, "/", { cookie });
      expect(readMeta(html, "twitter:image")).toBe(readMeta(html, "og:image"));
    }
  });

  test("og:description names the brand in both locales", async ({ request }) => {
    // Regression: home-description/about-us-description carry a {brand}
    // placeholder. The meta calls used to omit the param, so EN rendered
    // "Elevate your business with ' AI..." and KO said "W Soft Labs".
    for (const [cookie, path] of [
      ["lang=en", "/"],
      ["lang=ko", "/"],
      ["lang=en", "/about-us"],
      ["lang=ko", "/about-us"],
    ]) {
      const { html } = await fetchSsr(request, path, { cookie });
      const desc = readMeta(html, "og:description")!;

      expect(desc, `${path} ${cookie}`).toContain("W Labs");
      expect(desc, `${path} ${cookie}`).not.toContain("{brand}");
      expect(desc, `${path} ${cookie}`).not.toMatch(/W[- ]?Soft ?Labs/);
    }
  });

  test("the composable applies beyond the homepage", async ({ request }) => {
    const { html } = await fetchSsr(request, "/about-us", { cookie: "lang=en" });
    expect(readMeta(html, "og:image")).toBe(EN_IMAGE);
    expect(readMeta(html, "twitter:image")).toBe(EN_IMAGE);
  });

  test("both thumbnails are served, are PNGs, and are small enough to unfurl", async ({
    request,
  }) => {
    for (const url of [KO_IMAGE, EN_IMAGE]) {
      // Fetch from the server under test, not production.
      const path = new URL(url).pathname;
      const res = await request.get(path);

      expect(res.status(), `${path} should be served`).toBe(200);
      expect(res.headers()["content-type"]).toContain("image/png");

      const bytes = (await res.body()).length;
      expect(bytes, `${path} is ${Math.round(bytes / 1024)}KB`).toBeLessThanOrEqual(
        MAX_IMAGE_BYTES
      );
    }
  });

  test("meta tags update reactively when the language is switched client-side", async ({
    page,
    context,
  }) => {
    await context.addCookies([
      { name: "lang", value: "ko", url: "http://localhost:3000" },
    ]);
    await page.goto("/");

    const ogImage = page.locator('head meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute("content", KO_IMAGE);

    // Language.vue mutates locale without a route change; the share image is a
    // computed ref so the head must follow it.
    await page.evaluate(() => {
      document.cookie = "lang=en; path=/";
    });
    await page.reload();

    await expect(ogImage).toHaveAttribute("content", EN_IMAGE);
  });
});

test.describe("logo in machine-readable metadata", () => {
  test("Organization JSON-LD points at the current W Labs mark", async ({
    request,
  }) => {
    const { html } = await fetchSsr(request, "/");

    const blocks = [
      ...html.matchAll(
        /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
      ),
    ].map((m) => m[1]);
    expect(blocks.length).toBeGreaterThan(0);

    const joined = blocks.join("\n");
    expect(joined).toContain("/images/logos/w-labs-logo.png");
    // The retired marks must be gone.
    expect(joined).not.toContain("w-softlabs.svg");
    expect(joined).not.toContain("W SoftLabs");
    expect(joined).not.toContain("//images/");
  });

  test("favicon and apple-touch-icon links are present", async ({ request }) => {
    const { html } = await fetchSsr(request, "/");

    expect(html).toContain('href="/favicon-32x32.png"');
    expect(html).toContain('href="/favicon-16x16.png"');
    expect(html).toContain('href="/apple-touch-icon.png"');

    for (const path of [
      "/favicon.ico",
      "/favicon-32x32.png",
      "/favicon-16x16.png",
      "/apple-touch-icon.png",
      "/images/logos/w-labs-logo.png",
    ]) {
      const res = await request.get(path);
      expect(res.status(), `${path} should be served`).toBe(200);
    }
  });
});
