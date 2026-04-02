import { d as defineEventHandler, a as useRuntimeConfig } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';

let cachedToken = null;
let tokenExpiry = null;
async function getValidToken(config) {
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry - 3e5) {
    console.log("[API] Using cached token");
    return cachedToken;
  }
  console.log("[API] Getting new auth token for blogs...");
  const loginResponse = await $fetch("https://blog.wsoftdev.space/api/login", {
    method: "POST",
    body: {
      email: config.blogEmail,
      password: config.blogPassword
    }
  });
  if (!(loginResponse == null ? void 0 : loginResponse.access_token)) {
    throw new Error("Failed to get access token");
  }
  cachedToken = loginResponse.access_token;
  tokenExpiry = Date.now() + 36e5;
  return cachedToken;
}
const getBlogs_get = defineEventHandler(async (event) => {
  var _a, _b;
  if (process.env.NITRO_PRESET === "prerender") {
    console.log("[API] Skipping blog fetch during prerender");
    return [];
  }
  try {
    const config = useRuntimeConfig(event);
    console.log("[API] Blog credentials check:", {
      hasEmail: !!config.blogEmail,
      hasPassword: !!config.blogPassword,
      env: "production"
    });
    const token = await getValidToken(config);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5e3);
    const blogsResponse = await $fetch("https://blog.wsoftdev.space/api/getPosts", {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json"
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    console.log("[API] Received blogs response:", Array.isArray(blogsResponse) ? `${blogsResponse.length} blogs` : typeof blogsResponse);
    return blogsResponse;
  } catch (error) {
    console.error("[API] Error fetching blogs:", error);
    if (((_a = error.message) == null ? void 0 : _a.includes("401")) || ((_b = error.message) == null ? void 0 : _b.includes("unauthorized"))) {
      cachedToken = null;
      tokenExpiry = null;
    }
    return [];
  }
});

export { getBlogs_get as default };
