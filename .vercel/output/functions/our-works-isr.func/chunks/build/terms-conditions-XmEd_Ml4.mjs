import { _ as _export_sfc, u as useHead, a as _sfc_main$7 } from './server.mjs';
import { computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { g as gsapWithCSS, S as ScrollTrigger } from './ScrollTrigger-Br7O8lZa.mjs';
import { useI18n } from 'vue-i18n';
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

const _sfc_main$2 = {
  __name: "AnimatedTermsHeader",
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
      }, _attrs))}><div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10"><div class="terms-header-section relative"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]"><div class="self-center"><h2 class="text-[60px] leading-tight font-bold max-w-lg bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent">${ssrInterpolate(unref(t)("terms.title"))}</h2><p class="text-[#20252CE5] font-semibold text-[16px] mt-8 mb-5 max-w-lg">${ssrInterpolate(unref(t)("terms.welcome"))}</p><p class="text-[#20252CE5] font-semibold text-[16px] max-w-lg">${ssrInterpolate(unref(t)("terms.disclaimer"))}</p></div><div class="terms-header-img">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/terms-conditions/big-img.png",
        class: "h-auto object-cover rounded-[14px]",
        width: "1101px"
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedTermsHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "TermsContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const permittedUseItems = computed(() => {
      return [
        t("terms.sections.useOfWebsite.permittedUse.items.item1"),
        t("terms.sections.useOfWebsite.permittedUse.items.item2"),
        t("terms.sections.useOfWebsite.permittedUse.items.item3"),
        t("terms.sections.useOfWebsite.permittedUse.items.item4")
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10" }, _attrs))}><div class="space-y-10"><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("terms.sections.services.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.services.content"))}</p></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("terms.sections.intellectualProperty.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.intellectualProperty.content"))}</p></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("terms.sections.useOfWebsite.title"))}</h4><div class="mt-5 space-y-2"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.useOfWebsite.permittedUse.title"))}</p><div><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.useOfWebsite.permittedUse.description"))}</p><div class="px-3"><ul class="list-disc list-inside"><!--[-->`);
      ssrRenderList(unref(permittedUseItems), (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div><div><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.useOfWebsite.contactForm.title"))}</p><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.useOfWebsite.contactForm.content"))}</p></div></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("terms.sections.disclaimer.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.disclaimer.content"))}</p></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("terms.sections.limitationOfLiability.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.limitationOfLiability.content"))}</p></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("terms.sections.thirdPartyLinks.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.thirdPartyLinks.content"))}</p></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("terms.sections.changesToTerms.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.changesToTerms.content"))}</p></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("terms.sections.governingLaw.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.governingLaw.content"))}</p></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("terms.sections.contactUs.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.contactUs.description"))}</p><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.contactUs.companyName"))}</p><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.contactUs.website"))}</p><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("terms.sections.contactUs.duns"))}</p></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TermsContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "terms-conditions",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { canonicalUrl } = useCanonical();
    const { locale } = useI18n();
    computed(() => locale.value);
    const staticMetaTitle = t("terms.title");
    const staticMetaDescription = t("terms.welcome");
    const staticMetaKeywords = [].join(", ");
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
      const _component_AnimatedTermsHeader = _sfc_main$2;
      const _component_TermsContent = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-5e6add2f>`);
      _push(ssrRenderComponent(_component_AnimatedTermsHeader, null, null, _parent));
      _push(`<div class="mt-8" data-v-5e6add2f>`);
      _push(ssrRenderComponent(_component_TermsContent, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/revamp/terms-conditions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const termsConditions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e6add2f"]]);

export { termsConditions as default };
