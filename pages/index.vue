<template>
  <div>
    <div
      class="w-full h-[42rem] md:h-[39rem] lg:h-[38rem] xl:h-[42rem] relative overflow-hidden"
    >
      <!-- <video class="w-full h-full object-cover" autoplay loop muted playsinline>
        <source src="/images/home/home-hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> -->

      <div class="absolute inset-0 bg-[#ebf0f7] opacity-[.80]"></div>

      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
      >
        <div class="flex justify-center">
          <img
            src="/images/home/w-softlabs.svg"
            class="w-[340px] mb-3 lg:w-[583px]"
            alt="w-softlabs"
          />
        </div>

        <div
          class="relative h-[8rem] overflow-hidden flex justify-center md:h-[5rem] lg:mb-[3rem]"
        >
          <transition
            enter-active-class="animate-fade-up"
            leave-active-class="opacity-0"
          >
            <div
              :key="currentWord"
              class="absolute text-[2.5rem] md:text-5xl lg:text-6xl font-[800] text-center bg-gradient-to-r from-[#2376EA] to-[#02C9D1] bg-clip-text text-transparent w-full"
            >
              {{ currentWord }}
            </div>
          </transition>
        </div>

        <div class="flex justify-center mb-6">
          <img
            src="/images/home/jumbotron.webp"
            class="w-[125px] lg:w-[168px]"
            alt="w-softlabs"
          />
        </div>

        <p
          class="text-center text-[#475766] opacity-100 font-[300] font-[inter] text-[18px] px-5 md:px-0 mb-[3rem]"
        >
          {{ $t("elevate-business") }}
        </p>

        <NuxtLink class="flex justify-center z-50" to="/contact-us">
          <button
            class="relative font-[400] text-[18px] px-8 py-5 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90"
          >
            <span class="relative z-10">{{ $t("Talk with an Expert") }}</span>
            <span
              class="absolute inset-0 bg-gradient-to-r from-[#70aae9] to-[#68d2e5] rounded-full p-[8px] -z-10 transition-all duration-300 hover:opacity-80"
            ></span>
            <span
              class="absolute inset-0 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] rounded-full m-[8px] transition-all duration-300 hover:m-[4px]"
            ></span>
          </button>
        </NuxtLink>
      </div>

      <div
        class="absolute right-[-104%] bottom-[10%] md:bottom-[-15%] md:right-[-121%] lg:right-[-80%] lg:bottom-[-7%] xl:right-[-45%]"
      >
        <img
          src="/images/home/shadow-overlay.png"
          class="w-[800px] md:w-[1500px] lg:w-[1500px]"
          alt="shadow-overlay"
        />
      </div>
      <div
        class="absolute left-[-104%] bottom-[10%] md:bottom-[-15%] md:left-[-121%] lg:left-[-80%] lg:bottom-[-7%] xl:left-[-45%]"
      >
        <img
          src="/images/home/shadow-overlay.png"
          class="w-[800px] md:w-[1500px] lg:w-[1500px]"
          alt="shadow-overlay"
        />
      </div>
    </div>

    <div
      class="mx-auto px-8 md:px-0 md:max-w-screen-sm mt-[5rem] lg:max-w-screen-lg lg:mt-[15rem]"
    >
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-y-5 lg:gap-x-1 mb-10 md:mb-0"
      >
        <div class="floating-item">
          <div
            class="rounded-full text-[14px] bg-white drop-shadow-[5.3px] font-poppins font-[400] text-center text-[#1E2734] py-3 w-[15rem]"
          >
            {{ $t("project-success") }}
          </div>
        </div>

        <div class="floating-item">
          <div
            class="rounded-full text-[14px] bg-white drop-shadow-[5.3px] font-poppins font-[400] text-center text-[#1E2734] py-3 w-[15rem]"
          >
            {{ $t("customer-retention") }}
          </div>
          <div class="py-20 hidden md:block"></div>
        </div>

        <div class="floating-item">
          <div
            class="rounded-full text-[14px] bg-white drop-shadow-[5.3px] font-poppins font-[400] text-center text-[#1E2734] py-3 w-[15rem]"
          >
            {{ $t("project-completed") }}
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <!-- <DotLottieVue
            background="transparent"
            style="width: 1500px; height: 1500px"
            autoplay
            loop
            src="https://lottie.host/7e67d469-9dcf-4317-9cee-139c46135a1f/coUWrtlAJz.lottie"
          /> -->
        </div>
        <div class="absolute top-[30%] md:inset-0 z-20 opacity-100 w-full">
          <img
            src="/images/blue-gradient.png"
            class="w-[5000px]"
            alt="shadow-overlay"
          />
        </div>
        <div class="z-20 relative">
          <div class="flex justify-center mx-auto mb-5">
            <div
              class="text-center font-poppins font-[600] text-[25px] md:w-[55%] lg:text-[40px] md:px-0 text-[#475766] mb-5"
            >
              {{ $t("trusted-partner") }}
            </div>
          </div>

          <div class="flex justify-center mb-5">
            <img
              src="/images/home/partner.png"
              class="lg:w-[800px]"
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

    <div
      class="mx-auto px-8 max-w-screen-2xl md:mt-[15rem] mb-10 py-16 z-50 relative"
      ref="scrollContainer"
    >
      <BriefServices ref="briefServices" />
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
            <NuxtLink
              to="/our-works/academic-administration-management-system"
              class="relative overflow-hidden group hidden md:block"
            >
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
            </NuxtLink>
          </div>
          <div class="md:flex">
            <NuxtLink
              to="/our-works/content-management-system"
              class="relative overflow-hidden group hidden md:block"
            >
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
            </NuxtLink>
          </div>
          <div class="md:flex">
            <NuxtLink
              to="/our-works/foreign-language-learning-system"
              class="relative overflow-hidden group hidden md:block"
            >
              <img
                src="/images/home/project-3.png"
                class="max-w-100"
                alt=" mob-app-2"
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
                  {{ $t("foreign-language") }}
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="md:col-span-2 md:flex">
            <NuxtLink
              to="/our-works/blockchain"
              class="relative overflow-hidden group hidden md:block"
            >
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
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- SMALL SCREEN -->
      <div class="flex flex-col gap-y-5 md:hidden mb-[5rem]">
        <NuxtLink
          to="/our-works/academic-administration-management-system"
          class="relative"
        >
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
        </NuxtLink>
        <NuxtLink to="/our-works/content-management-system" class="relative">
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
        </NuxtLink>
        <NuxtLink
          to="/our-works/foreign-language-learning-system"
          class="relative"
        >
          <img
            src="/images/home/project-3-mobile.png"
            alt=" mob-app-2-mobile"
          />
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
              {{ $t("foreign-language") }}
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/our-works/blockchain" class="relative">
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
        </NuxtLink>
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
import { ref, computed, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";

const heroWords = [
  "업무 효율을 극대화",
  "데이터로 세상을 이해",
  "가능성을 연결",
  "성장 엔진을 설계",
  "인공지능으로 혁신",
  "신뢰를 설계",
  "무한한 가능성을 창조",
  "데이터로 혁신",
  "비즈니스를 스마트하게",
  "기술의 미래를 선도",
];

const currentIndex = ref(0);

const currentWord = computed(() => heroWords[currentIndex.value]);

onMounted(() => {
  const interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % heroWords.length;
  }, 3000);

  onUnmounted(() => clearInterval(interval));
});

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

const scrollContainer = ref(null);
const briefServices = ref(null);

const checkScrollPosition = () => {
  const rect = scrollContainer.value.getBoundingClientRect();
  const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

  if (isInView && briefServices.value) {
    gsap.to(briefServices.value, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      zIndex: 1000,
      duration: 1,
      overwrite: true,
    });
  } else if (briefServices.value) {
    gsap.to(briefServices.value, {
      position: "relative",
      height: "auto",
      width: "auto",
      zIndex: 0,
      duration: 1,
      overwrite: true,
    });
  }
};

onMounted(() => {
  window.addEventListener("scroll", checkScrollPosition);
  checkScrollPosition(); // Check on mount
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScrollPosition);
});
</script>

<style scoped>
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fade-up 0.6s ease-in-out;
}
</style>