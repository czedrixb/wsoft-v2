<template>
  <div ref="aboutContainer">
    <div class="about-section my-40 pb-16">
      <div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10">
        <div class="relative">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-8 min-h-[500px]"
          >
            <div class="about-text lg:row-start-1 lg:col-start-1">
              <!-- Back to Products (WOS-264 #7) — list icon to discourage immediate back-out -->
              <NuxtLink
                to="/products"
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
                class="text-4xl lg:text-[60px] leading-tight font-bold bg-gradient-to-r from-[#FFD5EB] to-[#E1D176] bg-clip-text text-transparent"
              >
                WIZ Assistant
              </h2>
              <p
                class="text-[#20252CE5] font-semibold text-[16px] mt-8 max-w-lg"
              >
                {{ $t("wiz.header.description1") }}
              </p>
              <p
                class="text-[#20252CE5] font-semibold text-[16px] mt-6 max-w-lg"
              >
                {{ $t("wiz.header.description2") }}
              </p>
            </div>

            <div
              class="about-video flex justify-end lg:row-start-2 lg:col-start-2"
            >
              <video
                src="/images/revamp/products/wiz-assistant/wiz-animation.webm"
                class="w-full max-w-[598px] h-auto rounded-[14px] object-cover"
                autoplay
                loop
                muted
                playsinline
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutContainer = ref(null);
let ctx = null;

const isUedu = ref(false);

onMounted(() => {
  ctx = gsap.context(() => {
    const section = aboutContainer.value.querySelector(".about-section");
    const video = section.querySelector(".about-video");

    gsap.set(video, { opacity: 0, y: 30 });
    gsap.to(video, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.2,
    });
  }, aboutContainer.value);

  isUedu.value = window.location.hostname === "ueducation.co.kr";
});

const brand = computed(() => (isUedu.value ? "UEducation" : "W Labs"));

onUnmounted(() => {
  ctx?.revert();
});
</script>
