<template>
  <div>
    <div class="pt-10 pb-7 px-5">
      <div class="flex justify-center mb-10">
        <NuxtLink to="/">
          <img src="/images/logo.svg" class="w-[250px]" alt="wsoft-logo" />
        </NuxtLink>
      </div>

      <div
        class="md:max-w-[90%] lg:max-w-[95%] xl:max-w-[80%] flex justify-center mx-auto mb-8"
      >
        <div>
          <ul
            class="menu menu-vertical md:menu-horizontal text-center gap-y-3 text-black px-2 mb-5"
          >
            <NuxtLink
              to="/"
              class="mx-4 text-[16px] text-[#475766] transition-all duration-300 hover:text-black hover:[text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] hover:underline underline-offset-8"
            >
              <li>Home</li>
            </NuxtLink>
            <NuxtLink
              v-for="link in navLinks"
              :key="link.title"
              :to="link.to"
              class="mx-4 text-[16px] text-[#475766] transition-all duration-300 hover:text-black hover:[text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] hover:underline underline-offset-8"
            >
              <li>{{ link.title }}</li>
            </NuxtLink>
          </ul>

          <div class="flex justify-center gap-x-5">
            <a href="">
              <i class="mdi mdi-facebook text-black text-2xl"></i>
            </a>
            <a href="">
              <i class="mdi mdi-instagram text-black text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div
        class="h-[2px] max-w-full bg-gradient-to-r from-[#2375E9] to-[#02C7D0] mb-5"
      ></div>

      <div
        class="flex flex-col sm:flex-col gap-y-5 md:flex-row md:justify-between justify-center items-center"
      >
        <div class="flex gap-x-2">
          <button
            v-for="language in ['English', 'Korean']"
            :key="language"
            @click="setActiveLanguage(language)"
            class="btn font-[400] btn-ghost border-none transition-all duration-300 px-8 btn-sm h-[40px]"
            :class="{
              'bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white':
                activeLanguage === language,
              'bg-transparent text-gray-500': activeLanguage !== language,
            }"
          >
            {{ language }}
          </button>
        </div>
        <div class="text-[#535353] font-[400]">All Rights Reserved © 2025</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import navLinks from "./navigation";
import { ref } from "vue";

const activeLanguage = ref("English");

const setActiveLanguage = (language) => {
  activeLanguage.value = language;
};
</script>
