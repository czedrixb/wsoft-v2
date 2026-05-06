<template>
  <div>
    <AnimatedServicesHeader />

    <AnimatedProducts />
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";
import { useStructuredData } from "@/composables/useStructuredData";
import { useCanonical } from "@/composables/useCanonical";
import { ref, onMounted } from "vue";

const { canonicalUrl } = useCanonical();
const { t } = useI18n();
const config = useRuntimeConfig();

const { brandThumbnailPath } = useBrand();
const staticMetaTitle = t("services-title");
const staticMetaDescription = t("services-description");
const staticMetaKeywords = Array.from({ length: 10 }, (_, i) =>
  t(`services-meta-keyword-${i + 1}`),
).join(", ");

const structuredData = useStructuredData("services");

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
    { property: "og:image", content: brandThumbnailPath.value },
    { property: "og:url", content: canonicalUrl.value },
  ],
});
</script>
