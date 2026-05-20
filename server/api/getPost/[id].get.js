export default defineEventHandler(async (event) => {
  setHeader(event, "Cache-Control", "public, max-age=60, stale-while-revalidate=300");

  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, message: "Missing post ID" });

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const res = await $fetch(`https://blog.wsoftdev.space/api/getPost/${id}`, {
      signal: controller.signal,
    });

    clearTimeout(timeout);
    return res ?? null;
  } catch (err) {
    console.error(`[getPost] Error fetching post ${id}:`, err);
    throw createError({ statusCode: 404, message: "Post not found" });
  }
});