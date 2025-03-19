import { createI18n } from "vue-i18n";
import enMessages from "~/locales/en.json";
import koMessages from "~/locales/ko.json";

export default defineNuxtPlugin((nuxtApp) => {
  const savedLanguage = process.client
    ? localStorage.getItem("lang") || "ko"
    : "ko";

  const i18n = createI18n({
    legacy: false,
    locale: savedLanguage,
    fallbackLocale: "ko",
    messages: {
      en: enMessages,
      ko: koMessages,
    },
  });

  nuxtApp.vueApp.use(i18n);
});
