import { a as _sfc_main$7 } from './server.mjs';
import { _ as __nuxt_component_1, a as _sfc_main$1 } from './TierAudience-DCiDZoDw.mjs';
import { _ as _sfc_main$2 } from './RelatedProducts-RiG-jK_H.mjs';
import { computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
      const _component_RelatedProducts = _sfc_main$2;
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
      _push(`</div></div><div class="px-[3rem] md:px-[5rem] mx-auto py-24 relative">`);
      _push(ssrRenderComponent(_component_RelatedProducts, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/revamp/wiz-assistant.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
