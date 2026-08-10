// nuxt.config.ts

// NUXT_PUBLIC_BASE_URL carries a trailing slash, which would produce
// double-slashed absolute URLs when joined with a path. Normalise once here.
const SITE_ORIGIN = (
  process.env.NUXT_PUBLIC_BASE_URL || "https://wsoft.space"
).replace(/\/+$/, "");

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false }, // Disable in production
  css: [
    "~/assets/styles/fonts.css",
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
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        // No manifest or safari-pinned-tab asset exists yet — leaving those out
        // rather than linking 404s.
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
        // og:locale / og:locale:alternate are set reactively in app.vue so they
        // follow the resolved locale instead of always claiming ko_KR. WOS-275.

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
            url: SITE_ORIGIN,
            logo: `${SITE_ORIGIN}/images/logos/w-labs-logo.png`,
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
    // Homepage — SSR per request so i18n locale detection runs and the correct
    // language is baked into the HTML (no KO flash for EN browsers). WOS-258.
    "/": {
      headers: {
        "X-Robots-Tag": "index, follow",
      },
    },

    "/api/getBlogs": {
      cache: {
        maxAge: 60, // Serve cached for 60 seconds
        staleMaxAge: 300, // Serve stale for up to 5 min while revalidating in background
        swr: true, // Stale-while-revalidate = never blocks, always fast
      },
    },

    "/api/getPost/**": {
      cache: {
        maxAge: 60,
        staleMaxAge: 300,
        swr: true,
      },
    },

    // Blog pages
    "/newsroom": {
      prerender: false,
      isr: 180,
      cache: { maxAge: 300, staleMaxAge: 3600, swr: true },
      headers: {
        "X-Robots-Tag": "index, follow",
        "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
      },
    },

    // Individual blog posts
    "/newsroom/**": {
      prerender: false,
      isr: 180,
      cache: { maxAge: 600, staleMaxAge: 3600, swr: true },
      headers: {
        "X-Robots-Tag": "index, follow",
        "Cache-Control": "public, max-age=600, stale-while-revalidate=3600",
      },
    },

    // SSR per request — same reason as "/" above (WOS-258).
    "/about-us": {
      headers: {
        "X-Robots-Tag": "index, follow",
      },
    },
    "/services": {
      headers: {
        "X-Robots-Tag": "index, follow",
      },
    },
    "/our-works": {
      headers: {
        "X-Robots-Tag": "index, follow",
      },
    },
    "/contact-us": {
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
    prerender: {
      crawlLinks: false,
      // Page routes removed — they are now SSR per request for correct locale
      // detection (WOS-258). Only locale-independent API routes are prerendered.
      routes: [
        "/api/sitemap.xml",
        "/api/robots.txt",
        "/api/rss.xml",
      ],
      ignore: ["/newsroom", "/newsroom/**"],
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
