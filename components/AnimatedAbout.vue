<template>
  <div ref="aboutAnimatedContainer">
    <!-- Section 1: Cutting Edge -->
    <div class="about-section bg-[#e2e8f0]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div class="relative">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="self-center">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("about.animated_about.cutting_edge.title") }}
              </h3>
              <p
                class="text-[#20252CE5] font-semibold text-[14px] mt-8 max-w-md"
              >
                {{ $t("about.animated_about.cutting_edge.description") }}
              </p>
            </div>

            <div class="relative flex items-center justify-center">
              <div class="section-main-img w-full">
                <NuxtImg
                  src="/images/revamp/about-us/cutting-edge.png"
                  class="h-auto max-w-full object-cover"
                  width="598px"
                  :alt="$t('about.animated_about.cutting_edge.title')"
                />
              </div>
              <div
                class="section-animate-img absolute inset-0 flex items-center justify-center z-10"
              >
                <NuxtImg
                  src="/images/revamp/about-us/cutting-edge-animate.png"
                  class="h-auto object-cover"
                  width="200px"
                  :alt="$t('about.animated_about.cutting_edge.title')"
                />
              </div>
            </div>

            <div class="section-second-text self-center">
              <p
                class="text-[#20252CE5] font-semibold text-[14px] mt-8 max-w-md"
              >
                {{ $t("about.animated_about.cutting_edge.second_description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2: Expertise Innovation -->
    <div class="about-section bg-[#ffffff]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div class="relative">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="section-second-text self-center">
              <p
                class="text-[#20252CE5] font-semibold text-[14px] mt-8 max-w-md"
              >
                {{
                  $t(
                    "about.animated_about.expertise_innovation.second_description",
                  )
                }}
              </p>
            </div>

            <div class="relative flex items-center justify-center">
              <div class="section-main-img w-full">
                <NuxtImg
                  src="/images/revamp/about-us/expertise-innovation.png"
                  class="h-auto max-w-full object-cover"
                  width="598px"
                  :alt="$t('about.animated_about.expertise_innovation.title')"
                />
              </div>
              <div
                class="section-animate-img absolute inset-0 flex items-center justify-center z-10"
              >
                <NuxtImg
                  src="/images/revamp/about-us/cutting-edge-animate.png"
                  class="h-auto object-cover"
                  width="200px"
                  :alt="$t('about.animated_about.cutting_edge.title')"
                />
              </div>
            </div>

            <div class="self-center">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("about.animated_about.expertise_innovation.title") }}
              </h3>
              <p
                class="text-[#20252CE5] font-semibold text-[14px] mt-8 max-w-md"
              >
                {{
                  $t("about.animated_about.expertise_innovation.description")
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3: Reliable Partner -->
    <div class="about-section bg-[#e2e8f0]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div class="relative">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="self-center">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("about.animated_about.reliable_partner.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[14px] mt-8">
                {{ $t("about.animated_about.reliable_partner.description") }}
              </p>
            </div>

            <div class="relative flex items-center justify-center">
              <div class="section-main-img w-full">
                <NuxtImg
                  src="/images/revamp/about-us/reliable-technology.png"
                  class="h-auto max-w-full object-cover"
                  width="598px"
                  :alt="$t('about.animated_about.reliable_partner.title')"
                />
              </div>
              <div
                class="section-animate-img absolute inset-0 flex items-center justify-center z-10"
              >
                <NuxtImg
                  src="/images/revamp/about-us/cutting-edge-animate.png"
                  class="h-auto object-cover"
                  width="200px"
                  :alt="$t('about.animated_about.cutting_edge.title')"
                />
              </div>
            </div>

            <div class="section-second-text self-center">
              <p
                class="text-[#20252CE5] font-semibold text-[14px] mt-8 max-w-md"
              >
                {{
                  $t("about.animated_about.reliable_partner.second_description")
                }}
              </p>
            </div>
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

const aboutAnimatedContainer = ref(null);
let ctx = null;

onMounted(() => {
  ctx = gsap.context(() => {
    const sections = gsap.utils.toArray(".about-section");

    sections.forEach((section) => {
      const animateImg = section.querySelector(".section-animate-img");
      const mainImg = section.querySelector(".section-main-img");
      const secondText = section.querySelector(".section-second-text");

      gsap.set(animateImg, { opacity: 0, y: "180%" });
      gsap.set(mainImg, { opacity: 0, y: 200 });
      gsap.set(secondText, { opacity: 0, y: 200 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=280%",
          pin: true,
          scrub: 2,
          anticipatePin: 1,
        },
      });

      tl.to(
        animateImg,
        {
          opacity: 1,
          y: "0%",
          duration: 1.5,
          ease: "power2.out",
        },
        0.5,
      );

      tl.to(
        mainImg,
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
        },
        1.8,
      );

      tl.to(
        secondText,
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
        },
        1.8,
      );
    });
  }, aboutAnimatedContainer.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
