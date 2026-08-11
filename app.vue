<template>
  <div class="bg-white">
    <NuxtErrorBoundary>
      <div class="sticky top-0 z-50">
        <Navbar />
      </div>

      <div class="bg-white overflow-x-hidden">
        <NuxtPage />

        <div
          class="md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto px-2 md:px-0"
        >
          <Footer />
        </div>
      </div>

      <!-- Error fallback -->
      <!-- <template #error="{ error }">
        <ErrorFallback :error="error" />
      </template> -->
    </NuxtErrorBoundary>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const route = useRoute();
const config = useRuntimeConfig();

const canonicalUrl = computed(() => {
  // baseUrl carries a trailing slash and route.path already leads with "/" —
  // concatenating them unconditionally used to double the slash
  // (https://wsoft.space//optical-microscope). AB-134.
  const baseUrl = (config.public.baseUrl || "https://wsoft.space").replace(
    /\/+$/,
    ""
  );
  const path = route.path.replace(/\/+/g, "/");
  return `${baseUrl}${path}`;
});

// One URL serves both languages (no /en or /ko prefix), so the bare path is
// x-default and the ?lang= variants — honoured by server/middleware/locale.ts
// — are how a crawler reaches a specific language. AB-134 item 4.
const alternateLinks = computed(() => [
  { rel: "alternate", hreflang: "en", href: `${canonicalUrl.value}?lang=en` },
  { rel: "alternate", hreflang: "ko", href: `${canonicalUrl.value}?lang=ko` },
  { rel: "alternate", hreflang: "x-default", href: canonicalUrl.value },
]);

// OG locale codes, keyed by the app's locale codes. Set here rather than in
// nuxt.config so the tags follow the resolved locale. WOS-275.
const OG_LOCALES = { ko: "ko_KR", en: "en_US" };

const ogLocale = computed(() => OG_LOCALES[locale.value] || OG_LOCALES.ko);
const ogLocaleAlternate = computed(() =>
  ogLocale.value === OG_LOCALES.ko ? OG_LOCALES.en : OG_LOCALES.ko
);

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
  },
  link: computed(() => [
    {
      rel: "canonical",
      href: canonicalUrl.value,
    },
    ...alternateLinks.value,
  ]),
  meta: [
    {
      name: "robots",
      content: "index, follow",
    },
    { property: "og:locale", content: ogLocale },
    { property: "og:locale:alternate", content: ogLocaleAlternate },
  ],
});
</script>
