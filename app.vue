<template>
  <div>
    <NuxtErrorBoundary>
      <div class="bg-white overflow-hidden">
        <div class="bg-[#f9fbfc]">
          <div class="md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto">
            <Navbar />
          </div>
        </div>

        <NuxtPage />

        <div
          v-if="!isProductsPage && !isWizAssistantPage"
          class="md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto px-2 md:px-0"
        >
          <Footer />
        </div>

        <ProductsFooter v-if="isProductsPage || isWizAssistantPage" />
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

const isProductsPage = computed(() => {
  return route.path.startsWith("/optical-microscope");
});

const isWizAssistantPage = computed(() => {
  return route.path.startsWith("/wiz-assistant");
});

const canonicalUrl = computed(() => {
  const baseUrl = config.public.baseUrl || "https://wsoft-v2.vercel.app";
  const path = route.path.replace(/\/+/g, "/");
  return `${baseUrl}${path}`;
});

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
  ],
});
</script>
