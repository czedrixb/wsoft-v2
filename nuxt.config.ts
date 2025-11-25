// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/styles/style.css', '@/assets/styles/marquee.scss', '@mdi/font/css/materialdesignicons.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@pinia/nuxt'],
  plugins: [
    '~/plugins/i18n.js',
    { src: '~/plugins/gsap.client.js', mode: 'client' },
    { src: '~/plugins/css-optimization.client.js', mode: 'client' }
  ],
  app: {
    head: {
      titleTemplate: 'W Soft Labs | %s',
      htmlAttrs: {
        lang: 'ko'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://lottie.host' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
          media: 'print',
          onload: "this.media='all'"
        },
        { rel: 'preload', as: 'image', href: '/images/logo.png' },
        { rel: 'preload', as: 'image', href: '/images/home/w-softlabs.svg' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'W Soft Labs' },
      ],
    },
  },
  runtimeConfig: {
    blogEmail: process.env.BLOG_EMAIL,
    blogPassword: process.env.BLOG_PASSWORD,
    
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'https://wsoft.space/',
    }
  },
  routeRules: {
    '/**': { 
      isr: false,
      headers: {
        'X-Robots-Tag': 'index, follow'
      }
    }
  }
});