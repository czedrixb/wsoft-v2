<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 mb-5 gap-y-5">
      <div>
        <h1
          class="font-inter font-[300] text-[24px] lg:text-[40px] xl:text-[50px] text-black md:w-[90%]"
        >
          {{ $t("products.pageTitle") }}
        </h1>
        <!-- <div class="flex justify-center lg:justify-end mt-5">
          <NuxtImg
            src="/images/logo.png"
            class="w-32 sm:w-40 md:w-48 lg:w-56"
            alt="wsoft-logo"
          />
        </div> -->
      </div>
      <div>
        <div class="grid grid-cols-3 md:justify-items-center">
          <NuxtImg
            src="/images/products/microscope-1.png"
            alt="Optical Microscope"
          />
          <NuxtImg
            src="/images/products/microscope-2.png"
            alt="Optical Microscope"
          />
          <NuxtImg
            src="/images/products/microscope-3.png"
            alt="Optical Microscope"
          />
        </div>
        <p
          class="text-center font-[600] text-[14px] text-black font-inter mt-2"
        >
          {{ $t("products.productSubtitle") }}
        </p>
      </div>
    </div>

    <!-- Products -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-20"
    >
      <div v-for="(item, key) in items" :key="key" class="flex flex-col h-full">
        <div
          class="rounded-[6px] text-white text-center p-5 mb-5"
          :style="{ backgroundColor: item.color }"
        >
          <h2 class="font-inter font-[400] text-[20px]">
            {{ item.productName }}
          </h2>
          <span class="font-600 text-[12px] text-[#F8FAFC99]">
            {{ item.subText }}
          </span>
        </div>

        <div class="mb-4">
          <div class="flex items-center gap-x-2 mb-2">
            <div
              class="bg-[#64748B] px-2 py-1 rounded-[2px] text-white font-[600] text-[14px] shrink-0 whitespace-nowrap"
            >
              <span class="font-inter">{{
                $t("products.catalogueNumber")
              }}</span>
            </div>
            <span class="text-black text-[14px] font-[600] flex-1 truncate">
              {{ item.catalogueNumber }}
            </span>
          </div>
          <div class="flex items-center gap-x-2">
            <div
              class="bg-[#64748B] px-2 py-1 rounded-[2px] text-white font-[600] text-[14px] shrink-0 whitespace-nowrap"
            >
              <span class="font-inter">{{ $t("products.productType") }}</span>
            </div>
            <span class="text-black text-[14px] font-[600] flex-1">
              {{ item.productType }}
            </span>
          </div>
        </div>

        <div class="text-black font-[600] text-[14px] mb-5">
          <div class="h-[18rem] overflow-y-auto">
            <p
              class="mt-5 first:mt-0"
              v-for="(desc, index) in item.descriptions"
              :key="index"
            >
              {{ desc }}
            </p>
          </div>
        </div>

        <!-- Image -->
        <NuxtImg
          :src="`/images/products/${item.image}`"
          alt="pore-density"
          class="w-full h-auto mb-5"
        />

        <div class="mt-[3rem]">
          <!-- Included Program -->
          <div class="h-[17rem]">
            <div class="border-b-[1px] border-[#64748B] mb-2">
              <p class="font-inter font-[400] text-[20px] text-black">
                {{ $t("products.includedProgram") }}
              </p>
            </div>
            <div class="text-black text-[14px] font-[600]">
              <div
                v-for="(program, programKey) in item.programs"
                :key="programKey"
                class="mb-4 last:mb-0"
              >
                <p class="mb-1">{{ program.name }}</p>
                <ul class="list-disc ps-7">
                  <li
                    v-for="(feature, index) in program.features"
                    :key="index"
                    class="mb-1 last:mb-0"
                  >
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Intended Use -->
          <div class="h-[15rem]">
            <div class="border-b-[1px] border-[#64748B] mb-2">
              <p class="font-inter font-[400] text-[20px] text-black">
                {{ $t("products.intendedUse") }}
              </p>
            </div>
            <div class="text-black text-[14px] font-[600]">
              <p class="min-h-[20px]">{{ item.intendedUse }}</p>
            </div>
          </div>

          <!-- Research Use Only Disclaimer -->
          <div class="h-[15rem]">
            <div class="border-b-[1px] border-[#64748B] mb-2">
              <p class="font-inter font-[400] text-[20px] text-black">
                {{ $t("products.researchUseDisclaimer") }}
              </p>
            </div>
            <div class="text-black text-[14px] font-[600]">
              <p
                v-for="(line, index) in item.researchUse"
                :key="index"
                class="mb-1 last:mb-0"
              >
                {{ line }}
              </p>
            </div>
          </div>

          <!-- Package Components -->
          <div class="h-[17rem]">
            <div class="border-b-[1px] border-[#64748B] mb-2">
              <p class="font-inter font-[400] text-[20px] text-black">
                {{ $t("products.packageComponents") }}
              </p>
            </div>
            <div class="text-black text-[14px] font-[600]">
              <ol class="list-decimal ps-3">
                <li
                  v-for="(component, index) in item.packageComponents"
                  :key="index"
                  class="mb-1 last:mb-0"
                >
                  {{ component }}
                </li>
              </ol>
            </div>
          </div>

          <!-- Pricing -->
          <div class="h-[15rem]">
            <div class="border-b-[1px] border-[#64748B] mb-2">
              <p class="font-inter font-[400] text-[20px] text-black">
                {{ $t("products.pricing") }}
              </p>
            </div>
            <div class="text-black text-[14px] font-[600]">
              <p class="min-h-[20px]">
                {{ $t("products.pricingUponRequest") }}
              </p>
            </div>
          </div>

          <!-- Lead Time -->
          <div class="h-[15rem]">
            <div class="border-b-[1px] border-[#64748B] mb-2">
              <p class="font-inter font-[400] text-[20px] text-black">
                {{ $t("products.leadTime") }}
              </p>
            </div>
            <div class="text-black text-[14px] font-[600]">
              <p class="min-h-[20px]">{{ $t("products.leadTimeValue") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, watch } from "vue";

const { t, tm, locale } = useI18n();

const items = ref([]);

const updateItems = () => {
  items.value = [
    {
      color: "#6AA05D",
      productName: t("products.items.poreDensity.productName"),
      subText: t("products.items.poreDensity.subText"),
      catalogueNumber: t("products.items.poreDensity.catalogueNumber"),
      productType: t("products.items.poreDensity.productType"),
      descriptions: tm("products.items.poreDensity.descriptions"),
      image: "pore-density.png",
      programs: [
        {
          name: t(
            "products.items.poreDensity.programs.skinPoreDensityAnalysis",
          ),
          features: tm("products.items.poreDensity.programs.features"),
        },
      ],
      intendedUse: t("products.items.poreDensity.intendedUse"),
      researchUse: [
        t("products.researchUseOnly"),
        t("products.notForCosmetic"),
      ],
      packageComponents: tm("products.items.poreDensity.packageComponents"),
    },
    {
      color: "#5790DE",
      productName: t("products.items.skinFlake.productName"),
      subText: t("products.items.skinFlake.subText"),
      catalogueNumber: t("products.items.skinFlake.catalogueNumber"),
      productType: t("products.items.skinFlake.productType"),
      descriptions: tm("products.items.skinFlake.descriptions"),
      image: "flake-area.png",
      programs: [
        {
          name: t("products.items.skinFlake.programs.skinPoreDensityAnalysis"),
          features: [],
        },
        {
          name: t(
            "products.items.skinFlake.programs.skinFlakeAreaRatioAnalysis",
          ),
          features: [],
        },
      ],
      intendedUse: t("products.items.skinFlake.intendedUse"),
      researchUse: [t("products.researchUseOnly"), t("products.notForMedical")],
      packageComponents: tm("products.items.skinFlake.packageComponents"),
    },
    {
      color: "#802FA5",
      productName: t("products.items.skinTexture.productName"),
      subText: t("products.items.skinTexture.subText"),
      catalogueNumber: t("products.items.skinTexture.catalogueNumber"),
      productType: t("products.items.skinTexture.productType"),
      descriptions: tm("products.items.skinTexture.descriptions"),
      image: "skin-roughness.png",
      programs: [
        {
          name: t(
            "products.items.skinTexture.programs.skinPoreDensityAnalysis",
          ),
          features: [],
        },
        {
          name: t(
            "products.items.skinTexture.programs.skinFlakeAreaRatioAnalysis",
          ),
          features: [],
        },
        {
          name: t(
            "products.items.skinTexture.programs.skinTextureRoughnessAnalysis",
          ),
          features: [],
        },
      ],
      intendedUse: t("products.items.skinTexture.intendedUse"),
      researchUse: [
        t("products.researchUseOnly"),
        t("products.notForCosmeticClaims"),
      ],
      packageComponents: tm("products.items.skinTexture.packageComponents"),
    },
    {
      color: "#D86429",
      productName: t("products.items.skinTone.productName"),
      subText: t("products.items.skinTone.subText"),
      catalogueNumber: t("products.items.skinTone.catalogueNumber"),
      productType: t("products.items.skinTone.productType"),
      descriptions: tm("products.items.skinTone.descriptions"),
      image: "skin-tone.png",
      programs: [
        {
          name: t("products.items.skinTone.programs.skinDarknessAnalysis"),
          features: tm("products.items.skinTone.programs.features"),
        },
      ],
      intendedUse: t("products.items.skinTone.intendedUse"),
      researchUse: [
        t("products.researchUseOnly"),
        t("products.notForCosmeticEfficacy"),
      ],
      packageComponents: tm("products.items.skinTone.packageComponents"),
    },
  ];
};

updateItems();

watch(locale, () => {
  updateItems();
});
</script>
