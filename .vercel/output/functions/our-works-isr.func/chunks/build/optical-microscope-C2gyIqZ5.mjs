import { a as _sfc_main$7 } from './server.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { g as gsapWithCSS, S as ScrollTrigger } from './ScrollTrigger-Br7O8lZa.mjs';
import { useI18n } from 'vue-i18n';
import { _ as _sfc_main$2 } from './Catalogue-BuTQxKaE.mjs';
import { _ as _sfc_main$3 } from './RelatedProducts-RiG-jK_H.mjs';
import { useHead } from '@vueuse/head';
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
  __name: "AnimatedOpticalHeader",
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
      }, _attrs))}><div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10"><div class="terms-header-section relative"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]"><div class="self-center"><h2 class="text-[60px] leading-tight font-bold max-w-lg bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent">${ssrInterpolate(_ctx.$t("optical-microscope.title"))}</h2><p class="text-[#20252CE5] font-semibold text-[16px] mt-8 mb-5 max-w-lg">${ssrInterpolate(_ctx.$t("optical-microscope.description"))}</p></div><div class="terms-header-img">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/products/lc-oct.png",
        class: "h-auto object-cover rounded-[14px]",
        width: "1101px",
        alt: _ctx.$t("optical-microscope.imageAlt")
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedOpticalHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "optical-microscope",
  __ssrInlineRender: true,
  setup(__props) {
    const { canonicalUrl } = useCanonical();
    const { t } = useI18n();
    const staticMetaTitle = t("products-title");
    const staticMetaDescription = t("about-us-description");
    const staticMetaKeywords = Array.from(
      { length: 10 },
      (_, i) => t(`about-us-meta-keyword-${i + 1}`)
    ).join(", ");
    const structuredData = useStructuredData("about");
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
      const _component_AnimatedOpticalHeader = _sfc_main$1;
      const _component_Catalogue = _sfc_main$2;
      const _component_RelatedProducts = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(_component_AnimatedOpticalHeader, null, null, _parent));
      _push(`</div><div class="bg-[#e2e8f0]"><div class="mx-auto px-8 max-w-screen-2xl pt-16 pb-10">`);
      _push(ssrRenderComponent(_component_Catalogue, null, null, _parent));
      _push(`</div></div><div class="mt-5 bg-white py-20">`);
      _push(ssrRenderComponent(_component_RelatedProducts, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/revamp/optical-microscope.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
