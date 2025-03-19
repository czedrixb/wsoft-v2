<template>
  <div>
    <div
      class="md:py-[5rem] mx-auto px-3 md:px-8 xl:max-w-screen-xl mt-[8rem] md:mt-0 mb-10"
    >
      <div
        class="bg-[url('/images/home/bg-email.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl py-10 h-full md:h-[25rem] flex items-center relative"
      >
        <!-- LARGE SCREEN -->
        <div class="hidden md:block">
          <div class="grid grid-cols-2 px-2 md:px-16">
            <div>
              <div
                class="text-left font-poppins font-[600] text-[25px] lg:text-[30px] xl:text-[40px] px-5 md:px-0 text-white mb-3"
              >
                {{ $t("partner-growth") }}
              </div>

              <p
                class="font-inter font-[300] text-[18px] text-white mb-8 lg:w-[80%]"
              >
                {{ $t("help-transform") }}
              </p>
              <form @submit.prevent="submitForm">
                <label
                  class="input md:input-md lg:input-lg md:py-7 rounded-full bg-white flex items-center lg:w-[90%] xl:w-[80%] gap-2 lg:pe-2"
                >
                  <input
                    type="email"
                    v-model="email"
                    class="grow text-black"
                    :placeholder="$t('enter-email')"
                  />
                  <button
                    type="submit"
                    class="relative btn-md font-inter md:text-[15px] lg:text-[18px] md:px-8 lg:px-8 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90"
                  >
                    <span class="relative z-10"> {{ $t("send") }}</span>
                    <span
                      class="absolute inset-0 bg-gradient-to-r from-[#70aae9] to-[#68d2e5] rounded-full p-[8px] -z-10 transition-all duration-300 hover:opacity-80"
                    ></span>
                    <span
                      class="absolute inset-0 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] rounded-full m-[8px] transition-all duration-300 hover:m-[4px]"
                    ></span>
                  </button>
                </label>
                <p v-if="errors.email" class="text-white text-sm mt-2">
                  {{
                    errors.email.includes("required")
                      ? $t("email-required")
                      : $t("invalid-email")
                  }}
                </p>
              </form>
            </div>
          </div>
        </div>

        <!-- SMALL SCREEN -->
        <div class="block md:hidden">
          <div class="grid grid-cols-2 px-2">
            <div
              class="text-left font-poppins font-[600] text-[25px] lg:text-[30px] xl:text-[40px] px-2 md:px-0 text-white mb-3"
            >
              {{ $t("partner-growth") }}
            </div>
          </div>
          <div class="px-5">
            <p
              class="font-inter font-[300] text-[18px] text-white mb-8 lg:w-[80%]"
            >
              {{ $t("help-transform") }}
            </p>

            <form @submit.prevent="submitForm">
              <label
                class="input py-8 md:input-md lg:input-lg rounded-full bg-white flex items-center lg:w-[90%] xl:w-[80%] gap-2 pe-2"
              >
                <input
                  type="email"
                  v-model="email"
                  class="grow text-black"
                  :placeholder="$t('enter-email')"
                />
                <button
                  type="submit"
                  class="relative md:btn-sm lg:btn-md font-inter text-[18px] px-8 py-4 md:px-8 lg:px-8 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90"
                >
                  <span class="relative z-10"> {{ $t("send") }}</span>
                  <span
                    class="absolute inset-0 bg-gradient-to-r from-[#70aae9] to-[#68d2e5] rounded-full p-[8px] -z-10 transition-all duration-300 hover:opacity-80"
                  ></span>
                  <span
                    class="absolute inset-0 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] rounded-full m-[8px] transition-all duration-300 hover:m-[4px]"
                  ></span>
                </button>
              </label>
              <p v-if="errors.email" class="text-white text-sm mt-2">
                {{
                  errors.email.includes("required")
                    ? $t("email-required")
                    : $t("invalid-email")
                }}
              </p>
            </form>
          </div>
        </div>

        <div
          class="absolute left-[45%] bottom-[59%] md:bottom-[10%] md:left-[48%] lg:bottom-[-10%] lg:left-[50%] xl:left-[50%] xl:bottom-[0%] w-[100%] animate-moveRightLeft"
        >
          <img
            src="/images/home/left-photo.png"
            class="w-[180px] md:w-[300px] lg:w-[330px]"
            alt="img-email"
          />
        </div>

        <div
          class="absolute left-[60%] bottom-[59%] md:bottom-[-10%] md:left-[65%] lg:bottom-[-25%] lg:left-[68%] xl:left-[63%] xl:bottom-[-25%] w-[100%] animate-moveLeftRight"
        >
          <img
            src="/images/home/right-photo.png"
            class="w-[180px] md:w-[300px] lg:w-[330px]"
            alt="img-email"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useEmailSubscription } from "@/composables/useEmailSubscription";

const { email, submitForm, errors } = useEmailSubscription();
</script>
