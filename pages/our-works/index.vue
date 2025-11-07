<template>
  <div>
    <PageHeader :title="$t('Our Works')" :description="$t('our-works-text')" />

    <ProjectsGrid />

    <ContactEmail />
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";
import { useStructuredData } from "@/composables/useStructuredData";
import { useCanonical } from "@/composables/useCanonical";
import { useProjects } from "@/composables/useProjects";

const { projects } = useProjects();
const { canonicalUrl } = useCanonical();
const { t } = useI18n();

const staticMetaTitle = t("works-title");
const staticMetaKeywords = Array.from({ length: 10 }, (_, i) =>
  t(`our-work-meta-keyword-${i + 1}`)
).join(", ");

const structuredData = useStructuredData("our-works", { projects });

useHead({
  title: staticMetaTitle,
  link: [
    {
      rel: "canonical",
      href: canonicalUrl.value,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredData),
    },
  ],
  meta: [
    { name: "keywords", content: staticMetaKeywords },
    { property: "og:title", content: staticMetaTitle },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/thumbnail.jpg" },
    { property: "og:url", content: canonicalUrl.value },
  ],
});
</script>
