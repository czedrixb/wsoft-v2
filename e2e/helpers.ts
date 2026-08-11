import { expect, type APIRequestContext } from "@playwright/test";

/** Fetch a page's SSR HTML the way a crawler would, with explicit headers. */
export async function fetchSsr(
  request: APIRequestContext,
  path: string,
  {
    cookie,
    acceptLanguage,
    headers: extraHeaders,
  }: {
    cookie?: string;
    acceptLanguage?: string;
    headers?: Record<string, string>;
  } = {}
) {
  const headers: Record<string, string> = { ...extraHeaders };
  if (cookie) headers.cookie = cookie;
  // Always explicit: the default Chromium accept-language would otherwise
  // silently drive locale detection and make these assertions ambiguous.
  headers["accept-language"] = acceptLanguage ?? "";
  const res = await request.get(path, { headers });
  expect(res.status()).toBe(200);
  return { html: await res.text(), headers: res.headers() };
}

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Pull a meta tag's content out of raw HTML, tolerating attribute order. */
export function readMeta(html: string, key: string): string | null {
  const attr = /^(og:|article:)/.test(key) ? "property" : "name";
  const k = escapeRe(key);
  const patterns = [
    new RegExp(`<meta[^>]*\\b${attr}="${k}"[^>]*\\bcontent="([^"]*)"`, "i"),
    new RegExp(`<meta[^>]*\\bcontent="([^"]*)"[^>]*\\b${attr}="${k}"`, "i"),
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return m[1];
  }
  return null;
}

/** The resolved <html lang="..."> attribute of a raw SSR HTML string. */
export function readHtmlLang(html: string): string | null {
  const m = html.match(/<html[^>]*\slang="([^"]*)"/i);
  return m ? m[1] : null;
}

/** Every mailto: / tel: href present in raw SSR HTML, deduplicated. */
export function extractHrefs(html: string, scheme: "mailto" | "tel"): string[] {
  const re = new RegExp(`href="(${scheme}:[^"]*)"`, "gi");
  const found = [...html.matchAll(re)].map((m) => m[1]);
  return [...new Set(found)];
}
