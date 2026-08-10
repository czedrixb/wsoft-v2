<template>
  <div ref="catalogueContainer">
    <div
      v-for="(item, key) in items"
      :key="key"
      class="flex flex-col gap-16 items-center"
    >
      <!-- 1. Decorative title -->
      <div class="catalogue-section text-center w-full select-none">
        <div class="font-inter inline-flex items-start justify-center">
          <span
            class="font-bold text-black tracking-tight leading-none mix-blend-hard-light text-[56px] sm:text-[88px] lg:text-[130px] xl:text-[185px]"
          >SkinArch</span>
          <span
            class="font-bold text-black leading-none mix-blend-hard-light relative text-[24px] sm:text-[38px] lg:text-[56px] xl:text-[80px] -top-1 sm:-top-2 lg:-top-4 xl:-top-6"
          >™</span>
        </div>
        <div
          class="font-inter font-normal uppercase leading-none text-[#125b64] text-[20px] sm:text-[34px] lg:text-[50px] xl:text-[70px]"
          style="text-shadow: 0 0 24px #00c8ff, 0 0 48px rgba(0, 200, 255, 0.3)"
        >
          LC-OCT ANALYZER
        </div>
      </div>

      <!-- 2. Description -->
      <div class="catalogue-section max-w-3xl w-full text-center">
        <p
          v-for="(desc, i) in item.descriptions"
          :key="i"
          class="font-opensans text-[#20252CE5] text-[15px] leading-relaxed"
        >
          {{ desc }}
        </p>
      </div>

      <!-- 3. Catalogue Number + Product Type -->
      <div class="catalogue-section max-w-3xl w-full space-y-3">
        <div class="flex items-center gap-x-3 flex-wrap gap-y-2">
          <div
            class="bg-[#64748B] px-2 py-1 rounded-[2px] text-white font-inter font-[600] text-[14px] shrink-0 whitespace-nowrap"
          >
            {{ $t("products.catalogueNumber") }}
          </div>
          <span class="text-[#20252CE5] text-[14px] font-[600] break-all">{{
            item.catalogueNumber
          }}</span>
        </div>
        <div class="flex items-center gap-x-3 flex-wrap gap-y-2">
          <div
            class="bg-[#64748B] px-2 py-1 rounded-[2px] text-white font-inter font-[600] text-[14px] shrink-0 whitespace-nowrap"
          >
            {{ $t("products.productType") }}
          </div>
          <span class="text-[#20252CE5] text-[14px] font-[600]">{{
            item.productType
          }}</span>
        </div>
      </div>

      <!-- 4. Included Program -->
      <div class="catalogue-section max-w-3xl w-full">
        <div class="border-b border-[#64748B] pb-2 mb-4">
          <p class="font-satoshi font-normal text-[24px] leading-8 text-[#0a1628]">
            {{ $t("products.includedProgram") }}
          </p>
        </div>
        <div
          v-for="(program, pi) in item.programs"
          :key="pi"
          class="text-[#20252CE5] text-[14px] font-[600]"
        >
          <p class="mb-2">{{ program.name }}</p>
          <ul class="list-disc ps-6 space-y-1">
            <li v-for="(feature, fi) in program.features" :key="fi">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>

      <!-- 5. Intended Use -->
      <div class="catalogue-section max-w-3xl w-full">
        <div class="border-b border-[#64748B] pb-2 mb-4">
          <p class="font-satoshi font-normal text-[24px] leading-8 text-[#0a1628]">
            {{ $t("products.intendedUse") }}
          </p>
        </div>
        <p class="text-[#20252CE5] text-[14px] font-[600]">
          {{ item.intendedUse }}
        </p>
      </div>

      <!-- 6. Research Use Disclaimer -->
      <div class="catalogue-section max-w-3xl w-full">
        <div class="border-b border-[#64748B] pb-2 mb-4">
          <p class="font-satoshi font-normal text-[24px] leading-8 text-[#0a1628]">
            {{ $t("products.researchUseDisclaimer") }}
          </p>
        </div>
        <div class="text-[#20252CE5] text-[14px] font-[600] space-y-1">
          <p v-for="(line, li) in item.researchUse" :key="li">{{ line }}</p>
        </div>
      </div>

      <!-- 7. Feature Cards -->
      <div class="catalogue-section w-full">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          <div
            v-for="(card, ci) in featureCards"
            :key="ci"
            class="rounded-[14px] p-5 flex flex-col gap-3 bg-white/20 backdrop-blur-sm border border-white/10"
            :style="{ borderTop: `1.5px solid ${card.color}` }"
          >
            <span
              class="mdi text-[28px] leading-none"
              :class="`mdi-${card.icon}`"
              :style="{ color: card.color }"
            />
            <div>
              <p
                class="font-satoshi font-bold text-[12px] text-[#0a1628] uppercase tracking-wider leading-tight"
              >
                {{ card.label }}
              </p>
              <p class="font-opensans text-[12px] text-[#20252CE5] mt-1 leading-snug">
                {{ card.sub }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 8. Report Preview -->
      <!-- Note: this image should be anonymized before production — see plan notes -->
      <div class="catalogue-section w-full max-w-4xl">
        <NuxtImg
          src="/images/revamp/products/report-preview-lcoct.png"
          class="w-full h-auto rounded-[14px] shadow-xl"
          :alt="$t('products.items.lcOct.reportAlt')"
        />
      </div>

      <!-- 9. Package Components / Pricing / Lead Time -->
      <div
        class="catalogue-section grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
      >
        <!-- Package Components -->
        <div>
          <div class="border-b border-[#64748B] pb-2 mb-4">
            <p class="font-satoshi font-normal text-[24px] leading-8 text-[#0a1628]">
              {{ $t("products.packageComponents") }}
            </p>
          </div>
          <ol class="list-decimal ps-4 text-[#20252CE5] text-[14px] font-[600] space-y-1">
            <li
              v-for="(comp, ci) in item.packageComponents"
              :key="ci"
            >
              {{ comp }}
            </li>
          </ol>
        </div>

        <!-- Pricing -->
        <div>
          <div class="border-b border-[#64748B] pb-2 mb-4">
            <p class="font-satoshi font-normal text-[24px] leading-8 text-[#0a1628]">
              {{ $t("products.pricing") }}
            </p>
          </div>
          <p class="text-[#20252CE5] text-[14px] font-[600]">
            {{ item.pricing || $t("products.pricingUponRequest") }}
          </p>
        </div>

        <!-- Lead Time -->
        <div>
          <div class="border-b border-[#64748B] pb-2 mb-4">
            <p class="font-satoshi font-normal text-[24px] leading-8 text-[#0a1628]">
              {{ $t("products.leadTime") }}
            </p>
          </div>
          <p class="text-[#20252CE5] text-[14px] font-[600]">
            {{ item.leadTime || $t("products.leadTimeValue") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, watch, onMounted, onUnmounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { t, tm, locale } = useI18n();
const catalogueContainer = ref(null);
let ctx = null;

const items = ref([]);
const featureCards = ref([]);

const updateItems = () => {
  items.value = [
    {
      productName: t("products.items.lcOct.productName"),
      subText: t("products.items.lcOct.subText"),
      catalogueNumber: t("products.items.lcOct.catalogueNumber"),
      productType: t("products.items.lcOct.productType"),
      descriptions: tm("products.items.lcOct.descriptions"),
      programs: [
        {
          name: t("products.items.lcOct.programs.name"),
          features: tm("products.items.lcOct.programs.features"),
        },
      ],
      intendedUse: t("products.items.lcOct.intendedUse"),
      researchUse: [
        t("products.researchUseOnly"),
        t("products.notForCosmetic"),
      ],
      packageComponents: tm("products.items.lcOct.packageComponents"),
      pricing: t("products.items.lcOct.pricing"),
      leadTime: t("products.items.lcOct.leadTime"),
    },
  ];
};

const updateFeatureCards = () => {
  featureCards.value = [
    {
      label: t("products.featureCards.csv.label"),
      sub: t("products.featureCards.csv.sub"),
      icon: "file-delimited-outline",
      color: "#6d28d9",
    },
    {
      label: t("products.featureCards.dashboard.label"),
      sub: t("products.featureCards.dashboard.sub"),
      icon: "view-dashboard-outline",
      color: "#00b8cc",
    },
    {
      label: t("products.featureCards.mesh.label"),
      sub: t("products.featureCards.mesh.sub"),
      icon: "cube-outline",
      color: "#a78bfa",
    },
    {
      label: t("products.featureCards.pdf.label"),
      sub: t("products.featureCards.pdf.sub"),
      icon: "file-pdf-box",
      color: "#00e5ff",
    },
  ];
};

updateItems();
updateFeatureCards();

const initAnimations = () => {
  ctx?.revert();

  ctx = gsap.context(() => {
    const sections =
      catalogueContainer.value?.querySelectorAll(".catalogue-section");
    if (!sections?.length) return;

    sections.forEach((section) => {
      gsap.set(section, { opacity: 0, y: 24 });
      gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });
  }, catalogueContainer.value);
};

onMounted(async () => {
  await nextTick();
  initAnimations();
});

onUnmounted(() => {
  ctx?.revert();
});

watch(locale, async () => {
  updateItems();
  updateFeatureCards();
  await nextTick();
  initAnimations();
});
</script>
