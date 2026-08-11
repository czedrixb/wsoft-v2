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
      <div class="catalogue-section max-w-3xl w-full text-center space-y-3">
        <p
          v-for="(desc, i) in item.descriptions"
          :key="i"
          class="font-opensans text-[#20252CE5] text-[15px] leading-relaxed"
        >
          {{ desc }}
        </p>
      </div>

      <!-- 3. Development Status + Product Type -->
      <div class="catalogue-section max-w-3xl w-full space-y-3">
        <div class="flex items-start gap-x-3 flex-wrap gap-y-2">
          <div
            class="bg-[#E96F23] px-2 py-1 rounded-[2px] text-white font-inter font-[600] text-[14px] shrink-0 whitespace-nowrap"
          >
            {{ $t("products.developmentStatus") }}
          </div>
          <span class="text-[#20252CE5] text-[14px] font-[600]">{{
            item.developmentStatus
          }}</span>
        </div>
        <div class="flex items-start gap-x-3 flex-wrap gap-y-2">
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

      <!-- 5. Core Analysis Capabilities -->
      <div class="catalogue-section max-w-3xl w-full">
        <div class="border-b border-[#64748B] pb-2 mb-4">
          <p class="font-satoshi font-normal text-[24px] leading-8 text-[#0a1628]">
            {{ $t("products.coreCapabilities") }}
          </p>
        </div>
        <div class="space-y-4">
          <div v-for="(cap, capi) in item.capabilities" :key="capi">
            <p class="font-satoshi font-bold text-[15px] text-[#0a1628] mb-1">
              {{ cap.label }}
            </p>
            <p class="text-[#20252CE5] text-[14px] font-[600]">{{ cap.body }}</p>
          </div>
        </div>
      </div>

      <!-- 6. Intellectual Property -->
      <div class="catalogue-section max-w-3xl w-full">
        <div class="border-b border-[#64748B] pb-2 mb-4">
          <p class="font-satoshi font-normal text-[24px] leading-8 text-[#0a1628]">
            {{ $t("products.intellectualProperty") }}
          </p>
        </div>
        <p class="text-[#20252CE5] text-[14px] font-[600]">{{ item.ip.portfolio }}</p>

        <p class="font-satoshi font-bold text-[15px] text-[#0a1628] mt-4 mb-2">
          {{ item.ip.patentsHeading }}
        </p>
        <ul class="list-disc ps-6 space-y-2">
          <li
            v-for="(patent, pti) in item.ip.patents"
            :key="pti"
            class="text-[#20252CE5] text-[14px] font-[600]"
          >
            <span>{{ patent.title }}</span>
            <span class="block text-[#64748B] font-[600]">{{ patent.number }}</span>
          </li>
        </ul>

        <p class="text-[#64748B] text-[13px] font-[600] mt-4">{{ item.ip.note }}</p>
        <p class="text-[#64748B] text-[13px] font-[600] mt-1">{{ item.ip.asOf }}</p>
      </div>

      <!-- 7. Interoperability & Integration -->
      <div class="catalogue-section max-w-3xl w-full">
        <div class="border-b border-[#64748B] pb-2 mb-4">
          <p class="font-satoshi font-normal text-[24px] leading-8 text-[#0a1628]">
            {{ $t("products.interoperability") }}
          </p>
        </div>
        <ul class="list-disc ps-6 space-y-2 text-[#20252CE5] text-[14px] font-[600]">
          <li v-for="(line, ii) in item.interoperability" :key="ii">{{ line }}</li>
        </ul>
      </div>

      <!-- 8. Intended Use -->
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

      <!-- 9. Research Use Disclaimer -->
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

      <!-- 10. Feature Cards -->
      <div class="catalogue-section w-full">
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
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

      <!-- 11. Report Preview -->
      <div class="catalogue-section w-full max-w-4xl">
        <NuxtImg
          src="/images/revamp/products/report-preview-lcoct.png"
          class="w-full h-auto rounded-[14px] shadow-xl"
          :alt="$t('products.items.lcOct.reportAlt')"
        />
      </div>

      <!-- 12. Availability -->
      <div class="catalogue-section max-w-3xl w-full">
        <div class="border-b border-[#64748B] pb-2 mb-4">
          <p class="font-satoshi font-normal text-[24px] leading-8 text-[#0a1628]">
            {{ $t("products.availability") }}
          </p>
        </div>
        <div class="space-y-3">
          <div
            v-for="(row, ri) in item.availability"
            :key="ri"
            class="flex items-start gap-x-3 flex-wrap gap-y-1"
          >
            <div
              class="bg-[#64748B] px-2 py-1 rounded-[2px] text-white font-inter font-[600] text-[14px] shrink-0 whitespace-nowrap"
            >
              {{ row.label }}
            </div>
            <span class="text-[#20252CE5] text-[14px] font-[600] flex-1 min-w-[240px]">{{
              row.value
            }}</span>
          </div>
        </div>
      </div>

      <!-- 13. Planned Configuration at Launch -->
      <div class="catalogue-section max-w-3xl w-full">
        <div class="border-b border-[#64748B] pb-2 mb-4">
          <p class="font-satoshi font-normal text-[24px] leading-8 text-[#0a1628]">
            {{ $t("products.plannedConfiguration") }}
          </p>
        </div>
        <p class="text-[#20252CE5] text-[14px] font-[600] mb-3">
          {{ item.plannedConfigurationNote }}
        </p>
        <ol class="list-decimal ps-4 text-[#20252CE5] text-[14px] font-[600] space-y-1">
          <li v-for="(comp, ci) in item.packageComponents" :key="ci">{{ comp }}</li>
        </ol>
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
      developmentStatus: t("products.items.lcOct.developmentStatus"),
      productType: t("products.items.lcOct.productType"),
      descriptions: tm("products.items.lcOct.descriptions"),
      programs: [
        {
          name: t("products.items.lcOct.programs.name"),
          features: tm("products.items.lcOct.programs.features"),
        },
      ],
      // Built from individual t() calls rather than tm() on an array of
      // objects: tm() on nested objects can return message functions instead
      // of plain strings on this vue-i18n RC, which would render blank.
      capabilities: [
        {
          label: t("products.items.lcOct.capabilities.reconstruction.label"),
          body: t("products.items.lcOct.capabilities.reconstruction.body"),
        },
        {
          label: t("products.items.lcOct.capabilities.confidence.label"),
          body: t("products.items.lcOct.capabilities.confidence.body"),
        },
        {
          label: t("products.items.lcOct.capabilities.metrics.label"),
          body: t("products.items.lcOct.capabilities.metrics.body"),
        },
      ],
      ip: {
        portfolio: t("products.items.lcOct.ip.portfolio"),
        patentsHeading: t("products.items.lcOct.ip.patentsHeading"),
        patents: [
          {
            title: t("products.items.lcOct.ip.patentA.title"),
            number: t("products.items.lcOct.ip.patentA.number"),
          },
          {
            title: t("products.items.lcOct.ip.patentB.title"),
            number: t("products.items.lcOct.ip.patentB.number"),
          },
          {
            title: t("products.items.lcOct.ip.patentC.title"),
            number: t("products.items.lcOct.ip.patentC.number"),
          },
        ],
        note: t("products.items.lcOct.ip.note"),
        asOf: t("products.items.lcOct.ip.asOf"),
      },
      interoperability: tm("products.items.lcOct.interoperability"),
      intendedUse: t("products.items.lcOct.intendedUse"),
      researchUse: [
        t("products.researchUseOnly"),
        t("products.notForCosmetic"),
      ],
      availability: [
        {
          label: t("products.items.lcOct.availability.statusLabel"),
          value: t("products.items.lcOct.availability.statusValue"),
        },
        {
          label: t("products.items.lcOct.availability.launchLabel"),
          value: t("products.items.lcOct.availability.launchValue"),
        },
        {
          label: t("products.items.lcOct.availability.collaborationLabel"),
          value: t("products.items.lcOct.availability.collaborationValue"),
        },
        {
          label: t("products.items.lcOct.availability.pricingLabel"),
          value: t("products.items.lcOct.availability.pricingValue"),
        },
      ],
      plannedConfigurationNote: t(
        "products.items.lcOct.plannedConfigurationNote"
      ),
      packageComponents: tm("products.items.lcOct.packageComponents"),
    },
  ];
};

const updateFeatureCards = () => {
  featureCards.value = [
    {
      label: t("products.featureCards.confidence.label"),
      sub: t("products.featureCards.confidence.sub"),
      icon: "blur-radial",
      color: "#0891b2",
    },
    {
      label: t("products.featureCards.mesh.label"),
      sub: t("products.featureCards.mesh.sub"),
      icon: "cube-outline",
      color: "#a78bfa",
    },
    {
      label: t("products.featureCards.ip.label"),
      sub: t("products.featureCards.ip.sub"),
      icon: "certificate-outline",
      color: "#4c1d95",
    },
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

// The catalogue now has 13 .catalogue-section blocks, each starting at
// opacity: 0 with toggleActions "play none none none". ScrollTrigger
// positions are computed here, before the report-preview and hero images
// finish loading; once they resolve, later sections shift down and a
// stale trigger can leave a section permanently invisible. Refreshing on
// window "load" recomputes positions against the final layout.
const refreshOnLoad = () => ScrollTrigger.refresh();

onMounted(async () => {
  await nextTick();
  initAnimations();
  window.addEventListener("load", refreshOnLoad);
});

onUnmounted(() => {
  ctx?.revert();
  window.removeEventListener("load", refreshOnLoad);
});

watch(locale, async () => {
  updateItems();
  updateFeatureCards();
  await nextTick();
  initAnimations();
});
</script>
