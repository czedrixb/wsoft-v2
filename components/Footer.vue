<template>
  <div>
    <div class="pt-10 pb-7 px-5">
      <div class="flex justify-center mb-10">
        <NuxtLink to="/">
          <NuxtImg src="/images/logo.png" width="270px" alt="W Soft Logo" />
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
              <li>{{ $t("Home") }}</li>
            </NuxtLink>
            <NuxtLink
              v-for="link in navLinks"
              :key="link.title"
              :to="link.to"
              class="mx-4 text-[16px] text-[#475766] transition-all duration-300 hover:text-black hover:[text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] hover:underline underline-offset-8"
            >
              <li>{{ $t(link.title) }}</li>
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
        <Language />
        <div class="text-[#535353] font-[400]">
          {{ $t("all-rights") }} © {{ new Date().getFullYear() }}
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row md:justify-end items-center md:items-end text-[#535353] font-inter gap-2 md:gap-1 mt-2"
      >
        <p class="font-inter">
          {{ $t("footer-company") }}:
          <span class="font-semibold">
            {{ isUedu ? $t("footer-uedu") : $t("footer-wlabs") }}</span
          >
        </p>
        <span class="hidden md:inline">|</span>
        <p class="font-inter">
          {{ $t("footer-ceo") }}:
          <span class="font-semibold"> {{ $t("footer-matt") }}</span>
        </p>
        <span class="hidden md:inline">|</span>
        <p class="font-inter">
          {{ $t("footer-business-id") }}:
          <span class="font-semibold">{{
            isUedu ? "124-87-33297" : "387-87-03701"
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
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

const isUedu = ref(false);

onMounted(() => {
  isUedu.value = window.location.hostname === "uedu.wsoft.space";
});
</script>
