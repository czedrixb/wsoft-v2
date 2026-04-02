import { computed, resolveComponent, withCtx, createBlock, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const _sfc_main = {
  __name: "RelatedProducts",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    const relatedProduct = computed(() => {
      if (route.path === "/revamp/wiz-assistant") {
        return {
          image: "/images/revamp/products/optical-microscope.png",
          to: "/revamp/optical-microscope",
          arrowDirection: "left"
        };
      }
      return {
        image: "/images/revamp/products/wiz-assistant.png",
        to: "/revamp/wiz-assistant",
        arrowDirection: "right"
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-center"><p class="text-[#64748B] text-[24px]">More of our Products</p></div><div class="mt-[5rem] flex justify-center"><img${ssrRenderAttr("src", relatedProduct.value.image)} class="h-auto object-cover rounded-[14px]" width="794px"></div><div class="mt-12 flex justify-center">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: relatedProduct.value.to,
        class: "px-8 py-3 rounded-[22px] border border-[#20252CE5] bg-white text-sm font-medium transition-all duration-200 hover:bg-gray-100 active:scale-95 inline-flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (relatedProduct.value.arrowDirection === "left") {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M19 12H5"${_scopeId}></path><path d="m12 19-7-7 7-7"${_scopeId}></path></svg>`);
            } else {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="m12 5 7 7-7 7"${_scopeId}></path></svg>`);
            }
          } else {
            return [
              relatedProduct.value.arrowDirection === "left" ? (openBlock(), createBlock("svg", {
                key: 0,
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
                createVNode("path", { d: "M19 12H5" }),
                createVNode("path", { d: "m12 19-7-7 7-7" })
              ])) : (openBlock(), createBlock("svg", {
                key: 1,
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
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RelatedProducts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
