<template>
  <div>
    <div>
      <div class="navbar text-black py-5 px-4 lg:px-8">
        <div class="navbar-start">
          <NuxtLink to="/" @click="handleNavigation('/')">
            <img
              src="/images/logos/w-labs-default.png"
              height="100%"
              class="w-[150px] lg:w-[190px]"
              alt="W Soft Logo"
            />
          </NuxtLink>
        </div>

        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-2">
            <li v-for="link in navLinks" :key="link.title">
              <template v-if="link.isModal">
                <button
                  @click="openContactModal"
                  class="mx-3 text-[14px] nav-slot overflow-hidden lg:text-[16px] xl:text-[18px] font-[400] font-inter transition-all !shadow-none duration-300 btn btn-sm border-0"
                  :class="[
                    isActiveLink(link.to)
                      ? 'bg-gradient-to-r from-[#2375E9] to-[#02C7D0] text-white shadow-cyan-500/50'
                      : 'bg-transparent text-black hover:bg-gray-100',
                  ]"
                >
                  <span class="nav-slot-inner">
                    <span>{{ $t(link.title) }}</span>
                    <span aria-hidden="true">{{ $t(link.title) }}</span>
                  </span>
                </button>
              </template>

              <template v-else>
                <NuxtLink
                  :to="link.to"
                  @click="handleNavigation(link.to)"
                  class="mx-3 text-[14px] nav-slot overflow-hidden lg:text-[16px] xl:text-[18px] font-[400] border-0 font-inter transition-all !shadow-none duration-300 btn btn-sm border-0`"
                  :class="[
                    isActiveLink(link.to)
                      ? 'bg-gradient-to-r from-[#2375E9] to-[#02C7D0] text-white shadow-cyan-500/50'
                      : 'bg-transparent text-black hover:bg-gray-100',
                  ]"
                >
                  <span class="nav-slot-inner">
                    <span>{{ $t(link.title) }}</span>
                    <span aria-hidden="true">{{ $t(link.title) }}</span>
                  </span>
                </NuxtLink>
              </template>
            </li>
          </ul>
        </div>

        <div class="navbar-end hidden lg:flex">
          <Language />
        </div>

        <!-- Mobile menu button -->
        <div class="navbar-end lg:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
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
        class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-black lg:hidden"
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
              src="/images/logos/w-labs-default.png"
              class="w-[180px] mb-3"
              alt="W Soft Logo"
              loading="lazy"
            />
          </NuxtLink>
        </div>

        <div class="mb-6">
          <Language />
        </div>

        <ul class="menu mb-3 flex flex-col items-center gap-y-3">
          <li
            v-for="link in navLinks"
            :key="link.title"
            class="text-[18px] font-[400] active:!bg-transparent active:!border-0 active:!text-black"
          >
            <template v-if="link.isModal">
              <button
                @click="openContactModalFromMobile"
                class="w-full text-center"
              >
                {{ $t(link.title) }}
              </button>
            </template>
            <template v-else>
              <NuxtLink @click="isMenuOpen = false" :to="link.to">
                {{ $t(link.title) }}
              </NuxtLink>
            </template>
          </li>
        </ul>

        <!-- <div class="text-center">
          <button
            @click="openContactModalFromMobile"
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
        </div> -->
      </div>
    </transition>
    <ContactModal v-model="showContactModal" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const isMenuOpen = ref(false);
const showContactModal = ref(false);

const navLinks = [
  {
    title: "Home",
    to: "/",
    isModal: false,
  },
  {
    title: "About Us",
    to: "/revamp/about-us",
    isModal: false,
  },
  {
    title: "Services",
    to: "/revamp/services",
    isModal: false,
  },
  {
    title: "Products",
    to: "/revamp/products",
    isModal: false,
  },
  {
    title: "Projects",
    to: "/revamp/our-projects",
    isModal: false,
  },
  {
    title: "NewsRoom",
    to: "/revamp/newsroom",
    isModal: false,
  },
  {
    title: "ContactUs",
    to: "/revamp/contact-us",
    isModal: true,
  },
];

const handleNavigation = (path) => {
  isMenuOpen.value = false;
};

const openContactModal = () => {
  showContactModal.value = true;
  isMenuOpen.value = false;
};

const openContactModalFromMobile = () => {
  showContactModal.value = true;
  isMenuOpen.value = false;
};

const isActiveLink = (linkPath) => {
  const link = navLinks.find((l) => l.to === linkPath);
  if (link?.isModal) return false;

  if (linkPath === "/") {
    return route.path === "/";
  }

  return route.path.startsWith(linkPath) && linkPath !== "/";
};
</script>

<style scoped>
.nav-slot {
  overflow: hidden;
  height: 1.2em;
}

.nav-slot .nav-slot-inner {
  display: flex;
  flex-direction: column;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-slot .nav-slot-inner span {
  display: block;
  height: 1.4em;
  line-height: 1.8em;
  flex-shrink: 0;
}

.nav-slot:hover .nav-slot-inner {
  transform: translateY(-1.4em);
}
</style>
