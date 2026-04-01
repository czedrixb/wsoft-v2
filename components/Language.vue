<template>
  <ClientOnly fallback-tag="div" fallback="">
    <div class="dropdown dropdown-end">
      <label
        tabindex="0"
        class="btn btn-sm h-[38px] px-2 bg-white border border-gray-200 hover:bg-gray-50 cursor-pointer"
      >
        <img
          :src="`/images/revamp/language/${selectedLanguage.code}.png`"
          :alt="selectedLanguage.display"
          class="w-6 h-6 object-cover rounded-[4px]"
        />
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
        class="dropdown-content z-[1] menu p-2 shadow-lg bg-white rounded-box w-auto min-w-[60px] border border-gray-100"
      >
        <li v-for="lang in languages" :key="lang.code">
          <a
            @click="setActiveLanguage(lang.code)"
            :class="{ 'bg-gray-100': locale === lang.code }"
            class="flex justify-center hover:bg-gray-50 p-1.5"
          >
            <img
              :src="`/images/revamp/language/${lang.code}.png`"
              :alt="lang.display"
              class="w-6 h-6 object-cover rounded-[4px]"
            />
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
  { code: "en", display: "EN" },
  { code: "ko", display: "KO" },
];

const selectedLanguage = computed(() => {
  return languages.find((lang) => lang.code === locale.value) || languages[0];
});

const setActiveLanguage = (language) => {
  locale.value = language;
};
</script>
