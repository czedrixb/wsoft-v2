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
  const baseUrl = config.public.baseUrl || "https://wsoft.space/";
  const path = route.path.replace(/\/+/g, "/");
  return `${baseUrl}${path}`;
});

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
  link: [
    {
      rel: "canonical",
      href: computed(() => canonicalUrl.value),
    },
  ],
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
