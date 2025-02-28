// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
    css: ['@/assets/styles/style.css', '@/assets/styles/marquee.scss', '@mdi/font/css/materialdesignicons.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  // vite: {
  //   build: {
  //     rollupOptions: {
  //       external: [/images\/home\/home-hero-bg.mp4/],
  //     },
  //   },
  // },
})