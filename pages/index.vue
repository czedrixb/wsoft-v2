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
        <div :class="{ hidden: currentLanguage !== 'ko' }">
          <div
            class="flex justify-center mb-[1rem] md:mb-[1rem] lg:mb-[1.5rem]"
          >
            <img
              src="/images/home/w-softlabs.svg"
              class="w-[340px] lg:w-[583px]"
              alt="w-softlabs"
            />
          </div>

          <div
            class="relative mt-3 md:mt-5 h-[3rem] md:h-[4rem] lg:h-[5rem] overflow-hidden flex justify-center lg:mb-[0.5rem] mb-2"
          >
            <transition
              enter-active-class="animate-fade-up"
              leave-active-class="opacity-0"
            >
              <div
                :key="currentWord"
                class="absolute text-[2.5rem] md:text-5xl lg:text-6xl font-[800] text-center bg-gradient-to-r from-[#2376EA] to-[#02C9D1] bg-clip-text text-transparent w-full leading-[1]"
              >
                {{ $t(currentWord) }}
              </div>
            </transition>
          </div>

          <div class="mb-8">
            <div class="flex justify-center">
              <NuxtImg
                class="w-[100px] md:w-[120px] lg:w-[180px]"
                height="100%"
                src="/images/home/jumbotron.webp"
                alt="we-do-ko"
              />
            </div>
          </div>
        </div>

        <div :class="{ hidden: currentLanguage === 'ko' }">
          <div
            class="flex justify-center mb-[1rem] md:mb-[1rem] lg:mb-[1.5rem]"
          >
            <img
              src="/images/home/w-softlabs-en.webp"
              class="w-[400px] md:w-[440px] lg:w-[610px]"
              alt="w-softlabs"
            />
          </div>

          <div class="mb-4">
            <div class="flex justify-center">
              <NuxtImg
                class="w-[180px] md:w-[190px] lg:w-[290px]"
                height="100%"
                src="/images/home/jumbotronen.webp"
                alt="we-do-en"
              />
            </div>
          </div>

          <div
            class="relative h-[6rem] md:h-[4rem] lg:h-[5rem] overflow-hidden flex justify-center lg:mb-[0.5rem] mb-6"
          >
            <transition
              enter-active-class="animate-fade-up"
              leave-active-class="opacity-0"
            >
              <div
                :key="currentWord"
                class="absolute pb-3 text-[2.5rem] md:text-5xl lg:text-6xl font-[800] text-center bg-gradient-to-r from-[#2376EA] to-[#02C9D1] bg-clip-text text-transparent w-full leading-[1]"
              >
                {{ $t(currentWord) }}
              </div>
            </transition>
          </div>
        </div>

        <p
          class="text-center text-[#475766] opacity-100 font-[300] font-[inter] text-[18px] px-5 md:px-0 mb-[3rem] lg:pt-[2rem]"
        >
          {{ $t("elevate-business") }}
        </p>

        <NuxtLink class="flex justify-center z-50" to="/contact-us">
          <button
            class="relative font-[400] text-[18px] px-8 py-5 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90"
          >
            <span class="relative z-10">{{ $t("start-project") }}</span>
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
        class="pointer-events-none absolute right-[-104%] bottom-[10%] md:bottom-[-15%] md:right-[-121%] lg:right-[-80%] lg:bottom-[-7%] xl:right-[-45%]"
      >
        <img
          src="/images/home/shadow-overlay.png"
          class="w-[800px] md:w-[1500px] lg:w-[1500px]"
          alt="shadow-overlay"
          loading="lazy"
        />
      </div>
      <div
        class="pointer-events-none absolute left-[-104%] bottom-[10%] md:bottom-[-15%] md:left-[-121%] lg:left-[-80%] lg:bottom-[-7%] xl:left-[-45%]"
      >
        <img
          src="/images/home/shadow-overlay.png"
          class="w-[800px] md:w-[1500px] lg:w-[1500px]"
          alt="shadow-overlay"
          loading="lazy"
        />
      </div>
    </div>

    <div
      class="px-8 md:px-0 md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto md:mt-[15rem]"
    >
      <!-- <div
        class="flex flex-col lg:flex-row justify-center items-center gap-y-5 lg:gap-x-0 xl:gap-x-10 mb-10 lg:mb-0"
      >
        <div class="floating-item">
          <div
            class="rounded-full lg:text-[18px] bg-transparent drop-shadow-[5.3px] font-poppins font-[400] text-center text-[#1E2734] py-3 w-[18rem] lg:w-[20rem] backdrop-blur-[5.3px] shadow-[0px_0px_76px_0px_#00000026]"
          >
            {{ $t("project-success") }}
          </div>
        </div>

        <div class="floating-item">
          <div
            class="rounded-full lg:text-[18px] bg-transparent drop-shadow-[5.3px] font-poppins font-[400] text-center text-[#1E2734] py-3 w-[18rem] lg:w-[20rem] backdrop-blur-[5.3px] shadow-[0px_0px_76px_0px_#00000026]"
          >
            {{ $t("customer-retention") }}
          </div>
          <div class="py-20 hidden lg:block"></div>
        </div>

        <div class="floating-item">
          <div
            class="rounded-full lg:text-[18px] bg-transparent drop-shadow-[5.3px] font-poppins font-[400] text-center text-[#1E2734] py-3 w-[18rem] lg:w-[20rem] backdrop-blur-[5.3px] shadow-[0px_0px_76px_0px_#00000026]"
          >
            {{ $t("project-completed") }}
          </div>
        </div>
      </div> -->

      <div class="relative">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <DotLottieVue
            background="transparent"
            style="width: 800px; height: 800px"
            autoplay
            loop
            src="https://lottie.host/7e67d469-9dcf-4317-9cee-139c46135a1f/coUWrtlAJz.lottie"
          />
        </div>
        <div
          class="absolute top-1/2 left-1/2 2xl:left-[68%] -translate-x-1/2 -translate-y-1/2 z-20 opacity-100 w-full"
        >
          <img
            src="/images/blue-gradient.png"
            class="w-[5000px] xl:w-[1500px]"
            alt="shadow-overlay"
            loading="lazy"
          />
        </div>
        <div class="z-20 relative">
          <div class="flex justify-center mx-auto mb-5">
            <div
              class="text-center font-poppins font-[600] text-[25px] md:w-[55%] xl:w-[40%] lg:text-[40px] md:px-0 text-[#475766] mb-5"
            >
              {{ $t("trusted-partner") }}
            </div>
          </div>

          <div class="flex justify-center mb-5">
            <NuxtImg
              src="/images/home/partner.png"
              width="841px"
              height="448.35px"
              alt="partner"
            />
          </div>

          <p
            class="font-inter font-[300] text-[18px] text-center mx-auto text-[#475766] lg:w-[50%]"
          >
            {{ $t("delivers-cutting") }}
          </p>
        </div>
      </div>
    </div>

    <div
      class="mx-auto px-8 md:px-0 md:max-w-[90%] lg:max-w-[90%] xl:max-w-[85%] md:mt-[15rem] mb-10 py-16"
    >
      <BriefServices />
      <div class="block lg:hidden">
        <div
          v-for="(service, key) in services"
          :key="key"
          class="flex flex-col relative justify-between items-center gap-y-8 mb-14"
        >
          <div class="text-left lg:w-[45%]">
            <div class="block lg:hidden">
              <div
                class="radial-progress bg-white text-[#C1C1C1] mb-5"
                style="--value: 100; --size: 3rem; --thickness: 2px"
                role="progressbar"
              >
                {{ service.number }}
              </div>
            </div>
            <div
              class="text-[#475766] font-poppins font-[600] text-[25px] lg:text-[40px] w-[70%]"
            >
              {{ $t(service.title) }}
            </div>

            <div v-if="service.slogan" class="mt-5">
              <!-- <span
                class="font-inter text-[18px] text-[#475766] font-[300] lg:w-[80%]"
              >
                {{ $t("slogan") }}:
              </span> -->
              <p
                class="font-inter text-[18px] text-[#475766] font-[600] lg:w-[80%]"
              >
                {{ $t(service.slogan) }}
              </p>
            </div>

            <p
              class="font-inter text-[18px] text-[#475766] font-[300] lg:w-[80%] mt-5"
            >
              {{ $t(service.description) }}
            </p>
          </div>

          <div class="flex justify-end">
            <img
              :src="service.image"
              class="lg:w-[430px] xl:w-[500px]"
              alt="web-development"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10">
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
      <div class="hidden md:block mb-[3rem]">
        <div
          class="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 grid-rows-2 md:gap-3 lg:gap-5"
        >
          <div class="md:col-span-2 h-1px md:flex">
            <NuxtLink
              to="/our-works/academic-administration-management-system"
              class="relative overflow-hidden group hidden md:block rounded-xl w-[100%]"
            >
              <img
                src="/images/home/project-1.png"
                class="max-w-full h-[25rem] md:h-auto"
                alt="dashboard"
                loading="lazy"
              />

              <div
                class="absolute left-[0%] md:left-[-2%] lg:left-[0%] md:bottom-[0.5%] lg:bottom-[0.5%] xl:bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <img
                  src="/images/home/shadow-project.png"
                  class="rounded-2xl"
                  alt="shadow"
                  loading="lazy"
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
              class="relative overflow-hidden group hidden md:block rounded-xl w-[100%]"
            >
              <NuxtImg
                src="/images/home/project-2.png"
                class="max-w-full md:h-[255.23px] lg:h-[350.77px] xl:h-[503.39px] 2xl:h-[545.56px]"
                alt="content-management"
              />
              <div
                class="absolute left-[0%] bottom-[0%] xl:bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <img
                  src="/images/home/shadow-project.png"
                  class="rounded-2xl"
                  alt=" shadow"
                  loading="lazy"
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
              class="relative overflow-hidden group hidden md:block rounded-xl w-[100%]"
            >
              <NuxtImg
                src="/images/home/project-3.png"
                class="max-w-full md:h-[255.17px] lg:h-[350.67px] xl:h-[503.25px] xl:w-[100%] 2xl:h-[545.41px]"
                alt=" mob-app-2"
              />
              <div
                class="absolute left-[0%] md:left-[-2%] lg:left-[0%] bottom-[0%] md:bottom-[0%] lg:bottom-[0%] xl:bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <img
                  src="/images/home/shadow-project.png"
                  class="rounded-2xl"
                  alt=" shadow"
                  loading="lazy"
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
              class="relative overflow-hidden group hidden md:block rounded-xl w-[100%]"
            >
              <img
                src="/images/home/project-4.png"
                class="w-[100%] h-[auto]"
                alt="diginest"
                loading="lazy"
              />
              <div
                class="absolute left-[0%] md:left-[-1%] lg:left-[0%] xl:left-[0%] md:bottom-[0%] lg:bottom-[0.5%] xl:bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <img
                  src="/images/home/shadow-project.png"
                  class="rounded-2xl"
                  alt=" shadow"
                  loading="lazy"
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
      <div class="flex flex-col gap-y-5 md:hidden mb-[3rem]">
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
              loading="lazy"
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
          <img
            src="/images/home/project-2.png"
            alt="mob-app-1-mobile"
            loading="lazy"
          />
          <div class="absolute left-[0%] bottom-[0%] opacity-100">
            <img
              src="/images/home/shadow-project.png"
              class="rounded-2xl"
              alt="shadow"
              loading="lazy"
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
            loading="lazy"
          />
          <div class="absolute left-[0%] bottom-[0%] opacity-100">
            <img
              src="/images/home/shadow-project.png"
              class="rounded-2xl"
              alt="shadow"
              loading="lazy"
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
          <img
            src="/images/home/project-4-mobile.png"
            alt="diginest-mobile"
            loading="lazy"
          />
          <div class="absolute left-[0%] bottom-[0%] opacity-100">
            <img
              src="/images/home/shadow-project.png"
              class="rounded-2xl"
              alt="shadow"
              loading="lazy"
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

      <div class="flex justify-center mb-[5rem]">
        <NuxtLink class="flex justify-center z-50" to="/our-works">
          <button
            class="relative font-[400] text-[18px] px-12 py-5 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90"
          >
            <span class="relative z-10">{{ $t("explore-more-projects") }}</span>
            <span
              class="absolute inset-0 bg-gradient-to-r from-[#70aae9] to-[#68d2e5] rounded-full p-[8px] -z-10 transition-all duration-300 hover:opacity-80"
            ></span>
            <span
              class="absolute inset-0 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] rounded-full m-[8px] transition-all duration-300 hover:m-[4px]"
            ></span>
          </button>
        </NuxtLink>
      </div>
    </div>

    <div class="mb-[12rem]">
      <TechStackMarquee />
    </div>

    <ContactEmail />
  </div>
</template>
<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useLanguageStore } from "~/stores/language";
import { storeToRefs } from "pinia";

const heroWords = [
  "hero-1",
  // "데이터로 세상을 이해",
  "hero-2",
  "hero-3",
  "hero-4",
  "hero-5",
  // "무한한 가능성을 창조",
  "hero-6",
  // "비즈니스를 스마트하게",
  "hero-7",
];

const services = ref([
  {
    number: 1,
    title: "action-detection",
    slogan: "reading-behavior",
    description: "offers-advanced",
    image: "/images/home/action-detection.png",
    progress: 0,
  },
  {
    number: 2,
    title: "rag",
    slogan: "retrieving-knowledge",
    description: "rag-technology",
    image: "/images/home/rag.png",
    progress: 20,
  },
  {
    number: 3,
    title: "web-dev",
    description: "create-website",
    image: "/images/home/web-development.png",
    progress: 40,
  },
  {
    number: 4,
    title: "web-app",
    description: "build-innovative",
    image: "/images/home/web-application.png",
    progress: 60,
  },
  {
    number: 5,
    title: "ui-design",
    description: "design-intuitive",
    image: "/images/home/ui-design.png",
    progress: 80,
  },
  {
    number: 6,
    title: "ai-utilization",
    description: "cut-customer",
    image: "/images/home/ai-utilization.png",
    progress: 100,
  },
]);

const currentIndex = ref(0);

const currentWord = computed(() => heroWords[currentIndex.value]);

onMounted(() => {
  const interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % heroWords.length;
  }, 3000);

  onUnmounted(() => clearInterval(interval));
});

const { locale, t } = useI18n();

const languageStore = useLanguageStore();
const { activeLanguage } = storeToRefs(languageStore);

const currentLanguage = computed(() => activeLanguage.value);

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
    { property: "og:image", content: "/images/thumbnail.jpg" },
  ],
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
