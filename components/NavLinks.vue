<template>
  <div>
    <ul class="menu menu-horizontal px-2">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.title"
        :to="link.to"
        @click="handleNavigation(link.to)"
        class="mx-5 text-[16px] md:text-[14px] lg:text-[18px] font-[400] font-inter text-[#475766] transition-all duration-300 hover:[text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] hover:underline underline-offset-8"
      >
        <li>{{ $t(link.title) }}</li>
      </NuxtLink>
    </ul>
    <NuxtLink
      v-if="showButton"
      to="/contact-us"
      @click="handleNavigation('/contact-us')"
    >
      <button
        class="relative font-[400] text-[18px] md:text-[14px] lg:text-[18px] px-10 py-5 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90"
      >
        <span class="relative z-10">{{ $t("Talk with an Expert") }}</span>
        <span
          class="absolute inset-0 bg-gradient-to-r from-[#70aae9] to-[#68d2e5] rounded-full p-[8px] -z-10"
        ></span>
        <span
          class="absolute inset-0 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] rounded-full m-[8px]"
        ></span>
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  showButton: {
    type: Boolean,
    default: true,
  },
});

const navLinks = [
  {
    title: "About Us",
    to: "/about-us",
  },
  {
    title: "Services",
    to: "/services",
  },
  {
    title: "Our Works",
    to: "/our-works",
  },
  {
    title: "Blogs",
    to: "/blogs",
  },
];
</script>
