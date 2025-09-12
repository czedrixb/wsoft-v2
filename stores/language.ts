export const useLanguageStore = defineStore('language', {
  state: () => ({
    activeLanguage: 'ko',
  }),
  actions: {
    setLanguage(lang: string) {
      if (process.client) {
        this.activeLanguage = lang;
        localStorage.setItem('lang', lang);
        return lang; 
      }
      return this.activeLanguage;
    },
    async initialize() {
      if (process.client) {
        console.log("[Language Init] Start - Current activeLanguage:", this.activeLanguage);
        
        let userCountry: string | undefined;
        try {
          userCountry = new Intl.Locale(navigator.language).region;
          console.log("Detected country (Intl.Locale):", userCountry);
        } catch (e) {
          userCountry = new Intl.DateTimeFormat().resolvedOptions().locale.split('-')[1]?.toUpperCase();
          console.log("Detected country (Fallback):", userCountry);
        }

        let lang = 'ko'; 
        if (userCountry) {
          lang = userCountry === 'KR' ? 'ko' : 'en';
        }

        if (this.activeLanguage !== lang) {
          console.log("Updating language to:", lang);
          return this.setLanguage(lang); 
        }
        
        return this.activeLanguage;
      }
    }
  }
})