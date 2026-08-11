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

        <!-- The SkinArch page had no contact affordance of its own: the only
             inquiry paths were the global navbar and footer, neither of which
             passed a subject, so an inquiry arrived with no indication of
             which product it was about. AB-134 item 1. -->
        <ContactCTA
          :label="$t('optical-microscope.inquiryCta')"
          :subject="$t('optical-microscope.inquirySubject')"
          show-email
        />
      </div>
    </div>

    <div class="mt-5 bg-white py-20">
      <RelatedProducts />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";
import { useStructuredData } from "@/composables/useStructuredData";
import { useCanonical } from "@/composables/useCanonical";

const { canonicalUrl } = useCanonical();
const { t } = useI18n();
const config = useRuntimeConfig();

// computed rather than a snapshot at setup: a client-side language switch
// (Language.vue) used to leave this page's <title>/description in whichever
// locale rendered first. AB-134 item 4.
const metaTitle = computed(() => t("optical-microscope.title"));
const metaDescription = computed(() => t("optical-microscope.description"));

// This page previously emitted the About-Us schema and a "Home → About Us"
// breadcrumb (useStructuredData("about")) — wrong for the SkinArch product
// page. "product-detail" emits a real Product schema with no
// offers/price/sku, consistent with item 2 removing those signals from the
// visible page. AB-134.
const structuredData = useStructuredData("product-detail");

const { shareImageUrl, shareImageWidth, shareImageHeight } = useShareImage();

useHead({
  title: metaTitle,
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
    { name: "description", content: metaDescription },
    { property: "og:title", content: metaTitle },
    { property: "og:description", content: metaDescription },
    { property: "og:type", content: "website" },
    { property: "og:image", content: shareImageUrl },
    { property: "og:image:width", content: shareImageWidth },
    { property: "og:image:height", content: shareImageHeight },
    { property: "og:url", content: canonicalUrl.value },
    { name: "twitter:image", content: shareImageUrl },
  ],
});
</script>
