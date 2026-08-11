import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";

/**
 * AB-134 — visual before/after of /skin_arch: this branch reworked the
 * LC-OCT product page (pre-launch status pill, Development Status in place
 * of a catalogue number, new Core Capabilities / IP / Interoperability /
 * Availability sections, a 3-col feature-card grid, and an on-page inquiry
 * CTA with a visible email) and removed the commercial pricing/lead-time
 * block. /skin_arch already existed on main (WOS-282 rename), so "before"
 * and "after" are the same URL served by two different checkouts:
 *   - after:  this branch, http://localhost:3000 (E2E_AFTER_URL)
 *   - before: main,        http://localhost:3001 (E2E_BEFORE_URL)
 * Screenshots land in SHOT_DIR (an Obsidian vault attachments folder) for
 * the verification report; this spec does not depend on their location.
 */

const PAGE_PATH = "/skin_arch";
const HERO_CLIP = { x: 0, y: 0, width: 1440, height: 900 };
const VIEWPORT = { width: 1440, height: 900 };

const SHOT_DIR = process.env.SHOT_DIR || "test-results/skin-arch-visual";
fs.mkdirSync(SHOT_DIR, { recursive: true });

const SIDES = [
  { key: "before", baseURL: process.env.E2E_BEFORE_URL || "http://localhost:3001" },
  { key: "after", baseURL: process.env.E2E_AFTER_URL || "http://localhost:3000" },
] as const;

const LOCALES = ["en", "ko"] as const;

/**
 * Force every .catalogue-section (GSAP ScrollTrigger reveal, opacity:0/y:24
 * until scrolled into view) to its resolved state, and make sure lazy
 * images/fonts have settled, before taking a full-page screenshot. A naive
 * fullPage screenshot without this captures most of the page invisible.
 */
async function stabilize(page: Page) {
  // Scroll pass fires ScrollTriggers and lazy-loads images down the page.
  await page.evaluate(async () => {
    const step = Math.max(200, Math.floor(window.innerHeight * 0.8));
    let y = 0;
    const max = document.body.scrollHeight;
    while (y < max) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
      y += step;
    }
  });

  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(
    () =>
      new Promise<void>((resolve) => {
        const imgs = Array.from(document.images);
        const pending = imgs.filter((img) => !img.complete);
        if (pending.length === 0) return resolve();
        let remaining = pending.length;
        const done = () => {
          remaining -= 1;
          if (remaining <= 0) resolve();
        };
        pending.forEach((img) => {
          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", done, { once: true });
        });
        setTimeout(resolve, 3000);
      })
  );

  // A stylesheet !important rule beats GSAP's inline opacity/transform.
  await page.addStyleTag({
    content: `
      .catalogue-section, [data-aos] { opacity: 1 !important; transform: none !important; }
      *, *::before, *::after { animation: none !important; transition: none !important; }
    `,
  });

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(150);
}

for (const side of SIDES) {
  for (const locale of LOCALES) {
    test(`${side.key} · ${locale}`, async ({ browser }) => {
      const context = await browser.newContext({
        baseURL: side.baseURL,
        viewport: VIEWPORT,
      });
      await context.addCookies([
        {
          name: "lang",
          value: locale,
          url: side.baseURL,
        },
      ]);
      const page = await context.newPage();

      await page.goto(PAGE_PATH, { waitUntil: "networkidle" });

      const html = await page.content();

      // Hero shot: above-the-fold, before the stabilize() scroll pass moves
      // the viewport / reflows lazy content.
      await page.screenshot({
        path: `${SHOT_DIR}/skin-arch-${side.key}-${locale}-hero.png`,
        clip: HERO_CLIP,
      });

      await stabilize(page);

      await page.screenshot({
        path: `${SHOT_DIR}/skin-arch-${side.key}-${locale}-full.png`,
        fullPage: true,
      });

      // Behaviour assertions, not just capture — confirm each side really is
      // the checkout it claims to be and that the branch's changes render.
      if (side.key === "after") {
        if (locale === "en") {
          expect(html).toContain("In development · Official launch H1 2027");
          expect(html).toContain("Development Status");
          expect(html).toContain("Core Analysis Capabilities");
          expect(html).toContain("Intellectual Property");
          expect(html).toContain("Interoperability & Integration");
          expect(html).toContain("Availability");
          expect(html).toContain("Request a Quote");
          expect(html).not.toContain("USD 25,000");
          expect(html).not.toContain("Catalogue Number");
          expect(html).not.toContain("Lead Time");
        } else {
          expect(html).toContain("개발 중 · 정식 출시 2027년 상반기");
          expect(html).toContain("개발 상태");
          expect(html).toContain("핵심 분석 기능");
          expect(html).toContain("지식재산권");
          expect(html).toContain("견적 문의하기");
          expect(html).not.toContain("USD 25,000");
        }
        await expect(page.locator('a[href^="mailto:"]').first()).toBeAttached();
      } else {
        if (locale === "en") {
          expect(html).toContain("Catalogue Number");
          expect(html).toContain("SkinArch-LCOCT-Analyzer-v1.0");
          expect(html).toContain("USD 25,000 (annual license)");
          expect(html).not.toContain("Development Status");
          expect(html).not.toContain("Core Analysis Capabilities");
        } else {
          expect(html).not.toContain("개발 상태");
        }
      }

      await context.close();
    });
  }
}
