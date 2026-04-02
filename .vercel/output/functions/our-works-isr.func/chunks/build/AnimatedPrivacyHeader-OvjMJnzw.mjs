import { a as _sfc_main$7 } from './server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { g as gsapWithCSS, S as ScrollTrigger } from './ScrollTrigger-Br7O8lZa.mjs';
import { useI18n } from 'vue-i18n';

const _sfc_main = {
  __name: "AnimatedPrivacyHeader",
  __ssrInlineRender: true,
  setup(__props) {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    const { t } = useI18n();
    const termsHeaderContainer = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "my-40",
        ref_key: "termsHeaderContainer",
        ref: termsHeaderContainer
      }, _attrs))}><div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10"><div class="terms-header-section relative"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]"><div class="self-center"><h2 class="text-[60px] leading-tight font-bold max-w-lg bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent">${ssrInterpolate(unref(t)("privacy.title"))}</h2><p class="text-[#20252CE5] font-semibold text-[16px] mt-8 mb-5 max-w-lg">${ssrInterpolate(unref(t)("privacy.welcome"))}</p><p class="text-[#20252CE5] font-semibold text-[16px] max-w-lg">${ssrInterpolate(unref(t)("privacy.compliance"))}</p></div><div class="terms-header-img">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/terms-conditions/big-img.png",
        class: "h-auto object-cover rounded-[14px]",
        width: "1101px"
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedPrivacyHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
