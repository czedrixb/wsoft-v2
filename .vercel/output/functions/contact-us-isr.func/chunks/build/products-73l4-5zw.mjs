import { _ as _export_sfc, u as useHead, a as _sfc_main$7 } from './server.mjs';
import { computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { g as gsapWithCSS, S as ScrollTrigger } from './ScrollTrigger-Br7O8lZa.mjs';
import { useI18n } from 'vue-i18n';
import { _ as _sfc_main$2 } from './AnimatedProjects-D0cMCju1.mjs';
import { u as useCanonical, a as useStructuredData } from './useCanonical-BQilDA_U.mjs';
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

const _sfc_main$1 = {
  __name: "AnimatedProductsHeader",
  __ssrInlineRender: true,
  setup(__props) {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    const { t } = useI18n();
    const productsHeaderContainer = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "my-40",
        ref_key: "productsHeaderContainer",
        ref: productsHeaderContainer
      }, _attrs))}><div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10"><div class="products-header-section relative"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]"><div class="self-center"><h2 class="text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent">${ssrInterpolate(unref(t)("product.products-title"))}</h2><p class="text-[#20252CE5] font-semibold text-[16px] mt-8 max-w-lg">${ssrInterpolate(unref(t)("product.products-description"))}</p></div><div class="products-header-img">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/our-projects/product-img.png",
        class: "h-auto object-cover",
        width: "1101px"
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedProductsHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { canonicalUrl } = useCanonical();
    const { locale } = useI18n();
    computed(() => locale.value);
    const staticMetaTitle = t("product.products-title");
    const staticMetaDescription = t("product.products-description");
    const staticMetaKeywords = [
      // t("product.products-meta-keyword"),
    ].join(", ");
    const structuredData = useStructuredData("products");
    useHead({
      title: staticMetaTitle,
      link: [
        {
          rel: "canonical",
          href: canonicalUrl.value
        }
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(structuredData)
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
      const _component_AnimatedProductsHeader = _sfc_main$1;
      const _component_AnimatedProjects = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-72023843>`);
      _push(ssrRenderComponent(_component_AnimatedProductsHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_AnimatedProjects, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/revamp/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const products = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-72023843"]]);

export { products as default };
