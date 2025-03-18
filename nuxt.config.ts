// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
    css: ['@/assets/styles/style.css', '@/assets/styles/marquee.scss', '@mdi/font/css/materialdesignicons.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  plugins: [
    '~/plugins/i18n.js',
    { src: '~/plugins/gsap.client.js', mode: 'client' }
  ],
      app: {
    head: {
      titleTemplate: 'WSoft Labs',
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'WSoft Labs' },
      ],
    },
  },
})