<template>
  <div>
    <PageHeader :title="$t('find-blogs')" :description="$t('blogs-text')" />

    <div
      class="px-5 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mb-[10rem]"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 px-5"
      >
        <div v-for="i in 9" :key="i">
          <img
            src="/images/blogs/blog.png"
            class="max-w-full mb-5 rounded-[16px]"
            alt="Blog Image"
            loading="lazy"
          />

          <div class="flex mb-3">
            <span
              class="font-poppins text-[#999999] text-[12px] font-[500] me-3"
              >13 {{ t("march") }} 2023</span
            >
            <span class="font-poppins text-[#333333] text-[12px] font-[700]"
              >John Doe</span
            >
          </div>

          <div class="font-poppins font-[600] text-[24px] text-black mb-3">
            Lorem ipsum dolor sit amet
          </div>

          <div class="font-poppins font-[400] text-[16px] text-[#666666] mb-3">
            Lorem ipsum dolor sit amet, ius saepe primis ex, te commodo accusam
            salutatus quo. In ius facer postulant, te eum option oblique
            repudiandae.
          </div>

          <NuxtLink
            :to="`/blogs/${i === 1 ? 'lorem-ipsum' : 'second-blog'}`"
            class="font-poppins font-[700] text-[18px] text-[#2279E8] underline underline-offset-3 cursor-pointer"
          >
            {{ $t("read-more") }}...
          </NuxtLink>
        </div>
      </div>
    </div>

    <ContactEmail />
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const { t } = useI18n();

const staticMetaTitle = t("about-title");
const staticMetaDescription = t("about-us-description");
const staticMetaKeywords = Array.from({ length: 10 }, (_, i) =>
  t(`about-us-meta-keyword-${i + 1}`)
).join(", ");

useHead({
  title: staticMetaTitle,
  meta: [
    { name: "description", content: staticMetaDescription },
    { name: "keywords", content: staticMetaKeywords },
    { property: "og:title", content: staticMetaTitle },
    { property: "og:description", content: staticMetaDescription },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/thumbnail.jpg" },
  ],
});
</script>
