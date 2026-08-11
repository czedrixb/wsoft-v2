export const useCanonical = () => {
  const route = useRoute();
  const config = useRuntimeConfig();

  const canonicalUrl = computed(() => {
    // NUXT_PUBLIC_BASE_URL carries a trailing slash ("https://wsoft.space/"),
    // and route.path already leads with "/" — concatenating them used to
    // produce a doubled slash (https://wsoft.space//optical-microscope).
    // The old fallback also still pointed at the retired Vercel preview
    // host. AB-134.
    const baseUrl = (
      config.public.baseUrl || "https://wsoft.space"
    ).replace(/\/+$/, "");
    const path = route.path.replace(/\/+/g, "/");
    return `${baseUrl}${path}`;
  });

  return {
    canonicalUrl
  };
};