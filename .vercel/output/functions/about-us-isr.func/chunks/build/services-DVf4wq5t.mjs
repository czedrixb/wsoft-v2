import { _ as _sfc_main$1 } from './PageHeader-wdXI4Lm4.mjs';
import { _ as _sfc_main$2 } from './ContactEmail-uQrFUqdX.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { f as publicAssetsURL } from '../_/nitro.mjs';
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';
import { u as useCanonical, a as useStructuredData } from './useCanonical-BQilDA_U.mjs';
import './server.mjs';
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
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './virtual_public-Dfg11rWA.mjs';

const _imports_0 = publicAssetsURL("/images/services/development-7.png");
const _imports_1 = publicAssetsURL("/images/services/bullet.png");
const _imports_2 = publicAssetsURL("/images/services/development-8.png");
const _imports_3 = publicAssetsURL("/images/services/development-9.png");
const _imports_4 = publicAssetsURL("/images/services/development-1.png");
const _imports_5 = publicAssetsURL("/images/services/development-2.png");
const _imports_6 = publicAssetsURL("/images/services/development-3.png");
const _imports_7 = publicAssetsURL("/images/services/development-4.png");
const _imports_8 = publicAssetsURL("/images/services/development-5.png");
const _imports_9 = publicAssetsURL("/images/services/development-6.png");
const _imports_10 = publicAssetsURL("/images/about-us/services-image1.png");
const _imports_11 = publicAssetsURL("/images/about-us/services-image3.png");
const _imports_12 = publicAssetsURL("/images/about-us/services-image2.png");
const _imports_13 = publicAssetsURL("/images/services/sss.png");
const _sfc_main = {
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    const { canonicalUrl } = useCanonical();
    const { t } = useI18n();
    const staticMetaTitle = t("services-title");
    const staticMetaDescription = t("services-description");
    const staticMetaKeywords = Array.from(
      { length: 10 },
      (_, i) => t(`services-meta-keyword-${i + 1}`)
    ).join(", ");
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
      const _component_PageHeader = _sfc_main$1;
      const _component_ContactEmail = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: _ctx.$t("Services"),
        description: _ctx.$t("services-text")
      }, null, _parent));
      _push(`<div class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto pb-10 mb-10"><div class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-black mb-10">${ssrInterpolate(_ctx.$t("introduction-development"))}</div><div class="mx-auto lg:max-w-screen-lg xl:max-w-screen-xl"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"><div class="flex"><div class="card bg-white text-primary-content p-5 py-8 w-full"><img${ssrRenderAttr("src", _imports_0)} class="max-w-[15%] md:max-w-[20%] mb-5" alt="development-1" loading="lazy"><div class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5">${ssrInterpolate(_ctx.$t("deep-learning"))}</div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("yolo"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("optical-flow"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("roi"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("precision-optimization"))}</p></div></div></div><div class="flex"><div class="card bg-white text-primary-content p-5 py-8 w-full"><img loading="lazy"${ssrRenderAttr("src", _imports_2)} class="max-w-[15%] md:max-w-[20%] mb-5" alt="development-2"><div class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5">${ssrInterpolate(_ctx.$t("real-time"))}</div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("rtsp"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("web-socket"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("open-cv"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("multi-stream"))}</p></div></div></div><div class="flex"><div class="card bg-white text-primary-content p-5 py-8 w-full"><img${ssrRenderAttr("src", _imports_3)} class="max-w-[15%] md:max-w-[20%] mb-5" alt="development-3" loading="lazy"><div class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5">${ssrInterpolate(_ctx.$t("ai-text"))}</div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("multimodal"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("outlier"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("dynamic-roi"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("incremental-learning"))}</p></div></div></div><div class="flex"><div class="card bg-white text-primary-content p-5 py-8 w-full"><img${ssrRenderAttr("src", _imports_4)} class="max-w-[15%] md:max-w-[20%] mb-5" alt="development-1" loading="lazy"><div class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5">${ssrInterpolate(_ctx.$t("custom-design"))}</div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("custom-website"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("responsive-user"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("engaging-ui"))}</p></div></div></div><div class="flex"><div class="card bg-white text-primary-content p-5 py-8 w-full"><img${ssrRenderAttr("src", _imports_5)} class="max-w-[15%] md:max-w-[20%] mb-5" alt="development-2" loading="lazy"><div class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5">${ssrInterpolate(_ctx.$t("content-management"))}</div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("easy-use"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("image-file"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("auto-tagging"))}</p></div></div></div><div class="flex"><div class="card bg-white text-primary-content p-5 py-8 w-full"><img${ssrRenderAttr("src", _imports_6)} class="max-w-[15%] md:max-w-[20%] mb-5" alt="development-3" loading="lazy"><div class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5">${ssrInterpolate(_ctx.$t("admin-business"))}</div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("inquiry-content"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("inventory-order"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("secure-payment"))}</p></div></div></div><div class="flex"><div class="card bg-white text-primary-content p-5 py-8 w-full"><img${ssrRenderAttr("src", _imports_7)} class="max-w-[15%] md:max-w-[20%] mb-5" alt="development-4" loading="lazy"><div class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5">${ssrInterpolate(_ctx.$t("user-interaction"))}</div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("job-interaction"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("seller-company"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("messaging-questionnaires"))}</p></div></div></div><div class="flex"><div class="card bg-white text-primary-content p-5 py-8 w-full"><img${ssrRenderAttr("src", _imports_8)} class="max-w-[15%] md:max-w-[20%] mb-5" alt="development-5" loading="lazy"><div class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5">${ssrInterpolate(_ctx.$t("advanced-features"))}</div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("interactive-calendar"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("location-based"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("recaptcha"))}</p></div></div></div><div class="flex"><div class="card bg-white text-primary-content p-5 py-8 w-full"><img${ssrRenderAttr("src", _imports_9)} class="max-w-[15%] md:max-w-[20%] mb-5" alt="development-6" loading="lazy"><div class="font-poppins font-[600] text-[23px] lg:text-[23px] md:px-0 text-black mb-5">${ssrInterpolate(_ctx.$t("product-listing"))}</div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("items-catalog"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("wishlist-star"))}</p></div><div class="flex gap-5 items-center"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" alt="bullet"><p class="text-left font-inter font-[300] text-[18px] text-black mb-0">${ssrInterpolate(_ctx.$t("smooth-checkout"))}</p></div></div></div></div></div></div><div class="px-5 py-5 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-[7rem] overflow-hidden"><div class="grid grid-cols-1 md:grid-cols-2 gap-5"><div class="flex flex-col h-full"><div class="flex-1 flex flex-col"><div class="card bg-white shadow-md text-primary-content p-5 pb-0 flex flex-col justify-between mb-5"><div class="mb-8"><h3 class="font-poppins font-[600] text-[22px] lg:text-[25px] md:px-0 text-black mb-3">${ssrInterpolate(_ctx.$t("ui-ai"))}</h3><p class="text-left font-inter font-[300] text-[18px] text-black">${ssrInterpolate(_ctx.$t("build-high"))}</p></div><div class="flex justify-center"><img${ssrRenderAttr("src", _imports_10)} class="max-w-[35%] h-auto md:max-w-[91%] lg:max-w-[30%]" alt="mobile-phone" loading="lazy"></div></div></div><div class="flex-1 flex flex-col"><div class="card bg-white shadow-md text-primary-content p-5 pb-0"><h3 class="font-poppins font-[600] text-[22px] lg:text-[25px] md:px-0 text-black mb-3">${ssrInterpolate(_ctx.$t("maintenance-support"))}</h3><p class="text-left font-inter font-[300] text-[18px] text-black mb-[2rem]">${ssrInterpolate(_ctx.$t("keep-website"))}</p><img${ssrRenderAttr("src", _imports_11)} class="max-w-full h-auto" alt="logos" loading="lazy"></div></div></div><div class="flex flex-col h-full"><div class="flex-1 flex flex-col"><div class="card bg-white shadow-md text-primary-content p-5 pb-0 mb-5"><h3 class="font-poppins font-[600] text-[22px] lg:text-[25px] md:px-0 text-black mb-3">${ssrInterpolate(_ctx.$t("website-web"))}</h3><p class="text-left font-inter font-[300] text-[18px] text-black mb-[6rem]">${ssrInterpolate(_ctx.$t("intuitive-ai"))}</p><img${ssrRenderAttr("src", _imports_12)} class="max-w-full h-auto" alt="dashboard-screens" loading="lazy"></div></div><div class="flex-1 flex flex-col"><div class="card bg-white shadow-md text-primary-content p-5 pb-0 mb-3"><h3 class="font-poppins font-[600] text-[22px] lg:text-[25px] md:px-0 text-black mb-3">${ssrInterpolate(_ctx.$t("smart-video"))}</h3><p class="text-left font-inter font-[300] text-[18px] text-black mb-[5rem]">${ssrInterpolate(_ctx.$t("build-ai"))}</p><img${ssrRenderAttr("src", _imports_13)} class="max-w-full h-auto" alt="dashboard-screens" loading="lazy"></div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_ContactEmail, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
