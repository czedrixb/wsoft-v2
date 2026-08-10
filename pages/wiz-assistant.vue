<template>
  <div>
    <AnimatedWizHeader />

    <div class="px-[2rem] md:px-[5rem] mx-auto py-10">
      <div>
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
            src="/images/revamp/products/wiz-assistant/wiz-features-desktop.png"
            class="h-auto w-full hidden lg:block"
            alt="message"
          />
          <NuxtImg
            src="/images/revamp/products/wiz-assistant/wiz-features-tablet.png"
            class="h-auto w-full hidden md:block lg:hidden"
            alt="message"
          />
          <NuxtImg
            src="/images/revamp/products/wiz-assistant/wiz-features-mobile.png"
            class="h-auto w-full block md:hidden"
            alt="message"
          />
        </div>
      </div>
    </div>

    <div class="px-[2rem] lg:px-[5rem] mx-auto pb-20 bg-[#20252CE5]">
      <div
        class="rounded-b-[14px] bg-[#473720] p-8 grid grid-cols-1 lg:grid-cols-12 gap-6"
      >
        <div class="col-span-1 lg:col-span-4 flex items-center">
          <h3 class="font-light text-4xl text-[#FFD5EB] text-start">
            {{ $t("wiz.integration_title") }}
          </h3>
        </div>
        <div class="col-span-1 lg:col-span-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              class="rounded-[14px] p-5 flex flex-col gap-4"
              style="
                background: radial-gradient(
                  1381.48% 317.04% at 0% 50%,
                  #473720 0%,
                  #ffd5eb 100%
                );
              "
            >
              <div class="text-white">
                <NuxtImg
                  src="/images/revamp/products/wiz-assistant/assist-1.png"
                  alt="message"
                />
              </div>
              <p class="text-white text-sm font-light">
                {{ $t("wiz.integration_cards.embed") }}
              </p>
            </div>

            <div
              class="rounded-[14px] p-5 flex flex-col gap-4"
              style="
                background: radial-gradient(
                  1384.17% 317.66% at -108.42% 50%,
                  #473720 0%,
                  #ffd5eb 100%
                );
              "
            >
              <div class="text-white">
                <NuxtImg
                  src="/images/revamp/products/wiz-assistant/assist-2.png"
                  alt="message"
                />
              </div>
              <p class="text-white text-sm font-light">
                {{ $t("wiz.integration_cards.setup") }}
              </p>
            </div>

            <div
              class="rounded-[14px] p-5 flex flex-col gap-4"
              style="
                background: radial-gradient(
                  1377.9% 316.22% at -216.22% 50%,
                  #473720 0%,
                  #ffd5eb 100%
                );
              "
            >
              <div class="text-white">
                <NuxtImg
                  src="/images/revamp/products/wiz-assistant/assist-3.png"
                  alt="message"
                />
              </div>
              <p class="text-white text-sm font-light">
                {{ $t("wiz.integration_cards.post_deployment") }}
              </p>
            </div>
          </div>
        </div>
      </div>
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
import { useCanonical } from "@/composables/useCanonical";

const { locale, t } = useI18n();
const { canonicalUrl } = useCanonical();

const currentLanguage = computed(() => locale.value);

const metaTitle = computed(() => t("wiz.title"));
const metaDescription = computed(() => t("wiz.subtitle"));

const { shareImageUrl, shareImageWidth, shareImageHeight } = useShareImage();

useHead({
  title: metaTitle,
  link: [{ rel: "canonical", href: computed(() => canonicalUrl.value) }],
  meta: [
    { name: "description", content: metaDescription },
    { property: "og:title", content: metaTitle },
    { property: "og:description", content: metaDescription },
    { property: "og:type", content: "website" },
    { property: "og:image", content: shareImageUrl },
    { property: "og:image:width", content: shareImageWidth },
    { property: "og:image:height", content: shareImageHeight },
    { property: "og:url", content: computed(() => canonicalUrl.value) },
    { name: "twitter:image", content: shareImageUrl },
  ],
});

const features = [
  { key: "guide_users", image: "guide-users.png" },
  { key: "automatically_respond", image: "automatically-respond.png" },
  { key: "handle_document", image: "handle-document.png" },
  { key: "provide_examples", image: "provide-examples.png" },
  { key: "automate_repetitive", image: "automate-repetitive.png" },
  { key: "extendable_future", image: "extendable-future.png" },
];
</script>
