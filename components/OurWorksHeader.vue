<template>
  <div
    class="w-full h-[30rem] sm:h-[19rem] md:h-[16rem] lg:h-[24rem] overflow-hidden relative mb-10"
  >
    <!-- <video class="w-full h-full object-cover" autoplay loop muted playsinline>
      <source src="/images/about-us/bg-hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> -->
    <div class="absolute inset-0 bg-main opacity-[.60] hidden lg:block"></div>
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
          class="text-center lg:w-[80%] mx-auto font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-[#475766] mb-5"
        >
          {{ title }}
        </div>
        <div
          class="flex flex-wrap items-center justify-center gap-3 lg:w-[70%] mx-auto"
        >
          <div
            class="rounded-full shadow-sm font-poppins font-[400] text-[16px] md:text-[18px] text-[#475766] bg-[#FFFFFF4D] backdrop-blur-[5.3px] flex items-center jusitfy-center py-3 px-5"
          >
            {{ $t("web-app") }}
          </div>
          <div
            class="rounded-full shadow-sm font-poppins font-[400] text-[16px] md:text-[18px] text-[#475766] bg-[#FFFFFF4D] backdrop-blur-[5.3px] flex items-center jusitfy-center py-3 px-5"
          >
            {{ $t("ui-design") }}
          </div>
          <div
            v-for="tool in tools"
            :key="tool"
            class="rounded-full shadow-sm font-poppins font-[400] text-[16px] md:text-[18px] text-[#475766] bg-[#FFFFFF4D] backdrop-blur-[5.3px] flex items-center justify-center py-3 px-5"
          >
            <NuxtImg
              preload
              width="24px"
              height="24px"
              sizes="24px"
              :alt="`${tool}-icon`"
              :src="`/images/home/devtools/devicon_${tool}.webp`"
              class="mr-2"
            />
            {{ tool.charAt(0).toUpperCase() + tool.slice(1) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  tools: {
    type: Array,
    default: () => [],
  },
});
</script>