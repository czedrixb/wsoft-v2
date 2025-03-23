<template>
  <div class="flex gap-x-2">
    <button
      v-for="language in ['en', 'ko']"
      :key="language"
      @click="setActiveLanguage(language)"
      class="btn font-[400] btn-ghost border-none transition-all duration-300 px-8 btn-sm h-[40px]"
      :class="{
        'bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white':
          locale === language,
        'bg-transparent text-gray-500': locale !== language,
      }"
    >
      <div v-if="language === 'en'">{{ $t("English") }}</div>
      <div v-if="language === 'ko'">{{ $t("Korean") }}</div>
    </button>
  </div>
</template>

<script setup>
import { useCookie } from "#app";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const langCookie = useCookie("lang");

locale.value = langCookie.value || "ko";

const setActiveLanguage = (language) => {
  locale.value = language;
  langCookie.value = language;
};
</script>
