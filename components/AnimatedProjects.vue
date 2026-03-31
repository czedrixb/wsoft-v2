<template>
  <div ref="projectsContainer">
    <template v-if="isProductsPage">
      <!-- Section 1: LC Oct -->
      <div class="project-section bg-[#e2e8f0] relative overflow-hidden">
        <div class="mx-auto px-8 max-w-screen-4xl py-16">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="text-block self-center" data-section="0">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("product.animatedProjects.lcOct.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[14px] mt-8">
                {{ $t("product.animatedProjects.lcOct.description") }}
              </p>
            </div>
            <div class="image-parallax" data-direction="down">
              <NuxtImg
                src="/images/revamp/products/lc-oct-2.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/products/lc-oct-1.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: AI Encouragement -->
      <div class="project-section bg-[#ffffff] relative overflow-hidden">
        <div class="mx-auto px-8 max-w-screen-4xl py-16">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="text-block self-center" data-section="1">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("product.animatedProjects.aiEncouragement.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[14px]">
                {{ $t("product.animatedProjects.aiEncouragement.description") }}
              </p>
            </div>
            <div class="image-parallax" data-direction="down">
              <img
                src="/images/revamp/products/wiz-assistant-1.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/products/wiz-assistant-2.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <!-- Section 1: LC Oct -->
      <div class="project-section bg-[#e2e8f0] relative overflow-hidden">
        <div class="mx-auto px-8 max-w-screen-4xl py-16">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="text-block self-center" data-section="0">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("product.animatedProjects.lcOct.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[14px] mt-8">
                {{ $t("product.animatedProjects.lcOct.description") }}
              </p>
            </div>
            <div class="image-parallax" data-direction="down">
              <NuxtImg
                src="/images/revamp/products/lc-oct-2.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/products/lc-oct-1.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: AI Encouragement -->
      <div class="project-section bg-[#ffffff] relative overflow-hidden">
        <div class="mx-auto px-8 max-w-screen-4xl py-16">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="text-block self-center" data-section="1">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("product.animatedProjects.aiEncouragement.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[14px]">
                {{ $t("product.animatedProjects.aiEncouragement.description") }}
              </p>
            </div>
            <div class="image-parallax" data-direction="down">
              <img
                src="/images/revamp/products/wiz-assistant-1.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/products/wiz-assistant-2.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: AI Diet Tracker -->
      <div class="project-section bg-[#e2e8f0] relative overflow-hidden">
        <div class="mx-auto px-8 max-w-screen-4xl py-16">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="text-block self-center" data-section="2">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("product.animatedProjects.aiDietTracker.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[14px] mt-8">
                {{ $t("product.animatedProjects.aiDietTracker.description") }}
              </p>
            </div>
            <div class="image-parallax" data-direction="down">
              <NuxtImg
                src="/images/revamp/our-projects/ai-aided-1.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/our-projects/ai-aided-2.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 4: AI Translator -->
      <div class="project-section bg-[#ffffff] relative overflow-hidden">
        <div class="mx-auto px-8 max-w-screen-4xl py-16">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="text-block self-center" data-section="3">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("product.animatedProjects.aiTranslator.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[14px]">
                {{ $t("product.animatedProjects.aiTranslator.description") }}
              </p>
            </div>
            <div class="image-parallax" data-direction="down">
              <img
                src="/images/revamp/our-projects/ai-powered-1.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
            <div class="image-parallax" data-direction="up">
              <img
                src="/images/revamp/our-projects/ai-powered-2.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 5: AI Audio Generator -->
      <div class="project-section bg-[#e2e8f0] relative overflow-hidden">
        <div class="mx-auto px-8 max-w-screen-4xl py-16">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="text-block self-center" data-section="4">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("product.animatedProjects.aiAudioGenerator.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[14px] mt-8">
                {{
                  $t("product.animatedProjects.aiAudioGenerator.description")
                }}
              </p>
            </div>
            <div class="image-parallax" data-direction="down">
              <NuxtImg
                src="/images/revamp/our-projects/ai-generating-1.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/our-projects/ai-generating-2.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 6: AI Self Management -->
      <div class="project-section bg-[#ffffff] relative overflow-hidden">
        <div class="mx-auto px-8 max-w-screen-4xl py-16">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="text-block self-center" data-section="5">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("product.animatedProjects.aiSelfManagement.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[14px]">
                {{
                  $t("product.animatedProjects.aiSelfManagement.description")
                }}
              </p>
            </div>
            <div class="image-parallax" data-direction="down">
              <img
                src="/images/revamp/our-projects/self-management-1.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/our-projects/self-management-2.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 7: AI Evaluation -->
      <div class="project-section bg-[#e2e8f0] relative overflow-hidden">
        <div class="mx-auto px-8 max-w-screen-4xl py-16">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="text-block self-center" data-section="6">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("product.animatedProjects.aiEvaluation.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[14px] mt-8">
                {{ $t("product.animatedProjects.aiEvaluation.description") }}
              </p>
            </div>
            <div class="image-parallax" data-direction="down">
              <NuxtImg
                src="/images/revamp/our-projects/ai-evaluating-1.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/our-projects/ai-evaluating-2.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 8: AI Language Learning -->
      <div class="project-section bg-[#ffffff] relative overflow-hidden">
        <div class="mx-auto px-8 max-w-screen-4xl py-16">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="text-block self-center" data-section="7">
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t("product.animatedProjects.aiLanguageLearning.title") }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-[14px]">
                {{
                  $t("product.animatedProjects.aiLanguageLearning.description")
                }}
              </p>
            </div>
            <div class="image-parallax" data-direction="down">
              <img
                src="/images/revamp/our-projects/ai-enhanced-1.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/our-projects/ai-enhanced-2.png"
                class="object-cover w-full rounded-[14px]"
                width="598px"
                height="460px"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRoute } from "vue-router";

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();
const projectsContainer = ref(null);
let ctx = null;

const isProductsPage = computed(() => {
  return route.path === "/revamp/products";
});

onMounted(() => {
  ctx = gsap.context(() => {
    const sections = gsap.utils.toArray(".project-section");

    sections.forEach((section) => {
      const textBlock = section.querySelector(".text-block");
      const upImages = section.querySelectorAll(
        '.image-parallax[data-direction="up"]',
      );
      const downImages = section.querySelectorAll(
        '.image-parallax[data-direction="down"]',
      );

      gsap.set(textBlock, { opacity: 0, y: 50 });
      gsap.set(upImages, { opacity: 0, y: 120 });
      gsap.set(downImages, { opacity: 0, y: 120 });

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
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        0,
      );
      tl.to(
        downImages,
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
        0.8,
      );
      tl.to(
        upImages,
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
        1.2,
      );
    });
  }, projectsContainer.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
