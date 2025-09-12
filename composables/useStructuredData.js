import { useI18n } from "vue-i18n";

export const useStructuredData = (pageType = "home") => {
  const { t } = useI18n();
  const route = useRoute();
  const config = useRuntimeConfig();

  const baseUrl = config.public.baseUrl;

  const organizationSchema = {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "W-Softlabs",
    url: baseUrl,
    logo: `${baseUrl}/images/home/w-softlabs.svg`,
    description: t("elevate-business"),
    // sameAs: [
    //   "https://www.linkedin.com/company/yourprofile",
    //   "https://github.com/yourprofile",
    // ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${baseUrl}/contact-us`,
    },
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "W-Softlabs",
    description: t("elevate-business"),
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
  };

  const homeSchema = {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: t("action-detection"),
          description: t("offers-advanced"),
          provider: {
            "@id": `${baseUrl}/#organization`,
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: t("rag"),
          description: t("rag-technology"),
          provider: {
            "@id": `${baseUrl}/#organization`,
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: t("data-driven"),
          description: t("data-driven-text"),
          provider: {
            "@id": `${baseUrl}/#organization`,
          },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: t("web-app"),
          description: t("build-innovative"),
          provider: {
            "@id": `${baseUrl}/#organization`,
          },
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: t("ui-design"),
          description: t("design-intuitive"),
          provider: {
            "@id": `${baseUrl}/#organization`,
          },
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          name: t("ai-utilization"),
          description: t("cut-customer"),
          provider: {
            "@id": `${baseUrl}/#organization`,
          },
        },
      },
    ],
  };

  const aboutSchema = {
    "@type": "AboutPage",
    name: t("About Us"),
    description: t("about-text"),
    url: `${baseUrl}${route.path}`,
    mainEntity: {
      "@type": "Organization",
      name: "W-Softlabs",
      description: t("dedicated-providing"),
      url: baseUrl,
      foundingDate: "2020",
      founders: [],
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
      },
      knowsAbout: [
        t("action-detection"),
        t("rag"),
        t("data-driven"),
        t("web-app"),
        t("ui-design"),
        t("ai-utilization"),
      ],
    },
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t(pageType === "home" ? "Home" : "About Us"),
        item: `${baseUrl}${route.path}`,
      },
    ],
  };

  let schema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, breadcrumbSchema],
  };

  if (pageType === "home") {
    schema["@graph"].push(homeSchema);
  } else if (pageType === "about") {
    schema["@graph"].push(aboutSchema);
  }

  return schema;
};
