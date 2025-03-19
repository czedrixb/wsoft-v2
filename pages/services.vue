<template>
  <div>
    <PageHeader :title="$t('Services')" :description="$t('services-text')" />

    <div
      class="px-5 py-5 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-10 overflow-hidden"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="flex">
          <div class="card bg-white shadow-md text-primary-content p-5 pb-0">
            <div>
              <div
                class="font-poppins font-[600] text-[22px] lg:text-[25px] md:px-0 text-[#475766] mb-3"
              >
                {{ $t("ui-ai") }}
              </div>

              <p
                class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-10"
              >
                {{ $t("build-high") }}
              </p>
            </div>

            <div class="flex justify-center">
              <img
                src="/images/about-us/services-image1.png"
                class="max-w-[35%] h-auto md:max-w-[91%] lg:max-w-[66%]"
                alt="mobile-phone"
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              class="card bg-white shadow-md text-primary-content p-5 pb-0 mb-3"
            >
              <div
                class="font-poppins font-[600] text-[22px] lg:text-[25px] md:px-0 text-[#475766] mb-3"
              >
                {{ $t("website-web") }}
              </div>

              <p
                class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-14"
              >
                {{ $t("intuitive-ai") }}
              </p>

              <img
                src="/images/about-us/services-image2.png"
                class="max-w-full h-auto"
                alt="dashboard-screens"
              />
            </div>
            <div class="card bg-white shadow-md text-primary-content p-5 pb-0">
              <div
                class="font-poppins font-[600] text-[22px] lg:text-[25px] md:px-0 text-[#475766] mb-3"
              >
                {{ $t("maintenance-support") }}
              </div>

              <p
                class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-14"
              >
                {{ $t("keep-website") }}
              </p>

              <img
                src="/images/about-us/services-image3.png"
                class="max-w-full h-auto"
                alt="logos"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-16 mb-10">
      <div
        class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-[#475766] mb-10"
      >
        {{ $t("introduction-development") }}
      </div>

      <div class="mx-auto lg:max-w-screen-lg xl:max-w-screen-xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="flex">
            <div class="card bg-white text-primary-content p-5 py-8 w-full">
              <img
                src="/images/services/development-1.png"
                class="max-w-[15%] md:max-w-[20%] mb-5"
                alt="development-1"
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-[#475766] mb-5"
              >
                {{ $t("custom-design") }}
              </div>

              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
                >
                  {{ $t("custom-website") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
                >
                  {{ $t("responsive-user") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
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
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-[#475766] mb-5"
              >
                {{ $t("content-management") }}
              </div>

              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
                >
                  {{ $t("easy-use") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
                >
                  {{ $t("image-file") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
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
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-[#475766] mb-5"
              >
                {{ $t("admin-business") }}
              </div>

              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
                >
                  {{ $t("inquiry-content") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
                >
                  {{ $t("inventory-order") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
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
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-[#475766] mb-5"
              >
                {{ $t("user-interaction") }}
              </div>

              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
                >
                  {{ $t("job-interaction") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
                >
                  {{ $t("seller-company") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
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
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-[#475766] mb-5"
              >
                {{ $t("advanced-features") }}
              </div>

              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
                >
                  {{ $t("interactive-calendar") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
                >
                  {{ $t("location-based") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
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
              />
              <div
                class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-[#475766] mb-5"
              >
                {{ $t("product-listing") }}
              </div>

              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
                >
                  {{ $t("items-catalog") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
                >
                  {{ $t("wishlist-star") }}
                </p>
              </div>
              <div class="flex gap-5 items-center">
                <img src="/images/services/bullet.png" alt="bullet" />
                <p
                  class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
                >
                  {{ $t("smooth-checkout") }}
                </p>
              </div>
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

const { t } = useI18n();

const staticMetaTitle = t("services-title");
const staticMetaDescription = t("services-description");
const staticMetaKeywords = Array.from({ length: 10 }, (_, i) =>
  t(`services-meta-keyword-${i + 1}`)
).join(", ");

useHead({
  title: staticMetaTitle,
  meta: [
    { name: "description", content: staticMetaDescription },
    { name: "keywords", content: staticMetaKeywords },
    { property: "og:title", content: staticMetaTitle },
    { property: "og:description", content: staticMetaDescription },
    { property: "og:type", content: "website" },
    // { property: "og:image", content: "/images/thumbnail.jpg" },
  ],
});
</script>