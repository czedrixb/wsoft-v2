<template>
  <div class="flex gap-x-2">
    <button
      @click="setActiveLanguage('en')"
      class="btn font-[400] btn-ghost border-none transition-all duration-300 px-8 btn-sm h-[30px]"
      :class="{
        'bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white':
          locale === 'en',
        'bg-transparent text-gray-500': locale !== 'en',
      }"
    >
      EN
    </button>

    <button
      @click="setActiveLanguage('ko')"
      class="btn font-[400] btn-ghost border-none transition-all duration-300 px-8 btn-sm h-[30px]"
      :class="{
        'bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white':
          locale === 'ko',
        'bg-transparent text-gray-500': locale !== 'ko',
      }"
    >
      KO
    </button>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const setActiveLanguage = (language) => {
  locale.value = language;
};
</script>
