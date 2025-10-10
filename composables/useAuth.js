export const useAuth = () => {
  const token = ref(null);
  const isAuthenticated = computed(() => !!token.value);

  // Initialize token properly
  if (process.client) {
    token.value = localStorage.getItem("auth_token");
  }

  const login = async (email, password) => {
    try {
      const response = await $fetch("https://blog.wsoftdev.space/api/login", {
        method: "POST",
        body: {
          email,
          password,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        k,
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

    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      // Only add Authorization header if token exists
      if (authToken) {
        headers.Authorization = `Bearer ${authToken}`;
      }

      const blogs = await $fetch("https://blog.wsoftdev.space/api/getPosts", {
        method: "GET",
        headers,
      });
      return blogs;
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      throw error;
    }
  };

  const logout = () => {
    token.value = null;
    if (process.client) {
      localStorage.removeItem("auth_token");
    }
  };

  return {
    token: readonly(token),
    isAuthenticated,
    login,
    getBlogs,
    logout,
  };
};
