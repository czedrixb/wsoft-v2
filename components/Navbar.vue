<template>
  <nav
    class="w-full transition-all duration-300 ease-out py-3 px-4 md:py-4 md:px-10 xl:py-6 xl:px-2"
  >
    <!-- Floating pill — always inset and fully rounded per Figma design -->
    <div
      class="bg-gradient-to-r from-[#f8fafc] via-[rgba(240,224,254,0.4)] to-[#f8fafc] border border-[rgba(240,224,254,0.4)] backdrop-blur-[8px] p-2 md:p-4 max-w-[1634px] mx-auto rounded-[14px] transition-all duration-300 ease-out"
      :class="isSticky ? 'shadow-md' : 'shadow-sm'"
    >
      <!-- ── DESKTOP (xl+) ──────────────────────────────────── -->
      <div class="hidden xl:flex items-center justify-between gap-4">
        <!-- Logo -->
        <div class="flex-1">
          <NuxtLink to="/" class="inline-block">
            <img :src="logoSrc" alt="Logo" class="h-8 w-auto" />
          </NuxtLink>
        </div>

        <!-- Nav links -->
        <div class="flex items-center gap-2 shrink-0">
          <template v-for="link in navLinks" :key="link.title">
            <button
              v-if="link.isModal"
              type="button"
              @click="openContactModal"
              class="inline-flex items-center h-6 px-2 rounded-[6px] text-[14px] font-opensans font-semibold whitespace-nowrap transition-colors cursor-pointer"
              :class="
                isActiveLink(link.to)
                  ? 'bg-gradient-to-r from-[#FFD5EB] to-[#E1D176] text-black'
                  : 'text-[#64748B] hover:bg-[rgba(240,224,254,0.4)]'
              "
            >{{ $t(link.title) }}</button>
            <NuxtLink
              v-else
              :to="link.to"
              class="inline-flex items-center h-6 px-2 rounded-[6px] text-[14px] font-opensans font-semibold whitespace-nowrap transition-colors"
              :class="
                isActiveLink(link.to)
                  ? 'bg-gradient-to-r from-[#FFD5EB] to-[#E1D176] text-black'
                  : 'text-[#64748B] hover:bg-[rgba(240,224,254,0.4)]'
              "
            >{{ $t(link.title) }}</NuxtLink>
          </template>
        </div>

        <!-- Search placeholder + Language -->
        <div class="flex-1 flex items-center justify-end gap-4">
          <!-- Search button -->
          <button
            type="button"
            @click="showSearchModal = true"
            class="inline-flex items-center gap-2 h-8 pl-1 pr-2 py-1 border border-[rgba(240,224,254,0.4)] rounded-[7px] hover:bg-[rgba(240,224,254,0.2)] transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#473720] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="6" />
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-3.5-3.5" />
            </svg>
            <span class="text-[12px] font-opensans font-normal text-[#473720] whitespace-nowrap">{{ $t('search.placeholder') }}</span>
          </button>
          <div class="language-pill-wrapper">
            <Language />
          </div>
        </div>
      </div>

      <!-- ── TABLET + MOBILE (< xl): header row ─────────────── -->
      <div class="flex xl:hidden items-center justify-between gap-3 min-h-8">
        <!-- Left: hamburger + logo -->
        <div class="flex items-center gap-3 shrink-0">
          <button
            type="button"
            @click="isExpanded = !isExpanded"
            class="inline-flex items-center justify-center h-8 w-8 border border-[rgba(240,224,254,0.4)] rounded-[7px] hover:bg-[rgba(240,224,254,0.2)] transition-colors shrink-0"
          >
            <svg v-if="!isExpanded" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <NuxtLink to="/" @click="isExpanded = false" class="inline-block">
            <img :src="logoSrc" alt="Logo" class="h-8 w-auto" />
          </NuxtLink>
        </div>

        <!-- Right: search + language (fades when menu expanded) -->
        <div
          class="flex items-center gap-3 transition-opacity duration-200"
          :class="isExpanded ? 'opacity-20 pointer-events-none' : ''"
        >
          <!-- Search: icon-only on mobile, icon+text on tablet -->
          <button
            type="button"
            @click="showSearchModal = true"
            class="inline-flex items-center h-8 p-1 md:gap-2 md:pr-2 border border-[rgba(240,224,254,0.4)] rounded-[7px] hover:bg-[rgba(240,224,254,0.2)] transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#473720] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="6" />
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-3.5-3.5" />
            </svg>
            <span class="hidden md:inline text-[12px] font-opensans font-normal text-[#473720] whitespace-nowrap">{{ $t('search.placeholder') }}</span>
          </button>
          <div class="language-pill-wrapper">
            <Language />
          </div>
        </div>
      </div>

      <!-- ── TABLET + MOBILE: expanded nav ─────────────────── -->
      <transition name="nav-expand">
        <div
          v-if="isExpanded"
          class="xl:hidden flex flex-col items-center md:items-start gap-4 pt-4 pb-2 md:pl-[88px]"
        >
          <template v-for="link in navLinks" :key="link.title">
            <button
              v-if="link.isModal"
              type="button"
              @click="openContactModal"
              class="text-[14px] font-opensans font-semibold text-[#64748B] hover:text-[#473720] transition-colors bg-transparent cursor-pointer whitespace-nowrap"
            >{{ $t(link.title) }}</button>
            <NuxtLink
              v-else
              :to="link.to"
              @click="isExpanded = false"
              class="text-[14px] font-opensans font-semibold transition-colors whitespace-nowrap"
              :class="
                isActiveLink(link.to)
                  ? 'bg-gradient-to-r from-[#FFD5EB] to-[#E1D176] text-black px-2 rounded-[6px]'
                  : 'text-[#64748B] hover:text-[#473720]'
              "
            >{{ $t(link.title) }}</NuxtLink>
          </template>
        </div>
      </transition>
    </div>
  </nav>

  <ContactModal v-model="showContactModal" :subject="pageContactSubject" />
  <SearchModal v-model="showSearchModal" />
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { usePageContactSubject } from "~/composables/usePageContactSubject";

const route = useRoute();
const { t } = useI18n();
const { isUedu } = useBrand();
// The navbar's 문의하기 button is global, so it used to open with an empty
// subject regardless of which page triggered it. AB-134 item 1.
const pageContactSubject = usePageContactSubject();

const isExpanded = ref(false);
const showContactModal = ref(false);
const showSearchModal = ref(false);
const isSticky = ref(false);

const logoSrc = computed(() =>
  isUedu.value
    ? "/images/logos/uedu.png"
    : "/images/logos/w-labs-default-new.svg"
);

const onScroll = () => {
  isSticky.value = window.scrollY > 8;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

const navLinks = [
  { title: "Home", to: "/", isModal: false },
  { title: "About Us", to: "/about-us", isModal: false },
  { title: "Services", to: "/services", isModal: false },
  { title: "Products", to: "/products", isModal: false },
  { title: "Projects", to: "/our-projects", isModal: false },
  { title: "NewsRoom", to: "/newsroom", isModal: false },
  { title: "ContactUs", to: "/contact-us", isModal: true },
];

const openContactModal = () => {
  showContactModal.value = true;
  isExpanded.value = false;
};

const isActiveLink = (linkPath) => {
  const link = navLinks.find((l) => l.to === linkPath);
  if (link?.isModal) return false;
  if (linkPath === "/") return route.path === "/";
  return route.path.startsWith(linkPath) && linkPath !== "/";
};
</script>

<style scoped>
/* Language.vue button override to match pill design */
.language-pill-wrapper :deep(.btn) {
  height: 32px !important;
  min-height: 32px !important;
  border-color: rgba(240, 224, 254, 0.4) !important;
  background: transparent !important;
  border-radius: 7px !important;
  padding: 4px !important;
}

.language-pill-wrapper :deep(.btn:hover) {
  background: rgba(240, 224, 254, 0.2) !important;
}

/* Smooth inline expand/collapse for tablet + mobile nav */
.nav-expand-enter-active,
.nav-expand-leave-active {
  overflow: hidden;
  transition: max-height 0.2s ease-out, opacity 0.2s ease-out;
}

.nav-expand-enter-from,
.nav-expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.nav-expand-enter-to,
.nav-expand-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
