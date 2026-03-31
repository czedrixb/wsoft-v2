<template>
  <div ref="aboutContainer">
    <div class="about-section my-40">
      <div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10">
        <div class="relative">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="about-text self-center">
              <h2
                class="text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent"
              >
                {{ $t("about.title") }}
              </h2>
              <p
                class="text-[#20252CE5] font-semibold text-[16px] mt-8 max-w-lg"
              >
                {{ $t("about.description") }}
              </p>
            </div>

            <div class="about-img-1">
              <NuxtImg
                src="/images/revamp/about-us/about-us-1.png"
                class="object-cover w-full"
                width="598px"
                height="460px"
              />
            </div>

            <div class="about-img-2">
              <NuxtImg
                src="/images/revamp/about-us/about-us-2.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20">
        <TechStackMarquee />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutContainer = ref(null);
let ctx = null;

onMounted(() => {
  ctx = gsap.context(() => {
    const section = aboutContainer.value.querySelector(".about-section");
    const img1 = section.querySelector(".about-img-1");
    const img2 = section.querySelector(".about-img-2");

    // Set initial hidden states for images only
    gsap.set(img1, { opacity: 0, y: 160 });
    gsap.set(img2, { opacity: 0, y: 280 });

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

    // Phase 1: Image 1 slides up and aligns
    tl.to(
      img1,
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      0.8,
    );

    // Phase 2: Image 2 slides up slower, arrives after image 1
    tl.to(
      img2,
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power1.out",
      },
      1.2,
    );
  }, aboutContainer.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
