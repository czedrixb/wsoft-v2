<template>
  <div ref="projectsContainer">
    <div
      v-for="(section, index) in currentSections"
      :key="index"
      class="project-section relative overflow-hidden"
      :class="section.bg"
    >
      <div class="mx-auto px-8 max-w-screen-4xl py-16">

        <!-- Tablet/Mobile: two-card stacked layout (WOS-263) -->
        <div class="lg:hidden flex flex-col gap-4">
          <!-- Card 1: first image as bg + frosted glass text overlay -->
          <div class="mobile-fade relative rounded-[14px] overflow-hidden min-h-[360px]">
            <NuxtImg
              :src="imagesOf(section)[0].src"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex items-end p-4">
              <div class="backdrop-blur-[8px] bg-[#D8CBEB66] rounded-[14px] p-4 flex flex-col gap-3 w-full">
                <h3 class="text-[#752323] text-[20px] font-satoshi font-[400] leading-[28px]">
                  {{ $t(textColOf(section).titleKey) }}
                </h3>
                <p class="text-[#20252CE5] font-opensans text-[14px]">
                  {{ $t(textColOf(section).descriptionKey) }}
                </p>
                <div v-if="textColOf(section).cta" class="flex justify-end">
                  <router-link
                    :to="textColOf(section).cta.to"
                    class="border border-[#20252CE5] px-6 py-2 text-sm font-semibold flex items-center gap-2 rounded-[999px] text-[#20252CE5] shadow-[0px_4px_4px_rgba(12,12,13,0.05)] w-fit"
                  >
                    {{ $t(textColOf(section).cta.labelKey) }}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 2: second image full-bleed -->
          <div class="mobile-fade relative rounded-[14px] overflow-hidden min-h-[360px]">
            <NuxtImg
              :src="imagesOf(section)[1].src"
              class="absolute inset-0 w-full h-full object-cover"
              :class="imagesOf(section)[1].class"
            />
          </div>
        </div>

        <!-- Desktop: original grid (GSAP animated) -->
        <div
          class="hidden lg:grid grid-cols-3 gap-8 items-center min-h-[500px]"
        >
          <template v-for="(col, colIndex) in section.columns" :key="colIndex">
            <!-- Text Block -->
            <div
              v-if="col.type === 'text'"
              class="text-block self-center"
              :data-section="index"
            >
              <!-- frosted card wrapper (LC-OCT only, when col.card === true) -->
              <div
                :class="col.card
                  ? 'backdrop-blur-[8px] bg-[#D8CBEB66] rounded-[14px] p-4 flex flex-col gap-6 w-full max-w-[487px]'
                  : ''"
              >
                <h3
                  class="text-[#752323] text-[24px] font-[400] leading-[32px]"
                  :class="{ 'font-satoshi': col.card }"
                >
                  {{ $t(col.titleKey) }}
                </h3>
                <p
                  class="text-[#20252CE5]"
                  :class="col.card ? 'font-opensans text-[14px]' : 'text-md mt-8'"
                >
                  {{ $t(col.descriptionKey) }}
                </p>
                <div v-if="col.cta" :class="col.card ? 'flex justify-end' : 'mt-5'">
                  <div :class="col.card ? '' : 'max-w-xl mx-auto'">
                    <router-link
                      :to="col.cta.to"
                      class="border border-[#20252CE5] px-10 py-2 text-sm font-semibold flex items-center gap-3 rounded-[999px] w-fit"
                      :class="col.card
                        ? 'text-[#20252CE5] shadow-[0px_4px_4px_rgba(12,12,13,0.05)]'
                        : 'text-black'"
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

const isProductsPage = computed(() => route.path === "/products");

const productsSections = [
  {
    bg: "bg-[#e2e8f0]",
    columns: [
      {
        type: "text",
        card: true,
        titleKey: "product.animatedProjects.lcOct.title",
        descriptionKey: "product.animatedProjects.lcOct.description",
        cta: {
          to: "/skin_arch",
          labelKey: "product.animatedProjects.lcOct.cta",
        },
      },
      {
        type: "image",
        src: "/images/revamp/products/lc-oct-skin-scan.png",
        direction: "down",
      },
      {
        type: "image",
        src: "/images/revamp/products/lc-oct-device.png",
        direction: "up",
        width: "487px",
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
          to: "/wiz-assistant",
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
          to: "/our-projects/ai-measuring-analysis-skin-optics",
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
          to: "/our-projects/ai-encouragement-generation-platform",
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
          to: "/our-projects/ai-aided-diet-calorie-analysis-tracker",
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
          to: "/our-projects/ai-powered-multilingual-translator",
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
          to: "/our-projects/ai-generating-audio-file",
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
          to: "/our-projects/ai-self-management-motivation",
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
          to: "/our-projects/ai-evaluating-assignment-learning-system",
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
          to: "/our-projects/ai-enhanced-language-learning-platform",
          labelKey: "product.animatedProjects.aiLanguageLearning.cta",
        },
      },
    ],
  },
];

const currentSections = computed(() =>
  isProductsPage.value ? productsSections : projectsSections,
);

// Tablet/mobile card helpers (WOS-263)
const textColOf = (section) => section.columns.find((c) => c.type === "text");
const imagesOf = (section) => section.columns.filter((c) => c.type === "image");

const isMobile = () => window.innerWidth < 1024;

onMounted(() => {
  ctx = gsap.context(() => {
    const mobile = isMobile();
    const sections = gsap.utils.toArray(".project-section");

    sections.forEach((section) => {
      const textBlock = section.querySelector(".text-block");
      const upImages = section.querySelectorAll(
        '.image-parallax[data-direction="up"]',
      );
      const downImages = section.querySelectorAll(
        '.image-parallax[data-direction="down"]',
      );

      if (mobile) {
        const cards = gsap.utils.toArray(section.querySelectorAll(".mobile-fade"));
        gsap.set(cards, { opacity: 0, y: 0 });

        ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          once: true,
          onEnter: () => {
            cards.forEach((card, i) =>
              gsap.to(card, {
                opacity: 1,
                duration: 0.4,
                delay: i * 0.1,
                ease: "power1.out",
              }),
            );
          },
        });
        return;
      }

      gsap.set(textBlock, { opacity: 0, y: 50 });
      gsap.set(upImages, { opacity: 0, y: 120 });
      gsap.set(downImages, { opacity: 0, y: 120 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
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
