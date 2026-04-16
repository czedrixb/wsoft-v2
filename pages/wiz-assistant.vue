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
      <RelatedProducts />
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
