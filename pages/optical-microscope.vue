<template>
  <div>
    <div>
      <AnimatedOpticalHeader />
    </div>

    <div
      class="relative bg-[#f3f0ff] bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: 'url(/images/revamp/products/topo-grid-purple.png)' }"
    >
      <div class="mx-auto px-8 max-w-screen-2xl pt-24 md:pt-40 pb-24 md:pb-36">
        <Catalogue />
      </div>
    </div>

    <div class="mt-5 bg-white py-20">
      <RelatedProducts />
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
const staticMetaDescription = t("about-us-description", {
  brand: useBrand().brandName.value,
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
