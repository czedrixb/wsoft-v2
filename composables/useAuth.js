// composables/useAuth.js
export const useAuth = () => {
  const token = ref(null);
  const config = useRuntimeConfig();

  const setToken = (newToken) => {
    token.value = newToken;
    const authCookie = useCookie("auth_token", {
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
      secure: false,
    });
    authCookie.value = newToken;

    if (process.client) {
      localStorage.setItem("auth_token", newToken);
    }
  };

  const clearToken = () => {
    token.value = null;
    const authCookie = useCookie("auth_token");
    authCookie.value = null;

    if (process.client) {
      localStorage.removeItem("auth_token");
    }
  };

  const getToken = () => {
    if (!token.value) {
      const authCookie = useCookie("auth_token");
      token.value =
        authCookie.value ||
        (process.client ? localStorage.getItem("auth_token") : null);
    }
    return token.value;
  };

  const login = async (email, password) => {
    try {
      const response = await $fetch("https://blog.wsoftdev.space/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: email?.trim(),
          password: password?.trim(),
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.access_token) {
        setToken(response.access_token);
        return response;
      }
      throw new Error("No token received");
    } catch (error) {
      console.error("Login error:", error);
      if (error.data) {
        console.error("Login validation errors:", error.data);
      }
      throw error;
    }
  };

  const getBlogs = async () => {
    const currentToken = getToken();
    console.log("Using token for blogs:", currentToken);

    try {
      const response = await $fetch(
        "https://blog.wsoftdev.space/api/getPosts",
        {
          headers: currentToken
            ? {
                Authorization: `Bearer ${currentToken}`,
                Accept: "application/json",
              }
            : {
                Accept: "application/json",
              },
        }
      );
      return response;
    } catch (error) {
      console.error("Blogs fetch error:", error);

      if (error.status === 401) {
        clearToken();
        throw new Error("Authentication required");
      }

      throw error;
    }
  };

  const validateToken = async () => {
    const currentToken = getToken();
    if (!currentToken) return false;

    try {
      await getBlogs();
      return true;
    } catch (error) {
      if (error.status === 401) {
        clearToken();
        return false;
      }
      return true;
    }
  };

  return {
    token: readonly(token),
    login,
    getBlogs,
    getToken,
    clearToken,
    validateToken,
    isAuthenticated: computed(() => !!getToken()),
  };
};
