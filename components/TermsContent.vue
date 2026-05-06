<template>
  <div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10">
    <div class="space-y-10">
      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.services.title", { brand: brandName }) }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.services.content", { brand: brandName }) }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{
            t("terms.sections.intellectualProperty.title", { brand: brandName })
          }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{
              t("terms.sections.intellectualProperty.content", {
                brand: brandName,
              })
            }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.useOfWebsite.title", { brand: brandName }) }}
        </h4>

        <div class="mt-5 space-y-2">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{
              t("terms.sections.useOfWebsite.permittedUse.title", {
                brand: brand,
              })
            }}
          </p>

          <div>
            <p class="text-[#20252CE5] font-semibold text-[16px]">
              {{
                t("terms.sections.useOfWebsite.permittedUse.description", {
                  brand: brand,
                })
              }}
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
              {{
                t("terms.sections.useOfWebsite.contactForm.title", {
                  brand: brand,
                })
              }}
            </p>
            <p class="text-[#20252CE5] font-semibold text-[16px]">
              {{
                t("terms.sections.useOfWebsite.contactForm.content", {
                  brand: brand,
                })
              }}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.disclaimer.title", { brand: brandName }) }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.disclaimer.content", { brand: brandName }) }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{
            t("terms.sections.limitationOfLiability.title", {
              brand: brandName,
            })
          }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{
              t("terms.sections.limitationOfLiability.content", {
                brand: brand,
              })
            }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.thirdPartyLinks.title", { brand: brandName }) }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{
              t("terms.sections.thirdPartyLinks.content", { brand: brandName })
            }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.changesToTerms.title", { brand: brandName }) }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{
              t("terms.sections.changesToTerms.content", { brand: brandName })
            }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.governingLaw.title", { brand: brandName }) }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{ t("terms.sections.governingLaw.content", { brand: brandName }) }}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-[#64748B] text-[24px] font-satoshi">
          {{ t("terms.sections.contactUs.title", { brand: brandName }) }}
        </h4>

        <div class="mt-5">
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{
              t("terms.sections.contactUs.description", { brand: brandName })
            }}
          </p>
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{
              t("terms.sections.contactUs.companyName", {
                brand: brandName,
                company: brandCompany,
              })
            }}
          </p>
          <p class="text-[#20252CE5] font-semibold text-[16px]">
            {{
              t("terms.sections.contactUs.website", {
                contactUrl: brandSiteUrl,
              })
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, computed, onMounted } from "vue";
const { t } = useI18n();

const permittedUseItems = computed(() => {
  return [
    t("terms.sections.useOfWebsite.permittedUse.items.item1"),
    t("terms.sections.useOfWebsite.permittedUse.items.item2"),
    t("terms.sections.useOfWebsite.permittedUse.items.item3"),
    t("terms.sections.useOfWebsite.permittedUse.items.item4"),
  ];
});

const isUedu = ref(false);
onMounted(() => {
  isUedu.value = window.location.hostname === "ueducation.co.kr";
});

const { brandName, brandCompany, brandSiteUrl } = useBrand();
</script>
