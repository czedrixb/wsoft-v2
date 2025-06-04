<template>
  <div class="flex gap-x-2">
    <button
      @click="setActiveLanguage('en')"
      class="btn font-[400] btn-ghost border-none transition-all duration-300 px-8 btn-sm h-[30px]"
      :class="{
        'bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white':
          currentLanguage === 'en',
        'bg-transparent text-gray-500': currentLanguage !== 'en',
      }"
    >
      English
    </button>

    <button
      @click="setActiveLanguage('ko')"
      class="btn font-[400] btn-ghost border-none transition-all duration-300 px-8 btn-sm h-[30px]"
      :class="{
        'bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white':
          currentLanguage === 'ko',
        'bg-transparent text-gray-500': currentLanguage !== 'ko',
      }"
    >
      Korean
    </button>
  </div>
</template>

<script setup>
import { useLanguageStore } from "~/stores/language";
import { useI18n } from "vue-i18n";
import { storeToRefs } from "pinia";

const { locale } = useI18n();
const languageStore = useLanguageStore();
const { activeLanguage: currentLanguage } = storeToRefs(languageStore); // Reactive reference

onMounted(async () => {
  console.log("Initializing language store...");
  const lang = await languageStore.initialize();
  locale.value = lang;
  console.log("Final active language:", lang);
});

watch(currentLanguage, (newLang) => {
  locale.value = newLang;
});

const setActiveLanguage = async (language) => {
  if (process.client && currentLanguage.value !== language) {
    await languageStore.setLanguage(language);
  }
};
</script>