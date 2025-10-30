// server/api/getBlogs.get.js
export default defineEventHandler(async (event) => {
  // Add memory leak protection
  if (globalThis.blogFetchInProgress) {
    throw createError({
      statusCode: 429,
      message: "Request already in progress",
    });
  }

  try {
    globalThis.blogFetchInProgress = true;

    const config = useRuntimeConfig();

    // Add timeout to prevent hanging requests
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10 second timeout

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
        signal: controller.signal,
      }
    );

    clearTimeout(timeout);

    const token = loginResponse.access_token;

    if (!token) {
      throw createError({
        statusCode: 500,
        message: "Failed to get auth token from login",
      });
    }

    // Fetch blogs with timeout
    const blogController = new AbortController();
    const blogTimeout = setTimeout(() => blogController.abort(), 15000); // 15 second timeout

    const response = await $fetch("https://blog.wsoftdev.space/api/getPosts", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      signal: blogController.signal,
    });

    clearTimeout(blogTimeout);

    // Limit response size if needed
    const limitedResponse = Array.isArray(response)
      ? response.slice(0, 50) // Limit to 50 blogs max
      : response;

    return limitedResponse;
  } catch (error) {
    console.error("Error in getBlogs API:", error);

    if (error.name === "AbortError") {
      throw createError({
        statusCode: 408,
        message: "Request timeout",
      });
    }

    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Failed to fetch blogs from external API",
    });
  } finally {
    globalThis.blogFetchInProgress = false;
  }
});
