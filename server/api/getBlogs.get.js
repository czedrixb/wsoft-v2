// server/api/getBlogs.get.js

let cachedToken = null;
let tokenExpiry = null;

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();

    console.log("🔑 Blog credentials check:", {
      hasEmail: !!config.blogEmail,
      hasPassword: !!config.blogPassword,
      email: config.blogEmail ? "present" : "missing",
      env: process.env.NODE_ENV,
    });

    // Check if we need a new token
    if (!cachedToken || !tokenExpiry || Date.now() > tokenExpiry) {
      console.log("🔑 Getting new auth token for blogs...");

      if (!config.blogEmail || !config.blogPassword) {
        console.error("❌ Missing blog credentials");
        throw createError({
          statusCode: 500,
          statusMessage: "Blog credentials not configured",
        });
      }

      const loginResponse = await $fetch(
        "https://blog.wsoftdev.space/api/login",
        {
          method: "POST",
          body: {
            email: config.blogEmail,
            password: config.blogPassword,
          },
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          timeout: 5000,
        }
      );

      console.log("✅ Login response received:", {
        hasToken: !!loginResponse?.access_token,
        tokenType: typeof loginResponse?.access_token,
      });

      if (!loginResponse?.access_token) {
        console.error("❌ No access token found in login response");
        throw createError({
          statusCode: 401,
          statusMessage: "Authentication failed",
        });
      }

      cachedToken = loginResponse.access_token;
      tokenExpiry = Date.now() + 55 * 60 * 1000; // 55 minutes for safety
    }

    console.log("🟢 Fetching posts with token");

    const response = await $fetch("https://blog.wsoftdev.space/api/getPosts", {
      headers: {
        Authorization: `Bearer ${cachedToken}`,
        Accept: "application/json",
      },
      timeout: 10000,
    });

    console.log("✅ getPosts API success:", {
      count: Array.isArray(response) ? response.length : "not array",
      type: typeof response,
    });

    // Ensure we always return an array
    const blogs = Array.isArray(response) ? response : [];
    console.log(`📝 Returning ${blogs.length} blogs`);

    return blogs;
  } catch (error) {
    console.error("❌ Error in getBlogs API:", {
      message: error.message,
      status: error.status,
      data: error.data,
    });

    // Clear token on auth errors
    if (error.status === 401) {
      cachedToken = null;
      tokenExpiry = null;
    }

    // Return empty array but log the error
    return [];
  }
});
