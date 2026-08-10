<template>
  <div>
    <div v-if="project">
      <AnimatedBaseProjectHeader :project="project.header" />
      <AnimatedProjectContents :sections="project.sections" />

      <!-- Prev / Next project navigation (WOS-264 #10) -->
      <section class="mx-auto px-8 max-w-screen-2xl py-16">
        <!-- Heading -->
        <p
          class="text-center text-[#64748B] font-opensans font-semibold text-[14px] lg:font-satoshi lg:font-normal lg:text-[24px] lg:leading-[32px] mb-8 lg:mb-12"
        >
          {{ t("our-projects.moreProjects") }}
        </p>

        <!-- Prev / Next project cards -->
        <div class="flex items-start gap-2 md:gap-4">
          <NuxtLink
            v-for="card in [prevProject, nextProject]"
            :key="card.id"
            :to="`/our-projects/${card.id}`"
            class="relative block flex-1 overflow-hidden rounded-t-[14px] h-[115px] md:h-[230px]"
          >
            <img
              :src="card.image"
              alt=""
              class="absolute inset-0 w-full h-full object-cover"
            />
            <!-- Gray wash -->
            <div class="absolute inset-0 bg-[rgba(137,137,137,0.5)]" />
            <!-- Diagonal dark overlay + title -->
            <div
              class="absolute inset-0 p-2 md:p-4 lg:p-6"
              style="background-color: #20252ce5; clip-path: polygon(0% 0%, 100% 0%, 0% 100%);"
            >
              <h3
                class="max-w-[60%] text-[#F8FAFC] font-opensans text-[12px] leading-normal lg:font-satoshi lg:text-[24px] lg:leading-[32px]"
              >
                {{ card.title }}
              </h3>
            </div>
          </NuxtLink>
        </div>

        <!-- Arrow nav buttons -->
        <div class="flex items-center justify-center gap-2 md:gap-4 py-4">
          <NuxtLink
            :to="`/our-projects/${prevProject.id}`"
            :aria-label="t('our-projects.prevProject')"
            class="inline-flex items-center justify-center px-6 py-2 rounded-[22px] border border-[rgba(32,37,44,0.9)] bg-white shadow-sm hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
            </svg>
          </NuxtLink>
          <NuxtLink
            :to="`/our-projects/${nextProject.id}`"
            :aria-label="t('our-projects.nextProject')"
            class="inline-flex items-center justify-center px-6 py-2 rounded-[22px] border border-[rgba(32,37,44,0.9)] bg-white shadow-sm hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </NuxtLink>
        </div>
      </section>
    </div>

    <div v-else class="min-h-screen flex items-center justify-center">
      <p class="text-[#64748B] text-[24px]">{{ t("our-projects.notFound") }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useCanonical } from "@/composables/useCanonical";
import { useStructuredData } from "@/composables/useStructuredData";

const route = useRoute();
const { t, tm } = useI18n();
const { canonicalUrl } = useCanonical();

function buildProject(id, imagePath, sections) {
  return {
    header: {
      title: t(`our-projects.${id}.header.title`),
      subtitle: t(`our-projects.${id}.header.subtitle`),
      description: t(`our-projects.${id}.header.description`),
      image: imagePath,
    },
    sections,
  };
}

const projectConfigs = {
  "ai-encouragement-generation-platform": {
    imagePath:
      "/images/revamp/our-projects/ai-encouragement-generation-platform/big-img.png",
    sections: (id) => [
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section1.titleKey`),
            descriptionSubtitle: t(
              `our-projects.${id}.sections.section1.descriptionSubtitle`,
            ),
            descriptionBody: t(
              `our-projects.${id}.sections.section1.descriptionBody`,
            ),
            solution: t(`our-projects.${id}.sections.section1.solution`),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img1.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img2.png`,
            direction: "up",
          },
        ],
      },
      {
        bg: "bg-[#ffffff]",
        columns: [
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img3.png`,
            direction: "down",
            class: "w-full h-[455px]",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img4.png`,
            direction: "up",
            class: "w-full h-[455px]",
          },
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section2.titleKey`),
            descriptionBody: t(
              `our-projects.${id}.sections.section2.descriptionBody`,
            ),
          },
        ],
      },
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section3.titleKey`),
            descriptionBody: t(
              `our-projects.${id}.sections.section3.descriptionBody`,
            ),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img5.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img6.png`,
            direction: "up",
          },
        ],
      },
    ],
  },

  "ai-measuring-analysis-skin-optics": {
    imagePath:
      "/images/revamp/our-projects/ai-measuring-analysis-skin-optics/big-img.png",
    sections: (id) => [
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section1.titleKey`),
            descriptionBody: tm(
              `our-projects.${id}.sections.section1.descriptionBody`,
            ),
            solutionLabel: t(
              `our-projects.${id}.sections.section1.solutionLabel`,
            ),
            solution: tm(`our-projects.${id}.sections.section1.solution`),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img1.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img2.png`,
            direction: "up",
          },
        ],
      },
      {
        bg: "bg-[#ffffff]",
        columns: [
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img3.png`,
            direction: "down",
            class: "w-full h-[455px]",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img4.png`,
            direction: "up",
            class: "w-full h-[455px]",
          },
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section2.titleKey`),
            descriptionBody: tm(
              `our-projects.${id}.sections.section2.descriptionBody`,
            ),
            solutionLabel: t(
              `our-projects.${id}.sections.section2.solutionLabel`,
            ),
            solution: tm(`our-projects.${id}.sections.section2.solution`),
          },
        ],
      },
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section3.titleKey`),
            descriptionBody: tm(
              `our-projects.${id}.sections.section3.descriptionBody`,
            ),
            solutionLabel: t(
              `our-projects.${id}.sections.section3.solutionLabel`,
            ),
            solution: tm(`our-projects.${id}.sections.section3.solution`),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img5.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img6.png`,
            direction: "up",
          },
        ],
      },
      {
        bg: "bg-[#ffffff]",
        columns: [
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img7.png`,
            direction: "down",
            class: "w-full h-[455px]",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img8.png`,
            direction: "up",
            class: "w-full h-[455px]",
          },
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section4.titleKey`),
            descriptionBody: tm(
              `our-projects.${id}.sections.section4.descriptionBody`,
            ),
            solutionLabel: t(
              `our-projects.${id}.sections.section4.solutionLabel`,
            ),
            solution: tm(`our-projects.${id}.sections.section4.solution`),
          },
        ],
      },
    ],
  },

  "ai-aided-diet-calorie-analysis-tracker": {
    imagePath: "/images/revamp/our-projects/ai-aided-1.png",
    sections: (id) => [
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section1.titleKey`),
            descriptionSubtitle: t(
              `our-projects.${id}.sections.section1.descriptionSubtitle`,
            ),
            descriptionBody: t(
              `our-projects.${id}.sections.section1.descriptionBody`,
            ),
            solution: t(`our-projects.${id}.sections.section1.solution`),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img1.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img2.png`,
            direction: "up",
          },
        ],
      },
      {
        bg: "bg-[#ffffff]",
        columns: [
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img3.png`,
            direction: "down",
            class: "w-full h-[455px]",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img4.png`,
            direction: "up",
            class: "w-full h-[455px]",
          },
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section2.titleKey`),
            descriptionBody: t(
              `our-projects.${id}.sections.section2.descriptionBody`,
            ),
          },
        ],
      },
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section3.titleKey`),
            descriptionBody: t(
              `our-projects.${id}.sections.section3.descriptionBody`,
            ),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img5.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img6.png`,
            direction: "up",
          },
        ],
      },
    ],
  },

  "ai-powered-multilingual-translator": {
    imagePath:
      "/images/revamp/our-projects/ai-powered-multilingual-translator/big-img.png",
    sections: (id) => [
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section1.titleKey`),
            descriptionSubtitle: t(
              `our-projects.${id}.sections.section1.descriptionSubtitle`,
            ),
            descriptionBody: t(
              `our-projects.${id}.sections.section1.descriptionBody`,
            ),
            solution: t(`our-projects.${id}.sections.section1.solution`),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img1.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img2.png`,
            direction: "up",
          },
        ],
      },
      {
        bg: "bg-[#ffffff]",
        columns: [
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img3.png`,
            direction: "down",
            class: "w-full h-[455px]",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img4.png`,
            direction: "up",
            class: "w-full h-[455px]",
          },
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section2.titleKey`),
            descriptionBody: t(
              `our-projects.${id}.sections.section2.descriptionBody`,
            ),
          },
        ],
      },
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section3.titleKey`),
            descriptionSubtitle: t(
              `our-projects.${id}.sections.section3.descriptionSubtitle`,
            ),
            descriptionBody: t(
              `our-projects.${id}.sections.section3.descriptionBody`,
            ),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img5.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img6.png`,
            direction: "up",
          },
        ],
      },
    ],
  },

  "ai-generating-audio-file": {
    imagePath:
      "/images/revamp/our-projects/ai-generating-audio-file/big-img.png",
    sections: (id) => [
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section1.titleKey`),
            descriptionSubtitle: t(
              `our-projects.${id}.sections.section1.descriptionSubtitle`,
            ),
            descriptionBody: t(
              `our-projects.${id}.sections.section1.descriptionBody`,
            ),
            solution: t(`our-projects.${id}.sections.section1.solution`),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img1.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img2.png`,
            direction: "up",
          },
        ],
      },
      {
        bg: "bg-[#ffffff]",
        columns: [
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img3.png`,
            direction: "down",
            class: "w-full h-[455px]",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img4.png`,
            direction: "up",
            class: "w-full h-[455px]",
          },
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section2.titleKey`),
            descriptionBody: t(
              `our-projects.${id}.sections.section2.descriptionBody`,
            ),
          },
        ],
      },
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section3.titleKey`),
            descriptionBody: t(
              `our-projects.${id}.sections.section3.descriptionBody`,
            ),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img5.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img6.png`,
            direction: "up",
          },
        ],
      },
    ],
  },

  "ai-self-management-motivation": {
    imagePath:
      "/images/revamp/our-projects/ai-self-management-motivation/big-img.png",
    sections: (id) => [
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section1.titleKey`),
            descriptionSubtitle: t(
              `our-projects.${id}.sections.section1.descriptionSubtitle`,
            ),
            descriptionBody: t(
              `our-projects.${id}.sections.section1.descriptionBody`,
            ),
            solution: t(`our-projects.${id}.sections.section1.solution`),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img1.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img2.png`,
            direction: "up",
          },
        ],
      },
      {
        bg: "bg-[#ffffff]",
        columns: [
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img3.png`,
            direction: "down",
            class: "w-full h-[455px]",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img4.png`,
            direction: "up",
            class: "w-full h-[455px]",
          },
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section2.titleKey`),
            descriptionBody: t(
              `our-projects.${id}.sections.section2.descriptionBody`,
            ),
          },
        ],
      },
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section3.titleKey`),
            descriptionBody: t(
              `our-projects.${id}.sections.section3.descriptionBody`,
            ),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img5.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img6.png`,
            direction: "up",
          },
        ],
      },
    ],
  },

  "ai-evaluating-assignment-learning-system": {
    imagePath:
      "/images/revamp/our-projects/ai-evaluating-assignment-learning-system/big-img.png",
    sections: (id) => [
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section1.titleKey`),
            descriptionSubtitle: t(
              `our-projects.${id}.sections.section1.descriptionSubtitle`,
            ),
            descriptionBody: t(
              `our-projects.${id}.sections.section1.descriptionBody`,
            ),
            solution: t(`our-projects.${id}.sections.section1.solution`),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img1.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img2.png`,
            direction: "up",
          },
        ],
      },
      {
        bg: "bg-[#ffffff]",
        columns: [
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img3.png`,
            direction: "down",
            class: "w-full h-[455px]",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img4.png`,
            direction: "up",
            class: "w-full h-[455px]",
          },
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section2.titleKey`),
            descriptionBody: t(
              `our-projects.${id}.sections.section2.descriptionBody`,
            ),
          },
        ],
      },
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section3.titleKey`),
            descriptionSubtitle: t(
              `our-projects.${id}.sections.section3.descriptionSubtitle`,
            ),
            descriptionBody: t(
              `our-projects.${id}.sections.section3.descriptionBody`,
            ),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img5.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img6.png`,
            direction: "up",
          },
        ],
      },
    ],
  },

  "ai-enhanced-language-learning-platform": {
    imagePath:
      "/images/revamp/our-projects/ai-enhanced-language-learning-platform/big-img.png",
    sections: (id) => [
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section1.titleKey`),
            descriptionSubtitle: t(
              `our-projects.${id}.sections.section1.descriptionSubtitle`,
            ),
            descriptionBody: t(
              `our-projects.${id}.sections.section1.descriptionBody`,
            ),
            solution: t(`our-projects.${id}.sections.section1.solution`),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img1.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img2.png`,
            direction: "up",
          },
        ],
      },
      {
        bg: "bg-[#ffffff]",
        columns: [
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img3.png`,
            direction: "down",
            class: "w-full h-[455px]",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img4.png`,
            direction: "up",
            class: "w-full h-[455px]",
          },
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section2.titleKey`),
            descriptionBody: t(
              `our-projects.${id}.sections.section2.descriptionBody`,
            ),
          },
        ],
      },
      {
        bg: "bg-[#e2e8f0]",
        columns: [
          {
            type: "text",
            titleKey: t(`our-projects.${id}.sections.section3.titleKey`),
            descriptionBody: t(
              `our-projects.${id}.sections.section3.descriptionBody`,
            ),
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img5.png`,
            direction: "down",
          },
          {
            type: "image",
            src: `/images/revamp/our-projects/${id}/img6.png`,
            direction: "up",
          },
        ],
      },
    ],
  },
};

const id = route.params.id;
const config = projectConfigs[id];

// Ordered list of project ids for prev/next navigation (WOS-264 #10)
const projectIds = Object.keys(projectConfigs);
const currentIndex = projectIds.indexOf(id);
const totalProjects = projectIds.length;

function toNavCard(projectId) {
  return {
    id: projectId,
    title: t(`our-projects.${projectId}.header.title`),
    image: projectConfigs[projectId].imagePath,
  };
}

// Wraps around: prev of the first project is the last, next of the last is the first.
const prevProject = computed(() =>
  toNavCard(projectIds[(currentIndex - 1 + totalProjects) % totalProjects]),
);

const nextProject = computed(() =>
  toNavCard(projectIds[(currentIndex + 1) % totalProjects]),
);

const project = computed(() => {
  if (!config) return null;
  return buildProject(id, config.imagePath, config.sections(id));
});

const titleText = computed(() =>
  project.value ? project.value.header.title : t("our-projects.notFound"),
);
const descText = computed(() =>
  project.value ? project.value.header.description : "",
);

const structuredData = useStructuredData("our-project", {
  title: project.value?.header.title ?? "",
  description: project.value?.header.description ?? "",
  image: config?.imagePath ?? "",
});

const { shareImageUrl, shareImageWidth, shareImageHeight } = useShareImage();

useHead({
  title: titleText,
  link: [{ rel: "canonical", href: canonicalUrl.value }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredData),
    },
  ],
  meta: [
    { name: "description", content: descText },
    { property: "og:title", content: titleText },
    { property: "og:description", content: descText },
    { property: "og:type", content: "website" },
    { property: "og:image", content: shareImageUrl },
    { property: "og:image:width", content: shareImageWidth },
    { property: "og:image:height", content: shareImageHeight },
    { name: "twitter:image", content: shareImageUrl },
    { property: "og:url", content: canonicalUrl.value },
  ],
});
</script>

<style scoped>
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fade-up 0.6s ease-in-out;
}
</style>
