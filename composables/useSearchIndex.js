import { ref } from "vue";
import { useI18n } from "vue-i18n";

const PRODUCT_ROUTES = {
  wizAssistant: "/wiz-assistant",
  lcOct: "/skin_arch",
};

const PRODUCT_KEYS = [
  "lcOct",
  "aiMeasuring",
  "wizAssistant",
  "aiEncouragement",
  "aiDietTracker",
  "aiTranslator",
  "aiAudioGenerator",
  "aiSelfManagement",
  "aiEvaluation",
  "aiLanguageLearning",
];

const PAGES = [
  { route: "/", titleKey: "home-title", descKey: "home-description" },
  { route: "/about-us", titleKey: "about-title", descKey: null },
  { route: "/services", titleKey: "services-title", descKey: null },
  { route: "/products", titleKey: "products-title", descKey: null },
  { route: "/our-projects", titleKey: "OurProjects", descKey: null },
  { route: "/newsroom", titleKey: "NewsRoom", descKey: null },
  { route: "/contact-us", titleKey: "ContactUs", descKey: null },
];

const encodeSlug = (slug) => {
  if (!slug) return "";
  return encodeURIComponent(slug)
    .replace(/%20/g, "-")
    .replace(/%3A/g, "-")
    .replace(/[^\w\-~.!*()]/g, "-");
};

let blogCache = null;

export function useSearchIndex() {
  const { t } = useI18n();

  const getPageEntries = () =>
    PAGES.map((p) => ({
      id: `page-${p.route}`,
      type: "page",
      title: t(p.titleKey),
      description: p.descKey ? t(p.descKey) : "",
      route: p.route,
    }));

  const getProductEntries = () =>
    PRODUCT_KEYS.map((key) => ({
      id: `product-${key}`,
      type: "product",
      title: t(`product.animatedProjects.${key}.title`),
      description: t(`product.animatedProjects.${key}.description`),
      route: PRODUCT_ROUTES[key] || "/products",
    }));

  const loadBlogEntries = async () => {
    if (blogCache) return blogCache;
    try {
      const posts = await $fetch("/api/getBlogs");
      blogCache = (posts || []).map((post) => ({
        id: `news-${post.id}`,
        type: "news",
        title: post.title || "",
        description: post.excerpt || "",
        route: `/newsroom/${post.id}/${encodeSlug(post.slug)}`,
      }));
    } catch {
      blogCache = [];
    }
    return blogCache;
  };

  const search = async (query) => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const pages = getPageEntries();
    const products = getProductEntries();
    const news = await loadBlogEntries();
    return [...pages, ...products, ...news]
      .filter(
        (entry) =>
          entry.title.toLowerCase().includes(q) ||
          entry.description.toLowerCase().includes(q)
      )
      .slice(0, 10);
  };

  return { search, loadBlogEntries };
}
