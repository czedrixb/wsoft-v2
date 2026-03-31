<template>
  <ClientOnly fallback-tag="div" fallback="">
    <div class="dropdown dropdown-end">
      <label
        tabindex="0"
        class="btn btn-sm h-[38px] font-[400] gap-2 px-4 bg-white border border-gray-200 hover:bg-gray-50"
      >
        <span class="text-xl">{{ getFlag(selectedLanguage.code) }}</span>
        <span>{{ getDisplayCode(selectedLanguage.code) }}</span>
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </label>

      <ul
        tabindex="0"
        class="dropdown-content z-[1] menu p-2 shadow-lg bg-white rounded-box w-full min-w-[120px] border border-gray-100"
      >
        <li v-for="lang in languages" :key="lang.code">
          <a
            @click="setActiveLanguage(lang.code)"
            :class="{ 'bg-gray-100': locale === lang.code }"
            class="gap-2 text-gray-700 hover:bg-gray-50"
          >
            <span class="text-xl">{{ lang.flag }}</span>
            <span>{{ lang.display }}</span>
          </a>
        </li>
      </ul>
    </div>
  </ClientOnly>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { locale } = useI18n();

const languages = [
  { code: "en", flag: "🇬🇧", display: "EN" },
  { code: "ko", flag: "🇰🇷", display: "KO" },
];

const getFlag = (code) => {
  const lang = languages.find((l) => l.code === code);
  return lang ? lang.flag : "";
};

const getDisplayCode = (code) => {
  const lang = languages.find((l) => l.code === code);
  return lang ? lang.display : code.toUpperCase();
};

const selectedLanguage = computed(() => {
  return languages.find((lang) => lang.code === locale.value) || languages[0];
});

const setActiveLanguage = (language) => {
  locale.value = language;
};
</script>
