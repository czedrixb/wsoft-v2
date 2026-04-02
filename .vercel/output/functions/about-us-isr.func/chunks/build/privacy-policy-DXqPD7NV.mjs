import { _ as _sfc_main$2 } from './AnimatedPrivacyHeader-OvjMJnzw.mjs';
import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useI18n } from 'vue-i18n';
import { u as useCanonical, a as useStructuredData } from './useCanonical-BQilDA_U.mjs';
import { _ as _export_sfc, u as useHead } from './server.mjs';
import './ScrollTrigger-Br7O8lZa.mjs';
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
  __name: "PrivacyContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const providedInfoItems = computed(() => {
      return [
        t("privacy.sections.informationCollected.provided.items.item1"),
        t("privacy.sections.informationCollected.provided.items.item2"),
        t("privacy.sections.informationCollected.provided.items.item3"),
        t("privacy.sections.informationCollected.provided.items.item4")
      ];
    });
    const automatedInfoItems = computed(() => {
      return [
        t("privacy.sections.informationCollected.automated.items.item1"),
        t("privacy.sections.informationCollected.automated.items.item2"),
        t("privacy.sections.informationCollected.automated.items.item3"),
        t("privacy.sections.informationCollected.automated.items.item4")
      ];
    });
    const howWeUseItems = computed(() => {
      return [
        t("privacy.sections.howWeUse.items.item1"),
        t("privacy.sections.howWeUse.items.item2"),
        t("privacy.sections.howWeUse.items.item3"),
        t("privacy.sections.howWeUse.items.item4")
      ];
    });
    const cookieTypesItems = computed(() => {
      return [
        t("privacy.sections.cookies.types.items.item1"),
        t("privacy.sections.cookies.types.items.item2")
      ];
    });
    const yourRightsItems = computed(() => {
      return [
        t("privacy.sections.yourRights.items.item1"),
        t("privacy.sections.yourRights.items.item2"),
        t("privacy.sections.yourRights.items.item3"),
        t("privacy.sections.yourRights.items.item4"),
        t("privacy.sections.yourRights.items.item5")
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10" }, _attrs))}><div class="space-y-10"><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("privacy.sections.informationCollected.title"))}</h4><div class="mt-5 space-y-5"><div><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.informationCollected.provided.title"))}</p><div class="mt-1"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)(
        "privacy.sections.informationCollected.provided.description"
      ))}</p><div class="px-3"><ul class="list-disc list-inside"><!--[-->`);
      ssrRenderList(unref(providedInfoItems), (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div><div><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.informationCollected.automated.title"))}</p><div class="mt-1"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)(
        "privacy.sections.informationCollected.automated.description"
      ))}</p><div class="px-3"><ul class="list-disc list-inside"><!--[-->`);
      ssrRenderList(unref(automatedInfoItems), (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.informationCollected.automated.note"))}</p></div></div></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("privacy.sections.howWeUse.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.howWeUse.description"))}</p><div class="px-3"><ul class="list-disc list-inside"><!--[-->`);
      ssrRenderList(unref(howWeUseItems), (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.howWeUse.note"))}</p></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("privacy.sections.cookies.title"))}</h4><div class="mt-5 space-y-4"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.cookies.description"))}</p><div><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.cookies.types.title"))}</p><div class="px-3"><ul class="list-disc list-inside"><!--[-->`);
      ssrRenderList(unref(cookieTypesItems), (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("privacy.sections.dataRetention.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.dataRetention.content"))}</p></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("privacy.sections.dataSecurity.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.dataSecurity.content"))}</p></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("privacy.sections.thirdPartyServices.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.thirdPartyServices.content"))}</p></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("privacy.sections.yourRights.title"))}</h4><div class="mt-5 space-y-5"><div class="mt-1"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.yourRights.description"))}</p><div class="px-3"><ul class="list-disc list-inside"><!--[-->`);
      ssrRenderList(unref(yourRightsItems), (item, index) => {
        _push(`<li class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.yourRights.note"))}</p></div></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("privacy.sections.internationalUsers.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.internationalUsers.content"))}</p></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("privacy.sections.changesToPolicy.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.changesToPolicy.content"))}</p></div></div><div><h4 class="text-[#64748B] text-[24px] font-satoshi">${ssrInterpolate(unref(t)("privacy.sections.contactUs.title"))}</h4><div class="mt-5"><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.contactUs.description"))}</p><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.contactUs.companyName"))}</p><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.contactUs.website"))}</p><p class="text-[#20252CE5] font-semibold text-[16px]">${ssrInterpolate(unref(t)("privacy.sections.contactUs.duns"))}</p></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrivacyContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "privacy-policy",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { canonicalUrl } = useCanonical();
    const { locale } = useI18n();
    computed(() => locale.value);
    const staticMetaTitle = t("privacy.title");
    const staticMetaDescription = t("privacy.welcome");
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
      const _component_AnimatedPrivacyHeader = _sfc_main$2;
      const _component_PrivacyContent = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-cca213af>`);
      _push(ssrRenderComponent(_component_AnimatedPrivacyHeader, null, null, _parent));
      _push(`<div class="mt-8" data-v-cca213af>`);
      _push(ssrRenderComponent(_component_PrivacyContent, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/revamp/privacy-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cca213af"]]);

export { privacyPolicy as default };
