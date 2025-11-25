<template>
  <div>
    <Html :lang="currentLanguage">
      <Head>
        <Link rel="canonical" :href="canonicalUrl" />
        <Meta name="robots" content="index, follow" />
        <Link 
          rel="preload" 
          href="/_nuxt/entry.[hash].css" 
          as="style" 
          :onload="`this.onload=null;this.rel='stylesheet'`"
        />
        <noscript>
          <Link rel="stylesheet" href="/_nuxt/entry.[hash].css" />
        </noscript>
      </Head>
    </Html>

    <div class="bg-[#ebf0f7] overflow-hidden">
      <div class="md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto">
        <Navbar />
      </div>
      <NuxtPage />
      <div class="md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from "~/stores/language";

const languageStore = useLanguageStore();
const route = useRoute();
const config = useRuntimeConfig();

const currentLanguage = computed(() => languageStore.activeLanguage || "ko");
const canonicalUrl = computed(() => {
  const baseUrl = config.public.baseUrl || "https://wsoft-v2.vercel.app";
  const path = route.path.replace(/\/+/g, "/");
  return `${baseUrl}${path}`;
});

useHead({
  link: [
    {
      rel: "canonical",
      href: canonicalUrl.value,
    },
  ],
  meta: [
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  htmlAttrs: {
    lang: currentLanguage.value,
  },
});

watch([route, currentLanguage], () => {
  useHead({
    link: [
      {
        rel: "canonical",
        href: canonicalUrl.value,
      },
    ],
    htmlAttrs: {
      lang: currentLanguage.value,
    },
  });
});

onMounted(async () => {
  await languageStore.initialize();
});
</script>
