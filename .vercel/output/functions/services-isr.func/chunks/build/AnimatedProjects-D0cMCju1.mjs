import { a as _sfc_main$7 } from './server.mjs';
import { ref, computed, resolveComponent, mergeProps, withCtx, createTextVNode, createBlock, toDisplayString, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { f as publicAssetsURL } from '../_/nitro.mjs';
import { g as gsapWithCSS, S as ScrollTrigger } from './ScrollTrigger-Br7O8lZa.mjs';
import { useRoute } from 'vue-router';

const _imports_0 = publicAssetsURL("/images/revamp/products/wiz-assistant-2.png");
const _imports_1 = publicAssetsURL("/images/revamp/our-projects/ai-encourage-1.png");
const _imports_2 = publicAssetsURL("/images/revamp/our-projects/ai-powered-1.png");
const _imports_3 = publicAssetsURL("/images/revamp/our-projects/ai-powered-2.png");
const _imports_4 = publicAssetsURL("/images/revamp/our-projects/self-management-1.png");
const _imports_5 = publicAssetsURL("/images/revamp/our-projects/ai-enhanced-1.png");
const _sfc_main = {
  __name: "AnimatedProjects",
  __ssrInlineRender: true,
  setup(__props) {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    const route = useRoute();
    const projectsContainer = ref(null);
    const isProductsPage = computed(() => {
      return route.path === "/revamp/products";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "projectsContainer",
        ref: projectsContainer
      }, _attrs))}>`);
      if (isProductsPage.value) {
        _push(`<!--[--><div class="project-section bg-[#e2e8f0] relative overflow-hidden"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="text-block self-center" data-section="0"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("product.animatedProjects.lcOct.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[14px] mt-8">${ssrInterpolate(_ctx.$t("product.animatedProjects.lcOct.description"))}</p><div class="mt-5"><div class="max-w-xl mx-auto">`);
        _push(ssrRenderComponent(_component_router_link, {
          to: "/revamp/optical-microscope",
          class: "border border-[#20252CE5] px-10 py-2 text-[14px] text-black font-semibold flex items-center gap-3 rounded-[22px] w-fit"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("product.animatedProjects.lcOct.cta"))} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="m12 5 7 7-7 7"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("product.animatedProjects.lcOct.cta")) + " ", 1),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M5 12h14" }),
                  createVNode("path", { d: "m12 5 7 7-7 7" })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div class="image-parallax" data-direction="down">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/products/lc-oct-2.png",
          class: "object-cover rounded-[14px]",
          width: "598px",
          height: "460px"
        }, null, _parent));
        _push(`</div><div class="image-parallax" data-direction="up">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/products/lc-oct-1.png",
          class: "object-cover rounded-[14px]",
          width: "598px",
          height: "460px"
        }, null, _parent));
        _push(`</div></div></div></div><div class="project-section bg-[#ffffff] relative overflow-hidden"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="image-parallax" data-direction="down"><img${ssrRenderAttr("src", _imports_0)} class="object-cover rounded-[14px]" width="598px" height="460px"></div><div class="image-parallax" data-direction="up">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/products/wiz-assistant-1.png",
          class: "object-cover rounded-[14px]",
          width: "487px",
          height: "460px"
        }, null, _parent));
        _push(`</div><div class="text-block self-center" data-section="1"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("product.animatedProjects.wizAssistant.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[14px] mt-8">${ssrInterpolate(_ctx.$t("product.animatedProjects.wizAssistant.description"))}</p><div class="mt-5"><div class="max-w-xl mx-auto">`);
        _push(ssrRenderComponent(_component_router_link, {
          to: "/revamp/wiz-assistant",
          class: "border border-[#20252CE5] px-10 py-2 text-[14px] text-black font-semibold flex items-center gap-3 rounded-[22px] w-fit"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("product.animatedProjects.wizAssistant.cta"))} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="m12 5 7 7-7 7"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("product.animatedProjects.wizAssistant.cta")) + " ", 1),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M5 12h14" }),
                  createVNode("path", { d: "m12 5 7 7-7 7" })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div></div><!--]-->`);
      } else {
        _push(`<!--[--><div class="project-section bg-[#e2e8f0] relative overflow-hidden"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="text-block self-center" data-section="0"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiMeasuring.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[14px] mt-8">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiMeasuring.description"))}</p><div class="mt-5"><div class="max-w-xl mx-auto">`);
        _push(ssrRenderComponent(_component_router_link, {
          to: "/revamp/optical-microscope",
          class: "border border-[#20252CE5] px-10 py-2 text-[14px] text-black font-semibold flex items-center gap-3 rounded-[22px] w-fit"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("product.animatedProjects.aiMeasuring.cta"))} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="m12 5 7 7-7 7"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("product.animatedProjects.aiMeasuring.cta")) + " ", 1),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M5 12h14" }),
                  createVNode("path", { d: "m12 5 7 7-7 7" })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div class="image-parallax" data-direction="down">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/products/lc-oct-2.png",
          class: "object-cover rounded-[14px]",
          width: "598px",
          height: "460px"
        }, null, _parent));
        _push(`</div><div class="image-parallax" data-direction="up">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/products/lc-oct-1.png",
          class: "object-cover rounded-[14px]",
          width: "598px",
          height: "460px"
        }, null, _parent));
        _push(`</div></div></div></div><div class="project-section bg-[#ffffff] relative overflow-hidden"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="image-parallax" data-direction="down"><img${ssrRenderAttr("src", _imports_1)} class="object-cover w-full h-[455px] rounded-[14px]"></div><div class="image-parallax" data-direction="up">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/our-projects/ai-encourage-2.png",
          class: "object-cover w-full h-[455px] rounded-[14px]"
        }, null, _parent));
        _push(`</div><div class="text-block self-center" data-section="1"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiEncouragement.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[14px]">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiEncouragement.description"))}</p></div></div></div></div><div class="project-section bg-[#e2e8f0] relative overflow-hidden"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="text-block self-center" data-section="2"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiDietTracker.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[14px] mt-8">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiDietTracker.description"))}</p></div><div class="image-parallax" data-direction="down">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/our-projects/ai-aided-1.png",
          class: "object-cover rounded-[14px]",
          width: "598px",
          height: "460px"
        }, null, _parent));
        _push(`</div><div class="image-parallax" data-direction="up">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/our-projects/ai-aided-2.png",
          class: "object-cover rounded-[14px]",
          width: "598px",
          height: "460px"
        }, null, _parent));
        _push(`</div></div></div></div><div class="project-section bg-[#ffffff] relative overflow-hidden"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="image-parallax" data-direction="down"><img${ssrRenderAttr("src", _imports_2)} class="object-cover rounded-[14px]" width="598px" height="460px"></div><div class="image-parallax" data-direction="up"><img${ssrRenderAttr("src", _imports_3)} class="object-cover rounded-[14px]" width="598px" height="460px"></div><div class="text-block self-center" data-section="3"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiTranslator.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[14px]">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiTranslator.description"))}</p></div></div></div></div><div class="project-section bg-[#e2e8f0] relative overflow-hidden"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="text-block self-center" data-section="4"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiAudioGenerator.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[14px] mt-8">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiAudioGenerator.description"))}</p></div><div class="image-parallax" data-direction="down">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/our-projects/ai-generating-1.png",
          class: "object-cover rounded-[14px]",
          width: "598px",
          height: "460px"
        }, null, _parent));
        _push(`</div><div class="image-parallax" data-direction="up">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/our-projects/ai-generating-2.png",
          class: "object-cover rounded-[14px]",
          width: "598px",
          height: "460px"
        }, null, _parent));
        _push(`</div></div></div></div><div class="project-section bg-[#ffffff] relative overflow-hidden"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="image-parallax" data-direction="down"><img${ssrRenderAttr("src", _imports_4)} class="object-cover rounded-[14px]" width="598px" height="460px"></div><div class="image-parallax" data-direction="up">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/our-projects/self-management-2.png",
          class: "object-cover rounded-[14px]",
          width: "598px",
          height: "460px"
        }, null, _parent));
        _push(`</div><div class="text-block self-center" data-section="5"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiSelfManagement.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[14px]">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiSelfManagement.description"))}</p></div></div></div></div><div class="project-section bg-[#e2e8f0] relative overflow-hidden"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="text-block self-center" data-section="6"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiEvaluation.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[14px] mt-8">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiEvaluation.description"))}</p></div><div class="image-parallax" data-direction="down">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/our-projects/ai-evaluating-1.png",
          class: "object-cover rounded-[14px]",
          width: "598px",
          height: "460px"
        }, null, _parent));
        _push(`</div><div class="image-parallax" data-direction="up">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/our-projects/ai-evaluating-2.png",
          class: "object-cover rounded-[14px]",
          width: "598px",
          height: "460px"
        }, null, _parent));
        _push(`</div></div></div></div><div class="project-section bg-[#ffffff] relative overflow-hidden"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="image-parallax" data-direction="down"><img${ssrRenderAttr("src", _imports_5)} class="object-cover rounded-[14px]" width="598px" height="460px"></div><div class="image-parallax" data-direction="up">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/revamp/our-projects/ai-enhanced-2.png",
          class: "object-cover rounded-[14px]",
          width: "598px",
          height: "460px"
        }, null, _parent));
        _push(`</div><div class="text-block self-center" data-section="7"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiLanguageLearning.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[14px]">${ssrInterpolate(_ctx.$t("product.animatedProjects.aiLanguageLearning.description"))}</p></div></div></div></div><!--]-->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedProjects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
