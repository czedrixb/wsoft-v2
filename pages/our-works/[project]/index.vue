<template>
  <div class="overflow-hidden">
    <OurWorksHeader :title="$t(project?.title)" :tools="project?.tools || []" />

    <div
      class="overflow-hidden flex justify-center max-w-full py-16 lg:mb-[8rem]"
    >
      <NuxtImg
        class="w-[100%]"
        height="100%"
        preload
        alt="academic"
        :src="project?.big_image"
      />
    </div>

    <div
      class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto mb-10"
    >
      <div
        class="text-center font-poppins font-[600] text-[25px] lg:text-[30px] md:px-0 text-[#475766] mb-2"
      >
        {{ $t("project-overview") }}
      </div>

      <p
        class="font-inter font-[300] text-[18px] text-justify mx-auto text-[#475766] lg:w-[80%] mb-[4rem] lg:mb-[5rem]"
      >
        {{ $t(project?.description) }}
      </p>

      <div
        v-if="project.image1"
        class="relative mb-12 md:mb-[5rem] md:py-[5rem]"
      >
        <div
          v-if="project.image1"
          class="grid grid-cols-1 md:grid-cols-2 items-center gap-5"
        >
          <div class="absolute left-0 md:left-[-67%] lg:left-[-37%] z-0">
            <img
              src="/images/home/shadow-overlay.png"
              class="max-w-full"
              alt="shadow-overlay"
              loading="lazy"
            />
          </div>
          <NuxtImg
            width="800px"
            height="100%"
            class="z-20"
            preload
            :alt="project?.image1"
            :src="`/images/our-works/${project?.image1}`"
          />
          <div class="lg:w-[80%] mx-auto z-20">
            <div
              class="text-left font-poppins font-[600] text-[25px] md:px-0 text-[#475766] mb-2"
            >
              {{ $t(project?.title1) }}
            </div>

            <p
              class="text-left font-inter font-[300] text-[18px] mx-auto text-[#475766]"
            >
              {{ $t(project?.text1) }}
            </p>
          </div>
        </div>
      </div>

      <div
        v-if="project.image2"
        class="relative mb-12 md:mb-[5rem] md:py-[5rem]"
      >
        <div
          class="absolute right-0 md:right-[-67%] md:bottom-0 lg:right-[-37%] z-0"
        >
          <img
            src="/images/home/shadow-overlay.png"
            class="max-w-full"
            alt="shadow-overlay"
            loading="lazy"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          <div class="lg:w-[80%] mx-auto order-2 md:order-1 z-20">
            <div
              class="text-left font-poppins font-[600] text-[25px] md:px-0 text-[#475766] mb-2"
            >
              {{ $t(project?.title2) }}
            </div>

            <p
              class="text-left font-inter font-[300] text-[18px] mx-auto text-[#475766]"
            >
              {{ $t(project?.text2) }}
            </p>
          </div>
          <NuxtImg
            width="800px"
            height="100%"
            preload
            alt="academic"
            :src="`/images/our-works/${project?.image2}`"
            class="order-1 md:order-2 z-20"
          />
        </div>
      </div>

      <div
        v-if="project.image3"
        class="relative mb-12 md:mb-[5rem] md:py-[5rem]"
      >
        <div class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl">
          <div
            class="absolute left-0 md:left-[-67%] md:bottom-[5%] lg:left-[-37%] z-0"
          >
            <img
              src="/images/home/shadow-overlay.png"
              class="max-w-full"
              alt="shadow-overlay"
              loading="lazy"
            />
          </div>
          <div
            class="grid grid-cols-1 md:grid-cols-2 items-center gap-5 mb-12 md:mb-[5rem]"
          >
            <NuxtImg
              width="800px"
              height="100%"
              class="z-20"
              preload
              alt="academic"
              :src="`/images/our-works/${project?.image3}`"
            />
            <div class="lg:w-[80%] mx-auto z-20">
              <div
                class="text-left font-poppins font-[600] text-[25px] md:px-0 text-[#475766] mb-2"
              >
                {{ $t(project?.title3) }}
              </div>

              <p
                class="text-left font-inter font-[300] text-[18px] mx-auto text-[#475766]"
              >
                {{ $t(project?.text3) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ContactEmail />
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";

const route = useRoute();
const projects = {
  "academic-administration-management-system": {
    title: "academic-administration",
    big_image: "/images/our-works/academic.png",
    description: "comprehensive-program",
    image1: "academic/dashboard.png",
    title1: "dashboard",
    text1: "dashboard-offers",
    image2: "academic/organize.png",
    title2: "organize",
    text2: "student-data",
    image3: "academic/calendar.png",
    title3: "calendar",
    text3: "calendar-feature",
    tools: ["laravel", "vue"],
  },
  "content-management-system": {
    title: "content-management",
    big_image: "/images/our-works/cms.png",
    description: "serves-engine",
    image1: "cms/booklist.png",
    title1: "booklist",
    text1: "diplaying-list",
    image2: "cms/video-enhanced.png",
    title2: "video-enhanced",
    text2: "creating-online",
    image3: "cms/create.png",
    title3: "create",
    text3: "convert-offline",
    tools: ["laravel", "vue"],
  },
  blockchain: {
    title: "blockchain",
    big_image: "/images/our-works/blockchain.png",
    description: "design-project",
    image1: "blockchain/color.png",
    title1: "color",
    text1: "designing-website",
    image2: "blockchain/design.png",
    title2: "design",
    text2: "implementing-design",
    image3: "blockchain/font.png",
    title3: "font",
    text3: "incorporating-sleek",
    tools: ["laravel", "vue", "bootstrap"],
  },
  "youtube-content-learning-system": {
    title: "youtube-content",
    big_image: "/images/our-works/youtube.png",
    description: "revolutionizes-english",
    image1: "youtube/video-selection.png",
    title1: "video-selection",
    text1: "asking-choose",
    image2: "youtube/watch-learn.png",
    title2: "watch-learn",
    text2: "videos-english",
    image3: "youtube/activity.png",
    title3: "activity",
    text3: "partake-activities",
    tools: ["laravel", "vue"],
  },
  "project-management-system": {
    title: "project-management",
    big_image: "/images/our-works/project-management.png",
    description: "developed-streamline",
    image1: "pms/dashboard.png",
    title1: "dashboard",
    text1: "dashboard-provides",
    image2: "pms/incorporate.png",
    title2: "incorporate",
    text2: "easily-add",
    image3: "pms/arrange.png",
    title3: "arrange",
    text3: "effortlessly-organize",
  },
  "foreign-language-learning-system": {
    title: "foreign-language",
    big_image: "/images/our-works/foreign-language.png",
    description: "endeavors-modernize",
    image1: "foreign/dialogue.png",
    title1: "dialogue",
    text1: "watch-videos",
    image2: "foreign/expressions.png",
    title2: "expressions",
    text2: "expressions-presented",
    image3: "foreign/vocabulary.png",
    title3: "vocabulary",
    text3: "translated-korean",
  },
  "data-crawling": {
    title: "data-crawling",
    big_image: "/images/our-works/data-crawling.png",
    description: "developed-streamline",
    image1: "data/dashboard.png",
    title1: "dashboard",
    text1: "dashboard-comprehensive",
    image2: "data/crawled-products.png",
    title2: "crawled-products",
    text2: "products-have",
    image3: "data/database-update.png",
    title3: "Database Update",
    text3: "no-worry",
    tools: ["laravel", "bootstrap", "blade"],
  },
  "ai-tarot-master": {
    title: "ai-tarot",
    big_image: "/images/our-works/ai-tarot.png",
    description: "innovative-application",
    image1: "tarot/tarot-reading.png",
    title1: "tarot-reading",
    text1: "crafted-captivating",
    image2: "tarot/card-selection.png",
    title2: "card-selection",
    text2: "select-three",
    image3: "tarot/reading-result.png",
    title3: "reading-result",
    text3: "experience-past",
    tools: ["laravel", "bootstrap"],
  },
  "ai-review-analyzer": {
    title: "ai-review",
    big_image: "/images/our-works/ai-review.png",
    description: "meticulously-crafted",
    image1: "ai-review/input.png",
    title1: "input",
    text1: "feature-allows",
    image2: "ai-review/inquire.png",
    title2: "inquire",
    text2: "integrating-gpt",
    image3: "ai-review/reviews.png",
    title3: "reviews",
    text3: "various-shopping",
    tools: ["vue", "laravel"],
  },
  "ai-powered-language-learning-app": {
    title: "ai-powered",
    big_image: "/images/our-works/ai-powered.png",
    description: "versatile-mobile",
    image1: "ai-powered/video-selection.png",
    title1: "video-selection",
    text1: "asking-choose",
    image2: "ai-powered/watch-learn.png",
    title2: "watch-learn",
    text2: "videos-english",
    tools: ["vue", "laravel"],
  },
  "database-speed-test": {
    title: "database-speed-test",
    big_image: "/images/our-works/database-speed.png",
    description: "test-compare",
    image1: "tcp/accuracy.png",
    title1: "accuracy",
    text1: "following-tpc",
    tools: ["laravel", "bootstrap", "blade"],
  },
};
const project = computed(() => projects[route.params.project]);

// const staticMetaTitle = t("works-title");
// const staticMetaKeywords = Array.from({ length: 10 }, (_, i) =>
//   t(`our-work-meta-keyword-${i + 1}`)
// ).join(", ");

// useHead({
//   title: staticMetaTitle,
//   meta: [
//     { name: "keywords", content: staticMetaKeywords },
//     { property: "og:title", content: staticMetaTitle },
//     { property: "og:type", content: "website" },
//   ],
// });
</script>