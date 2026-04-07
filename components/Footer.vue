<template>
  <div
    class="rounded-[14px] mb-8 p-8 text-white bg-[radial-gradient(213.33%_134.04%_at_50%_-20.22%,#2376E9_0%,#0A1628_17.54%,#000000_100%)]"
  >
    <div class="grid grid-cols-2 lg:grid-cols-12 gap-8">
      <div class="col-span-12 lg:col-span-4 order-2 lg:order-1">
        <div class="lg:max-w-md">
          <h4
            class="text-[24px] leading-tight bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent"
          >
            {{ $t("footer.title") }}
          </h4>

          <div class="mt-8">
            <p class="text-[16px] font-semibold text-[#64748B]">
              {{ $t("footer.newsletter_text") }}
            </p>
          </div>

          <div class="lg:px-5 mt-5">
            <div>
              <label class="block text-sm mb-2">{{
                $t("email-address")
              }}</label>
              <input
                type="email"
                :class="[
                  'w-full px-4 py-2 border rounded-lg focus:ring-2 bg-white text-black',
                  'border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]',
                ]"
                :placeholder="$t('enter-email')"
              />
            </div>

            <div class="mt-5 flex justify-center md:justify-end">
              <button
                type="submit"
                class="group w-auto rounded-[22px] py-3 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed relative inline-flex items-center justify-center gap-2 px-12"
              >
                <div
                  class="absolute inset-0 rounded-[22px] p-[1px] bg-gradient-to-r from-[#2376e9] to-[#02c7d0]"
                >
                  <div
                    class="w-full h-full rounded-[22px] bg-[#07101d] group-hover:bg-transparent transition-all"
                  ></div>
                </div>

                <span
                  class="relative z-10 bg-gradient-to-r from-[#2376e9] to-[#02c7d0] bg-clip-text text-transparent group-hover:text-white transition-all"
                >
                  {{ $t("footer.subscribe") }}
                </span>

                <NuxtImg
                  src="/images/revamp/mail-submit-icon.svg"
                  width="24"
                  height="24"
                  class="relative z-10 transition-all"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-7 lg:col-start-6 order-1 lg:order-2">
        <NuxtImg
          src="/images/home/footer/img-footer.png"
          width="1025"
          height="auto"
          alt="icon-2"
        />
      </div>
    </div>

    <div class="my-8">
      <div class="bg-[#F8FAFC] h-[1px]"></div>
    </div>

    <!-- Logo -->
    <div class="flex justify-center md:justify-start">
      <NuxtImg src="/images/revamp/footer-logo.png" width="118" height="auto" />
    </div>

    <div class="mt-5">
      <div class="lg:px-5 grid grid-cols-1 lg:grid-cols-12">
        <div class="col-span-12 lg:col-span-6">
          <div class="flex flex-col md:flex-row gap-5">
            <template v-for="link in footerLinks" :key="link.to">
              <button
                v-if="link.isModal"
                @click="openContactModal"
                class="text-[#64748B] font-semibold text-[16px] hover:underline text-left text-center md:text-start"
              >
                {{ $t(link.label) }}
              </button>
              <NuxtLink
                v-else
                :to="link.to"
                class="text-[#64748B] font-semibold text-[16px] hover:underline text-center md:text-start"
              >
                {{ $t(link.label) }}
              </NuxtLink>
            </template>
          </div>

          <div class="flex mt-2 flex-col md:flex-row gap-5 lg:px-3">
            <NuxtLink
              v-for="link in additionalLinks"
              :key="link.to"
              :to="link.to"
              class="text-[#64748B] font-semibold text-[16px] hover:underline text-center md:text-start"
            >
              {{ $t(link.label) }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div class="col-span-12 lg:col-span-3">
          <div class="flex items-center gap-5 justify-center md:justify-start">
            <img src="/images/revamp/facebook.png" width="24" height="auto" />
            <img src="/images/revamp/instagram.png" width="24" height="auto" />
          </div>

          <div class="mt-7">
            <span
              class="text-[#64748B] text-[16px] font-semibold text-center md:text-start"
            >
              {{ $t("footer.copyright_text") }}
            </span>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5">
          <div class="text-center md:text-start">
            <a
              href="https://www.dunsregistered.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-[14px] text-white font-inter border border-white hover:text-[#2375E9] transition-colors duration-300 rounded-md px-4 py-1 relative bg-transparent group"
              @click="trackSealClick"
            >
              {{ $t("duns-registered") }}: 696568010
              <div class="text-white">
                <NuxtImg
                  src="/images/footer/duns-arrow.svg"
                  class="h-[16px] w-[16px] brightness-0 invert"
                  alt="arrow"
                />
              </div>
            </a>
          </div>

          <div class="mt-5">
            <div
              class="flex flex-col md:flex-row items-center font-inter gap-2 md:gap-2"
            >
              <p class="font-inter text-[#64748B] font-semibold text-uppercase">
                {{ $t("footer.company_name") }}:
                <span class="font-semibold text-white">
                  {{ isUedu ? $t("footer-uedu") : $t("footer-wlabs") }}</span
                >
              </p>
              <span class="hidden md:inline">|</span>
              <p class="font-inter text-[#64748B] font-semibold">
                {{ $t("footer-ceo") }}:
                <span class="font-semibold text-white">
                  {{ $t("footer-matt") }}</span
                >
              </p>
              <span class="hidden md:inline">|</span>
              <p class="font-inter text-[#64748B] font-semibold text-uppercase">
                {{ $t("footer.business_id") }}:
                <span class="font-semibold text-white">{{
                  isUedu ? "124-87-33297" : "387-87-03701"
                }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ContactModal v-model="showContactModal" />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t, locale } = useI18n();
const showContactModal = ref(false);

const footerLinks = computed(() => [
  {
    label: "footer.home",
    to: "/",
    isModal: false,
  },
  {
    label: "footer.about_us",
    to: "/revamp/about-us",
    isModal: false,
  },
  {
    label: "footer.services",
    to: "/revamp/services",
    isModal: false,
  },
  {
    label: "footer.products",
    to: "/revamp/products",
    isModal: false,
  },
  {
    label: "footer.projects",
    to: "/revamp/our-projects",
    isModal: false,
  },
  {
    label: "footer.newsroom",
    to: "/revamp/newsroom",
    isModal: false,
  },
  {
    label: "footer.contact_us",
    to: "/revamp/contact",
    isModal: true,
  },
]);

const additionalLinks = computed(() => [
  {
    label: t("footer.terms_conditions"),
    to: "/revamp/terms-conditions",
  },
  {
    label: t("footer.privacy_policy"),
    to: "/revamp/privacy-policy",
  },
]);

const products = computed(() => [
  { name: t("products.pageTitle"), to: "/optical-microscope" },
  { name: t("wizAssistant"), to: "/wiz-assistant" },
]);

const isUedu = ref(false);

const openContactModal = () => {
  showContactModal.value = true;
};

const trackSealClick = () => {
  console.log("D-U-N-S® Seal clicked");
};

onMounted(() => {
  isUedu.value = window.location.hostname === "uedu.wsoft.space";
});
</script>
