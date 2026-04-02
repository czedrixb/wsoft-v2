import { mergeProps, unref, ref, computed, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead, a as _sfc_main$7 } from './server.mjs';
import { useI18n } from 'vue-i18n';
import { s as setInterval } from './interval-DGKf6Zoj.mjs';
import { _ as __nuxt_component_1 } from './TechStack-BWgKLLon.mjs';
import { f as publicAssetsURL } from '../_/nitro.mjs';
import { g as gsapWithCSS, S as ScrollTrigger } from './ScrollTrigger-Br7O8lZa.mjs';
import { u as useCanonical, a as useStructuredData } from './useCanonical-BQilDA_U.mjs';
import 'pinia';
import 'vue-router';
import 'emailjs-com';
import 'sweetalert2';
import 'vee-validate';
import 'yup';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const _sfc_main$5 = {
  __name: "Carousel",
  __ssrInlineRender: true,
  setup(__props) {
    const slides = [
      {
        id: 0,
        gradientClass: "bg-gradient-to-r from-[#E96F23] to-[#D0B802]",
        image: "/images/home/banner/icon-1.png"
      },
      {
        id: 1,
        gradientClass: "bg-gradient-to-r from-[#2376E9] to-[#02C7D0]",
        image: "/images/home/banner/icon-2.png"
      },
      {
        id: 2,
        gradientClass: "bg-gradient-to-r from-[#C123E9] to-[#5F02D0]",
        image: "/images/home/banner/icon-3.png"
      }
    ];
    const activeIndex = ref(1);
    const total = slides.length;
    const slideWidth = ref("936px");
    const getPosition = (slideIndex) => {
      let diff = slideIndex - activeIndex.value;
      if (diff > Math.floor(total / 2)) diff -= total;
      if (diff < -Math.floor(total / 2)) diff += total;
      return diff;
    };
    const getSlideStyle = (slideIndex) => {
      const pos = getPosition(slideIndex);
      const absPos = Math.abs(pos);
      if (absPos > 1) {
        return { opacity: 0, pointerEvents: "none", zIndex: 0 };
      }
      if (pos === 0) {
        return {
          left: "50%",
          transform: "translateX(-50%) scale(1)",
          opacity: 1,
          zIndex: 10,
          pointerEvents: "auto",
          filter: "none"
        };
      } else {
        const xOffset = pos * 900;
        return {
          left: "50%",
          transform: `translateX(-50%) translateX(${xOffset}px) translateY(20px) scale(0.78)`,
          opacity: 0.45,
          zIndex: 5,
          pointerEvents: "auto",
          filter: "blur(1.5px)"
        };
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full py-10" }, _attrs))} data-v-ec199268><button class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-1.5 md:p-2 backdrop-blur-sm transition-all" data-v-ec199268><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-ec199268><path d="M15 18l-6-6 6-6" data-v-ec199268></path></svg></button><div class="flex items-center justify-center overflow-hidden" style="${ssrRenderStyle({ "height": "320px" })}" data-v-ec199268><!--[-->`);
      ssrRenderList(slides, (slide, i) => {
        _push(`<div class="absolute transition-all duration-500 ease-in-out cursor-pointer" style="${ssrRenderStyle(getSlideStyle(i))}" data-v-ec199268><div class="${ssrRenderClass([slide.gradientClass, "rounded-[20px] md:rounded-[28px] p-4 md:p-8 mx-auto"])}" style="${ssrRenderStyle({ width: unref(slideWidth) })}" data-v-ec199268><div class="text-white grid grid-cols-12" data-v-ec199268><div class="col-span-12 order-2 md:order-1 md:col-span-6" data-v-ec199268><div class="flex flex-col h-full" data-v-ec199268><div class="flex-grow space-y-2 md:space-y-8 mb-16" data-v-ec199268><div class="text-[16px] md:text-[24px] font-medium leading-snug" data-v-ec199268><p data-v-ec199268>${ssrInterpolate(_ctx.$t(`home.carousel.slide${slide.id + 1}.title.line1`))}</p><p data-v-ec199268>${ssrInterpolate(_ctx.$t(`home.carousel.slide${slide.id + 1}.title.line2`))}</p></div><div class="font-semibold text-[11px] md:text-[16px] opacity-90 hidden sm:block" data-v-ec199268><p data-v-ec199268>${ssrInterpolate(_ctx.$t(
          `home.carousel.slide${slide.id + 1}.description.line1`
        ))}</p></div><div class="font-semibold text-[11px] md:text-[16px] opacity-90 hidden sm:block" data-v-ec199268><p data-v-ec199268>${ssrInterpolate(_ctx.$t(
          `home.carousel.slide${slide.id + 1}.description.line2`
        ))}</p></div><div class="font-semibold text-[11px] opacity-90 sm:hidden line-clamp-3" data-v-ec199268><p data-v-ec199268>${ssrInterpolate(_ctx.$t(
          `home.carousel.slide${slide.id + 1}.description.line1`
        ))}</p></div></div><button class="btn w-auto border bg-transparent hover:bg-[#2376E9] hover:border-[#2376E9] border-[#F8FAFC99] rounded-full px-4 md:px-8 py-1.5 md:py-2 flex gap-2 md:gap-3 items-center mt-4 md:mt-0 self-start text-[11px] md:text-sm" data-v-ec199268>${ssrInterpolate(_ctx.$t("home.carousel.readMore"))} <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-ec199268><path d="M5 12h14" data-v-ec199268></path><path d="m12 5 7 7-7 7" data-v-ec199268></path></svg></button></div></div><div class="col-span-12 order-1 md:order-2 md:col-span-6 flex justify-center md:justify-end md:items-end" data-v-ec199268><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", _ctx.$t(`home.carousel.slide${slide.id + 1}.title.line2`))} class="h-[160px] sm:h-[220px] md:h-[280px] w-auto object-contain" data-v-ec199268></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center gap-2 mt-3" data-v-ec199268><!--[-->`);
      ssrRenderList(slides, (slide, i) => {
        _push(`<button class="${ssrRenderClass([i === unref(activeIndex) ? "bg-white w-4 h-2" : "bg-white/40 w-2 h-2", "rounded-full transition-all duration-300"])}" data-v-ec199268></button>`);
      });
      _push(`<!--]--></div><button class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-1.5 md:p-2 backdrop-blur-sm transition-all" data-v-ec199268><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-ec199268><path d="M9 18l6-6-6-6" data-v-ec199268></path></svg></button></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Carousel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-ec199268"]]);
const _sfc_main$4 = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const fullTitle = computed(() => t("home.banner.title"));
    const displayedTitle = ref("");
    const showCursor = ref(true);
    const isDone = ref(false);
    let typingTimer = null;
    let cursorTimer = null;
    const startTyping = () => {
      clearInterval(typingTimer);
      clearInterval(cursorTimer);
      displayedTitle.value = "";
      isDone.value = false;
      showCursor.value = true;
      fullTitle.value;
      typingTimer = setInterval();
      cursorTimer = setInterval();
    };
    watch(fullTitle, () => {
      startTyping();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b787c00b><div class="px-8 md:px-0 md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto" data-v-b787c00b><div class="md:text-center max-w-6xl mx-auto" data-v-b787c00b><h2 class="text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent" data-v-b787c00b><span data-v-b787c00b>${ssrInterpolate(unref(displayedTitle))}</span><span class="${ssrRenderClass([unref(showCursor) ? "opacity-100" : "opacity-0", "inline-block w-[3px] h-[56px] ml-1 align-middle bg-gradient-to-b from-[#2376E9] to-[#02C7D0] rounded-sm"])}" data-v-b787c00b></span></h2><p class="text-[24px] text-[#20252CE5] mt-5" data-v-b787c00b>${ssrInterpolate(_ctx.$t("home.banner.subtitle"))}</p></div></div><div class="mt-40" data-v-b787c00b>`);
      _push(ssrRenderComponent(_component_Carousel, null, null, _parent));
      _push(`</div><div class="mt-[6rem] mx-auto max-w-lg text-center px-5" data-v-b787c00b><p class="text-black text-[16px] font-semibold text-justify" data-v-b787c00b>${ssrInterpolate(_ctx.$t("home.banner.description"))}</p><div class="mt-8 flex justify-center" data-v-b787c00b><button class="group btn w-auto py-2 flex gap-3 items-center relative overflow-hidden rounded-full px-8" data-v-b787c00b><div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#2376E9] to-[#02C7D0]" data-v-b787c00b><div class="w-full h-full rounded-full bg-white group-hover:bg-transparent transition-all" data-v-b787c00b></div></div><span class="relative z-10 font-medium bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent group-hover:text-white group-hover:[background:none] group-hover:[-webkit-text-fill-color:white] transition-all" data-v-b787c00b>${ssrInterpolate(_ctx.$t("home.banner.button"))}</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="relative z-10 transition-all" data-v-b787c00b><defs data-v-b787c00b><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%" data-v-b787c00b><stop offset="0%" stop-color="#2376E9" data-v-b787c00b></stop><stop offset="100%" stop-color="#02C7D0" data-v-b787c00b></stop></linearGradient></defs><path d="M5 12h14" stroke="url(#grad)" class="group-hover:stroke-white transition-all" data-v-b787c00b></path><path d="m12 5 7 7-7 7" stroke="url(#grad)" class="group-hover:stroke-white transition-all" data-v-b787c00b></path></svg></button></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b787c00b"]]);
const _sfc_main$3 = {
  __name: "Partnership",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto px-8 max-w-screen-2xl pb-0 md:py-16" }, _attrs))}><div class="grid grid-cols-1 lg:grid-cols-2"><div><div class="flex justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/home/fortune-100.png",
        class: "object-cover h-auto",
        width: "126px"
      }, null, _parent));
      _push(`</div><div class="mt-5"><p class="text-[40px] leading-[1.2] max-w-xl mx-auto font-light bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent">${ssrInterpolate(unref(t)("home.partnership.fortune100.text"))} <span class="font-bold">${ssrInterpolate(unref(t)("home.partnership.fortune100.highlight"))}</span> ${ssrInterpolate(unref(t)("home.partnership.fortune100.text_end"))}</p></div></div><div><div class="flex justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/home/science-exchange.png",
        class: "object-cover h-auto",
        width: "155px"
      }, null, _parent));
      _push(`</div><div class="mt-5"><p class="text-[40px] leading-[1.2] max-w-xl mx-auto font-light bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent">${ssrInterpolate(unref(t)("home.partnership.scienceExchange.text"))} <span class="font-bold">${ssrInterpolate(unref(t)("home.partnership.scienceExchange.highlight"))}</span> ${ssrInterpolate(unref(t)("home.partnership.scienceExchange.text_end"))}</p></div><div class="mt-5 max-w-xl mx-auto"><a href="https://www.scienceexchange.com/" target="_blank" rel="noopener noreferrer" class="border border-[#20252CE5] px-10 py-2 text-[16px] text-black font-semibold flex items-center gap-3 rounded-[22px] w-fit">${ssrInterpolate(unref(t)("home.partnership.link"))} `);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/home/web-icon.png",
        class: "object-cover h-auto",
        width: "16px"
      }, null, _parent));
      _push(`</a></div></div></div><div class="mt-12"><div class="mx-auto max-w-4xl"><p class="text-[#64748B] text-[16px] font-semibold">${ssrInterpolate(unref(t)("home.partnership.description"))}</p></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Partnership.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/revamp/home/services/saas-custom-1.png");
const _sfc_main$2 = {
  __name: "AnimatedServices",
  __ssrInlineRender: true,
  setup(__props) {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    const servicesContainer = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "servicesContainer",
        ref: servicesContainer
      }, _attrs))}><div class="service-section bg-[#e2e8f0] relative overflow-hidden"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="relative"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="text-block self-center" data-section="0"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("home.services.aiAutomation.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[16px] mb-5">${ssrInterpolate(_ctx.$t("home.services.aiAutomation.subtitle"))}</p><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(_ctx.$t("home.services.aiAutomation.description"))}</p></div><div class="image-parallax" data-direction="up">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/home/services/ai-automation-1.png",
        class: "h-auto object-cover w-full",
        width: "598px"
      }, null, _parent));
      _push(`</div><div class="image-parallax" data-direction="down">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/home/services/ai-automation-2.png",
        class: "h-auto object-cover w-full",
        width: "598px"
      }, null, _parent));
      _push(`</div></div><div class="animate-img pointer-events-none absolute top-0 left-[33.33%] w-[33.33%] h-full flex items-center z-10">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/home/services/ai-automation-animate.png",
        class: "h-auto object-cover w-full",
        width: "598px"
      }, null, _parent));
      _push(`</div></div></div></div><div class="service-section bg-[#ffffff] relative overflow-hidden"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="relative"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="image-parallax" data-direction="up">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/home/services/legacy-systems-1.png",
        class: "h-auto object-cover w-full",
        width: "598px"
      }, null, _parent));
      _push(`</div><div class="image-parallax" data-direction="down">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/home/services/legacy-systems-2.png",
        class: "h-auto object-cover w-full",
        width: "598px"
      }, null, _parent));
      _push(`</div><div class="text-block self-center" data-section="1"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("home.services.legacyModernization.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[16px] mb-5">${ssrInterpolate(_ctx.$t("home.services.legacyModernization.subtitle"))}</p><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(_ctx.$t("home.services.legacyModernization.description"))}</p></div></div><div class="animate-img pointer-events-none absolute top-0 left-[33.33%] w-[33.33%] h-full flex items-center z-10">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/home/services/ai-automation-animate.png",
        class: "h-auto object-cover w-full",
        width: "598px"
      }, null, _parent));
      _push(`</div></div></div></div><div class="service-section bg-[#e2e8f0] relative overflow-hidden"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="relative"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="text-block self-center" data-section="2"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("home.services.saasDevelopment.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[16px] mb-5">${ssrInterpolate(_ctx.$t("home.services.saasDevelopment.subtitle"))}</p><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(_ctx.$t("home.services.saasDevelopment.description"))}</p></div><div class="image-parallax" data-direction="up"><img${ssrRenderAttr("src", _imports_0)} class="h-auto object-cover w-full" width="598px"></div><div class="image-parallax" data-direction="down">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/home/services/saas-custom-2.png",
        class: "h-auto object-cover w-full",
        width: "598px"
      }, null, _parent));
      _push(`</div></div><div class="animate-img pointer-events-none absolute top-0 left-[33.33%] w-[33.33%] h-full flex items-center z-10">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/home/services/ai-automation-animate.png",
        class: "h-auto object-cover w-full",
        width: "598px"
      }, null, _parent));
      _push(`</div></div></div></div><div class="service-section bg-[#ffffff] relative overflow-hidden"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="relative"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="image-parallax" data-direction="up">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/home/services/education-administration-1.png",
        class: "h-auto object-cover w-full",
        width: "598px"
      }, null, _parent));
      _push(`</div><div class="image-parallax" data-direction="down">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/home/services/education-administration-2.png",
        class: "h-auto object-cover w-full",
        width: "598px"
      }, null, _parent));
      _push(`</div><div class="text-block self-center" data-section="3"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("home.services.publicSector.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[16px] mb-5">${ssrInterpolate(_ctx.$t("home.services.publicSector.subtitle"))}</p><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(_ctx.$t("home.services.publicSector.description"))}</p></div></div><div class="animate-img pointer-events-none absolute top-0 left-[33.33%] w-[33.33%] h-full flex items-center z-10">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/home/services/ai-automation-animate.png",
        class: "h-auto object-cover w-full",
        width: "598px"
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedServices.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$7;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto px-8 max-w-screen-4xl pb-0 md:py-16 mb-0 md:mb-10" }, _attrs))}><div><div class="grid grid-cols-1 lg:grid-cols-12 gap-5"><div class="col-span-12 lg:col-span-8">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/revamp/home/projects/hems.png",
    class: "w-full h-auto max-w-full object-cover",
    alt: _ctx.$t("home.projects.title")
  }, null, _parent));
  _push(`</div><div class="col-span-12 lg:col-span-4">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/revamp/home/projects/yumtrack.png",
    class: "w-full h-auto max-w-full object-cover",
    alt: _ctx.$t("home.projects.title")
  }, null, _parent));
  _push(`</div><div class="col-span-12 lg:col-span-4">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/revamp/home/projects/oct.png",
    class: "w-full h-auto max-w-full object-cover",
    alt: _ctx.$t("home.projects.title")
  }, null, _parent));
  _push(`</div><div class="col-span-12 lg:col-span-8">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/revamp/home/projects/kakaotalk.png",
    class: "w-full h-auto max-w-full object-cover",
    alt: _ctx.$t("home.projects.title")
  }, null, _parent));
  _push(`</div></div></div><div class="mt-10"><h4 class="text-[#64748B] text-[24px] max-w-2xl">${ssrInterpolate(_ctx.$t("home.projects.description"))}</h4></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BriefProjects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { canonicalUrl } = useCanonical();
    const { locale, t } = useI18n();
    const staticMetaTitle = t("home-title");
    const staticMetaDescription = t("home-description");
    const staticMetaKeywords = [
      t("home-meta-keyword"),
      ...Array.from({ length: 53 }, (_, i) => t(`home-meta-keyword-${i + 1}`))
    ].join(", ");
    const structuredData = useStructuredData("home");
    useHead({
      title: staticMetaTitle,
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(structuredData)
        }
      ],
      link: [
        {
          rel: "canonical",
          href: canonicalUrl.value
        }
      ],
      meta: [
        { name: "description", content: staticMetaDescription },
        { name: "keywords", content: staticMetaKeywords },
        { property: "og:title", content: staticMetaTitle },
        { property: "og:description", content: staticMetaDescription },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/images/thumbnail.png" },
        { property: "og:url", content: canonicalUrl.value }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Banner = __nuxt_component_0;
      const _component_TechStack = __nuxt_component_1;
      const _component_Partnership = _sfc_main$3;
      const _component_AnimatedServices = _sfc_main$2;
      const _component_BriefProjects = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b3661cb3><div class="bg-white my-40" data-v-b3661cb3>`);
      _push(ssrRenderComponent(_component_Banner, null, null, _parent));
      _push(`<div class="mt-20" data-v-b3661cb3>`);
      _push(ssrRenderComponent(_component_TechStack, null, null, _parent));
      _push(`</div><div class="mt-20" data-v-b3661cb3>`);
      _push(ssrRenderComponent(_component_Partnership, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_AnimatedServices, null, null, _parent));
      _push(`<div class="mb-20" data-v-b3661cb3>`);
      _push(ssrRenderComponent(_component_BriefProjects, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b3661cb3"]]);

export { index as default };
