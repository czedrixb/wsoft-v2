import { createI18n } from "vue-i18n";
import enMessages from "~/locales/en.json";
import koMessages from "~/locales/ko.json";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: "ko",
    fallbackLocale: "en",
    messages: {
      en: enMessages,
      ko: koMessages,
    },
  });

  nuxtApp.vueApp.use(i18n);
});
