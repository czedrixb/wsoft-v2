<template>
  <div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10">
    <div class="space-y-10">
      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.services.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.services.content") }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.intellectualProperty.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.intellectualProperty.content") }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.useOfWebsite.title") }}
        </h4>

        <div class="mt-5 space-y-2">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.useOfWebsite.permittedUse.title") }}
          </p>

          <div>
            <p class="text-[#20252CE5] font-semibold text-[16px]">
              {{ t("terms.sections.useOfWebsite.permittedUse.description") }}
            </p>
            <div class="px-3">
              <ul class="list-disc list-inside">
                <li
                  v-for="(item, index) in permittedUseItems"
                  :key="index"
                  class="text-[#20252CE5] font-semibold text-[16px]"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p class="text-[#20252CE5] font-semibold text-[16px]">
              {{ t("terms.sections.useOfWebsite.contactForm.title") }}
            </p>
            <p class="text-[#20252CE5] font-semibold text-[16px]">
              {{ t("terms.sections.useOfWebsite.contactForm.content") }}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.disclaimer.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.disclaimer.content") }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.limitationOfLiability.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.limitationOfLiability.content") }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.thirdPartyLinks.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.thirdPartyLinks.content") }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.changesToTerms.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.changesToTerms.content") }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.governingLaw.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.governingLaw.content") }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.contactUs.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.contactUs.description") }}
          </p>
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.contactUs.companyName") }}
          </p>
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.contactUs.website") }}
          </p>
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.contactUs.duns") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const permittedUseItems = computed(() => {
  return [
    t("terms.sections.useOfWebsite.permittedUse.items.item1"),
    t("terms.sections.useOfWebsite.permittedUse.items.item2"),
    t("terms.sections.useOfWebsite.permittedUse.items.item3"),
    t("terms.sections.useOfWebsite.permittedUse.items.item4"),
  ];
});
</script>
