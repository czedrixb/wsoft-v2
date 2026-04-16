<template>
  <div>
    <div class="text-center">
      <p class="text-[#64748B] text-[24px]">More of our Products</p>
    </div>

    <div class="mt-[5rem] flex justify-center">
      <img
        :src="relatedProduct.image"
        class="h-auto object-cover rounded-[14px]"
        width="794px"
      />
    </div>

    <div class="mt-12 flex justify-center">
      <router-link
        :to="relatedProduct.to"
        class="px-8 py-3 rounded-[22px] border border-[#20252CE5] bg-white text-sm font-medium transition-all duration-200 hover:bg-gray-100 active:scale-95 inline-flex items-center"
      >
        <svg
          v-if="relatedProduct.arrowDirection === 'left'"
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
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>

        <svg
          v-else
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
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const route = useRoute();

const relatedProduct = computed(() => {
  if (route.path === "/wiz-assistant") {
    return {
      image: "/images/revamp/products/optical-microscope.png",
      to: "/optical-microscope",
      arrowDirection: "left",
    };
  }

  return {
    image: "/images/revamp/products/wiz-assistant.png",
    to: "/wiz-assistant",
    arrowDirection: "right",
  };
});
</script>
