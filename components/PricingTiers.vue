<template>
  <div>
    <div class="text-center">
      <p class="text-[#F8FAFC99] font-semibold text-[16px]">
        {{ $t("wiz.pricing_tiers") }}
      </p>
    </div>

    <div class="mt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div
          v-for="tier in tiers"
          :key="tier.key"
          class="rounded-[14px] p-8 h-[38rem] relative overflow-hidden flex flex-col transition-all duration-300 card-container group"
        >
          <div class="absolute inset-0 bg-[#F8FAFC] z-10 rounded-[14px]"></div>

          <div class="text-center relative z-20">
            <h4
              class="text-[#64748B] text-[48px] font-[300] transition-all duration-300 group-hover:text-[#2376E9]"
            >
              {{ $t(`wiz.tiers.${tier.key}.name`) }}
            </h4>
          </div>

          <div class="mt-8 relative z-20">
            <div class="space-y-3">
              <div
                v-for="feature in getTierFeatures(tier.key)"
                :key="feature.key"
                class="flex gap-4 items-center"
              >
                <NuxtImg
                  width="16px"
                  height="100%"
                  src="/images/wiz-assistant/check.png"
                  alt="check"
                />

                <span class="text-black font-inter text-[16px]">
                  {{ $t(`wiz.tiers.${tier.key}.features.${feature.key}`) }}
                </span>
              </div>
            </div>
          </div>

          <div
            class="absolute bottom-0 left-[60%] transition-all duration-300 z-20"
          >
            <NuxtImg
              width="200px"
              height="100%"
              src="/images/wiz-assistant/chatbot-icon.png"
              alt="wiz-icon"
              class="transition-all duration-300 grayscale group-hover:grayscale-0"
            />
          </div>

          <div class="mt-auto relative z-20">
            <div
              class="rounded-[22px] w-full py-2 px-4 flex justify-center gap-5 items-center transition-all duration-300 bg-[#F8FAFC] relative group/btn"
              :style="{
                background:
                  'linear-gradient(#f8fafc, #f8fafc) padding-box, linear-gradient(135deg, #2376e9, #02c7d0) border-box',
                border: '2px solid transparent',
                borderRadius: '22px',
              }"
            >
              <span
                :style="{
                  background: 'linear-gradient(135deg, #2376e9, #02c7d0)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }"
              >
                {{ $t(`wiz.tiers.${tier.key}.price`) }}
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tiers = [
  { key: "lite" },
  { key: "standard" },
  { key: "business" },
  { key: "enterprise" },
];

const getTierFeatures = (tierKey) => {
  const featureMap = {
    lite: ["basic_guidance", "faq_responses"],
    standard: [
      "basic_guidance",
      "faq_responses",
      "document_request",
      "operational_guidance",
    ],
    business: [
      "basic_guidance",
      "faq_responses",
      "document_request",
      "operational_guidance",
      "customized_responses",
      "strengthened_support",
    ],
    enterprise: [
      "basic_guidance",
      "faq_responses",
      "document_request",
      "operational_guidance",
      "customized_responses",
      "strengthened_support",
      "large_organizations",
      "internal_integrations",
      "custom_features",
    ],
  };

  return featureMap[tierKey].map((key) => ({ key }));
};
</script>

<style scoped>
.card-container {
  position: relative;
  transition: all 0.3s ease;
}

.card-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    #a9d3d1,
    #d0e0f0,
    #ebdfbd,
    #c9e0ed,
    #fff0ea,
    #cdfcf2,
    #e4efff
  );
  border-radius: 14px;
  z-index: 0;
  transition: all 0.3s ease;
}

.card-container:hover::before {
  background: linear-gradient(135deg, #2376e9, #02c7d0);
  box-shadow: 4px 8px 24px 0px rgba(2, 199, 208, 0.48);
}

.border-gradient {
  border: 1px solid transparent;
  background-image:
    linear-gradient(#f8fafc, #f8fafc),
    linear-gradient(
      135deg,
      #a9d3d1,
      #d0e0f0,
      #ebdfbd,
      #c9e0ed,
      #fff0ea,
      #cdfcf2,
      #e4efff
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
</style>
