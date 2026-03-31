<template>
  <div class="overflow-hidden">
    <OurWorksHeader :title="$t(project?.title)" :tools="project?.tools || []" />

    <div
      class="overflow-hidden flex justify-center max-w-full py-16 lg:mb-[8rem]"
    >
      <NuxtImg
        width="500px"
        preload
        v-if="project?.title == 'focused-task'"
        :alt="project?.title"
        :src="project?.big_image"
      />
      <NuxtImg
        class="w-[100%]"
        height="100%"
        preload
        v-else
        :alt="project?.title"
        :src="project?.big_image"
      />
    </div>

    <div
      class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto mb-10"
    >
      <h2
        class="text-center font-poppins font-[600] text-[25px] lg:text-[30px] md:px-0 text-black mb-2"
      >
        {{ $t("project-overview") }}
      </h2>

      <p
        class="font-inter font-[300] text-[18px] text-justify mx-auto text-black lg:w-[80%] mb-[4rem] lg:mb-[5rem]"
      >
        {{ $t(project?.description) }}
      </p>

      <div v-if="project.title == 'encouragement-generation'">
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
            <div>
              <div class="lg:w-[80%] mx-auto z-20 mb-10">
                <h2
                  class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black"
                >
                  {{ $t(project?.title1) }}
                </h2>

                <h3
                  v-if="project.title1_sub"
                  class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black"
                >
                  {{ $t(project?.title1_sub) }}
                </h3>

                <div class="mt-2" v-if="project.content1">
                  <div
                    v-for="content in project.content1"
                    :key="content.tool_name"
                    class="d-flex align-center mb-1"
                  >
                    <span
                      class="text-left font-inter font-medium text-[18px] mx-auto text-black mb-0"
                    >
                      {{ $t(content.tool_name) }}:
                    </span>
                    <span
                      class="text-left font-inter font-[300] text-[18px] mx-auto text-black mb-0"
                    >
                      {{ $t(content.tool_text) }}
                    </span>
                  </div>
                </div>

                <p
                  v-else
                  class="text-left font-inter font-[300] text-[18px] mx-auto text-black"
                >
                  {{ $t(project?.text1) }}
                </p>
              </div>
              <div class="lg:w-[80%] mx-auto z-20 mb-10">
                <h2
                  class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black"
                >
                  {{ $t(project?.title2) }}
                </h2>

                <p
                  class="text-left font-inter font-[300] text-[18px] mx-auto text-black"
                >
                  {{ $t(project?.text2) }}
                </p>
              </div>
              <div class="lg:w-[80%] mx-auto z-20">
                <h2
                  class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black"
                >
                  {{ $t(project?.title3) }}
                </h2>

                <p
                  class="text-left font-inter font-[300] text-[18px] mx-auto text-black"
                >
                  {{ $t(project?.text3) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="project.title == 'focused-task'">
        <div class="relative mb-12 md:mb-[5rem] md:py-[5rem]">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5"
          >
            <div class="lg:w-[80%] mx-auto z-20 mb-10">
              <h2
                class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black"
              >
                {{ $t(project?.title1) }}
              </h2>

              <p
                class="text-left font-inter font-[300] text-[18px] mx-auto text-black"
              >
                {{ $t(project?.text1) }}
              </p>
            </div>
            <div class="lg:w-[80%] mx-auto z-20 mb-10">
              <h2
                class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black"
              >
                {{ $t(project?.title2) }}
              </h2>

              <p
                class="text-left font-inter font-[300] text-[18px] mx-auto text-black"
              >
                {{ $t(project?.text2) }}
              </p>
            </div>
            <div class="lg:w-[80%] mx-auto z-20">
              <h2
                class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black"
              >
                {{ $t(project?.title3) }}
              </h2>

              <p
                class="text-left font-inter font-[300] text-[18px] mx-auto text-black"
              >
                {{ $t(project?.text3) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
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
              <h2
                class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black"
              >
                {{ $t(project?.title1) }}
              </h2>

              <h3
                v-if="project.title1_sub"
                class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black"
              >
                {{ $t(project?.title1_sub) }}
              </h3>

              <div class="mt-2" v-if="project.content1">
                <div
                  v-for="content in project.content1"
                  :key="content.tool_name"
                  class="d-flex align-center mb-1"
                >
                  <span
                    class="text-left font-inter font-medium text-[18px] mx-auto text-black mb-0"
                  >
                    {{ $t(content.tool_name) }}:
                  </span>
                  <span
                    class="text-left font-inter font-[300] text-[18px] mx-auto text-black mb-0"
                  >
                    {{ $t(content.tool_text) }}
                  </span>
                </div>
              </div>

              <p
                v-else
                class="text-left font-inter font-[300] text-[18px] mx-auto text-black"
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
              <h2
                class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black mb-2"
              >
                {{ $t(project?.title2) }}
              </h2>

              <div v-if="project.content2">
                <div
                  v-for="(content, index) in project.content2"
                  :key="index"
                  class="d-flex align-center mb-1"
                >
                  <span
                    class="text-left font-inter fw-bold font-medium text-[18px] mx-auto text-black mb-0"
                  >
                    {{ $t(content.title) }}:
                  </span>
                  <span
                    class="text-left font-inter font-[300] text-[18px] mx-auto text-black mb-0"
                  >
                    {{ $t(content.text) }}
                  </span>
                </div>
              </div>

              <p
                v-else
                class="text-left font-inter font-[300] text-[18px] mx-auto text-black"
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
                <h2
                  class="text-left font-poppins font-[600] text-[25px] md:px-0 text-black mb-2"
                >
                  {{ $t(project?.title3) }}
                </h2>

                <div v-if="project.content3">
                  <ul class="list-disc pl-5">
                    <li
                      v-for="(content, index) in project.content3"
                      :key="index"
                      class="text-left font-inter font-[300] text-[18px] text-black"
                    >
                      {{ $t(content.text) }}
                    </li>
                  </ul>
                </div>

                <p
                  v-else
                  class="text-left font-inter font-[300] text-[18px] text-black"
                >
                  {{ $t(project?.text3) }}
                </p>
              </div>
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
    big_image: "/images/our-works/updated-academic/academic.png",
    description: "comprehensive-program",
    image1: "updated-academic/dashboard.png",
    title1: "dashboard",
    text1: "dashboard-offers",
    image2: "updated-academic/organize.png",
    title2: "organize",
    text2: "student-data",
    image3: "updated-academic/calendar.png",
    title3: "calendar",
    text3: "calendar-feature",
    tools: ["laravel", "vue"],
  },
  "content-management-system": {
    title: "content-management",
    big_image: "/images/our-works/updated-cms/cms.png",
    description: "serves-engine",
    image1: "updated-cms/booklist.png",
    title1: "booklist",
    text1: "diplaying-list",
    image2: "updated-cms/video-enhanced.png",
    title2: "video-enhanced",
    text2: "creating-online",
    image3: "updated-cms/create.png",
    title3: "create",
    text3: "convert-offline",
    tools: ["laravel", "vue"],
  },
  blockchain: {
    title: "blockchain",
    big_image: "/images/our-works/blockchain.png",
    description: "niftle-description",
    image1: "blockchain/color.png",
    title1: "niftle-title1",
    title1_sub: "niftle-title1-sub",
    content1: [
      {
        tool_name: "Laravel",
        tool_text: "laravel-text",
      },
      {
        tool_name: "Vue.js",
        tool_text: "vue-text",
      },
      {
        tool_name: "Bootstrap",
        tool_text: "bootstrap-text",
      },
    ],
    image2: "blockchain/design.png",
    title2: "niftle-title2",
    content2: [
      {
        title: "neon-color",
        text: "neon-color-text",
      },
      {
        title: "3d-graphics",
        text: "3d-graphics-text",
      },
      {
        title: "futuristic-typo",
        text: "futuristic-typo-text",
      },
    ],
    image3: "blockchain/font.png",
    title3: "niftle-title3",
    content3: [
      {
        text: "niftle-text3-1",
      },
      {
        text: "niftle-text3-2",
      },
      {
        text: "niftle-text3-3",
      },
    ],
    tools: ["laravel", "vue", "bootstrap"],
  },
  "youtube-content-learning-system": {
    title: "youtube-content",
    big_image: "/images/our-works/updated-youtube/youtube.png",
    description: "revolutionizes-english",
    image1: "updated-youtube/video-selection.png",
    title1: "video-selection",
    text1: "asking-choose",
    image2: "updated-youtube/watch-learn.png",
    title2: "watch-learn",
    text2: "videos-english",
    image3: "updated-youtube/activity.png",
    title3: "activity",
    text3: "partake-activities",
    tools: ["laravel", "vue"],
  },
  "project-management-system": {
    title: "project-management",
    big_image: "/images/our-works/updated-pms/project-management.png",
    description: "developed-streamline",
    image1: "updated-pms/dashboard.png",
    title1: "dashboard",
    text1: "dashboard-provides",
    image2: "updated-pms/incorporate.png",
    title2: "incorporate",
    text2: "easily-add",
    image3: "updated-pms/arrange.png",
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
    big_image: "/images/our-works/updated-data/data-crawling.png",
    description: "developed-streamline",
    image1: "updated-data/dashboard.png",
    title1: "dashboard",
    text1: "dashboard-comprehensive",
    image2: "updated-data/crawled-products.png",
    title2: "crawled-products",
    text2: "products-have",
    image3: "updated-data/database-update.png",
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
    big_image: "/images/our-works/updated-ai-review/ai-review.png",
    description: "meticulously-crafted",
    image1: "updated-ai-review/input.png",
    title1: "input",
    text1: "feature-allows",
    image2: "updated-ai-review/inquire.png",
    title2: "inquire",
    text2: "integrating-gpt",
    image3: "updated-ai-review/reviews.png",
    title3: "reviews",
    text3: "various-shopping",
    tools: ["vue", "laravel"],
  },
  "ai-powered-language-learning-app": {
    title: "ai-powered",
    big_image: "/images/our-works/updated-ai-powered/ai-powered.png",
    description: "versatile-mobile",
    image1: "updated-ai-powered/video-selection.png",
    title1: "video-selection",
    text1: "asking-choose",
    image2: "updated-ai-powered/watch-learn.png",
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
  "food-calorie-analyzer": {
    title: "food-calorie",
    big_image: "/images/our-works/updated-food-calorie/food-calorie.png",
    description: "food-calorie-text",
    image1: "updated-food-calorie/food-calorie-img1.png",
    title1: "food-calorie-title1",
    text1: "food-calorie-text1",
    image2: "updated-food-calorie/food-calorie-img2.png",
    title2: "food-calorie-title2",
    text2: "food-calorie-text2",
    image3: "updated-food-calorie/food-calorie-img3.png",
    title3: "food-calorie-title3",
    text3: "food-calorie-text3",
    tools: ["react", "firebase"],
  },
  "encouragement-generation-platform": {
    title: "encouragement-generation",
    big_image:
      "/images/our-works/updated-encouragement-generation/encouragement-generation.png",
    description: "encouragement-generation-text",
    image1:
      "updated-encouragement-generation/encouragement-generation-img1.png",
    title1: "encouragement-generation-title1",
    text1: "encouragement-generation-text1",
    title2: "encouragement-generation-title2",
    text2: "encouragement-generation-text2",
    title3: "encouragement-generation-title3",
    text3: "encouragement-generation-text3",
    tools: ["next.js", "genkit"],
  },
  "focused-task-management": {
    title: "focused-task",
    big_image: "/images/our-works/updated-focused-task/focused-task.png",
    description: "focused-task-text",
    title1: "focused-task-title1",
    text1: "focused-task-text1",
    title2: "focused-task-title2",
    text2: "focused-task-text2",
    title3: "focused-task-title3",
    text3: "focused-task-text3",
    tools: ["next.js", "supabase"],
  },
  "audio-conversion-platform": {
    title: "audio-conversion",
    big_image:
      "/images/our-works/updated-audio-conversion/audio-conversion-platform.png",
    description: "audio-conversion-text",
    image1: "updated-audio-conversion/audio-conversion-platform-img1.png",
    title1: "audio-conversion-title1",
    text1: "audio-conversion-text1",
    image2: "updated-audio-conversion/audio-conversion-platform-img2.png",
    title2: "audio-conversion-title2",
    text2: "audio-conversion-text2",
    image3: "updated-audio-conversion/audio-conversion-platform-img3.png",
    title3: "audio-conversion-title3",
    text3: "audio-conversion-text3",
    tools: ["vue", "laravel"],
  },
  "ai-powered-multilingual-translation": {
    title: "ai-multilingual",
    big_image: "/images/our-works/updated-ai-multilingual/ai-multilingual.png",
    description: "ai-multilingual-text",
    image1: "updated-ai-multilingual/ai-multilingual-img1.png",
    title1: "ai-multilingual-title1",
    text1: "ai-multilingual-text1",
    image2: "updated-ai-multilingual/ai-multilingual-img2.png",
    title2: "ai-multilingual-title2",
    text2: "ai-multilingual-text2",
    image3: "updated-ai-multilingual/ai-multilingual-img3.png",
    title3: "ai-multilingual-title3",
    text3: "ai-multilingual-text3",
    tools: ["next.js", "firebase"],
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
