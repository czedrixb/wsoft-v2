export const useLanguage = () => {
  const { locale } = useI18n();

  const setLanguage = (lang) => {
    locale.value = lang;

    if (process.client) {
      document.documentElement.lang = lang;
    }
  };

  watch(locale, (newLang) => {
    if (process.client) {
      document.documentElement.lang = newLang;
    }
  });

  return {
    setLanguage,
    currentLanguage: locale,
  };
};
