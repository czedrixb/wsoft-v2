<template>
  <div>
    <AnimatedProductsHeader />

    <AnimatedProjects />
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";
import { useStructuredData } from "@/composables/useStructuredData";
import { useCanonical } from "@/composables/useCanonical";

const { canonicalUrl } = useCanonical();
const { t } = useI18n();

const staticMetaTitle = t("products-title");
const staticMetaDescription = t("products-description");

const productKeys = [
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
const staticMetaKeywords = productKeys
  .map((key) => t(`animatedProjects.${key}.title`))
  .join(", ");

const structuredData = useStructuredData("product");

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
