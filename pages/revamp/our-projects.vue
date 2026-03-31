<template>
  <div>
    <AnimatedProjectsHeader />

    <AnimatedProjects />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { ref, computed, onMounted } from "vue";
import { useStructuredData } from "@/composables/useStructuredData";
import { useInterval } from "@/composables/useInterval";
import { useCanonical } from "@/composables/useCanonical";

const { canonicalUrl } = useCanonical();

const heroWords = [
  "hero-1",
  "hero-2",
  "hero-3",
  "hero-4",
  "hero-5",
  "hero-6",
  "hero-7",
];

const services = ref([
  {
    number: 1,
    title: "action-detection",
    slogan: "reading-behavior",
    description: "offers-advanced",
    image: "/images/home/action-detection.png",
    progress: 0,
  },
  {
    number: 2,
    title: "rag",
    slogan: "retrieving-knowledge",
    description: "rag-technology",
    image: "/images/home/rag-new.png",
    progress: 20,
  },
  {
    number: 3,
    title: "data-driven",
    slogan: "reimagining-business",
    description: "data-driven-text",
    image: "/images/home/web-development.png",
    progress: 40,
  },
  {
    number: 4,
    title: "web-app",
    description: "build-innovative",
    image: "/images/home/web-application.png",
    progress: 60,
  },
  {
    number: 5,
    title: "ui-design",
    description: "design-intuitive",
    image: "/images/home/ui-design.png",
    progress: 80,
  },
  {
    number: 6,
    title: "ai-utilization",
    description: "cut-customer",
    image: "/images/home/ai-utilization-new.png",
    progress: 100,
  },
]);

const currentIndex = ref(0);

const currentWord = computed(() => heroWords[currentIndex.value]);

const { start } = useInterval(() => {
  currentIndex.value = (currentIndex.value + 1) % heroWords.length;
}, 3000);

onMounted(() => {
  start();
});

const { locale, t } = useI18n();
const config = useRuntimeConfig();

const currentLanguage = computed(() => locale.value);

const staticMetaTitle = t("home-title");
const staticMetaDescription = t("home-description");
const staticMetaKeywords = [
  t("home-meta-keyword"),
  ...Array.from({ length: 53 }, (_, i) => t(`home-meta-keyword-${i + 1}`)),
].join(", ");

const structuredData = useStructuredData("home");

useHead({
  title: staticMetaTitle,
  link: [
    {
      rel: "canonical",
      href: canonicalUrl.value,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredData),
    },
  ],
  meta: [
    { name: "description", content: staticMetaDescription },
    { name: "keywords", content: staticMetaKeywords },
    { property: "og:title", content: staticMetaTitle },
    { property: "og:description", content: staticMetaDescription },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/thumbnail.png" },
    { property: "og:url", content: canonicalUrl.value },
  ],
});
</script>

<style scoped>
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fade-up 0.6s ease-in-out;
}
</style>
