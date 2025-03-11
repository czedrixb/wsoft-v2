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
          class="absolute top-0 left-0 h-full z-0 opacity-50"
          autoplay
          loop
          src="https://lottie.host/629be379-16b6-4e84-a306-082de2ae9fc4/ylCdRSYXuR.lottie"
        />
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
                  <img src="/images/about-us/puzzle.png" alt="cutting-edge" />
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
                  <img src="/images/about-us/shield.png" alt="expertise" />
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
                  <img src="/images/about-us/sticky.png" alt="technology" />
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
      <div
        class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-[#475766] mb-5"
      >
        {{ $t("our-team") }}
      </div>

      <p
        class="font-inter font-[300] text-[18px] text-center mx-auto text-[#475766] lg:w-[80%] mb-12 lg:mb-16"
      >
        {{ $t("provide-more") }}
      </p>

      <div class="mx-auto lg:max-w-screen-lg">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/matt.png"
                class="max-w-full mb-5"
                alt="matt"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Matt
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  WonSeok Jung
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  {{ $t("ceo") }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/joseph.png"
                class="max-w-full mb-5"
                alt="joseph"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Joseph
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Kang Jun Lee
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  {{ $t("senior-dev") }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/jaime.png"
                class="max-w-full mb-5"
                alt="jaime"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Jaimie
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Amron Florence Arda
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  {{ $t("project-officer") }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/ben.png"
                class="max-w-full mb-5"
                alt="ben"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Ben
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Benito Orbino
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  {{ $t("full-stack") }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/lora.png"
                class="max-w-full mb-5"
                alt="lora"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Lora
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Rhoda Grace Brito
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  {{ $t("marketing-specialist") }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/czedrix.png"
                class="max-w-full mb-5"
                alt="czedrix"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Czedrix
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Czedrix Barcena
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  {{ $t("developer") }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/orland.png"
                class="max-w-full mb-5"
                alt="orland"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Orland
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Orland Salas
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  {{ $t("designer") }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/rj.png"
                class="max-w-full mb-5"
                alt="rj"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  RJ
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Raymond John Yorong
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  {{ $t("developer") }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/gale.png"
                class="max-w-full mb-5"
                alt="gale"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Gale
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Leslie Palmos
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  {{ $t("human-resource") }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/salve.png"
                class="max-w-full mb-5"
                alt="salve"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Salve
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Salvacion Parreño
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  {{ $t("corporate-secretary") }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/mon.png"
                class="max-w-full mb-5"
                alt="mon"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Mon
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Raymond De La Cruz
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  {{ $t("designer") }}
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
    // { property: "og:image", content: "/images/thumbnail.jpg" },
  ],
});
</script>