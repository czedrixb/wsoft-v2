import { createI18n } from "vue-i18n";
import enMessages from "~/locales/en.json";
import koMessages from "~/locales/ko.json";

export default defineNuxtPlugin(async (nuxtApp) => {
  let locale = "ko";

  if (process.server) {
    const event = useRequestEvent?.();
    if (event) {
      const headers = event.node.req.headers;

      const cookieLang = getCookie(event, "lang");
      if (cookieLang && (cookieLang === "ko" || cookieLang === "en")) {
        locale = cookieLang;
        // console.log("[i18n Server] Using cookie language:", cookieLang);
      } else {
        const acceptLanguage = headers["accept-language"];
        if (acceptLanguage) {
          const preferredLang = acceptLanguage.split(",")[0].split("-")[0];
          if (preferredLang === "ko" || preferredLang === "en") {
            locale = preferredLang;
            console.log("[i18n Server] Using Accept-Language:", preferredLang);
          }
        }
        console.log("[i18n Server] Using default language:", locale);
      }
    }
  } else {
    let storedLang = getClientCookie("lang");

    if (!storedLang) {
      storedLang = localStorage.getItem("lang");
    }

    if (storedLang && (storedLang === "ko" || storedLang === "en")) {
      locale = storedLang;
      console.log("[i18n Client] Using stored language:", storedLang);
    } else {
      let userCountry;
      try {
        userCountry = new Intl.Locale(navigator.language).region;
      } catch (e) {
        userCountry = new Intl.DateTimeFormat()
          .resolvedOptions()
          .locale.split("-")[1]
          ?.toUpperCase();
      }
      locale = userCountry === "KR" ? "ko" : "en";
      console.log("[i18n Client] Using detected language:", locale);
    }

    document.documentElement.lang = locale;

    setClientCookie("lang", locale, 365);
  }

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: locale,
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
      localStorage.setItem("lang", newLang);
      setClientCookie("lang", newLang, 365);
      console.log("[i18n Client] Language changed to:", newLang);
    });
  }
});

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
