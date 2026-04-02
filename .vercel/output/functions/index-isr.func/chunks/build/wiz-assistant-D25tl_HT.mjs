import { a as _sfc_main$7 } from './server.mjs';
import { _ as __nuxt_component_1, a as _sfc_main$1 } from './TierAudience-DCiDZoDw.mjs';
import { computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { useI18n } from 'vue-i18n';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';
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

const _sfc_main = {
  __name: "wiz-assistant",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const currentLanguage = computed(() => locale.value);
    const features = [
      { key: "guide_users", image: "guide-users.png" },
      { key: "automatically_respond", image: "automatically-respond.png" },
      { key: "handle_document", image: "handle-document.png" },
      { key: "provide_examples", image: "provide-examples.png" },
      { key: "automate_repetitive", image: "automate-repetitive.png" },
      { key: "extendable_future", image: "extendable-future.png" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      const _component_PricingTiers = __nuxt_component_1;
      const _component_TierAudience = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-[2rem] md:px-[5rem] mx-auto py-10"><div class="flex justify-center mb-2">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "450px",
        height: "100%",
        src: "/images/wiz-assistant/wiz-logo.png",
        alt: "wiz"
      }, null, _parent));
      _push(`</div><div class="text-center text-[#20252CE5] font-semibold text-[14px]">${ssrInterpolate(_ctx.$t("wiz.subtitle"))}</div><div class="mt-[3rem] md:mt-[10rem]"><div class="relative">`);
      if (currentLanguage.value === "en") {
        _push(`<!--[--><div class="hidden md:block"><div class="flex justify-center">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/wiz-assistant/statement-en.png",
          width: "1100px",
          class: "h-auto",
          alt: "en-message"
        }, null, _parent));
        _push(`</div></div><div class="md:hidden">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/wiz-assistant/statement-en-small.png",
          class: "w-full h-auto",
          alt: "en-message"
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!--[--><div class="hidden md:block"><div class="flex justify-center">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/wiz-assistant/statement-ko.png",
          width: "1100px",
          class: "h-auto",
          alt: "ko-message"
        }, null, _parent));
        _push(`</div></div><div class="md:hidden">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/wiz-assistant/statement-ko-small.png",
          class: "w-full h-auto",
          alt: "en-message"
        }, null, _parent));
        _push(`</div><!--]-->`);
      }
      _push(`</div></div><div class="mt-20"><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div><div class="flex justify-center mb-3">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `/images/wiz-assistant/features/${feature.image}`,
          width: "80px",
          class: "h-auto",
          alt: _ctx.$t(`wiz.features.${feature.key}`)
        }, null, _parent));
        _push(`</div><div class="text-center"><p class="text-[#20252CE5] font-inter text-[16px]">${ssrInterpolate(_ctx.$t(`wiz.features.${feature.key}`))}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="mt-12"><div class="flex justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/wiz-assistant/wiz-example.png",
        width: "1200px",
        class: "h-auto",
        alt: "message"
      }, null, _parent));
      _push(`</div></div></div><div class="px-[2rem] lg:px-[5rem] mx-auto py-20 bg-[#20252CE5]">`);
      _push(ssrRenderComponent(_component_PricingTiers, null, null, _parent));
      _push(`<div class="mt-[5rem]">`);
      _push(ssrRenderComponent(_component_TierAudience, null, null, _parent));
      _push(`</div></div><div class="px-[3rem] md:px-[5rem] mx-auto py-24 relative"><div class="absolute left-[9%] top-[40%] md:top-0 lg:left-[25%] xl:left-[30%] 2xl:left-[35%] lg:top-[10%] 2xl:top-[10%] z-0">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/wiz-assistant/overlay.png",
        width: "600px",
        class: "h-auto",
        alt: "message"
      }, null, _parent));
      _push(`</div><div class="hidden lg:block"><div class="absolute lg:left-[20%] lg:top-[45%] 2xl:left-[33%] 2xl:top-[45%]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/wiz-assistant/overlay-left.png",
        width: "74px",
        class: "h-auto",
        alt: "message"
      }, null, _parent));
      _push(`</div></div><div class="hidden lg:block"><div class="absolute lg:left-[72%] lg:top-[30%] 2xl:left-[65%] 2xl:top-[30%]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/wiz-assistant/overlay-right.png",
        width: "74px",
        class: "h-auto",
        alt: "message"
      }, null, _parent));
      _push(`</div></div><div class="relative z-10"><div class="text-center"><p class="text-black text-[24px]">${ssrInterpolate(_ctx.$t("wiz.main_message"))}</p><div class="mt-[5rem] flex justify-center"><div><div class="rounded-[22px] w-auto py-2 px-8 flex justify-center gap-5 items-center transition-all duration-300 bg-[#F8FAFC] relative" style="${ssrRenderStyle({ "background": "linear-gradient(#f8fafc, #f8fafc) padding-box,\r\n                    linear-gradient(135deg, #2376e9, #02c7d0) border-box", "border": "2px solid transparent", "border-radius": "22px" })}"><span style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #2376e9, #02c7d0)", "-webkit-background-clip": "text", "background-clip": "text", "color": "transparent" })}">${ssrInterpolate(_ctx.$t("wiz.ask_button"))}</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-all duration-300"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="url(#gradientStroke)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><defs><linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="objectBoundingBox"><stop offset="0%" stop-color="#2376e9"></stop><stop offset="100%" stop-color="#02c7d0"></stop></linearGradient></defs></svg></div><div class="mt-5 flex justify-center"><div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/wiz-assistant/chat-devices.png",
        width: "125px",
        class: "h-auto",
        alt: "chat-device"
      }, null, _parent));
      _push(`</div></div><div class="text-center mt-2"><span class="text-black">${ssrInterpolate(_ctx.$t("wiz.availability"))}</span></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wiz-assistant.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
