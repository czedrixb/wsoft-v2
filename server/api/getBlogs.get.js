// server/api/getBlogs.get.js

// Simple in-memory cache (for production consider Redis)
let cachedToken = null;
let tokenExpiry = null;

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();

    // Check if we need a new token
    if (!cachedToken || !tokenExpiry || Date.now() > tokenExpiry) {
      console.log("🔑 Getting new auth token for blogs...");

      // Add validation for credentials
      if (!config.blogEmail || !config.blogPassword) {
        console.error("❌ Missing blog credentials in runtime config");
        return [];
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
          // Add timeout to prevent hanging
          timeout: 5000,
        }
      );

      cachedToken = loginResponse.access_token;

      // Set token expiry to 1 hour (adjust based on your API)
      tokenExpiry = Date.now() + 60 * 60 * 1000;

      if (!cachedToken) {
        console.error("❌ No token received from login");
        return [];
      }
    }

    // Fetch blogs with cached token
    const response = await $fetch("https://blog.wsoftdev.space/api/getPosts", {
      headers: {
        Authorization: `Bearer ${cachedToken}`,
        Accept: "application/json",
      },
      timeout: 10000, // 10 second timeout
    });

    // Ensure we return an array
    return Array.isArray(response) ? response : [];
  } catch (error) {
    console.error("❌ Error in getBlogs API:", error);

    // Clear cached token on auth errors
    if (error.status === 401) {
      cachedToken = null;
      tokenExpiry = null;
    }

    // Return empty array instead of throwing error to prevent page crashes
    return [];
  }
});
