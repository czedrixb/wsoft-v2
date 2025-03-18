import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export default gsap;
