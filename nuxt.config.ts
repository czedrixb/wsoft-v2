export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/styles/style.css', '@/assets/styles/marquee.scss', '@mdi/font/css/materialdesignicons.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@pinia/nuxt'],
  plugins: [
    '~/plugins/i18n.js',
    { src: '~/plugins/gsap.client.js', mode: 'client' }
  ],
  app: {
    head: {
      titleTemplate: 'W Soft Labs',
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'W Soft Labs' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'https://wsoft-v2.vercel.app'
    }
  }
});