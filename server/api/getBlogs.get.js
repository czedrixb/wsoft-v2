export default defineEventHandler(async (event) => {
  setHeader(event, 'Cache-Control', 'public, max-age=60, stale-while-revalidate=300')

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 6000)

    const res = await $fetch('https://blog.wsoftdev.space/api/getPosts', {
      signal: controller.signal,
    })

    clearTimeout(timeout)
    return Array.isArray(res) ? res : []
  } catch (err) {
    console.error('[getBlogs] Error:', err)
    return []
  }
})