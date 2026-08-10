<template>
  <div class="my-40" ref="termsHeaderContainer">
    <div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10">
      <div class="terms-header-section relative">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]"
        >
          <!-- Left: back button + title + description -->
          <div class="self-center flex flex-col gap-6 items-start">
            <!-- Back to Products — list icon to discourage immediate back-out (WOS-264 #7) -->
            <router-link
              to="/products"
              class="inline-flex items-center gap-2 text-[#64748B] hover:text-[#20252C] transition-colors text-[14px] font-opensans"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <polyline points="3 6 4 7 6 5" />
                <polyline points="3 12 4 13 6 11" />
                <polyline points="3 18 4 19 6 17" />
              </svg>
            </router-link>

            <!-- Title -->
            <h2
              class="text-[40px] leading-tight md:text-[64px] md:leading-[80px] font-bold font-satoshi bg-gradient-to-r from-[#FFD5EB] to-[#E1D176] bg-clip-text text-transparent max-w-lg"
            >
              {{ $t("optical-microscope.title") }}
            </h2>

            <!-- Description -->
            <p
              class="font-opensans font-semibold text-[14px] text-[#20252CE5] max-w-[458px]"
            >
              {{ $t("optical-microscope.description") }}
            </p>
          </div>

          <!-- Right: hero image -->
          <div class="terms-header-img">
            <NuxtImg
              src="/images/revamp/products/oct-banner.png"
              class="h-auto object-cover rounded-[14px]"
              width="1101px"
              :alt="$t('optical-microscope.imageAlt')"
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
import { useI18n } from "vue-i18n";

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n();
const termsHeaderContainer = ref(null);
let ctx = null;

onMounted(() => {
  ctx = gsap.context(() => {
    const section = termsHeaderContainer.value.querySelector(
      ".terms-header-section",
    );
    const img = section.querySelector(".terms-header-img");

    gsap.set(img, { opacity: 0, y: 30 });
    gsap.to(img, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.2,
    });
  }, termsHeaderContainer.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
