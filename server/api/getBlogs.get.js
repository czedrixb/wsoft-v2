// server/api/getBlogs.get.js
export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();

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
      }
    );

    const token = loginResponse.access_token;

    if (!token) {
      throw createError({
        statusCode: 500,
        message: "Failed to get auth token from login",
      });
    }

    const response = await $fetch("https://blog.wsoftdev.space/api/getPosts", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    return response;
  } catch (error) {
    console.error("Error in getBlogs API:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch blogs from external API",
    });
  }
});
