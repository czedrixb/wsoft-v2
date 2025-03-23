import { createI18n } from "vue-i18n";
import enMessages from "~/locales/en.json";
import koMessages from "~/locales/ko.json";

export default defineNuxtPlugin((nuxtApp) => {
  const cookieLang = useCookie("lang", { default: () => "ko" });
  const savedLanguage = cookieLang.value;

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: savedLanguage,
    fallbackLocale: "ko",
    messages: {
      en: enMessages,
      ko: koMessages,
    },
  });

  nuxtApp.vueApp.use(i18n);

  if (process.client) {
    cookieLang.value = savedLanguage;
  }
});
