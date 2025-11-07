export const useLanguageStore = defineStore('language', {
  state: () => ({
    activeLanguage: 'ko',
  }),
  actions: {
    setLanguage(lang: string) {
      if (process.client) {
        this.activeLanguage = lang;
        localStorage.setItem('lang', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        console.log("[Language Set] HTML lang attribute updated to:", lang);
        
        return lang; 
      }
      return this.activeLanguage;
    },
    async initialize() {
      if (process.client) {
        // console.log("[Language Init] Start - Current activeLanguage:", this.activeLanguage);
        
        // Check if language is already set in localStorage
        const storedLang = localStorage.getItem('lang');
        if (storedLang && (storedLang === 'ko' || storedLang === 'en')) {
          // console.log("Using stored language:", storedLang);
          if (this.activeLanguage !== storedLang) {
            return this.setLanguage(storedLang);
          }
          return this.activeLanguage;
        }
        
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

        // Set initial HTML lang attribute
        document.documentElement.lang = lang;
        console.log("Initial HTML lang attribute set to:", lang);

        if (this.activeLanguage !== lang) {
          console.log("Updating language to:", lang);
          return this.setLanguage(lang); 
        }
        
        return this.activeLanguage;
      }
    }
  }
})