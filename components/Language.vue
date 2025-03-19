<template>
  <div class="flex gap-x-2">
    <button
      v-for="language in ['en', 'ko']"
      :key="language"
      @click="setActiveLanguage(language)"
      class="btn font-[400] btn-ghost border-none transition-all duration-300 px-8 btn-sm h-[40px]"
      :class="{
        'bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white':
          activeLanguage === language,
        'bg-transparent text-gray-500': activeLanguage !== language,
      }"
    >
      <div v-if="language === 'en'">{{ $t("English") }}</div>
      <div v-if="language === 'ko'">{{ $t("Korean") }}</div>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const activeLanguage = ref("ko");

const setActiveLanguage = (language) => {
  locale.value = language;
  activeLanguage.value = language;
  localStorage.setItem("lang", language);
};

onMounted(() => {
  const savedLanguage = localStorage.getItem("lang");
  if (savedLanguage) {
    locale.value = savedLanguage;
    activeLanguage.value = savedLanguage;
  }
});
</script>
