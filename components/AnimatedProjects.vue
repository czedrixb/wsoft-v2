<template>
  <div ref="projectsContainer">
    <div
      v-for="(section, index) in currentSections"
      :key="index"
      class="project-section relative overflow-hidden"
      :class="section.bg"
    >
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
        >
          <template v-for="(col, colIndex) in section.columns" :key="colIndex">
            <!-- Text Block -->
            <div
              v-if="col.type === 'text'"
              class="text-block self-center"
              :data-section="index"
            >
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ $t(col.titleKey) }}
              </h3>
              <p class="text-[#20252CE5] font-semibold text-md mt-8">
                {{ $t(col.descriptionKey) }}
              </p>
              <div v-if="col.cta" class="mt-5">
                <div class="max-w-xl mx-auto">
                  <router-link
                    :to="col.cta.to"
                    class="border border-[#20252CE5] px-10 py-2 text-sm text-black font-semibold flex items-center gap-3 rounded-[22px] w-fit"
                  >
                    {{ $t(col.cta.labelKey) }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Image Block -->
            <div
              v-else-if="col.type === 'image'"
              class="image-parallax"
              :data-direction="col.direction"
            >
              <NuxtImg
                :src="col.src"
                class="object-cover rounded-[14px]"
                :class="col.class"
                :width="col.width || '598px'"
                :height="col.height || '460px'"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
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

const isProductsPage = computed(() => route.path === "/revamp/products");

const productsSections = [
  {
    bg: "bg-[#e2e8f0]",
    columns: [
      {
        type: "text",
        titleKey: "product.animatedProjects.lcOct.title",
        descriptionKey: "product.animatedProjects.lcOct.description",
        cta: {
          to: "/revamp/optical-microscope",
          labelKey: "product.animatedProjects.lcOct.cta",
        },
      },
      {
        type: "image",
        src: "/images/revamp/products/lc-oct-2.png",
        direction: "down",
      },
      {
        type: "image",
        src: "/images/revamp/products/lc-oct-1.png",
        direction: "up",
      },
    ],
  },
  {
    bg: "bg-[#ffffff]",
    columns: [
      {
        type: "image",
        src: "/images/revamp/products/wiz-assistant-2.png",
        direction: "down",
      },
      {
        type: "image",
        src: "/images/revamp/products/wiz-assistant-1.png",
        direction: "up",
        width: "487px",
      },
      {
        type: "text",
        titleKey: "product.animatedProjects.wizAssistant.title",
        descriptionKey: "product.animatedProjects.wizAssistant.description",
        cta: {
          to: "/revamp/wiz-assistant",
          labelKey: "product.animatedProjects.wizAssistant.cta",
        },
      },
    ],
  },
];

const projectsSections = [
  {
    bg: "bg-[#e2e8f0]",
    columns: [
      {
        type: "text",
        titleKey: "product.animatedProjects.aiMeasuring.title",
        descriptionKey: "product.animatedProjects.aiMeasuring.description",
        cta: {
          to: "/revamp/our-projects/ai-measuring-analysis-skin-optics",
          labelKey: "product.animatedProjects.aiMeasuring.cta",
        },
      },
      {
        type: "image",
        src: "/images/revamp/products/lc-oct-2.png",
        direction: "down",
      },
      {
        type: "image",
        src: "/images/revamp/products/lc-oct-1.png",
        direction: "up",
      },
    ],
  },
  {
    bg: "bg-[#ffffff]",
    columns: [
      {
        type: "image",
        src: "/images/revamp/our-projects/ai-encourage-1.png",
        direction: "down",
        class: "w-full h-[455px]",
      },
      {
        type: "image",
        src: "/images/revamp/our-projects/ai-encourage-2.png",
        direction: "up",
        class: "w-full h-[455px]",
      },
      {
        type: "text",
        titleKey: "product.animatedProjects.aiEncouragement.title",
        descriptionKey: "product.animatedProjects.aiEncouragement.description",
        cta: {
          to: "/revamp/our-projects/ai-encouragement-generation-platform",
          labelKey: "product.animatedProjects.aiEncouragement.cta",
        },
      },
    ],
  },
  {
    bg: "bg-[#e2e8f0]",
    columns: [
      {
        type: "text",
        titleKey: "product.animatedProjects.aiDietTracker.title",
        descriptionKey: "product.animatedProjects.aiDietTracker.description",
        cta: {
          to: "/revamp/our-projects/ai-aided-diet-calorie-analysis-tracker",
          labelKey: "product.animatedProjects.aiDietTracker.cta",
        },
      },
      {
        type: "image",
        src: "/images/revamp/our-projects/ai-aided-1.png",
        direction: "down",
      },
      {
        type: "image",
        src: "/images/revamp/our-projects/ai-aided-2.png",
        direction: "up",
      },
    ],
  },
  {
    bg: "bg-[#ffffff]",
    columns: [
      {
        type: "image",
        src: "/images/revamp/our-projects/ai-powered-1.png",
        direction: "down",
      },
      {
        type: "image",
        src: "/images/revamp/our-projects/ai-powered-2.png",
        direction: "up",
      },
      {
        type: "text",
        titleKey: "product.animatedProjects.aiTranslator.title",
        descriptionKey: "product.animatedProjects.aiTranslator.description",
        cta: {
          to: "/revamp/our-projects/ai-powered-multilingual-translator",
          labelKey: "product.animatedProjects.aiTranslator.cta",
        },
      },
    ],
  },
  {
    bg: "bg-[#e2e8f0]",
    columns: [
      {
        type: "text",
        titleKey: "product.animatedProjects.aiAudioGenerator.title",
        descriptionKey: "product.animatedProjects.aiAudioGenerator.description",
        cta: {
          to: "/revamp/our-projects/ai-generating-audio-file",
          labelKey: "product.animatedProjects.aiAudioGenerator.cta",
        },
      },
      {
        type: "image",
        src: "/images/revamp/our-projects/ai-generating-1.png",
        direction: "down",
      },
      {
        type: "image",
        src: "/images/revamp/our-projects/ai-generating-2.png",
        direction: "up",
      },
    ],
  },
  {
    bg: "bg-[#ffffff]",
    columns: [
      {
        type: "image",
        src: "/images/revamp/our-projects/self-management-1.png",
        direction: "down",
      },
      {
        type: "image",
        src: "/images/revamp/our-projects/self-management-2.png",
        direction: "up",
      },
      {
        type: "text",
        titleKey: "product.animatedProjects.aiSelfManagement.title",
        descriptionKey: "product.animatedProjects.aiSelfManagement.description",
        cta: {
          to: "/revamp/our-projects/ai-self-management-motivation",
          labelKey: "product.animatedProjects.aiSelfManagement.cta",
        },
      },
    ],
  },
  {
    bg: "bg-[#e2e8f0]",
    columns: [
      {
        type: "text",
        titleKey: "product.animatedProjects.aiEvaluation.title",
        descriptionKey: "product.animatedProjects.aiEvaluation.description",
        cta: {
          to: "/revamp/our-projects/ai-evaluating-assignment-learning-system",
          labelKey: "product.animatedProjects.aiEvaluation.cta",
        },
      },
      {
        type: "image",
        src: "/images/revamp/our-projects/ai-evaluating-1.png",
        direction: "down",
      },
      {
        type: "image",
        src: "/images/revamp/our-projects/ai-evaluating-2.png",
        direction: "up",
      },
    ],
  },
  {
    bg: "bg-[#ffffff]",
    columns: [
      {
        type: "image",
        src: "/images/revamp/our-projects/ai-enhanced-1.png",
        direction: "down",
      },
      {
        type: "image",
        src: "/images/revamp/our-projects/ai-enhanced-2.png",
        direction: "up",
      },
      {
        type: "text",
        titleKey: "product.animatedProjects.aiLanguageLearning.title",
        descriptionKey:
          "product.animatedProjects.aiLanguageLearning.description",
        cta: {
          to: "/revamp/our-projects/ai-enhanced-language-learning-platform",
          labelKey: "product.animatedProjects.aiLanguageLearning.cta",
        },
      },
    ],
  },
];

const currentSections = computed(() =>
  isProductsPage.value ? productsSections : projectsSections,
);

onMounted(() => {
  ctx = gsap.context(() => {
    const isMobile = window.innerWidth < 1024;
    const sections = gsap.utils.toArray(".project-section");

    sections.forEach((section) => {
      const textBlock = section.querySelector(".text-block");
      const upImages = section.querySelectorAll(
        '.image-parallax[data-direction="up"]',
      );
      const downImages = section.querySelectorAll(
        '.image-parallax[data-direction="down"]',
      );

      gsap.set(textBlock, { opacity: 0, y: isMobile ? 30 : 50 });
      gsap.set(upImages, { opacity: 0, y: isMobile ? 60 : 120 });
      gsap.set(downImages, { opacity: 0, y: isMobile ? 60 : 120 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: isMobile ? "+=80%" : "+=250%",
          pin: true,
          scrub: isMobile ? 1 : 2,
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
        { opacity: 1, y: 0, duration: isMobile ? 1 : 1.5, ease: "power2.out" },
        isMobile ? 0.4 : 0.8,
      );
      tl.to(
        upImages,
        { opacity: 1, y: 0, duration: isMobile ? 1 : 1.5, ease: "power2.out" },
        isMobile ? 0.6 : 1.2,
      );
    });
  }, projectsContainer.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
