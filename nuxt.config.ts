// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false }, // Disable in production
  css: ['@/assets/styles/style.css', '@/assets/styles/marquee.scss', '@mdi/font/css/materialdesignicons.css'],
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/image', 
    '@pinia/nuxt',
  ],
  
  // SEO Module Configuration
  site: {
    url: process.env.NUXT_PUBLIC_BASE_URL || 'https://wsoft.space',
    name: 'W Soft Labs',
    description: 'Innovative software solutions and AI technology development company',
    defaultLocale: 'ko',
    identity: {
      type: 'Organization'
    },
    twitter: '@wsoftlabs',
    indexable: true
  },
  
  ogImage: {
    enabled: true,
    component: 'OgImage',
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        weight: 400,
        path: '/fonts/inter-regular.woff2'
      }
    ]
  },
  
  schemaOrg: {
    enabled: true,
    canonicalHost: process.env.NUXT_PUBLIC_BASE_URL || 'https://wsoft.space'
  },
  
  
  plugins: [
    '~/plugins/i18n.js',
    { src: '~/plugins/gsap.client.js', mode: 'client' },
  ],
  
  app: {
    head: {
      titleTemplate: '%s | W Soft Labs - Software Development & AI Solutions',
      htmlAttrs: {
        lang: 'ko',
        prefix: 'og: http://ogp.me/ns#'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#2375e9' },
        { rel: 'alternate', type: 'application/rss+xml', title: 'W Soft Labs Blog RSS', href: '/api/rss.xml' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'msapplication-TileColor', content: '#2375e9' },
        { name: 'application-name', content: 'W Soft Labs' },
        
        // Robots meta
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        
        // Open Graph - Enhanced
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'W Soft Labs' },
        { property: 'og:locale', content: 'ko_KR' },
        { property: 'og:locale:alternate', content: 'en_US' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@wsoftlabs' },
        { name: 'twitter:creator', content: '@wsoftlabs' },
      
      
      ],
      
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'W Soft Labs',
            'url': process.env.NUXT_PUBLIC_BASE_URL || 'https://wsoft.space',
            'logo': `${process.env.NUXT_PUBLIC_BASE_URL || 'https://wsoft.space'}/images/logo.png`,
            'description': 'Innovative software solutions and AI technology development',
            'address': {
              '@type': 'PostalAddress',
              'addressCountry': 'KR'
            },
            'contactPoint': {
              '@type': 'ContactPoint',
              'contactType': 'customer service',
              'email': 'contact@wsoft.space',
              'availableLanguage': ['Korean', 'English']
            }
          })
        }
      ],
    },
  },
  
  runtimeConfig: {
    blogEmail: process.env.BLOG_EMAIL,
    blogPassword: process.env.BLOG_PASSWORD,
    
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'https://wsoft.space/',
      siteName: 'W Soft Labs',
      siteDescription: 'Innovative software solutions and AI technology development',
      siteKeywords: 'software development, AI solutions, web development, 기술 블로그, 한국 소프트웨어 회사',
    }
  },
  
  routeRules: {
    // Homepage
    '/': { 
      prerender: true,
      isr: 3600, // Regenerate every hour
      cache: {
        maxAge: 3600,
        staleMaxAge: 86400,
        swr: true
      },
      headers: {
        'X-Robots-Tag': 'index, follow',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
      }
    },
    
    // Blog pages - high priority for SEO
    '/blogs': { 
      prerender: true,
      isr: 1800, // Regenerate every 30 minutes
      cache: {
        maxAge: 1800,
        staleMaxAge: 43200,
        swr: true
      },
      headers: {
        'X-Robots-Tag': 'index, follow',
        'Cache-Control': 'public, max-age=1800, stale-while-revalidate=43200'
      }
    },
    
    // Individual blog posts
    '/blogs/**': { 
      prerender: true,
      isr: 7200, // Regenerate every 2 hours
      swr: true,
      cache: {
        maxAge: 7200,
        staleMaxAge: 86400,
        swr: true
      },
      headers: {
        'X-Robots-Tag': 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
        'Cache-Control': 'public, max-age=7200, stale-while-revalidate=86400'
      }
    },
    
    '/about-us': { 
      prerender: true,
      isr: 86400,
      headers: {
        'X-Robots-Tag': 'index, follow'
      }
    },
    '/services': { 
      prerender: true,
      isr: 86400,
      headers: {
        'X-Robots-Tag': 'index, follow'
      }
    },
    '/our-works': { 
      prerender: true,
      isr: 86400,
      headers: {
        'X-Robots-Tag': 'index, follow'
      }
    },
    '/contact-us': { 
      prerender: true,
      isr: 86400,
      headers: {
        'X-Robots-Tag': 'index, follow'
      }
    },
    
    // API routes
    '/api/sitemap.xml': {
      prerender: true,
      cache: {
        maxAge: 3600
      },
      headers: {
        'Content-Type': 'application/xml'
      }
    },
    '/api/robots.txt': {
      prerender: true,
      headers: {
        'Content-Type': 'text/plain'
      }
    },
    '/api/rss.xml': {
      prerender: true,
      cache: {
        maxAge: 1800 
      },
      headers: {
        'Content-Type': 'application/xml'
      }
    },
    
    // Disable crawling for admin areas
    '/admin/**': {
      headers: {
        'X-Robots-Tag': 'noindex, nofollow'
      }
    }
  },
  
  
  // Performance optimizations
  experimental: {
    payloadExtraction: true,
    inlineSSRStyles: false
  },
  
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about-us',
        '/services',
        '/our-works',
        '/blogs',
        '/contact-us',
        '/api/sitemap.xml',
        '/api/robots.txt',
        '/api/rss.xml'
      ]
    },
    routeRules: {
      '/_nuxt/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      }
    }
  },
  
  // Build optimizations
  build: {
    transpile: ['gsap']
  },
  
  // Source maps disabled for production
  sourcemap: process.env.NODE_ENV === 'development'
});