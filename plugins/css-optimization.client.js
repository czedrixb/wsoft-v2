// plugins/css-optimization.client.js
export default defineNuxtPlugin(() => {
  // Function to load non-critical CSS
  const loadNonCriticalCSS = () => {
    const links = document.querySelectorAll('link[rel="preload"][as="style"]');
    links.forEach((link) => {
      if (link.rel === "preload" && link.getAttribute("as") === "style") {
        link.onload = null;
        link.rel = "stylesheet";
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(loadNonCriticalCSS, 100);
    });
  } else {
    setTimeout(loadNonCriticalCSS, 100);
  }

  if ("fonts" in document) {
    document.fonts.ready.then(() => {
      document.documentElement.classList.add("fonts-loaded");
    });
  }
});
