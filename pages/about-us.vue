<template>
  <div>
    <AnimatedAboutHeader />

    <AnimatedAbout />

    <div class="mb-20">
      <AnimatedTeam />
    </div>

  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useStructuredData } from "@/composables/useStructuredData";
import { useInterval } from "@/composables/useInterval";
import { useCanonical } from "@/composables/useCanonical";
import { ref, onMounted, computed } from "vue";

const { canonicalUrl } = useCanonical();

const { locale, t } = useI18n();
const config = useRuntimeConfig();

const { brandName } = useBrand();

const staticMetaTitle = t("about-title");
// about-us-description carries a {brand} placeholder; without the param it
// renders with the brand name missing. WOS-275.
const staticMetaDescription = t("about-us-description", {
  brand: brandName.value,
});
const staticMetaKeywords = Array.from({ length: 10 }, (_, i) =>
  t(`about-us-meta-keyword-${i + 1}`),
).join(", ");

const structuredData = useStructuredData("about");
const { shareImageUrl, shareImageWidth, shareImageHeight } = useShareImage();

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
    { property: "og:image", content: shareImageUrl },
    { property: "og:image:width", content: shareImageWidth },
    { property: "og:image:height", content: shareImageHeight },
    { property: "og:url", content: canonicalUrl.value },
    { name: "twitter:image", content: shareImageUrl },
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
