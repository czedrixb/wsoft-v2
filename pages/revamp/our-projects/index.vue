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
