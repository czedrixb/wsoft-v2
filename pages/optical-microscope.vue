<template>
  <div>
    <div>
      <AnimatedPrivacyHeader />
    </div>

    <div class="px-[2rem] lg:px-[5rem] mx-auto pt-16 pb-10">
      <Catalogue />
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";
import { useStructuredData } from "@/composables/useStructuredData";
import { useCanonical } from "@/composables/useCanonical";

const { canonicalUrl } = useCanonical();
const { t } = useI18n();
const config = useRuntimeConfig();

const staticMetaTitle = t("products-title");
const staticMetaDescription = t("about-us-description");
const staticMetaKeywords = Array.from({ length: 10 }, (_, i) =>
  t(`about-us-meta-keyword-${i + 1}`),
).join(", ");

const structuredData = useStructuredData("about");

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
