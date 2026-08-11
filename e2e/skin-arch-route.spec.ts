import { test, expect } from "@playwright/test";

/**
 * The LC-OCT product page moved from /optical-microscope to /skin_arch, and
 * its launch-status copy was corrected: the product is still in development
 * and not commercially available, so no price is published — the page now
 * says pricing "has not been set" rather than quoting any figure (fixed fee
 * or "priced upon request"). /optical-microscope must 301 to the new path so
 * existing links/bookmarks/SEO aren't broken (see nuxt.config.ts routeRules).
 */

const OLD_PATH = "/optical-microscope";
const NEW_PATH = "/skin_arch";

test.describe("skin_arch route rename", () => {
  test("the old path permanently redirects to the new one", async ({ request }) => {
    const res = await request.get(OLD_PATH, { maxRedirects: 0 });
    expect(res.status()).toBe(301);
    expect(res.headers()["location"]).toBe(NEW_PATH);
  });

  test("the new path serves the product page directly", async ({ request }) => {
    const res = await request.get(NEW_PATH);
    expect(res.status()).toBe(200);

    const html = await res.text();
    expect(html).toContain("SkinArch");
    // Canonical/og:url should reflect the new path, not the old one.
    expect(html).toMatch(new RegExp(`rel="canonical" href="[^"]*${NEW_PATH}"`));
    expect(html).not.toContain(OLD_PATH);
  });

  test("a browser following the old link lands on the new page", async ({ page }) => {
    await page.goto(OLD_PATH);
    await expect(page).toHaveURL(new RegExp(`${NEW_PATH}$`));
  });
});

test.describe("skin_arch pricing", () => {
  test("states pricing has not been set, in both locales", async ({
    request,
  }) => {
    const en = await (
      await request.get(NEW_PATH, { headers: { cookie: "lang=en" } })
    ).text();
    expect(en).toContain("Commercial pricing has not been set");
    expect(en).not.toContain("USD 25,000");
    expect(en).not.toContain("Priced Upon Request");

    const ko = await (
      await request.get(NEW_PATH, { headers: { cookie: "lang=ko" } })
    ).text();
    expect(ko).toContain("상용 가격은 아직 책정되지 않았으며");
    expect(ko).not.toContain("USD 25,000");
    // Scoped to the old pricing string rather than the bare substring
    // "견적 문의" — the page's separate inquiry CTA ("견적 문의하기") legitimately
    // contains that substring and would false-positive a blanket check.
    expect(ko).not.toContain("견적 문의 (USD)");
  });
});
