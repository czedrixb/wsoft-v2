<template>
  <div
    class="w-full h-[24rem] sm:h-[19rem] md:h-[16rem] lg:h-[15rem] overflow-hidden relative mb-10"
  >
    <div
      class="absolute inset-0 bg-[#ebf0f7] opacity-[.60] hidden lg:block"
    ></div>
    <!-- <div class="absolute inset-0 flex justify-center">
      <NuxtImg
        src="/images/about-us/hero-overlay.png"
        width="1500px"
        height="800px"
        alt="hero-overlay"
      />
    </div> -->
    <div class="absolute inset-0 flex justify-center items-center">
      <div :class="contentContainerClass">
        <div
          v-if="showBlogMeta && blogMeta"
          class="flex flex-wrap items-center mb-1"
        >
          <span class="font-poppins text-[#999999] text-[14px] font-[500] me-4">
            {{ blogMeta.date }}
          </span>
          <span class="font-poppins text-[#333333] text-[14px] font-[700]">
            {{ blogMeta.author }}
          </span>
        </div>

        <div
          v-if="route.path == '/blogs'"
          class="text-center font-poppins uppercase font-[700] text-[16pxv] lg:text-[20px] md:px-0 text-[#475766] mb-5"
        >
          {{ $t("our-blogs") }}
        </div>

        <h1 :class="titleClass">
          {{ title }}
        </h1>

        <h2 v-if="shouldShowDescription" :class="descriptionClass">
          {{ description }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  blogMeta: {
    type: Object,
    default: null,
  },
});

const showBlogMeta = computed(() => {
  return props.blogMeta && route.path.includes("/blogs/");
});

const shouldShowDescription = computed(() => {
  if (!props.description) return false;

  const isBlogPage = route.path.includes("/blog");

  if (isBlogPage) {
    return props.description && props.description.trim() !== "";
  }

  return !!props.description;
});

// Computed classes for conditional styling
const contentContainerClass = computed(() => {
  return showBlogMeta.value ? "w-[80%] 2xl:w-[60%]" : "";
});

const titleClass = computed(() => {
  const baseClasses =
    "font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-[#475766] mb-5";
  return showBlogMeta.value ? baseClasses : `${baseClasses} text-center`;
});

const descriptionClass = computed(() => {
  const baseClasses = "font-inter font-[300] text-[18px] text-[#475766]";
  return showBlogMeta.value
    ? baseClasses
    : `${baseClasses} text-center mx-auto w-[80%] 2xl:w-[60%]`;
});
</script>
