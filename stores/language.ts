export const useLanguageStore = defineStore('language', {
  state: () => ({
    activeLanguage: 'ko' // Default to Korean
  }),
  actions: {
    setLanguage(lang: string) {
      if (process.client) {
        this.activeLanguage = lang;
        localStorage.setItem('lang', lang);
        return lang; // Return the language for chaining
      }
      return this.activeLanguage;
    },
    async initialize() {
      if (process.client) {
        console.log("[Language Init] Start - Current activeLanguage:", this.activeLanguage);
        
        // First try to detect from browser
        let userCountry: string | undefined;
        try {
          userCountry = new Intl.Locale(navigator.language).region;
          console.log("Detected country (Intl.Locale):", userCountry);
        } catch (e) {
          userCountry = new Intl.DateTimeFormat().resolvedOptions().locale.split('-')[1]?.toUpperCase();
          console.log("Detected country (Fallback):", userCountry);
        }

        // Determine language
        let lang = 'ko'; // default
        if (userCountry) {
          lang = userCountry === 'KR' ? 'ko' : 'en';
        }

        // Only update if different from current
        if (this.activeLanguage !== lang) {
          console.log("Updating language to:", lang);
          return this.setLanguage(lang); // Use the action to ensure reactivity
        }
        
        return this.activeLanguage;
      }
    }
  }
})