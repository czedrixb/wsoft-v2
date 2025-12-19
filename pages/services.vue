<template>
  <div>
    <PageHeader :title="$t('Services')" :description="$t('services-text')" />

    <div class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto pb-10 mb-10">
      <div
        class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-black mb-10"
      >
        {{ $t("introduction-development") }}
      </div>

      <div class="mx-auto lg:max-w-screen-lg xl:max-w-screen-xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="flex">
            <div class="card bg-white text-primary-content p-5 py-8 w-full">
              <img
                src="/images/services/development-7.png"
                class="max-w-[15%] md:max-w-[20%] mb-5"
                alt="development-1"
                loading="lazy"
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5"
              >
                {{ $t("deep-learning") }}
              </div>

              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("yolo") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("optical-flow") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("roi") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("precision-optimization") }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="card bg-white text-primary-content p-5 py-8 w-full">
              <img
                loading="lazy"
                src="/images/services/development-8.png"
                class="max-w-[15%] md:max-w-[20%] mb-5"
                alt="development-2"
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5"
              >
                {{ $t("real-time") }}
              </div>

              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("rtsp") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("web-socket") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("open-cv") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("multi-stream") }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="card bg-white text-primary-content p-5 py-8 w-full">
              <img
                src="/images/services/development-9.png"
                class="max-w-[15%] md:max-w-[20%] mb-5"
                alt="development-3"
                loading="lazy"
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5"
              >
                {{ $t("ai-text") }}
              </div>

              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("multimodal") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("outlier") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("dynamic-roi") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("incremental-learning") }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="card bg-white text-primary-content p-5 py-8 w-full">
              <img
                src="/images/services/development-1.png"
                class="max-w-[15%] md:max-w-[20%] mb-5"
                alt="development-1"
                loading="lazy"
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5"
              >
                {{ $t("custom-design") }}
              </div>

              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("custom-website") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("responsive-user") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("engaging-ui") }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="card bg-white text-primary-content p-5 py-8 w-full">
              <img
                src="/images/services/development-2.png"
                class="max-w-[15%] md:max-w-[20%] mb-5"
                alt="development-2"
                loading="lazy"
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5"
              >
                {{ $t("content-management") }}
              </div>

              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("easy-use") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("image-file") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("auto-tagging") }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="card bg-white text-primary-content p-5 py-8 w-full">
              <img
                src="/images/services/development-3.png"
                class="max-w-[15%] md:max-w-[20%] mb-5"
                alt="development-3"
                loading="lazy"
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5"
              >
                {{ $t("admin-business") }}
              </div>

              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("inquiry-content") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("inventory-order") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("secure-payment") }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="card bg-white text-primary-content p-5 py-8 w-full">
              <img
                src="/images/services/development-4.png"
                class="max-w-[15%] md:max-w-[20%] mb-5"
                alt="development-4"
                loading="lazy"
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5"
              >
                {{ $t("user-interaction") }}
              </div>

              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("job-interaction") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("seller-company") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("messaging-questionnaires") }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="card bg-white text-primary-content p-5 py-8 w-full">
              <img
                src="/images/services/development-5.png"
                class="max-w-[15%] md:max-w-[20%] mb-5"
                alt="development-5"
                loading="lazy"
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5"
              >
                {{ $t("advanced-features") }}
              </div>

              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("interactive-calendar") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("location-based") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("recaptcha") }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="card bg-white text-primary-content p-5 py-8 w-full">
              <img
                src="/images/services/development-6.png"
                class="max-w-[15%] md:max-w-[20%] mb-5"
                alt="development-6"
                loading="lazy"
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5"
              >
                {{ $t("product-listing") }}
              </div>

              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("items-catalog") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("wishlist-star") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img
                  src="/images/services/bullet.png"
                  loading="lazy"
                  alt="bullet"
                />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-black mb-0"
                >
                  {{ $t("smooth-checkout") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="px-5 py-5 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-[7rem] overflow-hidden"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="flex flex-col h-full">
          <div class="flex-1 flex flex-col">
            <div
              class="card bg-white shadow-md text-primary-content p-5 pb-0 flex flex-col justify-between mb-5"
            >
              <div class="mb-8">
                <h3
                  class="font-poppins font-[600] text-[22px] lg:text-[25px] md:px-0 text-black mb-3"
                >
                  {{ $t("ui-ai") }}
                </h3>

                <p
                  class="text-left font-inter font-[300] text-[18px] text-black"
                >
                  {{ $t("build-high") }}
                </p>
              </div>

              <div class="flex justify-center">
                <img
                  src="/images/about-us/services-image1.png"
                  class="max-w-[35%] h-auto md:max-w-[91%] lg:max-w-[30%]"
                  alt="mobile-phone"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div class="flex-1 flex flex-col">
            <div class="card bg-white shadow-md text-primary-content p-5 pb-0">
              <h3
                class="font-poppins font-[600] text-[22px] lg:text-[25px] md:px-0 text-black mb-3"
              >
                {{ $t("maintenance-support") }}
              </h3>

              <p
                class="text-left font-inter font-[300] text-[18px] text-black mb-[2rem]"
              >
                {{ $t("keep-website") }}
              </p>

              <img
                src="/images/about-us/services-image3.png"
                class="max-w-full h-auto"
                alt="logos"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col h-full">
          <div class="flex-1 flex flex-col">
            <div
              class="card bg-white shadow-md text-primary-content p-5 pb-0 mb-5"
            >
              <h3
                class="font-poppins font-[600] text-[22px] lg:text-[25px] md:px-0 text-black mb-3"
              >
                {{ $t("website-web") }}
              </h3>

              <p
                class="text-left font-inter font-[300] text-[18px] text-black mb-[6rem]"
              >
                {{ $t("intuitive-ai") }}
              </p>

              <img
                src="/images/about-us/services-image2.png"
                class="max-w-full h-auto"
                alt="dashboard-screens"
                loading="lazy"
              />
            </div>
          </div>
          <div class="flex-1 flex flex-col">
            <div
              class="card bg-white shadow-md text-primary-content p-5 pb-0 mb-3"
            >
              <h3
                class="font-poppins font-[600] text-[22px] lg:text-[25px] md:px-0 text-black mb-3"
              >
                {{ $t("smart-video") }}
              </h3>

              <p
                class="text-left font-inter font-[300] text-[18px] text-black mb-[5rem]"
              >
                {{ $t("build-ai") }}
              </p>

              <img
                src="/images/services/sss.png"
                class="max-w-full h-auto"
                alt="dashboard-screens"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <ContactEmail />
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";
import { useStructuredData } from "@/composables/useStructuredData";
import { useCanonical } from "@/composables/useCanonical";

const { canonicalUrl } = useCanonical();
const { t } = useI18n();
const config = useRuntimeConfig();

const staticMetaTitle = t("services-title");
const staticMetaDescription = t("services-description");
const staticMetaKeywords = Array.from({ length: 10 }, (_, i) =>
  t(`services-meta-keyword-${i + 1}`)
).join(", ");

const structuredData = useStructuredData("services");

useHead({
  title: staticMetaTitle,
  link: [
    {
      rel: "canonical",
      href: canonicalUrl.value,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredData),
    },
  ],
  meta: [
    { name: "description", content: staticMetaDescription },
    { name: "keywords", content: staticMetaKeywords },
    { property: "og:title", content: staticMetaTitle },
    { property: "og:description", content: staticMetaDescription },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/thumbnail.jpg" },
    { property: "og:url", content: canonicalUrl.value },
  ],
});
</script>
