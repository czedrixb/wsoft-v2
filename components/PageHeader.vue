<template>
  <div
    class="w-full h-[24rem] sm:h-[19rem] md:h-[16rem] lg:h-[24rem] overflow-hidden relative mb-10"
  >
    <!-- <video class="w-full h-full object-cover" autoplay loop muted playsinline>
      <source src="/images/about-us/bg-hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> -->
    <div
      class="absolute inset-0 bg-[#ebf0f7] opacity-[.60] hidden lg:block"
    ></div>
    <div class="absolute inset-0 flex justify-center">
      <NuxtImg
        src="/images/about-us/hero-overlay.png"
        width="1500px"
        height="800px"
        alt="hero-overlay"
      />
    </div>
    <div class="absolute inset-0 flex justify-center items-center">
      <div>
        <div
          v-if="route.path == '/blogs'"
          class="text-center font-poppins uppercase font-[700] text-[16pxv] lg:text-[20px] md:px-0 text-[#475766] mb-5"
        >
          {{ $t("our-blogs") }}
        </div>

        <h1
          class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-[#475766] mb-5"
        >
          {{ title }}
        </h1>

        <h2
          v-if="shouldShowDescription"
          class="font-inter font-[300] text-[18px] text-center mx-auto text-[#475766] w-[80%] 2xl:w-[60%]"
        >
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
});

const shouldShowDescription = computed(() => {
  if (!props.description) return false;

  const isBlogPage = route.path.includes("/blog");

  if (isBlogPage) {
    return props.description && props.description.trim() !== "";
  }

  return !!props.description;
});
</script>
