import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Plain fs read rather than a JSON module import: the ESM loader used to run
// these tests requires an explicit `with { type: "json" }` import attribute
// for JSON imports, which isn't worth the extra syntax for two config files.
const localesDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "locales"
);
const en = JSON.parse(readFileSync(path.join(localesDir, "en.json"), "utf8"));
const ko = JSON.parse(readFileSync(path.join(localesDir, "ko.json"), "utf8"));

/**
 * AB-134 — plugins/i18n.js sets fallbackLocale: "ko". A key missing from
 * en.json silently renders Korean text on an English page instead of
 * erroring, which is exactly the failure mode a CES judge must never see.
 * Pure Node, no browser: flatten both bundles and assert identical key sets.
 *
 * This test was red on discovery (niftle-title3/title3, message-success/
 * message-failed vs message-sent-success/message-send-fail) — fixed in the
 * same change that added it, see locales/en.json and locales/ko.json.
 */

function flattenKeys(obj: unknown, prefix = ""): string[] {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return [prefix];
  }
  return Object.entries(obj as Record<string, unknown>).flatMap(([key, value]) =>
    flattenKeys(value, prefix ? `${prefix}.${key}` : key)
  );
}

test("en.json and ko.json declare exactly the same set of keys", () => {
  const enKeys = new Set(flattenKeys(en));
  const koKeys = new Set(flattenKeys(ko));

  const onlyInEn = [...enKeys].filter((k) => !koKeys.has(k)).sort();
  const onlyInKo = [...koKeys].filter((k) => !enKeys.has(k)).sort();

  expect(onlyInEn, "keys present in en.json but missing from ko.json").toEqual(
    []
  );
  expect(onlyInKo, "keys present in ko.json but missing from en.json").toEqual(
    []
  );
});

test("no key resolves to an empty string in either locale", () => {
  const collectEmpty = (obj: unknown, prefix = ""): string[] => {
    if (typeof obj === "string") return obj.trim() === "" ? [prefix] : [];
    if (Array.isArray(obj)) {
      return obj.flatMap((v, i) => collectEmpty(v, `${prefix}[${i}]`));
    }
    if (typeof obj === "object" && obj !== null) {
      return Object.entries(obj as Record<string, unknown>).flatMap(
        ([key, value]) => collectEmpty(value, prefix ? `${prefix}.${key}` : key)
      );
    }
    return [];
  };

  expect(collectEmpty(en)).toEqual([]);
  expect(collectEmpty(ko)).toEqual([]);
});

test("H1 2027 is the only launch date stated, and no other date substitutes for it", () => {
  // The CES application form states the market launch date as 2027-03-01;
  // H1 2027 is consistent with that. Scoped to the fields that actually
  // state launch timing — NOT the whole product entry, which legitimately
  // contains other 4-digit numbers unrelated to any date (KIPO application
  // numbers like 10-2026-0116560, and "current as of August 2026" on the
  // patent portfolio, which is a freshness stamp, not a launch claim).
  const launchFields = {
    "en.developmentStatus": en.products.items.lcOct.developmentStatus,
    "ko.developmentStatus": ko.products.items.lcOct.developmentStatus,
    "en.launchValue": en.products.items.lcOct.availability.launchValue,
    "ko.launchValue": ko.products.items.lcOct.availability.launchValue,
    "en.statusPill": en["optical-microscope"].statusPill,
    "ko.statusPill": ko["optical-microscope"].statusPill,
  };

  for (const [name, text] of Object.entries(launchFields)) {
    expect(text, name).toMatch(/H1 2027|2027년 상반기/);
    // No specific month/quarter that would contradict "first half" framing.
    expect(text, name).not.toMatch(/march|q1|1월|2월|3월|2027-03/i);
    const years = text.match(/\b(19|20)\d{2}\b/g) || [];
    expect(years.every((y) => y === "2027"), `${name}: ${years}`).toBe(true);
  }
});

test("patent applications are never described as patented or registered", () => {
  // The three named filings are applications (출원), not the portfolio's one
  // granted patent. Overstating this on a public CES page is a real legal
  // exposure, not a wording nicety.
  for (const [locale, ip] of Object.entries({
    en: en.products.items.lcOct.ip,
    ko: ko.products.items.lcOct.ip,
  })) {
    const patentText = JSON.stringify([ip.patentA, ip.patentB, ip.patentC]);
    expect(patentText, locale).not.toMatch(/patented|특허\s*취득|특허\s*등록/);
    expect(ip.patentA.number, locale).toMatch(/pending|출원 중/);
    expect(ip.patentB.number, locale).toMatch(/pending|출원 중/);
    expect(ip.patentC.number, locale).toMatch(/pending|출원 중/);
  }
});

test("no commercial launch signals remain on the SkinArch product entry", () => {
  for (const [locale, lcOct] of Object.entries({
    en: en.products.items.lcOct,
    ko: ko.products.items.lcOct,
  })) {
    expect(lcOct, locale).not.toHaveProperty("catalogueNumber");
    expect(lcOct, locale).not.toHaveProperty("pricing");
    expect(lcOct, locale).not.toHaveProperty("leadTime");
    expect(JSON.stringify(lcOct), locale).not.toContain("v1.0");
  }
  for (const [locale, products] of Object.entries({
    en: en.products,
    ko: ko.products,
  })) {
    expect(products, locale).not.toHaveProperty("catalogueNumber");
    expect(products, locale).not.toHaveProperty("pricing");
    expect(products, locale).not.toHaveProperty("leadTime");
    expect(products, locale).not.toHaveProperty("pricingUponRequest");
    expect(products, locale).not.toHaveProperty("leadTimeValue");
  }
});
