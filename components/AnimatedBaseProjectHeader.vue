<template>
  <div class="my-40" ref="productsHeaderContainer">
    <div class="px-5 lg:px-[5rem] pb-0 md:py-16 mb-0 md:mb-10">
      <div class="products-header-section relative">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]"
        >
          <div class="self-center">
            <!-- Back to Projects — list icon to discourage immediate back-out (WOS-264 #9) -->
            <NuxtLink
              to="/our-projects"
              class="inline-flex items-center gap-2 mb-6 text-[#64748B] hover:text-[#20252C] transition-colors text-[14px] font-opensans"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <polyline points="3 6 4 7 6 5" />
                <polyline points="3 12 4 13 6 11" />
                <polyline points="3 18 4 19 6 17" />
              </svg>
            </NuxtLink>
            <h2
              class="text-[60px] leading-tight font-bold bg-gradient-to-r from-[#FFD5EB] to-[#E1D176] bg-clip-text text-transparent"
            >
              {{ project.title }}
            </h2>
            <p class="text-[#64748B] font-semibold text-[24px] mt-5">
              {{ project.subtitle }}
            </p>
            <p
              class="text-[#20252CE5] font-semibold text-[16px] mt-5 max-w-4xl"
            >
              {{ project.description }}
            </p>
          </div>

          <div class="products-header-img">
            <NuxtImg
              :src="project.image"
              class="h-auto object-cover"
              width="700px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  project: {
    type: Object,
    required: true,
    // Shape: { title, subtitle, description, image }
  },
});

const productsHeaderContainer = ref(null);
let ctx = null;

onMounted(() => {
  ctx = gsap.context(() => {
    const section = productsHeaderContainer.value.querySelector(
      ".products-header-section",
    );
    const img = section.querySelector(".products-header-img");

    gsap.set(img, { opacity: 0, y: 30 });
    gsap.to(img, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.2,
    });
  }, productsHeaderContainer.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
