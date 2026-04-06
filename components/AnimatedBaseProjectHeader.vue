<template>
  <div class="my-40" ref="productsHeaderContainer">
    <div class="px-5 lg:px-[5rem] pb-0 md:py-16 mb-0 md:mb-10">
      <div class="products-header-section relative">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]"
        >
          <div class="self-center">
            <h2
              class="text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent"
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

    gsap.set(img, { opacity: 0, y: 180 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=250%",
        pin: true,
        scrub: 2,
        anticipatePin: 1,
      },
    });

    tl.to(
      img,
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
      },
      0.5,
    );
  }, productsHeaderContainer.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
