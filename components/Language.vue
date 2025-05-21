<template>
  <div class="flex gap-x-2">
    <button
      @click="setActiveLanguage('en')"
      class="btn font-[400] btn-ghost border-none transition-all duration-300 px-8 btn-sm h-[40px]"
      :class="{
        'bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white':
          languageStore.activeLanguage === 'en',
        'bg-transparent text-gray-500': languageStore.activeLanguage !== 'en',
      }"
    >
      English
    </button>

    <button
      @click="setActiveLanguage('ko')"
      class="btn font-[400] btn-ghost border-none transition-all duration-300 px-8 btn-sm h-[40px]"
      :class="{
        'bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white':
          languageStore.activeLanguage === 'ko',
        'bg-transparent text-gray-500': languageStore.activeLanguage !== 'ko',
      }"
    >
      Korean
    </button>
  </div>
</template>

<script setup>
import { useLanguageStore } from "~/stores/language";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const languageStore = useLanguageStore();

onMounted(async () => {
  await languageStore.initialize();
  locale.value = languageStore.activeLanguage;
});

const setActiveLanguage = (language) => {
  if (process.client && languageStore.activeLanguage !== language) {
    languageStore.setLanguage(language);
    locale.value = language;
  }
};
</script>