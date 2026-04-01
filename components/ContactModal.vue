<template>
  <div>
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 bg-black bg-opacity-50 z-50"
        @click="closeModal"
      ></div>
    </transition>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeModal"
      >
        <div
          class="bg-[#20252CE5] text-white rounded-[28px] shadow-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div class="flex justify-end p-2">
            <button @click="closeModal" class="btn btn-circle btn-ghost btn-sm">
              ✕
            </button>
          </div>

          <div class="px-8 pt-0 pb-14">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div class="col-span-12 lg:col-span-5">
                <h2
                  class="text-[48px] font-[300] leading-tight bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent"
                >
                  {{ $t("contact-modal.title") }}
                </h2>

                <div class="mt-8 space-y-5">
                  <p class="font-semibold text-[14px]">
                    {{ $t("contact-modal.description") }}
                  </p>
                  <p class="font-semibold text-[14px]">
                    {{ $t("contact-modal.description2") }}
                  </p>
                </div>

                <div class="mt-8">
                  <div class="bg-[#64748B] w-full" style="height: 1px"></div>
                </div>

                <div class="mt-8 space-y-6">
                  <div
                    v-for="detail in details"
                    :key="detail.label"
                    class="flex gap-5 items-center"
                  >
                    <NuxtImg
                      width="40"
                      height="40"
                      :src="`/images/revamp/contact-us/${detail.icon}`"
                    />
                    <div>
                      <p class="text-[14px] font-semibold mb-0">
                        {{ $t(`contact-modal.${detail.labelKey}`) }}
                      </p>
                      <p class="text-[24px] mb-0">{{ detail.value }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-span-12 lg:col-span-7 mt-20">
                <p class="text-[#64748B] text-[14px] font-semibold mb-2">
                  {{ $t("contact-modal.schedule-text") }}
                </p>
                <form @submit.prevent="submitForm">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div class="mb-0 col-span-12">
                      <label class="block text-sm mb-2">{{
                        $t("full-name")
                      }}</label>
                      <div class="grid grid-cols-2 gap-5">
                        <div>
                          <input
                            type="text"
                            v-model="first_name"
                            :class="[
                              'w-full px-4 py-2 border rounded-lg focus:ring-2 bg-white text-black bg-white text-black',
                              errors.first_name
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]',
                            ]"
                            :placeholder="$t('first-name')"
                          />
                          <div class="h-[1rem]">
                            <p
                              v-if="errors.first_name"
                              class="text-red-500 text-sm mb-0 mt-1"
                            >
                              {{ $t("first-name-required") }}
                            </p>
                          </div>
                        </div>
                        <div>
                          <input
                            type="text"
                            v-model="last_name"
                            :class="[
                              'w-full px-4 py-2 border rounded-lg focus:ring-2 bg-white text-black',
                              errors.last_name
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]',
                            ]"
                            :placeholder="$t('last-name')"
                          />
                          <div class="h-[1rem]">
                            <p
                              v-if="errors.last_name"
                              class="text-red-500 text-sm mb-0 mt-1"
                            >
                              {{ $t("last-name-required") }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mb-0 col-span-12">
                      <div class="grid grid-cols-2 gap-5">
                        <div>
                          <label class="block text-sm mb-2">{{
                            $t("email-address")
                          }}</label>
                          <input
                            type="email"
                            v-model="email"
                            :class="[
                              'w-full px-4 py-2 border rounded-lg focus:ring-2 bg-white text-black',
                              errors.email
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]',
                            ]"
                            :placeholder="$t('enter-email')"
                          />
                          <div class="h-[1rem]">
                            <p
                              v-if="errors.email"
                              class="text-red-500 text-sm mb-0 mt-1"
                            >
                              {{
                                errors.email.includes("required")
                                  ? $t("email-required")
                                  : $t("invalid-email")
                              }}
                            </p>
                          </div>
                        </div>
                        <div>
                          <label class="block text-sm mb-2">{{
                            $t("phone-number")
                          }}</label>
                          <input
                            type="tel"
                            v-model="phone"
                            :class="[
                              'w-full px-4 py-2 border rounded-lg focus:ring-2 bg-white text-black',
                              errors.phone
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]',
                            ]"
                            :placeholder="$t('enter-phone')"
                          />
                          <div class="h-[1rem]">
                            <p
                              v-if="errors.phone"
                              class="text-red-500 text-sm mb-0 mt-1"
                            >
                              {{
                                errors.phone.includes("required")
                                  ? $t("phone-required")
                                  : $t("invalid-phone")
                              }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mb-0 col-span-12">
                      <div class="grid grid-cols-2 gap-5">
                        <div>
                          <label class="block text-sm mb-2">{{
                            $t("company")
                          }}</label>
                          <input
                            type="text"
                            v-model="company"
                            class="w-full px-4 py-2 bg-white text-black border border-[#475766] rounded-lg focus:border-[#2375E9] focus:ring-2"
                            :placeholder="$t('enter-company')"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="mb-0 col-span-12">
                      <label class="block text-sm mb-2">{{
                        $t("message")
                      }}</label>
                      <textarea
                        v-model="message"
                        rows="4"
                        :class="[
                          'w-full px-4 py-2 border rounded-lg focus:ring-2 bg-white text-black',
                          errors.message
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                            : 'border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]',
                        ]"
                        :placeholder="$t('enter-message')"
                      ></textarea>
                      <div class="h-[1rem]">
                        <p
                          v-if="errors.message"
                          class="text-red-500 text-sm mb-0 mt-1"
                        >
                          {{ $t("message-required") }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="mb-8">
                    <label class="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        v-model="privacyAgreed"
                        class="mt-1 w-4 h-4 text-[#2375E9] bg-transparent border-[#475766] rounded focus:ring-[#2375E9] focus:ring-2"
                        :class="{
                          'border-red-500': errors.privacyAgreement,
                        }"
                      />
                      <div class="flex-1">
                        <p class="text-[#64748B] text-[14px] font-semibold">
                          {{ $t("contact-modal.privacy-agreement") }}
                        </p>
                        <p
                          v-if="errors.privacyAgreement"
                          class="text-red-500 text-sm mt-1"
                        >
                          {{ $t("contact-modal.privacy-agreement-required") }}
                        </p>
                      </div>
                    </label>
                  </div>

                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="group w-auto rounded-[22px] py-3 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed relative inline-flex items-center justify-center gap-2 px-12"
                  >
                    <div
                      class="absolute inset-0 rounded-[22px] p-[1px] bg-gradient-to-r from-[#2376e9] to-[#02c7d0]"
                    >
                      <div
                        class="w-full h-full rounded-[22px] bg-[#20252CE5] group-hover:bg-transparent transition-all"
                      ></div>
                    </div>

                    <span
                      class="relative z-10 bg-gradient-to-r from-[#2376e9] to-[#02c7d0] bg-clip-text text-transparent group-hover:text-white transition-all"
                    >
                      {{ $t("contact-modal.submit") }}
                    </span>

                    <NuxtImg
                      src="/images/revamp/mail-submit-icon.svg"
                      width="24"
                      height="24"
                      class="relative z-10 transition-all"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useContact } from "@/composables/useContact";
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const details = [
  { labelKey: "email-label", icon: "mail.png", value: "contact@wsoft.space" },
  { labelKey: "phone-label", icon: "phone.png", value: "+82 10 5067 8800" },
  {
    labelKey: "office-label",
    icon: "location.png",
    value:
      "3F, 219, Segwon-ro, Gwonseon-gu, Suwon-si, Gyeonggi-do, Republic of Korea",
  },
];

const emit = defineEmits(["update:modelValue"]);

const {
  first_name,
  last_name,
  email,
  phone,
  company,
  message,
  submitForm: originalSubmitForm,
  errors: originalErrors,
  isSubmitting,
} = useContact();

const privacyAgreed = ref(false);

const errors = computed(() => ({
  ...originalErrors.value,
  privacyAgreement: !privacyAgreed.value && submitted ? true : false,
}));

const submitted = ref(false);

const closeModal = () => {
  emit("update:modelValue", false);
  privacyAgreed.value = false;
  submitted.value = false;
};

const submitForm = async () => {
  submitted.value = true;

  if (!privacyAgreed.value) {
    return;
  }

  const success = await originalSubmitForm();
  if (success) {
    closeModal();
  }
};
</script>
