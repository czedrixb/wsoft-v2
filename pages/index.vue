<template>
  <div>
    <div
      class="w-full h-[30rem] md:h-[39rem] lg:h-[35rem] xl:h-[42rem] relative overflow-hidden"
    >
      <!-- <video
        class="absolute inset-0 w-full h-full object-cover"
        autoplay
        loop
        muted
        playsinline
      >
        <source src="/images/home/home-hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> -->

      <div
        class="absolute inset-0 bg-main opacity-80 flex justify-center items-center"
      >
        <div>
          <div class="flex justify-center mb-5">
            <img
              src="/images/home/w-softlabs.svg"
              class="w-[340px] lg:w-[583px]"
              alt="w-softlabs"
            />
          </div>
          <div
            class="mb-5 lg:mb-12 text-[2.5rem] lg:text-6xl font-[800] text-center bg-gradient-to-r from-[#2376EA] to-[#02C9D1] bg-clip-text text-transparent"
          >
            업무 효율을 극대화
          </div>

          <div class="flex justify-center mb-6">
            <img
              src="/images/home/jumbotron.webp"
              class="w-[125px] lg:w-[168px]"
              alt="w-softlabs"
            />
          </div>

          <p
            class="text-center text-[#475766] font-[300] text-[18px] px-5 md:px-0"
          >
            {{ $t("elevate-business") }}
          </p>
        </div>
      </div>

      <div
        class="absolute inset-0 top-[85%] left-[31%] md:top-[78%] md:left-[40%] lg:top-[88%] lg:left-[40%] xl:left-[43%] 2xl:left-[46%] z-40"
      >
        <NuxtLink to="/contact-us">
          <button
            class="btn lg:btn-lg bg-gradient-to-r from-[#2375E9] to-[#02C7D0] font-[400] text-white rounded-full border-none transition-all duration-300 transform hover:scale-105"
          >
            {{ $t("Talk with an Expert") }}
          </button>
        </NuxtLink>
      </div>

      <div
        class="absolute left-[-104%] bottom-[-2%] md:bottom-[-15%] md:left-[-121%] lg:left-[-80%] lg:bottom-[-7%] xl:left-[-45%] xxl:left-[-20%]"
      >
        <img
          src="/images/home/shadow-overlay.png"
          class="w-[800px] md:w-[1500px] lg:w-[1500px]"
          alt="shadow-overlay"
        />
      </div>

      <div
        class="absolute right-[-104%] bottom-[-2%] md:bottom-[-15%] md:right-[-121%] lg:right-[-80%] lg:bottom-[-7%] xl:right-[-45%] xxl:right-[-20%]"
      >
        <img
          src="/images/home/shadow-overlay.png"
          class="w-[800px] md:w-[1500px] lg:w-[1500px]"
          alt="shadow-overlay"
        />
      </div>
    </div>

    <div
      class="mx-auto px-8 md:px-0 md:max-w-screen-sm lg:max-w-screen-lg md mt-16"
    >
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-y-5 lg:gap-x-1 mb-10 md:mb-0"
      >
        <div class="floating-item">
          <div
            class="rounded-full text-[14px] bg-white shadow-md font-poppins text-center text-black py-3 w-[15rem]"
          >
            {{ $t("project-success") }}
          </div>
        </div>

        <div class="floating-item">
          <div
            class="rounded-full text-[14px] bg-white shadow-md font-poppins text-center text-black py-3 w-[15rem]"
          >
            {{ $t("customer-retention") }}
          </div>
          <div class="py-20 hidden md:block"></div>
        </div>

        <div class="floating-item">
          <div
            class="rounded-full text-[14px] bg-white shadow-md font-poppins text-center text-black py-3 w-[15rem]"
          >
            {{ $t("project-completed") }}
          </div>
        </div>
      </div>

      <div class="relative">
        <DotLottieVue
          class="absolute top-0 left-0 h-full z-0 opacity-50"
          autoplay
          loop
          src="https://lottie.host/629be379-16b6-4e84-a306-082de2ae9fc4/ylCdRSYXuR.lottie"
        />
        <div class="z-20 relative">
          <div class="flex justify-center mx-auto mb-5">
            <div
              class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-[#475766] mb-5"
            >
              {{ $t("trusted-partner") }}
            </div>
          </div>

          <div class="flex justify-center mb-5">
            <img
              src="/images/home/partner.png"
              class="lg:w-[600px]"
              alt="partner"
            />
          </div>

          <p
            class="font-inter font-[300] text-[18px] text-center mx-auto text-[#475766] lg:w-[80%]"
          >
            {{ $t("delivers-cutting") }}
          </p>
        </div>
      </div>
    </div>

    <div class="mx-auto px-8 lg:max-w-screen-lg xl:max-w-screen-xl my-10 py-16">
      <BriefServices />
    </div>

    <div
      class="mx-auto px-8 lg:max-w-screen-lg xl:max-w-screen-xl pb-0 md:py-16 mb-0 md:mb-10"
    >
      <div
        class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] px-5 md:px-0 text-[#475766] mb-3"
      >
        {{ $t("successful-projects") }}
      </div>

      <p
        class="font-inter font-[300] text-[18px] text-[#475766] text-center lg:max-w-screen-sm mx-auto mb-12"
      >
        {{ $t("dedicated-helping") }}
      </p>

      <!-- LARGE SCREEN -->
      <div class="hidden md:block">
        <div
          class="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 grid-rows-2 gap-10"
        >
          <div class="md:col-span-2 h-1px md:flex">
            <div class="relative overflow-hidden group hidden md:block">
              <img
                src="/images/home/project-1.png"
                class="max-w-full h-[25rem] md:h-auto"
                alt="dashboard"
              />

              <div
                class="absolute left-[0%] bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <img
                  src="/images/home/shadow-project.png"
                  class="rounded-2xl"
                  alt="shadow"
                />
              </div>

              <div
                class="absolute left-[2%] bottom-[3%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <div
                  class="font-poppins text-white font-[600] text-[20px] lg:w-[80%]"
                >
                  {{ $t("academic-administration") }}
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex">
            <div class="relative overflow-hidden group hidden md:block">
              <img
                src="/images/home/project-2.png"
                class="max-w-100"
                alt="content-management"
              />
              <div
                class="absolute left-[0%] bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <img
                  src="/images/home/shadow-project.png"
                  class="rounded-2xl"
                  alt=" shadow"
                />
              </div>
              <div
                class="absolute left-[2%] bottom-[3%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <div
                  class="font-poppins text-white font-[600] text-[20px] lg:w-[80%]"
                >
                  {{ $t("content-management") }}
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex">
            <img
              src="/images/home/project-3.png"
              class="max-w-100"
              alt=" mob-app-2"
            />
          </div>
          <div class="md:col-span-2 md:flex">
            <div class="relative overflow-hidden group hidden md:block">
              <img
                src="/images/home/project-4.png"
                class="max-w-100"
                alt="digigooz"
              />
              <div
                class="absolute left-[0%] bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <img
                  src="/images/home/shadow-project.png"
                  class="rounded-2xl"
                  alt=" shadow"
                />
              </div>
              <div
                class="absolute left-[2%] bottom-[3%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <div
                  class="font-poppins text-white font-[600] text-[20px] lg:w-[80%]"
                >
                  {{ $t("blockchain") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SMALL SCREEN -->
      <div class="block md:hidden">
        <div class="relative mb-5">
          <img src="/images/home/project-1-mobile.png" alt="dashboard-mobs" />
          <div class="absolute left-[0%] bottom-[0%] opacity-100">
            <img
              src="/images/home/shadow-project.png"
              class="rounded-2xl"
              alt="shadow"
            />
          </div>

          <div class="absolute left-[2%] bottom-[3%] opacity-100">
            <div
              class="font-poppins text-white font-[600] text-[18px] md:text-[20px] lg:w-[80%]"
            >
              {{ $t("academic-administration") }}
            </div>
          </div>
        </div>
        <div class="relative mb-5">
          <img src="/images/home/project-2-mobile.png" alt="mob-app-1-mobile" />
          <div class="absolute left-[0%] bottom-[0%] opacity-100">
            <img
              src="/images/home/shadow-project.png"
              class="rounded-2xl"
              alt="shadow"
            />
          </div>

          <div class="absolute left-[2%] bottom-[3%] opacity-100">
            <div
              class="font-poppins text-white font-[600] text-[18px] md:text-[20px] lg:w-[80%]"
            >
              {{ $t("content-management") }}
            </div>
          </div>
        </div>
        <div class="mb-5">
          <img
            src="/images/home/project-3-mobile.png"
            alt=" mob-app-2-mobile"
          />
        </div>
        <div class="relative mb-5">
          <img src="/images/home/project-4-mobile.png" alt="digigooz-mobile" />
          <div class="absolute left-[0%] bottom-[0%] opacity-100">
            <img
              src="/images/home/shadow-project.png"
              class="rounded-2xl"
              alt="shadow"
            />
          </div>

          <div class="absolute left-[2%] bottom-[3%] opacity-100">
            <div
              class="font-poppins text-white font-[600] text-[18px] md:text-[20px] lg:w-[80%]"
            >
              {{ $t("blockchain") }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <TechStackMarquee />

    <ContactEmail />
  </div>
</template>
 <script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const { t } = useI18n();

const staticMetaTitle = t("home-title");
const staticMetaDescription = t("home-description");
const staticMetaKeywords = [
  t("home-meta-keyword"),
  ...Array.from({ length: 53 }, (_, i) => t(`home-meta-keyword-${i + 1}`)),
].join(", ");

useHead({
  title: staticMetaTitle,
  meta: [
    { name: "description", content: staticMetaDescription },
    { name: "keywords", content: staticMetaKeywords },
    { property: "og:title", content: staticMetaTitle },
    { property: "og:description", content: staticMetaDescription },
    { property: "og:type", content: "website" },
    // { property: "og:image", content: "/images/thumbnail.jpg" },
  ],
});
</script>