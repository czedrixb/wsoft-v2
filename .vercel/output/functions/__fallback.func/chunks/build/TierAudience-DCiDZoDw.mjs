import { _ as _export_sfc, a as _sfc_main$7 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main$1 = {
  __name: "PricingTiers",
  __ssrInlineRender: true,
  setup(__props) {
    const tiers = [
      { key: "lite" },
      { key: "standard" },
      { key: "business" },
      { key: "enterprise" }
    ];
    const getTierFeatures = (tierKey) => {
      const featureMap = {
        lite: ["basic_guidance", "faq_responses"],
        standard: [
          "basic_guidance",
          "faq_responses",
          "document_request",
          "operational_guidance"
        ],
        business: [
          "basic_guidance",
          "faq_responses",
          "document_request",
          "operational_guidance",
          "customized_responses",
          "strengthened_support"
        ],
        enterprise: [
          "basic_guidance",
          "faq_responses",
          "document_request",
          "operational_guidance",
          "customized_responses",
          "strengthened_support",
          "large_organizations",
          "internal_integrations",
          "custom_features"
        ]
      };
      return featureMap[tierKey].map((key) => ({ key }));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a1c7c2dc><div class="text-center" data-v-a1c7c2dc><p class="text-[#F8FAFC99] font-semibold text-[16px]" data-v-a1c7c2dc>${ssrInterpolate(_ctx.$t("wiz.pricing_tiers"))}</p></div><div class="mt-8" data-v-a1c7c2dc><div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6" data-v-a1c7c2dc><!--[-->`);
      ssrRenderList(tiers, (tier) => {
        _push(`<div class="rounded-[14px] p-8 h-[38rem] relative overflow-hidden flex flex-col transition-all duration-300 card-container group" data-v-a1c7c2dc><div class="absolute inset-0 bg-[#F8FAFC] z-10 rounded-[14px]" data-v-a1c7c2dc></div><div class="text-center relative z-20" data-v-a1c7c2dc><h4 class="text-[#64748B] text-[48px] font-[300] transition-all duration-300 group-hover:text-[#2376E9]" data-v-a1c7c2dc>${ssrInterpolate(_ctx.$t(`wiz.tiers.${tier.key}.name`))}</h4></div><div class="mt-8 relative z-20" data-v-a1c7c2dc><div class="space-y-3" data-v-a1c7c2dc><!--[-->`);
        ssrRenderList(getTierFeatures(tier.key), (feature) => {
          _push(`<div class="flex gap-4 items-center" data-v-a1c7c2dc>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            width: "16px",
            height: "100%",
            src: "/images/wiz-assistant/check.png",
            alt: "check"
          }, null, _parent));
          _push(`<span class="text-black font-inter text-[16px]" data-v-a1c7c2dc>${ssrInterpolate(_ctx.$t(`wiz.tiers.${tier.key}.features.${feature.key}`))}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="absolute bottom-0 left-[60%] transition-all duration-300 z-20" data-v-a1c7c2dc>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          width: "200px",
          height: "100%",
          src: "/images/wiz-assistant/chatbot-icon.png",
          alt: "wiz-icon",
          class: "transition-all duration-300 grayscale group-hover:grayscale-0"
        }, null, _parent));
        _push(`</div><div class="mt-auto relative z-20" data-v-a1c7c2dc><div class="rounded-[22px] w-full py-2 px-4 flex justify-center gap-5 items-center transition-all duration-300 bg-[#F8FAFC] relative group/btn" style="${ssrRenderStyle({
          background: "linear-gradient(#f8fafc, #f8fafc) padding-box, linear-gradient(135deg, #2376e9, #02c7d0) border-box",
          border: "2px solid transparent",
          borderRadius: "22px"
        })}" data-v-a1c7c2dc><span style="${ssrRenderStyle({
          background: "linear-gradient(135deg, #2376e9, #02c7d0)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent"
        })}" data-v-a1c7c2dc>${ssrInterpolate(_ctx.$t(`wiz.tiers.${tier.key}.price`))}</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-all duration-300" data-v-a1c7c2dc><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="url(#gradientStroke)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a1c7c2dc></path><defs data-v-a1c7c2dc><linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="objectBoundingBox" data-v-a1c7c2dc><stop offset="0%" stop-color="#2376e9" data-v-a1c7c2dc></stop><stop offset="100%" stop-color="#02c7d0" data-v-a1c7c2dc></stop></linearGradient></defs></svg></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingTiers.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a1c7c2dc"]]);
const _sfc_main = {
  __name: "TierAudience",
  __ssrInlineRender: true,
  setup(__props) {
    const audiences = [
      { key: "businesses", image: "businesses.png" },
      { key: "hospitals", image: "hospitals.png" },
      { key: "schools", image: "schools.png" },
      { key: "associations", image: "associations.png" },
      { key: "online_stores", image: "online-stores.png" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full mx-auto" }, _attrs))}><!--[-->`);
      ssrRenderList(audiences, (audience) => {
        _push(`<div class="flex gap-5">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `/images/wiz-assistant/audience/${audience.image}`,
          class: "w-[48px] h-[40px] flex-shrink-0",
          alt: _ctx.$t(`wiz.audience.${audience.key}.title`)
        }, null, _parent));
        _push(`<div><p class="text-white text-[24px]">${ssrInterpolate(_ctx.$t(`wiz.audience.${audience.key}.title`))}</p><p class="text-[#F8FAFC99] text-[16px] mt-3">${ssrInterpolate(_ctx.$t(`wiz.audience.${audience.key}.description`))}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TierAudience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_1 as _, _sfc_main as a };
