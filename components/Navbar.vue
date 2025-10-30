<template>
  <div class="bg-[#ebf0f7]">
    <div class="border-b border-[#C5C5C5] py-3 flex justify-end">
      <Language />
    </div>
    <div class="navbar text-black pb-5 pt-3">
      <div class="flex-1">
        <NuxtLink to="/" @click="handleNavigation('/')">
          <img
            src="/images/logo.png"
            height="100%"
            class="w-[200px] md:w-[300px]"
            alt="W Soft Logo"
          />
        </NuxtLink>
      </div>
      <div class="flex-none">
        <button
          @click="isMenuOpen = true"
          class="btn btn-square btn-ghost md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div class="hidden md:flex">
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
        <NuxtLink to="/contact-us" @click="handleNavigation('/contact-us')">
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
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-black md:hidden"
      >
        <button
          @click="isMenuOpen = false"
          class="absolute top-5 right-5 btn btn-circle btn-ghost"
        >
          ✕
        </button>

        <div class="text-center">
          <NuxtLink to="/" @click="isMenuOpen = false">
            <img
              src="/images/logo.png"
              class="w-[250px] mb-3"
              alt="W Soft Logo"
              loading="lazy"
            />
          </NuxtLink>
        </div>

        <ul class="menu mb-3 flex flex-col items-center gap-y-3">
          <li
            v-for="link in navLinks"
            :key="link.title"
            class="text-[18px] font-[400] active:!bg-transparent active:!border-0 active:!text-black"
          >
            <NuxtLink @click="isMenuOpen = false" :to="link.to">{{
              $t(link.title)
            }}</NuxtLink>
          </li>
        </ul>

        <div class="text-center">
          <NuxtLink @click="isMenuOpen = false" to="/contact-us">
            <button
              class="relative font-[400] text-[18px] px-8 py-5 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90"
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
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
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

const handleNavigation = (path) => {
  // console.log(`Navigating to: ${path}`);

  isMenuOpen.value = false;
};
</script>

<style scoped>
.menu li > *:not(ul, .menu-title, details, .btn):active,
.menu li > *:not(ul, .menu-title, details, .btn).active,
.menu li > details > summary:active {
  background-color: transparent !important;
  --tw-text-opacity: 1;
  color: black !important;
}
</style>
