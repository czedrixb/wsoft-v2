// server/api/getBlogs.get.js
export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();

    console.log("Attempting to login to blog API...");

    // Make sure credentials are available
    if (!config.blogEmail || !config.blogPassword) {
      console.error("Missing blog credentials");
      throw createError({
        statusCode: 500,
        message: "Blog API credentials not configured",
      });
    }

    const loginResponse = await $fetch(
      "https://blog.wsoftdev.space/api/login",
      {
        method: "POST",
        body: JSON.stringify({
          email: config.blogEmail.trim(),
          password: config.blogPassword.trim(),
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log("Login response received");

    const token = loginResponse.access_token || loginResponse.token;

    if (!token) {
      console.error("No token in login response:", loginResponse);
      throw createError({
        statusCode: 500,
        message: "Failed to get auth token from login",
      });
    }

    console.log("Fetching posts with token...");

    const response = await $fetch("https://blog.wsoftdev.space/api/getPosts", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    console.log(`Successfully fetched ${response?.length || 0} posts`);

    return response;
  } catch (error) {
    console.error("Error in getBlogs API:", error);

    // Log detailed error information
    if (error.data) {
      console.error("Error details:", error.data);
    }
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response body:", error.response._data);
    }

    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || "Failed to fetch blogs from external API",
      data: error.data || null,
    });
  }
});
