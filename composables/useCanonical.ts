export const useCanonical = () => {
  const route = useRoute();
  const config = useRuntimeConfig();
  
  const canonicalUrl = computed(() => {
    const baseUrl = config.public.baseUrl || "https://wsoft-v2.vercel.app";
    const path = route.path.replace(/\/+/g, "/");
    return `${baseUrl}${path}`;
  });

  return {
    canonicalUrl
  };
};