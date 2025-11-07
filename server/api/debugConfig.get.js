export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  return {
    blogEmail: config.blogEmail ? "SET" : "MISSING",
    blogPassword: config.blogPassword ? "SET" : "MISSING",
    env: process.env.NODE_ENV,
  };
});
