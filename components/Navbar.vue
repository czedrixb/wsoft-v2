<template>
  <div class="bg-[#ebf0f7]">
    <div class="drawer">
      <input id="menu-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <div class="navbar text-black py-5">
          <div class="flex-1">
            <NuxtLink to="/">
              <img src="/images/logo.svg" class="w-[200px]" alt="wsoft-logo" />
            </NuxtLink>
          </div>
          <div class="flex-none">
            <label for="menu-drawer" class="btn btn-square btn-ghost md:hidden">
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
            </label>
          </div>
          <div class="hidden md:flex">
            <ul class="menu menu-horizontal px-2">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.title"
                :to="link.to"
                class="mx-3 text-[16px] font-[400] transition-all duration-300 hover:[text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] hover:underline underline-offset-8"
              >
                <li>{{ link.title }}</li>
              </NuxtLink>
            </ul>
            <NuxtLink to="/contact-us">
              <button
                class="btn bg-gradient-to-r from-[#2375E9] to-[#02C7D0] font-[400] text-white rounded-full border-none transition-all duration-300 transform hover:scale-105"
              >
                Talk with an Expert
              </button></NuxtLink
            >
          </div>
        </div>
      </div>

      <div class="drawer-side">
        <label for="menu-drawer" class="drawer-overlay"></label>
        <div class="px-4 pt-10 w-64 min-h-full bg-white text-black">
          <div class="flex justify-center">
            <NuxtLink to="/">
              <img
                src="/images/logo.svg"
                class="w-[180px] mb-3"
                alt="wsoft-logo"
              />
            </NuxtLink>
          </div>
          <ul class="menu mb-3 flex justify-center items-center gap-y-1">
            <li
              class="text-[16px] font-[400]"
              v-for="link in navLinks"
              :key="link.title"
            >
              <NuxtLink :to="link.to">{{ link.title }}</NuxtLink>
            </li>
          </ul>

          <div class="text-center">
            <NuxtLink to="/contact-us">
              <button
                class="btn bg-gradient-to-r from-[#2375E9] to-[#02C7D0] font-[400] text-white rounded-full border-none"
              >
                Talk with an Expert
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import navLinks from "./navigation";
</script>
