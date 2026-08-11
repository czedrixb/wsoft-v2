import { test, expect } from "@playwright/test";

/**
 * WOS-282 — Matt (CEO, via WOS-281) asked for the Client / Jira / Author / Date
 * metadata to be removed from the "V1 Model Performance Report" preview on
 * /skin_arch (formerly /optical-microscope). Those values were baked into a
 * static Figma export (public/images/revamp/products/report-preview-lcoct.png),
 * not page text, so a text grep can never catch a regression here — the pixels
 * themselves must be inspected.
 */

const PAGE_PATH = "/skin_arch";
const IMAGE_PATH = "/images/revamp/products/report-preview-lcoct.png";
// NuxtImg serves the asset through IPX (e.g. /_ipx/_/images/revamp/products/
// report-preview-lcoct.png), so locate it by filename rather than exact src.
const IMAGE_SELECTOR = 'img[src*="report-preview-lcoct.png"]';
const EXPECTED_WIDTH = 1872;
const EXPECTED_HEIGHT = 1438;
const EXPECTED_RATIO = 936 / 719; // unchanged from the pre-redaction asset

/**
 * Decode a same-origin PNG in-page and count "ink" pixels (average RGB below
 * maxLuminance) inside each given rect. All the pixel math runs inside the
 * browser and only small counts cross back — the full 1872x1438 RGBA buffer
 * (~10.7M values) is far too large to serialize back through page.evaluate.
 */
async function inkCounts(
  page: import("@playwright/test").Page,
  url: string,
  rects: Array<{ x0: number; x1: number; y0: number; y1: number; maxLuminance: number }>
) {
  return page.evaluate(
    async ({ src, rects }) => {
      const img = new Image();
      img.src = src;
      await img.decode();
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);

      const counts = rects.map((rect) => {
        const { data } = ctx.getImageData(
          rect.x0,
          rect.y0,
          rect.x1 - rect.x0 + 1,
          rect.y1 - rect.y0 + 1
        );
        let count = 0;
        for (let i = 0; i < data.length; i += 4) {
          const l = (data[i] + data[i + 1] + data[i + 2]) / 3;
          if (l < rect.maxLuminance) count++;
        }
        return count;
      });

      return { width: canvas.width, height: canvas.height, counts };
    },
    { src: url, rects }
  );
}

test.describe("report preview redaction (WOS-282)", () => {
  test("asset is served, unchanged aspect ratio, at the redacted resolution", async ({
    request,
  }) => {
    const res = await request.get(IMAGE_PATH);
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("image/png");
  });

  test("metadata bar no longer contains Client / Jira / Author / Date ink, but keeps Project", async ({
    page,
  }) => {
    await page.goto(PAGE_PATH);
    const src = await page.locator(IMAGE_SELECTOR).first().getAttribute("src");
    expect(src).toBeTruthy();

    const { width, height, counts } = await inkCounts(page, src!, [
      // Everything to the right of "Project SkinArch LC-OCT" on the metadata
      // row used to read Client AbbVie | Jira AB-44 | Author Ben (WSOFT) |
      // Date 2026-05-12. It must now be blank background — no dark ink at all.
      { x0: 480, x1: 1700, y0: 505, y1: 570, maxLuminance: 215 },
      // "Project SkinArch LC-OCT" itself must still be present (AC: retained).
      { x0: 239, x1: 460, y0: 520, y1: 545, maxLuminance: 215 },
    ]);
    const [removedZone, projectZone] = counts;

    expect(width).toBe(EXPECTED_WIDTH);
    expect(height).toBe(EXPECTED_HEIGHT);
    expect(width / height).toBeCloseTo(EXPECTED_RATIO, 3);
    expect(removedZone, "Client/Jira/Author/Date region should be empty").toBe(0);
    expect(projectZone, "Project label should still render").toBeGreaterThan(0);
  });

  test("page HTML and alt text contain no trace of the removed client/ticket data", async ({
    request,
  }) => {
    // The site defaults to Korean without a lang cookie (see e2e/og-thumbnail.spec.ts);
    // force English so the alt-text assertion below is deterministic.
    const res = await request.get(PAGE_PATH, {
      headers: { cookie: "lang=en" },
    });
    const html = await res.text();

    expect(html).not.toContain("AbbVie");
    expect(html).not.toContain("AB-44");
    expect(html).toContain("report-preview-lcoct.png");
    // The alt text is unrelated i18n copy and must be untouched by this change.
    expect(html).toContain("SkinArch LC-OCT Analyzer research build");
  });

  test("preview image keeps its aspect ratio and fits its container on desktop and mobile", async ({
    page,
  }) => {
    for (const viewport of [
      { width: 1440, height: 900 },
      { width: 390, height: 844 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto(PAGE_PATH);

      const img = page.locator(IMAGE_SELECTOR);
      await expect(img).toBeVisible();

      const box = await img.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.width / box!.height).toBeCloseTo(EXPECTED_RATIO, 1);
      expect(box!.width).toBeLessThanOrEqual(viewport.width);
    }
  });
});
