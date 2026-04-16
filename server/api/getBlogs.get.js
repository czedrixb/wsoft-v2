export default defineEventHandler(async () => {
  try {
    const res = await $fetch('https://blog.wsoftdev.space/api/getPosts')
    return Array.isArray(res) ? res : []
  } catch (err) {
    console.error('[getBlogs] Error:', err)
    return []
  }
})