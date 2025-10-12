// composables/useAuth.js
export const useAuth = () => {
  const token = ref(null);
  const isAuthenticated = computed(() => !!token.value);

  // Initialize token only on client side
  const initializeToken = () => {
    if (process.client) {
      token.value = localStorage.getItem("auth_token");
    }
  };

  // Use onMounted to ensure client-side only initialization
  if (process.client) {
    onMounted(() => {
      initializeToken();
    });
  } else {
    // For SSR, initialize on client hydration
    initializeToken();
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

  const getBlogs = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      // Get current token value (works in both SSR and client)
      const currentToken = token.value;
      if (currentToken) {
        headers.Authorization = `Bearer ${currentToken}`;
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
