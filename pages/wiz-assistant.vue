<template>
  <div>
    <div class="px-[2rem] md:px-[5rem] mx-auto py-10">
      <div class="flex justify-center mb-2">
        <NuxtImg
          width="450px"
          height="100%"
          src="/images/wiz-assistant/wiz-logo.png"
          alt="wiz"
        />
      </div>

      <div class="text-center text-[#20252CE5] font-semibold text-[14px]">
        {{ $t("wiz.subtitle") }}
      </div>

      <div class="mt-[3rem] md:mt-[10rem]">
        <div class="relative">
          <template v-if="currentLanguage === 'en'">
            <div class="hidden md:block">
              <div class="flex justify-center">
                <NuxtImg
                  src="/images/wiz-assistant/statement-en.png"
                  width="1100px"
                  class="h-auto"
                  alt="en-message"
                />
              </div>
            </div>
            <div class="md:hidden">
              <NuxtImg
                src="/images/wiz-assistant/statement-en-small.png"
                class="w-full h-auto"
                alt="en-message"
              />
            </div>
          </template>

          <template v-else>
            <div class="hidden md:block">
              <div class="flex justify-center">
                <NuxtImg
                  src="/images/wiz-assistant/statement-ko.png"
                  width="1100px"
                  class="h-auto"
                  alt="ko-message"
                />
              </div>
            </div>
            <div class="md:hidden">
              <NuxtImg
                src="/images/wiz-assistant/statement-ko-small.png"
                class="w-full h-auto"
                alt="en-message"
              />
            </div>
          </template>
        </div>
      </div>

      <div class="mt-20">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <div v-for="feature in features" :key="feature.key">
            <div class="flex justify-center mb-3">
              <NuxtImg
                :src="`/images/wiz-assistant/features/${feature.image}`"
                width="80px"
                class="h-auto"
                :alt="$t(`wiz.features.${feature.key}`)"
              />
            </div>

            <div class="text-center">
              <p class="text-[#20252CE5] font-inter text-[16px]">
                {{ $t(`wiz.features.${feature.key}`) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12">
        <div class="flex justify-center">
          <NuxtImg
            src="/images/wiz-assistant/wiz-example.png"
            width="1200px"
            class="h-auto"
            alt="message"
          />
        </div>
      </div>
    </div>

    <div class="px-[2rem] lg:px-[5rem] mx-auto py-20 bg-[#20252CE5]">
      <PricingTiers />

      <div class="mt-[5rem]">
        <TierAudience />
      </div>
    </div>

    <div class="px-[3rem] md:px-[5rem] mx-auto py-24 relative">
      <div
        class="absolute left-[9%] top-[40%] md:top-0 lg:left-[25%] xl:left-[30%] 2xl:left-[35%] lg:top-[10%] 2xl:top-[10%] z-0"
      >
        <NuxtImg
          src="/images/wiz-assistant/overlay.png"
          width="600px"
          class="h-auto"
          alt="message"
        />
      </div>

      <div class="hidden lg:block">
        <div
          class="absolute lg:left-[20%] lg:top-[45%] 2xl:left-[33%] 2xl:top-[45%]"
        >
          <NuxtImg
            src="/images/wiz-assistant/overlay-left.png"
            width="74px"
            class="h-auto"
            alt="message"
          />
        </div>
      </div>

      <div class="hidden lg:block">
        <div
          class="absolute lg:left-[72%] lg:top-[30%] 2xl:left-[65%] 2xl:top-[30%]"
        >
          <NuxtImg
            src="/images/wiz-assistant/overlay-right.png"
            width="74px"
            class="h-auto"
            alt="message"
          />
        </div>
      </div>

      <div class="relative z-10">
        <div class="text-center">
          <p class="text-black text-[24px]">
            {{ $t("wiz.main_message") }}
          </p>

          <div class="mt-[5rem] flex justify-center">
            <div>
              <div
                class="rounded-[22px] w-auto py-2 px-8 flex justify-center gap-5 items-center transition-all duration-300 bg-[#F8FAFC] relative"
                style="
                  background:
                    linear-gradient(#f8fafc, #f8fafc) padding-box,
                    linear-gradient(135deg, #2376e9, #02c7d0) border-box;
                  border: 2px solid transparent;
                  border-radius: 22px;
                "
              >
                <span
                  style="
                    background: linear-gradient(135deg, #2376e9, #02c7d0);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                  "
                >
                  {{ $t("wiz.ask_button") }}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="transition-all duration-300"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="url(#gradientStroke)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradientStroke"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0%" stop-color="#2376e9" />
                      <stop offset="100%" stop-color="#02c7d0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div class="mt-5 flex justify-center">
                <div>
                  <NuxtImg
                    src="/images/wiz-assistant/chat-devices.png"
                    width="125px"
                    class="h-auto"
                    alt="chat-device"
                  />
                </div>
              </div>
              <div class="text-center mt-2">
                <span class="text-black">
                  {{ $t("wiz.availability") }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const currentLanguage = computed(() => locale.value);

const features = [
  { key: "guide_users", image: "guide-users.png" },
  { key: "automatically_respond", image: "automatically-respond.png" },
  { key: "handle_document", image: "handle-document.png" },
  { key: "provide_examples", image: "provide-examples.png" },
  { key: "automate_repetitive", image: "automate-repetitive.png" },
  { key: "extendable_future", image: "extendable-future.png" },
];
</script>
