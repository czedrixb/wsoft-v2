<template>
  <div>
    <div v-if="project">
      <AnimatedBaseProjectHeader :project="project.header" />
      <AnimatedProjectContents :sections="project.sections" />
    </div>

    <div v-else class="min-h-screen flex items-center justify-center">
      <p class="text-[#64748B] text-[24px]">{{ t("our-projects.notFound") }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
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
    { property: "og:image", content: "/images/thumbnail.png" },
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
