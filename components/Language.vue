<template>
  <div class="dropdown dropdown-end">
    <label
      tabindex="0"
      class="btn btn-sm h-[38px] px-2 bg-white border border-gray-200 hover:bg-gray-50 cursor-pointer"
      :aria-label="$t('language.switch')"
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
        <!-- A real href, so the switcher works with JS disabled and gives
             crawlers a path to the other language that agrees with the
             hreflang cluster. server/middleware/locale.ts honours ?lang=.
             AB-134 item 4. -->
        <a
          :href="langHref(lang.code)"
          :hreflang="lang.code"
          :aria-current="locale === lang.code ? 'true' : undefined"
          :class="{ 'bg-gray-100': locale === lang.code }"
          class="flex justify-center hover:bg-gray-50 p-1.5"
          @click.prevent="setActiveLanguage(lang.code)"
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
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { locale } = useI18n();

const languages = [
  { code: "en", display: "EN" },
  { code: "ko", display: "KO" },
];

const selectedLanguage = computed(() => {
  return languages.find((lang) => lang.code === locale.value) || languages[0];
});

const langHref = (code) => {
  const qs = new URLSearchParams({ ...route.query, lang: code }).toString();
  return `${route.path}${qs ? `?${qs}` : ""}`;
};

const setActiveLanguage = (language) => {
  // The middleware watcher in plugins/i18n.js persists the cookie.
  locale.value = language;
  if (import.meta.client) document.activeElement?.blur();
};
</script>
