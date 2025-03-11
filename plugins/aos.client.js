import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  });
});
