<template>
  <div
    class="px-5 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-[12rem] overflow-hidden"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
      <div v-for="(project, key) in filteredProjects" :key="key">
        <NuxtLink :to="`/our-works/${key}`">
          <div class="block md:hidden mb-1">
            <div
              class="font-poppins font-[600] text-[18px] lg:text-[22px] md:px-0 text-[#475766]"
            >
              {{ $t(project.title) }}
            </div>
          </div>
          <NuxtImg
            width="600px"
            height="100%"
            :src="`/images/our-works/thumbnail/${project.image}`"
            :alt="project.title"
            class="mb-5"
          />
          <div class="hidden md:block">
            <div
              class="font-poppins font-[600] text-[18px] lg:text-[22px] md:px-0 text-[#475766]"
            >
              {{ $t(project.title) }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProjects } from "@/composables/useProjects";

const props = defineProps({
  projectsToShow: {
    type: Array,
    default: () => [],
  },
});

const { projects } = useProjects();

const filteredProjects = computed(() => {
  if (props.projectsToShow.length === 0) {
    return projects;
  }

  const filtered = {};
  props.projectsToShow.forEach((key) => {
    if (projects[key]) {
      filtered[key] = projects[key];
    }
  });
  return filtered;
});
</script>
