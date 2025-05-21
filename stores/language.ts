import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    activeLanguage: 'ko' // Default to Korean
  }),
  actions: {
    setLanguage(lang: string) {
      if (process.client) {
        this.activeLanguage = lang
        localStorage.setItem('lang', lang)
      }
    },
    initialize() {
      if (process.client) {
        // 1. Check localStorage first
        const storedLang = localStorage.getItem('lang')
        if (storedLang) {
          this.activeLanguage = storedLang
          return
        }

        // 2. Detect user's country using Intl API
        let userCountry: string | undefined

        try {
          // Modern browsers support Intl.Locale
          userCountry = new Intl.Locale(navigator.language).region
        } catch (e) {
          // Fallback for older browsers
          userCountry = new Intl.DateTimeFormat().resolvedOptions().locale.split('-')[1]?.toUpperCase()
        }

        // 3. Set language based on country
        if (userCountry) {
          if (userCountry === 'KR') {
            this.activeLanguage = 'ko'
          } else {
            this.activeLanguage = 'en' // Default to English for other countries
          }
        }
      }
    }
  }
})