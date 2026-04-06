<template>
  <div ref="servicesContainer">
    <div class="service-section bg-[#e2e8f0] relative overflow-hidden">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div class="relative">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="text-block self-center" data-section="0">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("home.services.aiAutomation.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[16px] mb-5">
                {{ $t("home.services.aiAutomation.subtitle") }}
              </p>
              <p class="text-[#20252CE5] font-semibold text-[16px]">
                {{ $t("home.services.aiAutomation.description") }}
              </p>
            </div>

            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/home/services/ai-automation-1.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>

            <div class="image-parallax" data-direction="down">
              <NuxtImg
                src="/images/revamp/home/services/ai-automation-2.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>
          </div>

          <!-- <div
            class="overlay-img pointer-events-none absolute top-0 left-[33.33%] w-[33.33%] h-full flex items-center"
            style="z-index: 9"
          >
            <NuxtImg
              src="/images/revamp/home/services/overlay.png"
              class="h-auto object-cover w-full"
            />
          </div> -->

          <div
            class="animate-img pointer-events-none absolute top-0 left-[33.33%] w-[33.33%] h-full flex items-center z-10"
          >
            <video
              autoplay
              loop
              muted
              playsinline
              class="h-auto object-cover w-full"
            >
              <source
                src="/images/revamp/home/services/ai-automation-animate.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2: Legacy Modernization -->
    <div class="service-section bg-[#ffffff] relative overflow-hidden">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div class="relative">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/home/services/legacy-systems-1.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>

            <div class="image-parallax" data-direction="down">
              <NuxtImg
                src="/images/revamp/home/services/legacy-systems-2.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>

            <div class="text-block self-center" data-section="1">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("home.services.legacyModernization.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[16px] mb-5">
                {{ $t("home.services.legacyModernization.subtitle") }}
              </p>
              <p class="text-[#20252CE5] font-semibold text-[16px]">
                {{ $t("home.services.legacyModernization.description") }}
              </p>
            </div>
          </div>

          <!-- <div
            class="overlay-img pointer-events-none absolute top-0 left-[33.33%] w-[33.33%] h-full flex items-center"
            style="z-index: 9"
          >
            <NuxtImg
              src="/images/revamp/home/services/overlay.png"
              class="h-auto object-cover w-full"
            />
          </div> -->

          <div
            class="animate-img pointer-events-none absolute top-0 left-[33.33%] w-[33.33%] h-full flex items-center z-10"
          >
            <video
              autoplay
              loop
              muted
              playsinline
              class="h-auto object-cover w-full"
            >
              <source
                src="/images/revamp/home/services/legacy-system-animate.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3: SaaS Development -->
    <div class="service-section bg-[#e2e8f0] relative overflow-hidden">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div class="relative">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="text-block self-center" data-section="2">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("home.services.saasDevelopment.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[16px] mb-5">
                {{ $t("home.services.saasDevelopment.subtitle") }}
              </p>
              <p class="text-[#20252CE5] font-semibold text-[16px]">
                {{ $t("home.services.saasDevelopment.description") }}
              </p>
            </div>

            <div class="image-parallax" data-direction="up">
              <img
                src="/images/revamp/home/services/saas-custom-1.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>

            <div class="image-parallax" data-direction="down">
              <NuxtImg
                src="/images/revamp/home/services/saas-custom-2.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>
          </div>

          <!-- <div
            class="overlay-img pointer-events-none absolute top-0 left-[33.33%] w-[33.33%] h-full flex items-center"
            style="z-index: 9"
          >
            <NuxtImg
              src="/images/revamp/home/services/overlay.png"
              class="h-auto object-cover w-full"
            />
          </div> -->

          <div
            class="animate-img pointer-events-none absolute top-0 left-[33.33%] w-[33.33%] h-full flex items-center z-10"
          >
            <video
              autoplay
              loop
              muted
              playsinline
              class="h-auto object-cover w-full"
            >
              <source
                src="/images/revamp/home/services/saas-custom-animate.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 4: Public Sector -->
    <div class="service-section bg-[#ffffff] relative overflow-hidden">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div class="relative">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <!-- Image: col 1 -->
            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/home/services/education-administration-1.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>

            <div class="image-parallax" data-direction="down">
              <NuxtImg
                src="/images/revamp/home/services/education-administration-2.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>

            <div class="text-block self-center" data-section="3">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("home.services.publicSector.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[16px] mb-5">
                {{ $t("home.services.publicSector.subtitle") }}
              </p>
              <p class="text-[#20252CE5] font-semibold text-[16px]">
                {{ $t("home.services.publicSector.description") }}
              </p>
            </div>
          </div>

          <!-- <div
            class="overlay-img pointer-events-none absolute top-0 left-[33.33%] w-[33.33%] h-full flex items-center"
            style="z-index: 9"
          >
            <NuxtImg
              src="/images/revamp/home/services/overlay.png"
              class="h-auto object-cover w-full"
            />
          </div> -->

          <div
            class="animate-img pointer-events-none absolute top-0 left-[33.33%] w-[33.33%] h-full flex items-center z-10"
          >
            <video
              autoplay
              loop
              muted
              playsinline
              class="h-auto object-cover w-full"
            >
              <source
                src="/images/revamp/home/services/education-administration-animate.webm"
                type="video/webm"
              />
            </video>
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

const servicesContainer = ref(null);
let ctx = null;

onMounted(() => {
  ctx = gsap.context(() => {
    const sections = gsap.utils.toArray(".service-section");

    sections.forEach((section) => {
      const textBlock = section.querySelector(".text-block");
      const upImages = section.querySelectorAll(
        '.image-parallax[data-direction="up"]',
      );
      const downImages = section.querySelectorAll(
        '.image-parallax[data-direction="down"]',
      );
      const animateImg = section.querySelector(".animate-img");
      // const overlayImg = section.querySelector(".overlay-img");

      gsap.set(textBlock, { opacity: 0, y: 50 });
      gsap.set(upImages, { opacity: 0, y: 120 });
      gsap.set(downImages, { opacity: 0, y: -120 });
      gsap.set(animateImg, { opacity: 0, y: "220%" });

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
        textBlock,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        0,
      );

      tl.to(
        upImages,
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        0.8,
      );

      tl.to(
        downImages,
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        0.8,
      );

      tl.to(
        animateImg,
        {
          opacity: 1,
          y: "0%",
          duration: 2,
          ease: "power3.out",
        },
        1.8,
      );
    });
  }, servicesContainer.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
