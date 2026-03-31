<template>
  <div class="my-40" ref="servicesHeaderContainer">
    <div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10">
      <div class="services-header-section relative">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
        >
          <div class="services-img-1">
            <img
              src="/images/revamp/products-services/product-1.png"
              :alt="t('services.product1Alt')"
              class="object-cover"
              width="487px"
              height="460px"
            />
          </div>

          <div class="self-center">
            <h2
              class="text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent"
            >
              {{ t("services.title") }}
            </h2>
            <p class="text-[#20252CE5] font-semibold text-[16px] mt-8 max-w-lg">
              {{ t("services.description") }}
            </p>
          </div>

          <div class="services-img-2">
            <img
              src="/images/revamp/products-services/product-2.png"
              :alt="t('services.product2Alt')"
              class="object-cover"
              width="487px"
              height="460px"
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
const servicesHeaderContainer = ref(null);
let ctx = null;

onMounted(() => {
  ctx = gsap.context(() => {
    const section = servicesHeaderContainer.value.querySelector(
      ".services-header-section",
    );
    const img1 = section.querySelector(".services-img-1");
    const img2 = section.querySelector(".services-img-2");

    gsap.set([img1, img2], { opacity: 0, y: 180 });

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
      [img1, img2],
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
      },
      0.5,
    );
  }, servicesHeaderContainer.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
