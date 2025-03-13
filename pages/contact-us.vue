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

            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <fieldset class="fieldset w-100">
                  <legend class="fieldset-legend mb-1 text-[#475766]">
                    {{ $t("full-name") }}
                  </legend>
                  <input
                    type="text"
                    v-model="first_name"
                    :class="[
                      'input w-full border bg-white rounded-2xl focus:ring-2',
                      errors.first_name
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]',
                    ]"
                    :placeholder="$t('first-name')"
                  />
                  <p v-if="errors.first_name" class="text-red-500 text-sm mt-2">
                    {{ $t("first-name-required") }}
                  </p>
                </fieldset>

                <fieldset class="fieldset w-100 pt-7">
                  <input
                    type="text"
                    v-model="last_name"
                    :class="[
                      'input w-full border bg-white rounded-2xl focus:ring-2',
                      errors.last_name
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]',
                    ]"
                    :placeholder="$t('last-name')"
                  />
                  <p v-if="errors.last_name" class="text-red-500 text-sm mt-2">
                    {{ $t("last-name-required") }}
                  </p>
                </fieldset>

                <fieldset class="fieldset md:col-span-2">
                  <legend class="fieldset-legend mb-1 text-[#475766]">
                    {{ $t("email-address") }}
                  </legend>
                  <input
                    type="email"
                    v-model="email"
                    :class="[
                      'input w-full border bg-white rounded-2xl focus:ring-2',
                      errors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]',
                    ]"
                    :placeholder="$t('enter-email')"
                  />
                  <p v-if="errors.email" class="text-red-500 text-sm mt-2">
                    {{
                      errors.email.includes("required")
                        ? $t("email-required")
                        : $t("invalid-email")
                    }}
                  </p>
                </fieldset>

                <fieldset class="fieldset md:col-span-2">
                  <legend class="fieldset-legend mb-1 text-[#475766]">
                    {{ $t("phone-number") }}
                  </legend>
                  <input
                    type="number"
                    v-model="phone"
                    :class="[
                      'input w-full border bg-white rounded-2xl focus:ring-2',
                      errors.phone
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]',
                    ]"
                    :placeholder="$t('enter-phone')"
                  />
                  <p v-if="errors.phone" class="text-red-500 text-sm mt-2">
                    {{
                      errors.phone.includes("required")
                        ? $t("phone-required")
                        : $t("invalid-phone")
                    }}
                  </p>
                </fieldset>

                <fieldset class="fieldset md:col-span-2">
                  <legend class="fieldset-legend mb-1 text-[#475766]">
                    {{ $t("company") }}
                  </legend>
                  <input
                    type="text"
                    v-model="company"
                    class="input w-full border border-[#475766] bg-white rounded-2xl focus:border-[#2375E9] focus:ring-2"
                    :placeholder="$t('enter-company')"
                  />
                  <p class="text-red-500 text-sm">{{ errors.company }}</p>
                </fieldset>

                <fieldset class="fieldset md:col-span-2">
                  <legend class="fieldset-legend mb-1 text-[#475766]">
                    {{ $t("message") }}
                  </legend>
                  <textarea
                    v-model="message"
                    :placeholder="$t('enter-message')"
                    :class="[
                      'textarea text-[16px] w-full border bg-white rounded-2xl focus:ring-2',
                      errors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]',
                    ]"
                  ></textarea>
                  <p v-if="errors.message" class="text-red-500 text-sm mt-0">
                    {{ $t("message-required") }}
                  </p>
                </fieldset>

                <div>
                  <button
                    type="submit"
                    class="btn border-0 px-10 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] text-white rounded-full hover:scale-105 transition-all duration-300"
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
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";
import { useContact } from "@/composables/useContact";

const {
  first_name,
  last_name,
  email,
  phone,
  company,
  message,
  submitForm,
  errors,
} = useContact();

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
  ],
});
</script>