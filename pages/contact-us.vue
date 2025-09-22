<template>
  <div>
    <PageHeader :title="$t('get-started')" :description="$t('reach-out')" />

    <div
      class="px-5 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-10 py-16 overflow-hidden"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="card bg-white shadow-md text-primary-content p-8 w-[100%]">
          <div class="mb-2">
            <NuxtImg
              src="/images/contact-us/mail.png"
              width="60px"
              height="60px"
              alt="mail"
            />
          </div>
          <div class="font-poppins font-[600] text-[20px] text-[#475766] mb-2">
            {{ $t("email-address") }}
          </div>
          <p
            class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
          >
            contact@wsoft.space
          </p>
        </div>
        <div class="card bg-white shadow-md text-primary-content p-8 w-[100%]">
          <div class="mb-2">
            <NuxtImg
              src="/images/contact-us/phone.png"
              width="60px"
              height="60px"
              alt="phone"
            />
          </div>
          <div class="font-poppins font-[600] text-[20px] text-[#475766] mb-2">
            {{ $t("phone-number") }}
          </div>
          <p
            class="text-left font-inter font-[300] text-[18px] text-[#475766] mb-0"
          >
            +82 10 5067 8800
          </p>
        </div>
        <div class="card bg-white shadow-md text-primary-content p-8 w-[100%]">
          <div class="mb-2">
            <NuxtImg
              src="/images/contact-us/location.png"
              width="60px"
              height="60px"
              alt="phone"
            />
          </div>
          <div class="font-poppins font-[600] text-[20px] text-[#475766] mb-2">
            {{ $t("our-office") }}
          </div>
          <p class="text-left font-inter font-[300] text-[18px] text-[#475766]">
            {{ $t("address") }}
          </p>
        </div>
        <div class="md:col-span-3">
          <div
            class="card bg-white shadow-md text-primary-content w-[100%] overflow-hidden"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div class="relative overflow-hidden md:hidden lg:block">
                <div class="absolute md:left-[-20%] lg:left-[-25%] w-full z-0">
                  <NuxtImg
                    src="/images/contact-us/overlay-gradient.png"
                    width="453px"
                    height="931px"
                    alt="overlay-gradient"
                  />
                </div>
                <div
                  class="absolute md:left-[18%] lg:left-[17%] lg:top-[25%] xl:left-[18%] xl:top-[4%] w-full"
                >
                  <NuxtImg
                    src="/images/contact-us/contact-phone.png"
                    width="650px"
                    height="100%"
                    alt="contact-phone"
                    class="z-20"
                  />
                </div>
              </div>
              <div class="p-8 md:col-span-2 lg:col-span-1">
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
                      <div class="h-[1rem]">
                        <p
                          v-if="errors.first_name"
                          class="text-red-500 text-sm mb-0"
                        >
                          {{ $t("first-name-required") }}
                        </p>
                      </div>
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

                      <div class="h-[1rem]">
                        <p
                          v-if="errors.last_name"
                          class="text-red-500 text-sm mb-0"
                        >
                          {{ $t("last-name-required") }}
                        </p>
                      </div>
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

                      <div class="h-[1rem]">
                        <p
                          v-if="errors.email"
                          class="text-red-500 text-sm mb-0"
                        >
                          {{
                            errors.email.includes("required")
                              ? $t("email-required")
                              : $t("invalid-email")
                          }}
                        </p>
                      </div>
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

                      <div class="h-[1rem]">
                        <p
                          v-if="errors.phone"
                          class="text-red-500 text-sm mb-0"
                        >
                          {{
                            errors.phone.includes("required")
                              ? $t("phone-required")
                              : $t("invalid-phone")
                          }}
                        </p>
                      </div>
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
                      <div class="h-[1rem]">
                        <p class="text-red-500 text-sm mb-0">
                          {{ errors.company }}
                        </p>
                      </div>
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

                      <div class="h-[1rem]">
                        <p
                          v-if="errors.message"
                          class="text-red-500 text-sm mb-0"
                        >
                          {{ $t("message-required") }}
                        </p>
                      </div>
                    </fieldset>

                    <div>
                      <button
                        type="submit"
                        class="relative font-[400] text-[16px] px-14 py-5 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90"
                      >
                        <span class="relative z-10"> {{ $t("submit") }}</span>
                        <span
                          class="absolute inset-0 bg-gradient-to-r from-[#70aae9] to-[#68d2e5] rounded-full p-[8px] -z-10 transition-all duration-300 hover:opacity-80"
                        ></span>
                        <span
                          class="absolute inset-0 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] rounded-full m-[8px] transition-all duration-300 hover:m-[4px]"
                        ></span>
                      </button>
                    </div>
                  </div>
                </form>
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
import { useStructuredData } from "@/composables/useStructuredData";

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

const structuredData = useStructuredData("contact");

useHead({
  title: staticMetaTitle,
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredData),
    },
  ],
  meta: [
    { name: "keywords", content: staticMetaKeywords },
    { property: "og:title", content: staticMetaTitle },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/thumbnail.jpg" },
  ],
});
</script>
