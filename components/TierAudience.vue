<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full mx-auto"
  >
    <div v-for="audience in audiences" :key="audience.key" class="flex gap-5">
      <NuxtImg
        :src="`/images/wiz-assistant/audience/${audience.image}`"
        class="w-[48px] h-[40px] flex-shrink-0"
        :alt="$t(`wiz.audience.${audience.key}.title`)"
      />

      <div>
        <p class="text-white text-[24px]">
          {{ $t(`wiz.audience.${audience.key}.title`) }}
        </p>

        <p class="text-[#F8FAFC99] text-[16px] mt-3">
          {{ $t(`wiz.audience.${audience.key}.description`) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const audiences = [
  { key: "businesses", image: "businesses.png" },
  { key: "hospitals", image: "hospitals.png" },
  { key: "schools", image: "schools.png" },
  { key: "associations", image: "associations.png" },
  { key: "online_stores", image: "online-stores.png" },
];
</script>
