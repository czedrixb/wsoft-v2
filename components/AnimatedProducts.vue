<template>
  <div ref="productsContainer">
    <!-- Section 1: Deep Learning  -->
    <div class="product-section bg-[#e2e8f0]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
        >
          <div class="self-center">
            <h3 class="text-[#64748B] text-[24px] font-[400]">
              {{ t("services.sections.deepLearning.title") }}
            </h3>
            <ul class="list-disc pl-5 mt-8">
              <li
                v-for="(item, index) in deepLearningItems"
                :key="index"
                class="text-[#20252CE5] font-semibold text-md mb-2"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div
            class="section-animate-img hidden lg:flex items-center justify-center"
          >
            <img
              src="/images/revamp/products-services/deep-learning-animate.png"
              class="h-auto object-cover"
              width="291px"
            />
          </div>
          <div class="section-main-img">
            <NuxtImg
              src="/images/revamp/products-services/deep-learning.png"
              :alt="t('services.sections.deepLearning.imageAlt')"
              class="h-auto max-w-full object-cover"
              width="700px"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2: Real Time Streaming -->
    <div class="product-section bg-[#ffffff]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
        >
          <div class="section-main-img">
            <NuxtImg
              src="/images/revamp/products-services/real-time.png"
              :alt="t('services.sections.realTimeStreaming.imageAlt')"
              class="h-auto max-w-full object-cover"
              width="700px"
            />
          </div>
          <div
            class="section-animate-img hidden lg:flex items-center justify-center"
          >
            <img
              src="/images/revamp/products-services/real-time-animate.png"
              class="h-auto object-cover"
              width="291px"
            />
          </div>
          <div class="self-center">
            <h3 class="text-[#64748B] text-[24px] font-[400]">
              {{ t("services.sections.realTimeStreaming.title") }}
            </h3>
            <ul class="list-disc pl-5 mt-8">
              <li
                v-for="(item, index) in realTimeStreamingItems"
                :key="index"
                class="text-[#20252CE5] font-semibold text-md mb-2"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3: AI Data Integration  -->
    <div class="product-section bg-[#e2e8f0]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
        >
          <div class="self-center">
            <h3 class="text-[#64748B] text-[24px] font-[400]">
              {{ t("services.sections.aiDataIntegration.title") }}
            </h3>
            <ul class="list-disc pl-5 mt-8">
              <li
                v-for="(item, index) in aiDataIntegrationItems"
                :key="index"
                class="text-[#20252CE5] font-semibold text-md mb-2"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div
            class="section-animate-img hidden lg:flex items-center justify-center"
          >
            <img
              src="/images/revamp/products-services/ai-data-animate.png"
              class="h-auto object-cover"
              width="291px"
            />
          </div>
          <div class="section-main-img">
            <NuxtImg
              src="/images/revamp/products-services/ai-data.png"
              :alt="t('services.sections.aiDataIntegration.imageAlt')"
              class="h-auto max-w-full object-cover"
              width="700px"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Section 4: Custom Design -->
    <div class="product-section bg-[#ffffff]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
        >
          <div class="section-main-img">
            <NuxtImg
              src="/images/revamp/products-services/custom-media.png"
              :alt="t('services.sections.customDesign.imageAlt')"
              class="h-auto max-w-full object-cover"
              width="700px"
            />
          </div>
          <div
            class="section-animate-img hidden lg:flex items-center justify-center"
          >
            <img
              src="/images/revamp/products-services/custom-media-animate.png"
              class="h-auto object-cover"
              width="291px"
            />
          </div>
          <div class="self-center">
            <h3 class="text-[#64748B] text-[24px] font-[400]">
              {{ t("services.sections.customDesign.title") }}
            </h3>
            <ul class="list-disc pl-5 mt-8">
              <li
                v-for="(item, index) in customDesignItems"
                :key="index"
                class="text-[#20252CE5] font-semibold text-md mb-2"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 5: Content Media-->
    <div class="product-section bg-[#e2e8f0]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
        >
          <div class="self-center">
            <h3 class="text-[#64748B] text-[24px] font-[400]">
              {{ t("services.sections.contentMedia.title") }}
            </h3>
            <ul class="list-disc pl-5 mt-8">
              <li
                v-for="(item, index) in contentMediaItems"
                :key="index"
                class="text-[#20252CE5] font-semibold text-md mb-2"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div
            class="section-animate-img hidden lg:flex items-center justify-center"
          >
            <img
              src="/images/revamp/products-services/content-media-animate.png"
              class="h-auto object-cover"
              width="291px"
            />
          </div>
          <div class="section-main-img">
            <NuxtImg
              src="/images/revamp/products-services/content-media.png"
              :alt="t('services.sections.contentMedia.imageAlt')"
              class="h-auto max-w-full object-cover"
              width="700px"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Section 6: Admin Business  -->
    <div class="product-section bg-[#ffffff]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
        >
          <div class="section-main-img">
            <NuxtImg
              src="/images/revamp/products-services/admin-business.png"
              :alt="t('services.sections.adminBusiness.imageAlt')"
              class="h-auto max-w-full object-cover"
              width="700px"
            />
          </div>
          <div
            class="section-animate-img hidden lg:flex items-center justify-center"
          >
            <img
              src="/images/revamp/products-services/admin-business-animate.png"
              class="h-auto object-cover"
              width="291px"
            />
          </div>
          <div class="self-center">
            <h3 class="text-[#64748B] text-[24px] font-[400]">
              {{ t("services.sections.adminBusiness.title") }}
            </h3>
            <ul class="list-disc pl-5 mt-8">
              <li
                v-for="(item, index) in adminBusinessItems"
                :key="index"
                class="text-[#20252CE5] font-semibold text-md mb-2"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 7: User Interaction  -->
    <div class="product-section bg-[#e2e8f0]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
        >
          <div class="self-center">
            <h3 class="text-[#64748B] text-[24px] font-[400]">
              {{ t("services.sections.userInteraction.title") }}
            </h3>
            <ul class="list-disc pl-5 mt-8">
              <li
                v-for="(item, index) in userInteractionItems"
                :key="index"
                class="text-[#20252CE5] font-semibold text-md mb-2"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div
            class="section-animate-img hidden lg:flex items-center justify-center"
          >
            <img
              src="/images/revamp/products-services/user-interaction-animate.png"
              class="h-auto object-cover"
              width="291px"
            />
          </div>
          <div class="section-main-img">
            <NuxtImg
              src="/images/revamp/products-services/user-interaction.png"
              :alt="t('services.sections.userInteraction.imageAlt')"
              class="h-auto max-w-full object-cover"
              width="700px"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Section 8: Advanced Features  -->
    <div class="product-section bg-[#ffffff]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
        >
          <div class="section-main-img">
            <NuxtImg
              src="/images/revamp/products-services/advanced-features.png"
              :alt="t('services.sections.advancedFeatures.imageAlt')"
              class="h-auto max-w-full object-cover"
              width="700px"
            />
          </div>
          <div
            class="section-animate-img hidden lg:flex items-center justify-center"
          >
            <img
              src="/images/revamp/products-services/advanced-features-animate.png"
              class="h-auto object-cover"
              width="291px"
            />
          </div>
          <div class="self-center">
            <h3 class="text-[#64748B] text-[24px] font-[400]">
              {{ t("services.sections.advancedFeatures.title") }}
            </h3>
            <ul class="list-disc pl-5 mt-8">
              <li
                v-for="(item, index) in advancedFeaturesItems"
                :key="index"
                class="text-[#20252CE5] font-semibold text-md mb-2"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 9: Ecommerce -->
    <div class="product-section bg-[#e2e8f0]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
        >
          <div class="self-center">
            <h3 class="text-[#64748B] text-[24px] font-[400]">
              {{ t("services.sections.ecommerce.title") }}
            </h3>
            <ul class="list-disc pl-5 mt-8">
              <li
                v-for="(item, index) in ecommerceItems"
                :key="index"
                class="text-[#20252CE5] font-semibold text-md mb-2"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div
            class="section-animate-img hidden lg:flex items-center justify-center"
          >
            <img
              src="/images/revamp/products-services/e-commerce-animate.png"
              class="h-auto object-cover"
              width="291px"
            />
          </div>
          <div class="section-main-img">
            <NuxtImg
              src="/images/revamp/products-services/e-commerce.png"
              :alt="t('services.sections.ecommerce.imageAlt')"
              class="h-auto max-w-full object-cover"
              width="700px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { t, tm } = useI18n();
const productsContainer = ref(null);
let ctx = null;

const deepLearningItems = computed(() =>
  tm("services.sections.deepLearning.items"),
);
const realTimeStreamingItems = computed(() =>
  tm("services.sections.realTimeStreaming.items"),
);
const aiDataIntegrationItems = computed(() =>
  tm("services.sections.aiDataIntegration.items"),
);
const customDesignItems = computed(() =>
  tm("services.sections.customDesign.items"),
);
const contentMediaItems = computed(() =>
  tm("services.sections.contentMedia.items"),
);
const adminBusinessItems = computed(() =>
  tm("services.sections.adminBusiness.items"),
);
const userInteractionItems = computed(() =>
  tm("services.sections.userInteraction.items"),
);
const advancedFeaturesItems = computed(() =>
  tm("services.sections.advancedFeatures.items"),
);
const ecommerceItems = computed(() => tm("services.sections.ecommerce.items"));

const isMobile = () => window.innerWidth < 768;

onMounted(() => {
  ctx = gsap.context(() => {
    const sections = gsap.utils.toArray(".product-section");

    sections.forEach((section) => {
      const animateImg = section.querySelector(".section-animate-img");
      const mainImg = section.querySelector(".section-main-img");

      const mobile = isMobile();

      if (mobile) {
        gsap.set([animateImg, mainImg], { opacity: 0, y: 0 });

        ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(animateImg, {
              opacity: 1,
              duration: 0.4,
              ease: "power1.out",
            });
            gsap.to(mainImg, {
              opacity: 1,
              duration: 0.4,
              delay: 0.15,
              ease: "power1.out",
            });
          },
        });
        return;
      }

      gsap.set(animateImg, { opacity: 0, y: "180%" });
      gsap.set(mainImg, { opacity: 0, y: 200 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=280%",
          pin: true,
          scrub: 2,
          anticipatePin: 1,
        },
      });

      tl.to(
        animateImg,
        { opacity: 1, y: "0%", duration: 1.5, ease: "power2.out" },
        0.5,
      );
      tl.to(
        mainImg,
        { opacity: 1, y: 0, duration: 2, ease: "power2.out" },
        1.8,
      );
    });
  }, productsContainer.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
