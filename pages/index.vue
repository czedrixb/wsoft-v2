<template>
  <div>
    <div class="bg-white my-40">
      <Banner />

      <div class="mt-20">
        <TechStack />
      </div>

      <div class="mt-20">
        <Partnership />
      </div>
    </div>

    <AnimatedServices />

    <div class="mb-20">
      <BriefProjects />
    </div>
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

const staticMetaTitle = t("home-title");
const staticMetaDescription = t("home-description");
const staticMetaKeywords = [
  t("home-meta-keyword"),
  ...Array.from({ length: 53 }, (_, i) => t(`home-meta-keyword-${i + 1}`)),
].join(", ");

const structuredData = useStructuredData("home");

useHead({
  title: staticMetaTitle,
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredData),
    },
  ],
  link: [
    {
      rel: "canonical",
      href: canonicalUrl.value,
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
