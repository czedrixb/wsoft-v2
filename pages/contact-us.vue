<template>
  <div>
    <PageHeader :title="$t('get-started')" :description="$t('reach-out')" />

    <div
      class="px-5 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-10 overflow-hidden"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="flex">
          <div
            class="card bg-white shadow-md text-primary-content p-8 w-[100%] overflow-hidden"
          >
            <div>
              <div
                class="font-poppins font-[600] text-[22px] lg:text-[30px] md:px-0 text-[#475766] mb-0"
              >
                {{ $t("contact-us") }}
              </div>

              <p
                class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-10"
              >
                {{ $t("get-back") }}
              </p>
            </div>

            <form @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <fieldset class="fieldset w-100">
                  <legend class="fieldset-legend mb-1 text-[#475766]">
                    {{ $t("full-name") }}
                  </legend>
                  <input
                    type="text"
                    v-model="first_name"
                    class="input bg-white w-[100%] border border-[#475766] rounded-2xl focus:border-[#2375E9] focus:ring-[#2375E9] focus:ring-2"
                    :placeholder="$t('first-name')"
                  />
                </fieldset>
                <fieldset class="fieldset w-100 pt-7">
                  <input
                    type="text"
                    v-model="last_name"
                    class="input bg-white w-[100%] border border-[#475766] rounded-2xl focus:border-[#2375E9] focus:ring-[#2375E9] focus:ring-2"
                    :placeholder="$t('last-name')"
                  />
                </fieldset>
                <fieldset class="fieldset md:col-span-2">
                  <legend class="fieldset-legend mb-1 text-[#475766]">
                    {{ $t("email-address") }}
                  </legend>
                  <input
                    type="email"
                    v-model="email"
                    class="input bg-white w-[100%] border border-[#475766] rounded-2xl focus:border-[#2375E9] focus:ring-[#2375E9] focus:ring-2"
                    :placeholder="$t('enter-email')"
                  />
                </fieldset>
                <fieldset class="fieldset md:col-span-2">
                  <legend class="fieldset-legend mb-1 text-[#475766]">
                    {{ $t("phone-number") }}
                  </legend>
                  <input
                    type="number"
                    v-model="phone"
                    class="input bg-white w-[100%] border border-[#475766] rounded-2xl focus:border-[#2375E9] focus:ring-[#2375E9] focus:ring-2"
                    :placeholder="$t('enter-phone')"
                  />
                </fieldset>
                <fieldset class="fieldset md:col-span-2">
                  <legend class="fieldset-legend mb-1 text-[#475766]">
                    {{ $t("company") }}
                  </legend>
                  <input
                    type="text"
                    v-model="company"
                    class="input bg-white w-[100%] border border-[#475766] rounded-2xl focus:border-[#2375E9] focus:ring-[#2375E9] focus:ring-2"
                    :placeholder="$t('enter-company')"
                  />
                </fieldset>
                <fieldset class="fieldset md:col-span-2">
                  <legend class="fieldset-legend mb-1 text-[#475766]">
                    {{ $t("message") }}
                  </legend>
                  <textarea
                    v-model="message"
                    :placeholder="$t('enter-message')"
                    class="textarea textarea-md text-[16px] bg-white w-[100%] border border-[#475766] rounded-2xl focus:border-[#2375E9] focus:ring-[#2375E9] focus:ring-2"
                  ></textarea>
                </fieldset>
                <div>
                  <button
                    type="submit"
                    class="btn px-10 text-[16px] bg-gradient-to-r from-[#2375E9] to-[#02C7D0] font-[400] text-white rounded-full border-none transition-all duration-300 transform hover:scale-105"
                  >
                    {{ $t("submit") }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="flex flex-col justify-between">
          <div
            class="card bg-gradient-to-r from-[#03C5D1] to-[#2277E8] shadow-md text-primary-content p-0 overflow-hidden mb-3"
          >
            <img
              src="/images/contact-us/img-contact.png"
              class="max-w-full h-auto"
              alt="image-contact"
            />
          </div>
          <div class="card bg-white shadow-md text-primary-content p-8">
            <div
              class="flex flex-col gap-3 max-w-full bg-[#FAFAFA] p-3 rounded-2xl"
            >
              <div class="flex items-center gap-5">
                <img
                  src="/images/contact-us/mail.png"
                  class="max-w-[80%] h-auto"
                  alt="mail"
                />

                <div>
                  <div
                    class="font-poppins font-[600] text-[20px] text-[#475766]"
                  >
                    {{ $t("email-address") }}
                  </div>
                  <p
                    class="text-left font-inter font-[300] text-[18px] text-[#475766]"
                  >
                    uedu.dev@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col gap-3 max-w-full bg-[#FAFAFA] p-3 rounded-2xl"
            >
              <div class="flex items-center gap-5">
                <img
                  src="/images/contact-us/phone.png"
                  class="max-w-[80%] h-auto"
                  alt="phone"
                />

                <div>
                  <div
                    class="font-poppins font-[600] text-[20px] text-[#475766]"
                  >
                    {{ $t("phone-number") }}
                  </div>
                  <p
                    class="text-left font-inter font-[300] text-[18px] text-[#475766]"
                  >
                    010 5067 8800
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col gap-3 max-w-full bg-[#FAFAFA] p-3 rounded-2xl"
            >
              <div class="flex items-center gap-5">
                <img
                  src="/images/contact-us/location.png"
                  class="max-w-[80%] h-auto"
                  alt="phone"
                />

                <div>
                  <div
                    class="font-poppins font-[600] text-[20px] text-[#475766]"
                  >
                    {{ $t("our-office") }}
                  </div>
                  <p
                    class="text-left font-inter font-[300] text-[18px] text-[#475766]"
                  >
                    {{ $t("address") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  first_name,
  last_name,
  email,
  phone,
  company,
  message,
  handleSubmit,
} from "@/composables/useContact";
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const staticMetaTitle = t("contact-title");
const staticMetaKeywords = Array.from({ length: 10 }, (_, i) =>
  t(`contact-us-meta-keyword-${i + 1}`)
).join(", ");

useHead({
  title: staticMetaTitle,
  meta: [
    { name: "keywords", content: staticMetaKeywords },
    { property: "og:title", content: staticMetaTitle },
    { property: "og:type", content: "website" },
    // { property: "og:image", content: "/images/thumbnail.jpg" },
  ],
});
</script>