<template>
  <div>
    <div>
      <div class="navbar text-white py-5 px-4 lg:px-8">
        <div class="navbar-start">
          <NuxtLink to="/" @click="handleNavigation('/')">
            <img
              :src="
                isUedu
                  ? '/images/logos/uedu.png'
                  : '/images/logos/w-labs-default-new.svg'
              "
              height="100%"
              class="w-[150px] lg:w-[190px]"
              alt="Logo"
            />
          </NuxtLink>
        </div>

        <div class="navbar-center hidden xl:flex">
          <ul class="menu menu-horizontal px-2">
            <li v-for="link in navLinks" :key="link.title">
              <template v-if="link.isModal">
                <button
                  @click="openContactModal"
                  class="mx-3 text-[14px] nav-slot overflow-hidden lg:text-[16px] xl:text-[18px] font-[400] font-inter transition-all !shadow-none duration-300 btn btn-sm border-0"
                  :class="[
                    isActiveLink(link.to)
                      ? 'bg-gradient-to-r from-[#FFD5EB] to-[#E1D176] !text-black shadow-cyan-500/50'
                      : 'bg-transparent !text-[#64748B] hover:bg-gray-100',
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
                      ? 'bg-gradient-to-r from-[#FFD5EB] to-[#E1D176] !text-black shadow-cyan-500/50'
                      : 'bg-transparent !text-[#64748B] hover:bg-gray-100',
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

        <div class="navbar-end hidden xl:flex">
          <Language />
        </div>

        <!-- Mobile menu button -->
        <div class="navbar-end xl:hidden">
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
        class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-white xl:hidden"
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
              :src="
                isUedu
                  ? '/images/logos/uedu.png'
                  : '/images/logos/w-labs-default-new.svg'
              "
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
            class="text-[18px] font-[400] active:!bg-transparent active:!border-0 active:!text-white"
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
      </div>
    </transition>
    <ContactModal v-model="showContactModal" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { isUedu } = useBrand();
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
    to: "/about-us",
    isModal: false,
  },
  {
    title: "Services",
    to: "/services",
    isModal: false,
  },
  {
    title: "Products",
    to: "/products",
    isModal: false,
  },
  {
    title: "Projects",
    to: "/our-projects",
    isModal: false,
  },
  {
    title: "NewsRoom",
    to: "/newsroom",
    isModal: false,
  },
  {
    title: "ContactUs",
    to: "/contact-us",
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
