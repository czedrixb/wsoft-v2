import { createI18n } from "vue-i18n";
import enMessages from "~/locales/en.json";
import koMessages from "~/locales/ko.json";

export default defineNuxtPlugin((nuxtApp) => {
  let storedLang = "ko";

  if (process.client) {
    storedLang = localStorage.getItem("lang") || "ko";
  }

  // Initialize i18n
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: storedLang,
    messages: {
      en: enMessages,
      ko: koMessages,
    },
  });

  nuxtApp.vueApp.use(i18n);
  nuxtApp.provide("i18n", i18n);

  if (process.client) {
    watchEffect(() => {
      localStorage.setItem("lang", i18n.global.locale.value);
    });
  }
});
