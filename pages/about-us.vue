<template>
  <div>
    <PageHeader :title="$t('About Us')" :description="$t('about-text')" />

    <div
      class="px-5 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mb-10"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-x-8 gap-y-8 px-5"
      >
        <div class="flex">
          <img
            src="/images/about-us/innovation.png"
            class="rounded-2xl object-cover w-full h-full"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="flex flex-col justify-center">
          <div
            class="text-[#475766] font-poppins font-[600] text-[25px] lg:text-[40px] mb-5 xl:mb-7"
          >
            {{ $t("innovating-business") }}
          </div>

          <p
            class="font-inter text-[18px] text-[#475766] font-[300] mb-5 xl:mb-7"
          >
            {{ $t("dedicated-providing") }}
          </p>

          <p class="font-inter text-[18px] text-[#475766] font-[300] xl:mb-7">
            {{ $t("staying-ahead") }}
          </p>
        </div>
      </div>
    </div>

    <div class="py-16">
      <TechStackMarquee />
    </div>

    <div class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mb-10">
      <div class="relative">
        <DotLottieVue
          background="transparent"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style="width: 1500px; height: 1500px"
          autoplay
          loop
          src="https://lottie.host/7e67d469-9dcf-4317-9cee-139c46135a1f/coUWrtlAJz.lottie"
        />
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
        >
          <img
            loading="lazy"
            src="/images/blue-gradient.png"
            class="w-[10000px]"
            alt="shadow-overlay"
          />
        </div>
        <div
          class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-[#475766] mb-5"
        >
          {{ $t("why-choose") }}
        </div>

        <p
          class="font-inter font-[300] text-[18px] text-center mx-auto text-[#475766] lg:w-[80%] mb-8 lg:mb-16"
        >
          {{ $t("provide-more") }}
        </p>

        <div class="mx-auto lg:max-w-screen-md">
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-5 gap-x-5 lg:gap-10"
          >
            <div class="flex justify-center md:pt-20">
              <div
                class="card bg-white shadow-md text-primary-content p-2 text-center w-96"
              >
                <div class="flex justify-center my-5">
                  <img
                    src="/images/about-us/puzzle.png"
                    loading="lazy"
                    alt="cutting-edge"
                  />
                </div>

                <div
                  class="text-center font-poppins font-[600] text-[25px] md:px-0 text-[#475766] mb-5"
                >
                  {{ $t("cutting-edge") }}
                </div>

                <p
                  class="font-inter font-[300] text-[18px] mx-auto text-[#475766] sm:w-[80%] mb-8"
                >
                  {{ $t("specialize-developing") }}
                </p>
              </div>
            </div>
            <div class="flex justify-center md:pb-20">
              <div
                class="card bg-white shadow-md text-primary-content p-2 text-center w-96"
              >
                <div class="flex justify-center my-5">
                  <img
                    loading="lazy"
                    src="/images/about-us/shield.png"
                    alt="expertise"
                  />
                </div>

                <div
                  class="text-center font-poppins font-[600] text-[25px] md:px-0 text-[#475766] mb-5"
                >
                  {{ $t("expertise-innovation") }}
                </div>

                <p
                  class="font-inter font-[300] text-[18px] mx-auto text-[#475766] sm:w-[80%] mb-8"
                >
                  {{ $t("deep-understanding") }}
                </p>
              </div>
            </div>
            <div class="md:col-span-2 flex justify-center">
              <div
                class="card bg-white shadow-md text-primary-content p-2 text-center w-96"
              >
                <div class="flex justify-center my-5">
                  <img
                    loading="lazy"
                    src="/images/about-us/sticky.png"
                    alt="technology"
                  />
                </div>

                <div
                  class="text-center font-poppins font-[600] text-[25px] md:px-0 text-[#475766] w-[80%] mx-auto mb-5"
                >
                  {{ $t("reliable-tech") }}
                </div>

                <p
                  class="font-inter font-[300] text-[18px] mx-auto text-[#475766] sm:w-[80%] mb-8"
                >
                  {{ $t("trust-paramount") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-16 mb-10">
      <!-- <div class="flex justify-center items-center mb-5">
        <span class="text-[25px] lg:text-[40px] pb-3 me-3">👥</span>
      </div> -->
      <div
        class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-[#475766] mb-5"
      >
        {{ $t("meet-team") }}
      </div>

      <p
        class="font-inter font-[300] text-[18px] text-center mx-auto text-[#475766] lg:w-[80%] mb-12 lg:mb-16"
      >
        {{ $t("team-experts") }}
      </p>

      <div class="mx-auto lg:max-w-screen-lg">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div
            v-for="(member, key) in members"
            :key="key"
            class="flex justify-center"
          >
            <div>
              <img
                :src="member.image"
                class="max-w-full mb-5"
                :alt="member.nickname"
                loading="lazy"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[16px] md:text-[20px] font-[600] text-[#475766]"
                >
                  {{ $t(member.nickname) }}
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  {{ $t(member.name) }}
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  {{ $t(member.position) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ContactEmail />
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const members = ref([
  {
    image: "/images/about-us/our-team/matt.png",
    nickname: "matt",
    name: "matt-name",
    position: "ceo",
  },
  {
    image: "/images/about-us/ricky.png",
    nickname: "ricky",
    name: "ricky-name",
    position: "project-manager",
  },
  {
    image: "/images/about-us/our-team/joseph.png",
    nickname: "joseph",
    name: "joseph-name",
    position: "full-pm",
  },
  {
    image: "/images/about-us/hoon.png",
    nickname: "hoon",
    name: "hoon-name",
    position: "full-sa",
  },
  {
    image: "/images/about-us/our-team/lin.png",
    nickname: "lin",
    name: "lin-name",
    position: "administrative-officer",
  },
  {
    image: "/images/about-us/our-team/sebin.png",
    nickname: "sebin",
    name: "sebin-name",
    position: "designer",
  },
  {
    image: "/images/about-us/our-team/gale.png",
    nickname: "gale",
    name: "gale-name",
    position: "operation-manager",
  },
  {
    image: "/images/about-us/our-team/jaimie.png",
    nickname: "jaimie",
    name: "jaimie-name",
    position: "junior-project",
  },
  {
    image: "/images/about-us/salve.png",
    nickname: "salve",
    name: "salve-name",
    position: "corporate-secretary",
  },
  {
    image: "/images/about-us/lora.png",
    nickname: "lora",
    name: "lora-name",
    position: "communications-manager",
  },
  {
    image: "/images/about-us/our-team/ben.png",
    nickname: "ben",
    name: "ben-name",
    position: "full-tpm",
  },
  {
    image: "/images/about-us/our-team/czedrix.png",
    nickname: "czedrix",
    name: "czedrix-name",
    position: "full-stack",
  },
  // {
  //   image: "/images/about-us/rj.png",
  //   nickname: "rj",
  //   name: "rj-name",
  //   position: "full-stack",
  // },
  {
    image: "/images/about-us/our-team/mon.png",
    nickname: "mon",
    name: "mon-name",
    position: "designer",
  },
  {
    image: "/images/about-us/our-team/orland.png",
    nickname: "orland",
    name: "orland-name",
    position: "designer",
  },
  {
    image: "/images/about-us/neil.png",
    nickname: "neil",
    name: "neil-name",
    position: "full-ai",
  },
  {
    image: "/images/about-us/our-team/jason.png",
    nickname: "jason",
    name: "jason-name",
    position: "full-stack",
  },
  {
    image: "/images/about-us/our-team/winona.png",
    nickname: "winona",
    name: "winona-name",
    position: "marketing-specialist",
  },
  // {
  //   image: "/images/about-us/our-team/jason.png",
  //   nickname: "jason",
  //   name: "jason-name",
  //   position: "full-stack",
  // },
  // {
  //   image: "/images/about-us/our-team/jason.png",
  //   nickname: "jason",
  //   name: "jason-name",
  //   position: "full-stack",
  // },
]);

const { t } = useI18n();

const staticMetaTitle = t("about-title");
const staticMetaDescription = t("about-us-description");
const staticMetaKeywords = Array.from({ length: 10 }, (_, i) =>
  t(`about-us-meta-keyword-${i + 1}`)
).join(", ");

useHead({
  title: staticMetaTitle,
  meta: [
    { name: "description", content: staticMetaDescription },
    { name: "keywords", content: staticMetaKeywords },
    { property: "og:title", content: staticMetaTitle },
    { property: "og:description", content: staticMetaDescription },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/thumbnail.jpg" },
  ],
});
</script>