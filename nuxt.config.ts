// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false }, // Disable in production
  css: [
    "~/assets/styles/style.css",
    "~/assets/styles/marquee.scss",
    "@mdi/font/css/materialdesignicons.css",
  ],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@pinia/nuxt"],

  // SEO Module Configuration
  site: {
    url: process.env.NUXT_PUBLIC_BASE_URL || "https://wsoft.space",
    name: "W Labs",
    description:
      "Innovative software solutions and AI technology development company",
    defaultLocale: "ko",
    identity: {
      type: "Organization",
    },
    twitter: "@wsoftlabs",
    indexable: true,
  },

  ogImage: {
    enabled: true,
    component: "OgImage",
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        weight: 400,
        path: "/fonts/inter-regular.woff2",
      },
    ],
  },

  schemaOrg: {
    enabled: true,
    canonicalHost: process.env.NUXT_PUBLIC_BASE_URL || "https://wsoft.space",
  },

  plugins: [
    "~/plugins/i18n.js",
    { src: "~/plugins/gsap.client.js", mode: "client" },
  ],

  app: {
    head: {
      titleTemplate: "%s | W Labs - Software Development & AI Solutions",
      htmlAttrs: {
        prefix: "og: http://ogp.me/ns#",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        // { rel: 'manifest', href: '/site.webmanifest' },
        // { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#2375e9' },
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "W Labs Blog RSS",
          href: "/api/rss.xml",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
      ],
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#ffffff" },
        { name: "msapplication-TileColor", content: "#2375e9" },
        { name: "application-name", content: "W Labs" },

        // Robots meta
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        {
          name: "googlebot",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },

        // Open Graph - Enhanced
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "W Labs" },
        { property: "og:locale", content: "ko_KR" },
        { property: "og:locale:alternate", content: "en_US" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@wsoftlabs" },
        { name: "twitter:creator", content: "@wsoftlabs" },
      ],

      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "W Labs",
            url: process.env.NUXT_PUBLIC_BASE_URL || "https://wsoft.space",
            logo: `${process.env.NUXT_PUBLIC_BASE_URL || "https://wsoft.space"}/images/logo.png`,
            description:
              "Innovative software solutions and AI technology development",
            address: {
              "@type": "PostalAddress",
              addressCountry: "KR",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "contact@wsoft.space",
              availableLanguage: ["Korean", "English"],
            },
          }),
        },
      ],
    },
  },

  runtimeConfig: {
    blogEmail: process.env.BLOG_EMAIL,
    blogPassword: process.env.BLOG_PASSWORD,

    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || "https://wsoft.space/",
      siteName: "W Labs",
      siteDescription:
        "Innovative software solutions and AI technology development",
      siteKeywords:
        "software development, AI solutions, web development, 기술 블로그, 한국 소프트웨어 회사",
    },
  },

  routeRules: {
    // Homepage
    "/": {
      prerender: true,
      headers: {
        "X-Robots-Tag": "index, follow",
      },
    },

    // Blog pages - high priority for SEO
    "/blogs": {
      prerender: false,
      isr: 180,
      cache: {
        maxAge: 300,
        staleMaxAge: 3600,
        swr: true,
      },
      headers: {
        "X-Robots-Tag": "index, follow",
        "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
      },
    },

    // Individual blog posts
    "/blogs/**": {
      prerender: false,
      isr: 180,
      cache: {
        maxAge: 600,
        staleMaxAge: 3600,
        swr: true,
      },
      headers: {
        "X-Robots-Tag": "index, follow",
        "Cache-Control": "public, max-age=600, stale-while-revalidate=3600",
      },
    },

    "/about-us": {
      prerender: true,
      isr: 86400,
      headers: {
        "X-Robots-Tag": "index, follow",
      },
    },
    "/services": {
      prerender: true,
      isr: 86400,
      headers: {
        "X-Robots-Tag": "index, follow",
      },
    },
    "/our-works": {
      prerender: true,
      isr: 86400,
      headers: {
        "X-Robots-Tag": "index, follow",
      },
    },
    "/contact-us": {
      prerender: true,
      isr: 86400,
      headers: {
        "X-Robots-Tag": "index, follow",
      },
    },

    // API routes
    "/api/sitemap.xml": {
      prerender: true,
      cache: {
        maxAge: 3600,
      },
      headers: {
        "Content-Type": "application/xml",
      },
    },
    "/api/robots.txt": {
      prerender: true,
      headers: {
        "Content-Type": "text/plain",
      },
    },
    "/api/rss.xml": {
      prerender: true,
      cache: {
        maxAge: 1800,
      },
      headers: {
        "Content-Type": "application/xml",
      },
    },

    // Disable crawling for admin areas
    "/admin/**": {
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
      },
    },
  },

  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: false,
      routes: [
        "/",
        "/about-us",
        "/services",
        "/our-works",
        "/contact-us",
        "/api/sitemap.xml",
        "/api/robots.txt",
        "/api/rss.xml",
      ],
      ignore: ["/blogs", "/blogs/**"],
    },
    routeRules: {
      "/_nuxt/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/_ipx/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
    },
    publicAssets: [
      {
        dir: "public",
        maxAge: 60 * 60 * 24 * 7,
      },
    ],
  },

  // Build optimizations
  build: {
    transpile: ["gsap"],
  },

  // Source maps disabled for production
  sourcemap: process.env.NODE_ENV === "development",
});
