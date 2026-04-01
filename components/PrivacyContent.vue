<template>
  <div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10">
    <div class="space-y-10">
      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("privacy.sections.informationCollected.title") }}
        </h4>

        <div class="mt-5 space-y-5">
          <div>
            <p class="text-[#20252CE5] font-semibold text-[16px]">
              {{ t("privacy.sections.informationCollected.provided.title") }}
            </p>

            <div class="mt-1">
              <p class="text-[#20252CE5] font-semibold text-[16px]">
                {{
                  t(
                    "privacy.sections.informationCollected.provided.description",
                  )
                }}
              </p>
              <div class="px-3">
                <ul class="list-disc list-inside">
                  <li
                    v-for="(item, index) in providedInfoItems"
                    :key="index"
                    class="text-[#20252CE5] font-semibold text-[16px]"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <p class="text-[#20252CE5] font-semibold text-[16px]">
              {{ t("privacy.sections.informationCollected.automated.title") }}
            </p>

            <div class="mt-1">
              <p class="text-[#20252CE5] font-semibold text-[16px]">
                {{
                  t(
                    "privacy.sections.informationCollected.automated.description",
                  )
                }}
              </p>
              <div class="px-3">
                <ul class="list-disc list-inside">
                  <li
                    v-for="(item, index) in automatedInfoItems"
                    :key="index"
                    class="text-[#20252CE5] font-semibold text-[16px]"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
              <p class="text-[#20252CE5] font-semibold text-[16px]">
                {{ t("privacy.sections.informationCollected.automated.note") }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("privacy.sections.howWeUse.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("privacy.sections.howWeUse.description") }}
          </p>
          <div class="px-3">
            <ul class="list-disc list-inside">
              <li
                v-for="(item, index) in howWeUseItems"
                :key="index"
                class="text-[#20252CE5] font-semibold text-[16px]"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("privacy.sections.howWeUse.note") }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("privacy.sections.cookies.title") }}
        </h4>

        <div class="mt-5 space-y-4">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("privacy.sections.cookies.description") }}
          </p>

          <div>
            <p class="text-[#20252CE5] font-semibold text-[16px]">
              {{ t("privacy.sections.cookies.types.title") }}
            </p>
            <div class="px-3">
              <ul class="list-disc list-inside">
                <li
                  v-for="(item, index) in cookieTypesItems"
                  :key="index"
                  class="text-[#20252CE5] font-semibold text-[16px]"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("privacy.sections.dataRetention.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("privacy.sections.dataRetention.content") }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("privacy.sections.dataSecurity.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("privacy.sections.dataSecurity.content") }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("privacy.sections.thirdPartyServices.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("privacy.sections.thirdPartyServices.content") }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("privacy.sections.yourRights.title") }}
        </h4>

        <div class="mt-5 space-y-5">
          <div class="mt-1">
            <p class="text-[#20252CE5] font-semibold text-[16px]">
              {{ t("privacy.sections.yourRights.description") }}
            </p>
            <div class="px-3">
              <ul class="list-disc list-inside">
                <li
                  v-for="(item, index) in yourRightsItems"
                  :key="index"
                  class="text-[#20252CE5] font-semibold text-[16px]"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
            <p class="text-[#20252CE5] font-semibold text-[16px]">
              {{ t("privacy.sections.yourRights.note") }}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("privacy.sections.internationalUsers.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("privacy.sections.internationalUsers.content") }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("privacy.sections.changesToPolicy.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("privacy.sections.changesToPolicy.content") }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("privacy.sections.contactUs.title") }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("privacy.sections.contactUs.description") }}
          </p>
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("privacy.sections.contactUs.companyName") }}
          </p>
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("privacy.sections.contactUs.website") }}
          </p>
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("privacy.sections.contactUs.duns") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const providedInfoItems = computed(() => {
  return [
    t("privacy.sections.informationCollected.provided.items.item1"),
    t("privacy.sections.informationCollected.provided.items.item2"),
    t("privacy.sections.informationCollected.provided.items.item3"),
    t("privacy.sections.informationCollected.provided.items.item4"),
  ];
});

const automatedInfoItems = computed(() => {
  return [
    t("privacy.sections.informationCollected.automated.items.item1"),
    t("privacy.sections.informationCollected.automated.items.item2"),
    t("privacy.sections.informationCollected.automated.items.item3"),
    t("privacy.sections.informationCollected.automated.items.item4"),
  ];
});

const howWeUseItems = computed(() => {
  return [
    t("privacy.sections.howWeUse.items.item1"),
    t("privacy.sections.howWeUse.items.item2"),
    t("privacy.sections.howWeUse.items.item3"),
    t("privacy.sections.howWeUse.items.item4"),
  ];
});

const cookieTypesItems = computed(() => {
  return [
    t("privacy.sections.cookies.types.items.item1"),
    t("privacy.sections.cookies.types.items.item2"),
  ];
});

const yourRightsItems = computed(() => {
  return [
    t("privacy.sections.yourRights.items.item1"),
    t("privacy.sections.yourRights.items.item2"),
    t("privacy.sections.yourRights.items.item3"),
    t("privacy.sections.yourRights.items.item4"),
    t("privacy.sections.yourRights.items.item5"),
  ];
});
</script>
