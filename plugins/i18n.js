import { createI18n } from "vue-i18n";
import enMessages from "~/locales/en.json";
import koMessages from "~/locales/ko.json";

export default defineNuxtPlugin((nuxtApp) => {
  // Default fallback
  let locale = "ko";
  
  // Server-side detection
  if (process.server) {
    const event = useRequestEvent?.();
    if (event) {
      const headers = event.node.req.headers;
      
      // Check cookie first - THIS IS THE CRITICAL PART
      const cookieLang = getCookie(event, "lang");
      if (cookieLang && (cookieLang === "ko" || cookieLang === "en")) {
        locale = cookieLang;
        console.log("[i18n Server] Using cookie language:", cookieLang);
      } 
      else {
        const acceptLanguage = headers["accept-language"];
        if (acceptLanguage) {
          const preferredLang = acceptLanguage.split(",")[0].split("-")[0];
          if (preferredLang === "ko" || preferredLang === "en") {
            locale = preferredLang;
            console.log("[i18n Server] Using Accept-Language:", preferredLang);
          }
        }
        console.log("[i18n Server] Using language:", locale);
      }
    }
  } 
  // Client-side detection - MUST MATCH SERVER PRIORITY
  else {
    // CRITICAL: Check cookie FIRST to match server behavior
    const cookieLang = getClientCookie("lang");
    if (cookieLang && (cookieLang === "ko" || cookieLang === "en")) {
      locale = cookieLang;
      console.log("[i18n Client] Using cookie language:", cookieLang);
      
      // Sync localStorage to match cookie (but don't prioritize it)
      const storedLang = localStorage.getItem("lang");
      if (storedLang !== cookieLang) {
        localStorage.setItem("lang", cookieLang);
      }
    } 
    // If no cookie, check localStorage
    else {
      const storedLang = localStorage.getItem("lang");
      if (storedLang && (storedLang === "ko" || storedLang === "en")) {
        locale = storedLang;
        console.log("[i18n Client] Using localStorage language:", storedLang);
        // Set cookie to match
        setClientCookie("lang", locale, 365);
      }
      // Browser detection as last resort
      else {
        const browserLang = navigator.language.split("-")[0];
        if (browserLang === "ko" || browserLang === "en") {
          locale = browserLang;
        }
        console.log("[i18n Client] Using detected language:", locale);
        
        // Save detected language to both
        localStorage.setItem("lang", locale);
        setClientCookie("lang", locale, 365);
      }
    }
    
    // Set HTML lang attribute
    document.documentElement.lang = locale;
  }

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: locale,
    fallbackLocale: "ko",
    messages: {
      en: enMessages,
      ko: koMessages,
    },
  });

  // Check if i18n is already installed
  if (!nuxtApp.vueApp.config.globalProperties.$i18n) {
    nuxtApp.vueApp.use(i18n);
  }

  // Watch for language changes - CLIENT SIDE ONLY
  if (process.client) {
    // Set up watcher for locale changes
    const unwatch = watch(() => i18n.global.locale.value, (newLang) => {
      console.log("[i18n] Language changed to:", newLang);
      
      document.documentElement.lang = newLang;
      

      setClientCookie("lang", newLang, 365);
      localStorage.setItem("lang", newLang);
    });

    // Clean up watcher on unmount
    nuxtApp.hook('app:beforeUnmount', () => {
      if (unwatch) unwatch();
    });
  }
});

// Helper functions
function getCookie(event, name) {
  const cookieHeader = event.node.req.headers.cookie;
  if (!cookieHeader) return null;

  const cookies = cookieHeader.split(";");
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split("=");
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

function getClientCookie(name) {
  if (typeof document === "undefined") return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2)
    return decodeURIComponent(parts.pop().split(";").shift());
  return null;
}

function setClientCookie(name, value, days) {
  if (typeof document === "undefined") return;

  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
}