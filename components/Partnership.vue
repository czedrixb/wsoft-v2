<template>
  <div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
      <div>
        <div class="flex justify-center">
          <NuxtImg
            src="/images/revamp/home/fortune-100.png"
            class="object-cover h-auto"
            width="126px"
          />
        </div>

        <div class="mt-5">
          <p
            class="text-2xl lg;text-[40px] leading-[1.2] max-w-xl mx-auto font-light bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent"
          >
            {{ t("home.partnership.fortune100.text") }}
            <span class="font-bold">{{
              t("home.partnership.fortune100.highlight")
            }}</span>
            {{ t("home.partnership.fortune100.text_end") }}
          </p>
        </div>
      </div>

      <div>
        <div class="flex justify-center">
          <NuxtImg
            src="/images/revamp/home/science-exchange.png"
            class="object-cover h-auto"
            width="155px"
          />
        </div>

        <div class="mt-5">
          <p
            class="text-2xl lg;text-[40px] leading-[1.2] max-w-xl mx-auto font-light bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent"
          >
            {{ t("home.partnership.scienceExchange.text") }}
            <span class="font-bold">{{
              t("home.partnership.scienceExchange.highlight")
            }}</span>
            {{ t("home.partnership.scienceExchange.text_end") }}
          </p>
        </div>

        <div class="mt-5 max-w-xl mx-auto">
          <a
            href="https://www.scienceexchange.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="border border-[#20252CE5] px-10 py-2 text-[16px] text-black font-semibold flex items-center gap-3 rounded-[22px] w-fit"
          >
            {{ t("home.partnership.link") }}
            <NuxtImg
              src="/images/revamp/home/web-icon.png"
              class="object-cover h-auto"
              width="16px"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <div class="mx-auto max-w-4xl">
        <p class="text-[#64748B] text-[16px] font-semibold">
          {{ t("home.partnership.description") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
