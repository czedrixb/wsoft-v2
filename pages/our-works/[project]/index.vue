<template>
  <div>
    <OurWorksHeader :title="$t(project?.title)" :tools="project?.tools || []" />

    <div
      class="overflow-hidden flex justify-center max-w-full py-16 lg:mb-[8rem]"
    >
      <NuxtImg
        width="1900"
        height="100%"
        preload
        alt="academic"
        :src="project?.big_image"
      />
    </div>

    <div class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mb-10">
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
        class="grid grid-cols-1 md:grid-cols-2 items-center gap-5 mb-12 md:mb-[5rem]"
      >
        <NuxtImg
          width="500px"
          height="100%"
          preload
          :alt="project?.image1"
          :src="`/images/our-works/${project?.image1}`"
        />
        <div class="lg:w-[80%] mx-auto">
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

      <div
        v-if="project.image2"
        class="grid grid-cols-1 md:grid-cols-2 items-center gap-5 mb-12 md:mb-[5rem]"
      >
        <div class="lg:w-[80%] mx-auto order-2 md:order-1">
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
          width="100%"
          height="100%"
          preload
          alt="academic"
          :src="`/images/our-works/${project?.image2}`"
          class="order-1 md:order-2"
        />
      </div>

      <div
        v-if="project.image3"
        class="grid grid-cols-1 md:grid-cols-2 items-center gap-5 mb-12 md:mb-[5rem]"
      >
        <NuxtImg
          width="500px"
          height="100%"
          preload
          alt="academic"
          :src="`/images/our-works/${project?.image3}`"
        />
        <div class="lg:w-[80%] mx-auto">
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

    <ContactEmail />
  </div>
</template>

<script setup>
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
    // image1: "data/dashboard.png",
    title1: "dashboard",
    text1:
      "The dashboard offers a comprehensive view of your projects, earnings, tasks, and more, simplifying the process of monitoring your business's progress.",
    // image2: "data/expressions.png",
    title2: "Crawled Products",
    text2:
      "Products have been crawled from websites, allowing for easy checking of their specifications and more.",
    // image3: "data/vocabulary.png",
    title3: "Database Update",
    text3:
      "No need to worry if something is missed. You can simply add links to be included in the database for crawling.",
    tools: ["laravel", "bootstrap", "blade"],
  },
  "ai-tarot-master": {
    title: "ai-tarot",
    big_image: "/images/our-works/ai-tarot.png",
    description: "developed-streamline",
    // image1: "data/dashboard.png",
    title1: "Tarot Reading Selection",
    text1:
      "Crafted with captivating designs and animations, users can choose between Western reading and personalized tarot reading based on their preference.",
    // image2: "data/expressions.png",
    title2: "Card Selection",
    text2:
      "Select three cards for a personalized reading. Watch them come alive with vibrant animation and changing colors, offering comprehensive insights and guidance for your journey.",
    // image3: "data/vocabulary.png",
    title3: "Reading Results",
    text3:
      "Experience the past, present, and future unfold with captivating animations as you reveal each card, offering valuable insight into your journey ahead.",
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
  "tcp-h": {
    title: "tcp",
    big_image: "/images/our-works/tcp-h.png",
    description: "test-compare",
    image1: "tcp/accuracy.png",
    title1: "accuracy",
    text1: "following-tpc",
    tools: ["laravel", "bootstrap", "blade"],
  },
};
const project = computed(() => projects[route.params.project]);
</script>