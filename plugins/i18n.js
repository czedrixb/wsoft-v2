import { createI18n } from "vue-i18n";
import enMessages from "~/locales/en.json";
import koMessages from "~/locales/ko.json";

export default defineNuxtPlugin(async (nuxtApp) => {
  let storedLang = "ko";

  if (process.client) {
    storedLang = localStorage.getItem("lang") || "ko";

    document.documentElement.lang = storedLang;
    console.log("[i18n Plugin] Initial HTML lang set to:", storedLang);
  }

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
    watch(i18n.global.locale, (newLang) => {
      document.documentElement.lang = newLang;
      console.log("[i18n Plugin] HTML lang updated to:", newLang);
    });
  }
});
