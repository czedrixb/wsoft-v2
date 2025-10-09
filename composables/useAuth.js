export const useAuth = () => {
  const token = ref(null);
  const isAuthenticated = computed(() => !!token.value);

  const login = async (email, password) => {
    try {
      const response = await $fetch("https://blog.wsoftdev.space/api/login", {
        method: "POST",
        body: {
          email,
          password,
        },
      });

      token.value =
        response.token || response.access_token || response.data?.token;

      if (process.client && token.value) {
        localStorage.setItem("auth_token", token.value);
      }

      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const getBlogs = async (customToken) => {
    const authToken = customToken || token.value;

    if (!authToken) {
      throw new Error("No authentication token available");
    }

    try {
      const blogs = await $fetch("https://blog.wsoftdev.space/api/getPosts", {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });

      return blogs;
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      throw error;
    }
  };

  const getBlogBySlug = async (slug, customToken) => {
    const authToken = customToken || token.value;

    if (!authToken) {
      throw new Error("No authentication token available");
    }

    try {
      const blogs = await $fetch("https://blog.wsoftdev.space/api/getPosts", {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });

      return blogs.find((blog) => blog.slug === slug);
    } catch (error) {
      console.error("Failed to fetch blog:", error);
      throw error;
    }
  };

  const logout = () => {
    token.value = null;
    if (process.client) {
      localStorage.removeItem("auth_token");
    }
  };

  // Initialize token from localStorage
  if (process.client) {
    const storedToken = localStorage.getItem("auth_token");
    if (storedToken) {
      token.value = storedToken;
    }
  }

  return {
    token: readonly(token),
    isAuthenticated,
    login,
    getBlogs,
    getBlogBySlug,
    logout,
  };
};
