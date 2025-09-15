import { useI18n } from "vue-i18n";

export const useStructuredData = (pageType = "home", pageData = {}) => {
  const { t } = useI18n();
  const route = useRoute();
  const config = useRuntimeConfig();

  const baseUrl = config.public.baseUrl;

  const organizationSchema = {
    "@type": "Organization",
    "@id": `${baseUrl}`,
    name: "W SoftLabs",
    url: baseUrl,
    logo: `${baseUrl}/images/home/w-softlabs.svg`,
    description: t("elevate-business"),
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
    "@id": `${baseUrl}`,
    url: baseUrl,
    name: "W Softlabs",
    description: t("elevate-business"),
    publisher: {
      "@id": `${baseUrl}`,
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
            "@id": `${baseUrl}`,
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
            "@id": `${baseUrl}`,
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
            "@id": `${baseUrl}`,
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
            "@id": `${baseUrl}`,
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
            "@id": `${baseUrl}`,
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
            "@id": `${baseUrl}`,
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

  const servicesSchema = {
    "@type": "ItemList",
    name: t("Services"),
    description: t("services-text"),
    url: `${baseUrl}${route.path}`,
    numberOfItems: 9,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: t("deep-learning"),
          description: t("deep-learning-services-description"),
          provider: {
            "@id": `${baseUrl}`,
          },
          serviceType: "AI & Machine Learning",
          areaServed: "Worldwide",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: t("real-time"),
          description: t("real-time-services-description"),
          provider: {
            "@id": `${baseUrl}`,
          },
          serviceType: "Real-time Processing",
          areaServed: "Worldwide",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: t("ai-text"),
          description: t("ai-text-services-description"),
          provider: {
            "@id": `${baseUrl}`,
          },
          serviceType: "AI Solutions",
          areaServed: "Worldwide",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: t("custom-design"),
          description: t("custom-design-services-description"),
          provider: {
            "@id": `${baseUrl}`,
          },
          serviceType: "Web Design",
          areaServed: "Worldwide",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: t("content-management"),
          description: t("content-management-services-description"),
          provider: {
            "@id": `${baseUrl}`,
          },
          serviceType: "Content Management",
          areaServed: "Worldwide",
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          name: t("admin-business"),
          description: t("admin-business-services-description"),
          provider: {
            "@id": `${baseUrl}`,
          },
          serviceType: "Business Solutions",
          areaServed: "Worldwide",
        },
      },
      {
        "@type": "ListItem",
        position: 7,
        item: {
          "@type": "Service",
          name: t("user-interaction"),
          description: t("user-interaction-services-description"),
          provider: {
            "@id": `${baseUrl}`,
          },
          serviceType: "User Experience",
          areaServed: "Worldwide",
        },
      },
      {
        "@type": "ListItem",
        position: 8,
        item: {
          "@type": "Service",
          name: t("advanced-features"),
          description: t("advanced-features-services-description"),
          provider: {
            "@id": `${baseUrl}`,
          },
          serviceType: "Advanced Web Features",
          areaServed: "Worldwide",
        },
      },
      {
        "@type": "ListItem",
        position: 9,
        item: {
          "@type": "Service",
          name: t("product-listing"),
          description: t("product-listing-services-description"),
          provider: {
            "@id": `${baseUrl}`,
          },
          serviceType: "E-commerce Solutions",
          areaServed: "Worldwide",
        },
      },
    ],
  };

  const ourWorksSchema = {
    "@type": "CollectionPage",
    name: t("Our Works"),
    description: t("our-works-text"),
    url: `${baseUrl}${route.path}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: pageData.projects
        ? Object.keys(pageData.projects).length
        : 0,
      itemListElement: pageData.projects
        ? Object.entries(pageData.projects).map(([key, project], index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "CreativeWork",
              name: t(project.title),
              description: t(`${project.title}-description`),
              url: `${baseUrl}/our-works/${key}`,
              image: `${baseUrl}/images/our-works/thumbnail/${project.image}`,
              creator: {
                "@id": `${baseUrl}`,
              },
            },
          }))
        : [],
    },
  };

  const contactSchema = {
    "@type": "ContactPage",
    name: t("Contact Us"),
    description: t("reach-out"),
    url: `${baseUrl}${route.path}`,
    mainEntity: {
      "@type": "Organization",
      name: "W-Softlabs",
      description: t("elevate-business"),
      url: baseUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: t("address"),
        addressCountry: "KR",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "contact@wsoft.space",
          telephone: "+82 10 5067 8800",
          availableLanguage: ["English", "Korean"],
        },
        {
          "@type": "ContactPoint",
          contactType: "technical support",
          email: "contact@wsoft.space",
          availableLanguage: ["English", "Korean"],
        },
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
        name: t(
          pageType === "home"
            ? "Home"
            : pageType === "about"
            ? "About Us"
            : pageType === "services"
            ? "Services"
            : pageType === "our-works"
            ? "Our Works"
            : "Contact Us"
        ),
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
  } else if (pageType === "services") {
    schema["@graph"].push(servicesSchema);
  } else if (pageType === "our-works") {
    schema["@graph"].push(ourWorksSchema);
  } else if (pageType === "contact") {
    schema["@graph"].push(contactSchema);
  }

  return schema;
};
