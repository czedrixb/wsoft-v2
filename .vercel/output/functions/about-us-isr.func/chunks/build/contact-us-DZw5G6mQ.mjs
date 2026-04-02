import { _ as _sfc_main$1 } from './PageHeader-wdXI4Lm4.mjs';
import { e as useContact, a as _sfc_main$7 } from './server.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';
import { u as useCanonical, a as useStructuredData } from './useCanonical-BQilDA_U.mjs';
import './virtual_public-Dfg11rWA.mjs';
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
import 'vue-router';
import 'pinia';
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
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      first_name,
      last_name,
      email,
      phone,
      company,
      message,
      errors
    } = useContact();
    const { canonicalUrl } = useCanonical();
    const { t } = useI18n();
    const staticMetaTitle = t("contact-title");
    const staticMetaKeywords = Array.from(
      { length: 10 },
      (_, i) => t(`contact-us-meta-keyword-${i + 1}`)
    ).join(", ");
    const structuredData = useStructuredData("contact");
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
      link: [
        {
          rel: "canonical",
          href: canonicalUrl.value
        }
      ],
      meta: [
        { name: "keywords", content: staticMetaKeywords },
        { property: "og:title", content: staticMetaTitle },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/images/thumbnail.png" },
        { property: "og:url", content: canonicalUrl.value }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: _ctx.$t("get-started"),
        description: _ctx.$t("reach-out")
      }, null, _parent));
      _push(`<div class="px-5 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-10 py-16 overflow-hidden"><div class="grid grid-cols-1 md:grid-cols-3 gap-3"><div class="card bg-white shadow-md text-primary-content p-8 w-[100%]"><div class="mb-2">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/contact-us/mail.png",
        width: "60px",
        height: "60px",
        alt: "mail"
      }, null, _parent));
      _push(`</div><h3 class="font-poppins font-[600] text-[20px] text-black mb-2">${ssrInterpolate(_ctx.$t("email-address"))}</h3><p class="text-left font-inter font-[300] text-[18px] text-black mb-0"> contact@wsoft.space </p></div><div class="card bg-white shadow-md text-primary-content p-8 w-[100%]"><div class="mb-2">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/contact-us/phone.png",
        width: "60px",
        height: "60px",
        alt: "phone"
      }, null, _parent));
      _push(`</div><h3 class="font-poppins font-[600] text-[20px] text-black mb-2">${ssrInterpolate(_ctx.$t("phone-number"))}</h3><p class="text-left font-inter font-[300] text-[18px] text-black mb-0"> +82 10 5067 8800 </p></div><div class="card bg-white shadow-md text-primary-content p-8 w-[100%]"><div class="mb-2">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/contact-us/location.png",
        width: "60px",
        height: "60px",
        alt: "phone"
      }, null, _parent));
      _push(`</div><h3 class="font-poppins font-[600] text-[20px] text-black mb-2">${ssrInterpolate(_ctx.$t("our-office"))}</h3><p class="text-left font-inter font-[300] text-[18px] text-black">${ssrInterpolate(_ctx.$t("address"))}</p></div><div class="md:col-span-3"><div class="card bg-white shadow-md text-primary-content w-[100%] overflow-hidden"><div class="grid grid-cols-1 md:grid-cols-2 gap-0"><div class="relative overflow-hidden md:hidden lg:block"><div class="absolute md:left-[-20%] lg:left-[-25%] w-full z-0">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/contact-us/overlay-gradient.png",
        width: "453px",
        height: "931px",
        alt: "overlay-gradient"
      }, null, _parent));
      _push(`</div><div class="absolute left-[10%] xl:left-[18%] bottom-0 w-full">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/contact-us/phone-mockup.png",
        height: "100%",
        width: "400px",
        alt: "contact-phone",
        class: "z-20"
      }, null, _parent));
      _push(`</div></div><div class="p-8 md:col-span-2 lg:col-span-1"><div><div class="font-poppins font-[600] text-[22px] lg:text-[30px] md:px-0 text-black mb-0">${ssrInterpolate(_ctx.$t("contact-us"))}</div><p class="text-left font-inter font-[300] text-[18px] text-black mb-10">${ssrInterpolate(_ctx.$t("get-back"))}</p></div><form><div class="grid grid-cols-1 md:grid-cols-2 gap-5"><fieldset class="fieldset w-100"><legend class="fieldset-legend mb-1 text-black">${ssrInterpolate(_ctx.$t("full-name"))}</legend><input type="text"${ssrRenderAttr("value", unref(first_name))} class="${ssrRenderClass([
        "input w-full border bg-white rounded-2xl focus:ring-2",
        unref(errors).first_name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]"
      ])}"${ssrRenderAttr("placeholder", _ctx.$t("first-name"))}><div class="h-[1rem]">`);
      if (unref(errors).first_name) {
        _push(`<p class="text-red-500 text-sm mb-0">${ssrInterpolate(_ctx.$t("first-name-required"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></fieldset><fieldset class="fieldset w-100 pt-7"><input type="text"${ssrRenderAttr("value", unref(last_name))} class="${ssrRenderClass([
        "input w-full border bg-white rounded-2xl focus:ring-2",
        unref(errors).last_name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]"
      ])}"${ssrRenderAttr("placeholder", _ctx.$t("last-name"))}><div class="h-[1rem]">`);
      if (unref(errors).last_name) {
        _push(`<p class="text-red-500 text-sm mb-0">${ssrInterpolate(_ctx.$t("last-name-required"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></fieldset><fieldset class="fieldset md:col-span-2"><legend class="fieldset-legend mb-1 text-black">${ssrInterpolate(_ctx.$t("email-address"))}</legend><input type="email"${ssrRenderAttr("value", unref(email))} class="${ssrRenderClass([
        "input w-full border bg-white rounded-2xl focus:ring-2",
        unref(errors).email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]"
      ])}"${ssrRenderAttr("placeholder", _ctx.$t("enter-email"))}><div class="h-[1rem]">`);
      if (unref(errors).email) {
        _push(`<p class="text-red-500 text-sm mb-0">${ssrInterpolate(unref(errors).email.includes("required") ? _ctx.$t("email-required") : _ctx.$t("invalid-email"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></fieldset><fieldset class="fieldset md:col-span-2"><legend class="fieldset-legend mb-1 text-black">${ssrInterpolate(_ctx.$t("phone-number"))}</legend><input type="number"${ssrRenderAttr("value", unref(phone))} class="${ssrRenderClass([
        "input w-full border bg-white rounded-2xl focus:ring-2",
        unref(errors).phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]"
      ])}"${ssrRenderAttr("placeholder", _ctx.$t("enter-phone"))}><div class="h-[1rem]">`);
      if (unref(errors).phone) {
        _push(`<p class="text-red-500 text-sm mb-0">${ssrInterpolate(unref(errors).phone.includes("required") ? _ctx.$t("phone-required") : _ctx.$t("invalid-phone"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></fieldset><fieldset class="fieldset md:col-span-2"><legend class="fieldset-legend mb-1 text-black">${ssrInterpolate(_ctx.$t("company"))}</legend><input type="text"${ssrRenderAttr("value", unref(company))} class="input w-full border border-[#475766] bg-white rounded-2xl focus:border-[#2375E9] focus:ring-2"${ssrRenderAttr("placeholder", _ctx.$t("enter-company"))}><div class="h-[1rem]"><p class="text-red-500 text-sm mb-0">${ssrInterpolate(unref(errors).company)}</p></div></fieldset><fieldset class="fieldset md:col-span-2"><legend class="fieldset-legend mb-1 text-black">${ssrInterpolate(_ctx.$t("message"))}</legend><textarea${ssrRenderAttr("placeholder", _ctx.$t("enter-message"))} class="${ssrRenderClass([
        "textarea text-[16px] w-full border bg-white rounded-2xl focus:ring-2",
        unref(errors).message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#475766] focus:border-[#2375E9] focus:ring-[#2375E9]"
      ])}">${ssrInterpolate(unref(message))}</textarea><div class="h-[1rem]">`);
      if (unref(errors).message) {
        _push(`<p class="text-red-500 text-sm mb-0">${ssrInterpolate(_ctx.$t("message-required"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></fieldset><div><button type="submit" class="relative font-[400] text-[16px] px-14 py-5 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90"><span class="relative z-10">${ssrInterpolate(_ctx.$t("submit"))}</span><span class="absolute inset-0 bg-gradient-to-r from-[#70aae9] to-[#68d2e5] rounded-full p-[8px] -z-10 transition-all duration-300 hover:opacity-80"></span><span class="absolute inset-0 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] rounded-full m-[8px] transition-all duration-300 hover:m-[4px]"></span></button></div></div></form></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
