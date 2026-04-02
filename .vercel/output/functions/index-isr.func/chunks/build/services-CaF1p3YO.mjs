import { computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { f as publicAssetsURL } from '../_/nitro.mjs';
import { g as gsapWithCSS, S as ScrollTrigger } from './ScrollTrigger-Br7O8lZa.mjs';
import { useI18n } from 'vue-i18n';
import { _ as _export_sfc, u as useHead, a as _sfc_main$7 } from './server.mjs';
import { u as useCanonical, a as useStructuredData } from './useCanonical-BQilDA_U.mjs';
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

const _imports_0$1 = publicAssetsURL("/images/revamp/products-services/product-1.png");
const _imports_1 = publicAssetsURL("/images/revamp/products-services/product-2.png");
const _sfc_main$2 = {
  __name: "AnimatedServicesHeader",
  __ssrInlineRender: true,
  setup(__props) {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    const { t } = useI18n();
    const servicesHeaderContainer = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "my-40",
        ref_key: "servicesHeaderContainer",
        ref: servicesHeaderContainer
      }, _attrs))}><div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10"><div class="services-header-section relative"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="services-img-1"><img${ssrRenderAttr("src", _imports_0$1)}${ssrRenderAttr("alt", unref(t)("services.product1Alt"))} class="object-cover" width="487px" height="460px"></div><div class="self-center"><h2 class="text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent">${ssrInterpolate(unref(t)("services.title"))}</h2><p class="text-[#20252CE5] font-semibold text-[16px] mt-8 max-w-lg">${ssrInterpolate(unref(t)("services.description"))}</p></div><div class="services-img-2"><img${ssrRenderAttr("src", _imports_1)}${ssrRenderAttr("alt", unref(t)("services.product2Alt"))} class="object-cover" width="487px" height="460px"></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedServicesHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/revamp/products-services/deep-learning-animate.png");
const _sfc_main$1 = {
  __name: "AnimatedProducts",
  __ssrInlineRender: true,
  setup(__props) {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    const { t, tm } = useI18n();
    const productsContainer = ref(null);
    const deepLearningItems = computed(
      () => tm("services.sections.deepLearning.items")
    );
    const realTimeStreamingItems = computed(
      () => tm("services.sections.realTimeStreaming.items")
    );
    const aiDataIntegrationItems = computed(
      () => tm("services.sections.aiDataIntegration.items")
    );
    const customDesignItems = computed(
      () => tm("services.sections.customDesign.items")
    );
    const contentMediaItems = computed(
      () => tm("services.sections.contentMedia.items")
    );
    const adminBusinessItems = computed(
      () => tm("services.sections.adminBusiness.items")
    );
    const userInteractionItems = computed(
      () => tm("services.sections.userInteraction.items")
    );
    const advancedFeaturesItems = computed(
      () => tm("services.sections.advancedFeatures.items")
    );
    const ecommerceItems = computed(() => tm("services.sections.ecommerce.items"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "productsContainer",
        ref: productsContainer
      }, _attrs))}><div class="product-section bg-[#e2e8f0]"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="self-center"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(unref(t)("services.sections.deepLearning.title"))}</h3><ul class="list-disc pl-5 mt-8"><!--[-->`);
      ssrRenderList(deepLearningItems.value, (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[14px] mb-2">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="section-animate-img flex items-center justify-center"><img${ssrRenderAttr("src", _imports_0)} class="h-auto object-cover" width="291px"></div><div class="section-main-img">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/products-services/deep-learning.png",
        alt: unref(t)("services.sections.deepLearning.imageAlt"),
        class: "h-auto max-w-full object-cover",
        width: "700px"
      }, null, _parent));
      _push(`</div></div></div></div><div class="product-section bg-[#ffffff]"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="section-main-img">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/products-services/real-time.png",
        alt: unref(t)("services.sections.realTimeStreaming.imageAlt"),
        class: "h-auto max-w-full object-cover",
        width: "700px"
      }, null, _parent));
      _push(`</div><div class="section-animate-img flex items-center justify-center"><img${ssrRenderAttr("src", _imports_0)} class="h-auto object-cover" width="291px"></div><div class="self-center"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(unref(t)("services.sections.realTimeStreaming.title"))}</h3><ul class="list-disc pl-5 mt-8"><!--[-->`);
      ssrRenderList(realTimeStreamingItems.value, (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[14px] mb-2">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div></div><div class="product-section bg-[#e2e8f0]"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="self-center"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(unref(t)("services.sections.aiDataIntegration.title"))}</h3><ul class="list-disc pl-5 mt-8"><!--[-->`);
      ssrRenderList(aiDataIntegrationItems.value, (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[14px] mb-2">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="section-animate-img flex items-center justify-center"><img${ssrRenderAttr("src", _imports_0)} class="h-auto object-cover" width="291px"></div><div class="section-main-img">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/products-services/ai-data.png",
        alt: unref(t)("services.sections.aiDataIntegration.imageAlt"),
        class: "h-auto max-w-full object-cover",
        width: "700px"
      }, null, _parent));
      _push(`</div></div></div></div><div class="product-section bg-[#ffffff]"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="section-main-img">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/products-services/custom-media.png",
        alt: unref(t)("services.sections.customDesign.imageAlt"),
        class: "h-auto max-w-full object-cover",
        width: "700px"
      }, null, _parent));
      _push(`</div><div class="section-animate-img flex items-center justify-center"><img${ssrRenderAttr("src", _imports_0)} class="h-auto object-cover" width="291px"></div><div class="self-center"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(unref(t)("services.sections.customDesign.title"))}</h3><ul class="list-disc pl-5 mt-8"><!--[-->`);
      ssrRenderList(customDesignItems.value, (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[14px] mb-2">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div></div><div class="product-section bg-[#e2e8f0]"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="self-center"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(unref(t)("services.sections.contentMedia.title"))}</h3><ul class="list-disc pl-5 mt-8"><!--[-->`);
      ssrRenderList(contentMediaItems.value, (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[14px] mb-2">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="section-animate-img flex items-center justify-center"><img${ssrRenderAttr("src", _imports_0)} class="h-auto object-cover" width="291px"></div><div class="section-main-img">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/products-services/content-media.png",
        alt: unref(t)("services.sections.contentMedia.imageAlt"),
        class: "h-auto max-w-full object-cover",
        width: "700px"
      }, null, _parent));
      _push(`</div></div></div></div><div class="product-section bg-[#ffffff]"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="section-main-img">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/products-services/admin-business.png",
        alt: unref(t)("services.sections.adminBusiness.imageAlt"),
        class: "h-auto max-w-full object-cover",
        width: "700px"
      }, null, _parent));
      _push(`</div><div class="section-animate-img flex items-center justify-center"><img${ssrRenderAttr("src", _imports_0)} class="h-auto object-cover" width="291px"></div><div class="self-center"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(unref(t)("services.sections.adminBusiness.title"))}</h3><ul class="list-disc pl-5 mt-8"><!--[-->`);
      ssrRenderList(adminBusinessItems.value, (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[14px] mb-2">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div></div><div class="product-section bg-[#e2e8f0]"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="self-center"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(unref(t)("services.sections.userInteraction.title"))}</h3><ul class="list-disc pl-5 mt-8"><!--[-->`);
      ssrRenderList(userInteractionItems.value, (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[14px] mb-2">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="section-animate-img flex items-center justify-center"><img${ssrRenderAttr("src", _imports_0)} class="h-auto object-cover" width="291px"></div><div class="section-main-img">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/products-services/user-interaction.png",
        alt: unref(t)("services.sections.userInteraction.imageAlt"),
        class: "h-auto max-w-full object-cover",
        width: "700px"
      }, null, _parent));
      _push(`</div></div></div></div><div class="product-section bg-[#ffffff]"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="section-main-img">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/products-services/advanced-features.png",
        alt: unref(t)("services.sections.advancedFeatures.imageAlt"),
        class: "h-auto max-w-full object-cover",
        width: "700px"
      }, null, _parent));
      _push(`</div><div class="section-animate-img flex items-center justify-center"><img${ssrRenderAttr("src", _imports_0)} class="h-auto object-cover" width="291px"></div><div class="self-center"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(unref(t)("services.sections.advancedFeatures.title"))}</h3><ul class="list-disc pl-5 mt-8"><!--[-->`);
      ssrRenderList(advancedFeaturesItems.value, (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[14px] mb-2">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div></div><div class="product-section bg-[#e2e8f0]"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="self-center"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(unref(t)("services.sections.ecommerce.title"))}</h3><ul class="list-disc pl-5 mt-8"><!--[-->`);
      ssrRenderList(ecommerceItems.value, (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[14px] mb-2">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="section-animate-img flex items-center justify-center"><img${ssrRenderAttr("src", _imports_0)} class="h-auto object-cover" width="291px"></div><div class="section-main-img">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/products-services/e-commerce.png",
        alt: unref(t)("services.sections.ecommerce.imageAlt"),
        class: "h-auto max-w-full object-cover",
        width: "700px"
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedProducts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    const { canonicalUrl } = useCanonical();
    const { locale, t } = useI18n();
    computed(() => locale.value);
    const staticMetaTitle = t("services.metaTitle");
    const staticMetaDescription = t("services.metaDescription");
    const staticMetaKeywords = t("services.metaKeywords");
    const structuredData = useStructuredData("services");
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
      const _component_AnimatedServicesHeader = _sfc_main$2;
      const _component_AnimatedProducts = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6dc2e465>`);
      _push(ssrRenderComponent(_component_AnimatedServicesHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_AnimatedProducts, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/revamp/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const services = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6dc2e465"]]);

export { services as default };
