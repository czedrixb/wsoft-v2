// composables/useAuth.js
export const useAuth = () => {
  const token = ref(null);

  const setToken = (newToken) => {
    token.value = newToken;
    const authCookie = useCookie("auth_token", {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    authCookie.value = newToken;
  };

  const getToken = () => {
    if (!token.value) {
      const authCookie = useCookie("auth_token");
      token.value = authCookie.value;
    }
    return token.value;
  };

  // Remove localStorage usage to prevent memory leaks
  const clearToken = () => {
    token.value = null;
    const authCookie = useCookie("auth_token");
    authCookie.value = null;
  };

  const login = async (email, password) => {
    try {
      const response = await $fetch("https://blog.wsoftdev.space/api/login", {
        method: "POST",
        body: {
          email: email?.trim(),
          password: password?.trim(),
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.access_token) {
        setToken(response.access_token);
        return response;
      }
      throw new Error("No access_token received");
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  return {
    token: readonly(token),
    login,
    getToken,
    clearToken,
    isAuthenticated: computed(() => !!getToken()),
  };
};
