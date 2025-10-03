<template>
  <div>
    <PageHeader :title="$t('Our Works')" :description="$t('our-works-text')" />

    <div
      class="px-5 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-[12rem] overflow-hidden"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
        <div v-for="(project, key) in projects" :key="key">
          <NuxtLink :to="`/our-works/${key}`">
            <div class="block md:hidden mb-1">
              <h2
                class="font-poppins font-[600] text-[18px] lg:text-[22px] md:px-0 text-[#475766]"
              >
                {{ $t(project.title) }}
              </h2>
            </div>
            <NuxtImg
              width="600px"
              height="100%"
              :src="`/images/our-works/thumbnail/${project.image}`"
              :alt="project.title"
              class="mb-5"
            />
            <div class="hidden md:block">
              <div
                class="font-poppins font-[600] text-[18px] lg:text-[22px] md:px-0 text-[#475766]"
              >
                {{ $t(project.title) }}
              </div>
            </div>
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
import { useStructuredData } from "@/composables/useStructuredData";

const projects = {
  "academic-administration-management-system": {
    title: "academic-administration",
    image: "academic-administration.png",
  },
  "content-management-system": {
    title: "content-management",
    image: "content-management.png",
  },
  blockchain: {
    title: "blockchain",
    image: "blockchain.png",
  },
  "youtube-content-learning-system": {
    title: "youtube-content",
    image: "youtube-content.png",
  },
  "project-management-system": {
    title: "project-management",
    image: "project-management.png",
  },
  "foreign-language-learning-system": {
    title: "foreign-language",
    image: "foreign-language.png",
  },
  "data-crawling": {
    title: "data-crawling",
    image: "data-crawling.png",
  },
  "database-speed-test": {
    title: "database-speed-test",
    image: "database-speed-test.png",
  },
  "ai-review-analyzer": {
    title: "ai-review",
    image: "ai-review.png",
  },
  "ai-powered-language-learning-app": {
    title: "ai-powered",
    image: "ai-powered.png",
  },
};

const { t } = useI18n();

const staticMetaTitle = t("works-title");
const staticMetaKeywords = Array.from({ length: 10 }, (_, i) =>
  t(`our-work-meta-keyword-${i + 1}`)
).join(", ");

const structuredData = useStructuredData("our-works", { projects });

useHead({
  title: staticMetaTitle,
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredData),
    },
  ],
  meta: [
    { name: "keywords", content: staticMetaKeywords },
    { property: "og:title", content: staticMetaTitle },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/thumbnail.jpg" },
  ],
});
</script>
