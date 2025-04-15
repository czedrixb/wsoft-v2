<template>
  <div class="flex gap-x-2">
    <button
      @click="setActiveLanguage('en')"
      class="btn font-[400] btn-ghost border-none transition-all duration-300 px-8 btn-sm h-[40px]"
      :class="{
        'bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white':
          activeLanguage === 'en',
        'bg-transparent text-gray-500': activeLanguage !== 'en',
      }"
    >
      {{ $t("English") }}
    </button>

    <button
      @click="setActiveLanguage('ko')"
      class="btn font-[400] btn-ghost border-none transition-all duration-300 px-8 btn-sm h-[40px]"
      :class="{
        'bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white':
          activeLanguage === 'ko',
        'bg-transparent text-gray-500': activeLanguage !== 'ko',
      }"
    >
      {{ $t("Korean") }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useNuxtApp } from "#app";
import { ref, onMounted } from "vue";

const { locale } = useI18n();
const { $i18n } = useNuxtApp();

const activeLanguage = ref("ko");

onMounted(() => {
  if (process.client) {
    const storedLang = localStorage.getItem("lang") || "ko";
    locale.value = storedLang;
    $i18n.global.locale.value = storedLang;
    activeLanguage.value = storedLang;
  }
});

const setActiveLanguage = (language) => {
  if (process.client && activeLanguage.value !== language) {
    localStorage.setItem("lang", language);
    locale.value = language;
    $i18n.global.locale.value = language;
    activeLanguage.value = language;
  }
};
</script>
