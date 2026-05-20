<template>
  <div class="my-40" ref="termsHeaderContainer">
    <div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10">
      <div class="terms-header-section relative">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]"
        >
          <div class="self-center">
            <h2
              class="text-[60px] leading-tight font-bold max-w-lg bg-gradient-to-r from-[#FFD5EB] to-[#E1D176] bg-clip-text text-transparent"
            >
              {{ t("terms.title") }}
            </h2>
            <p
              class="text-[#20252CE5] font-semibold text-[16px] mt-8 mb-5 max-w-lg"
            >
              {{
                t("terms.welcome", {
                  brand: brandName,
                  company: brandCompany,
                  regNo: brandBusinessId,
                  siteUrl: brandSiteUrl,
                })
              }}
            </p>

            <p class="text-[#20252CE5] font-semibold text-[16px] max-w-lg">
              {{ t("terms.disclaimer") }}
            </p>
          </div>

          <div class="terms-header-img">
            <NuxtImg
              src="/images/revamp/terms-conditions/big-img.png"
              class="h-auto object-cover rounded-[14px]"
              width="1101px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "vue-i18n";

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n();
const termsHeaderContainer = ref(null);
let ctx = null;

const { brandName, brandCompany, brandSiteUrl, brandBusinessId } = useBrand();

onMounted(() => {
  ctx = gsap.context(() => {
    const section = termsHeaderContainer.value.querySelector(
      ".terms-header-section",
    );
    const img = section.querySelector(".terms-header-img");

    gsap.set(img, { opacity: 0, y: 30 });
    gsap.to(img, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.2,
    });
  }, termsHeaderContainer.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
