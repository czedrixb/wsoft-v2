<template>
  <div>
    <AnimatedProjectsHeader />

    <AnimatedProjects />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, computed, onMounted } from "vue";
import { useStructuredData } from "@/composables/useStructuredData";
import { useInterval } from "@/composables/useInterval";
import { useCanonical } from "@/composables/useCanonical";

const { canonicalUrl } = useCanonical();
const { locale, t } = useI18n();

const currentLanguage = computed(() => locale.value);

const staticMetaTitle = t("our-projects.title");
const staticMetaDescription = t("our-projects.description");

const projectSlugs = [
  "ai-encouragement-generation-platform",
  "ai-measuring-analysis-skin-optics",
  "ai-aided-diet-calorie-analysis-tracker",
  "ai-powered-multilingual-translator",
  "ai-generating-audio-file",
  "ai-self-management-motivation",
  "ai-evaluating-assignment-learning-system",
  "ai-enhanced-language-learning-platform",
];
const staticMetaKeywords = projectSlugs
  .map((slug) => t(`our-projects.${slug}.header.title`))
  .join(", ");

const structuredData = useStructuredData("our-projects");

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
