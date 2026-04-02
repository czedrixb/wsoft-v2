import { _ as _sfc_main$2 } from './PageHeader-wdXI4Lm4.mjs';
import { _ as __nuxt_component_4, a as _imports_2$1 } from './virtual_public-Ba80T58h.mjs';
import { unref, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './ContactEmail-uQrFUqdX.mjs';
import { f as publicAssetsURL } from '../_/nitro.mjs';
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
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

const _sfc_main$1 = {
  __name: "OurTeam",
  __ssrInlineRender: true,
  setup(__props) {
    const members = ref([
      {
        image: "/images/about-us/our-team/matt.png",
        nickname: "matt",
        name: "matt-name",
        position: "ceo"
      },
      {
        image: "/images/about-us/our-team/ricky.png",
        nickname: "ricky",
        name: "ricky-name",
        position: "project-manager"
      },
      {
        image: "/images/about-us/our-team/joseph.png",
        nickname: "joseph",
        name: "joseph-name",
        position: "full-pm"
      },
      {
        image: "/images/about-us/hoon.png",
        nickname: "hoon",
        name: "hoon-name",
        position: "full-sa"
      },
      {
        image: "/images/about-us/our-team/lin.png",
        nickname: "lin",
        name: "lin-name",
        position: "administrative-officer"
      },
      {
        image: "/images/about-us/our-team/songyi.png",
        nickname: "songyi",
        name: "songyi-name",
        position: "designer"
      },
      {
        image: "/images/about-us/our-team/gale.png",
        nickname: "gale",
        name: "gale-name",
        position: "operation-manager"
      },
      {
        image: "/images/about-us/our-team/jaimie.png",
        nickname: "jaimie",
        name: "jaimie-name",
        position: "junior-project"
      },
      {
        image: "/images/about-us/our-team/salve.png",
        nickname: "salve",
        name: "salve-name",
        position: "corporate-secretary"
      },
      {
        image: "/images/about-us/our-team/lora.png",
        nickname: "lora",
        name: "lora-name",
        position: "communications-manager"
      },
      {
        image: "/images/about-us/our-team/ben.png",
        nickname: "ben",
        name: "ben-name",
        position: "full-tpm"
      },
      {
        image: "/images/about-us/our-team/czedrix.png",
        nickname: "czedrix",
        name: "czedrix-name",
        position: "full-stack"
      },
      // {
      //   image: "/images/about-us/rj.png",
      //   nickname: "rj",
      //   name: "rj-name",
      //   position: "full-stack",
      // },
      {
        image: "/images/about-us/our-team/mon.png",
        nickname: "mon",
        name: "mon-name",
        position: "designer"
      },
      // {
      //   image: "/images/about-us/our-team/orland.png",
      //   nickname: "orland",
      //   name: "orland-name",
      //   position: "designer",
      // },
      {
        image: "/images/about-us/our-team/neil.png",
        nickname: "neil",
        name: "neil-name",
        position: "full-ai"
      },
      {
        image: "/images/about-us/our-team/jason.png",
        nickname: "jason",
        name: "jason-name",
        position: "full-stack"
      },
      {
        image: "/images/about-us/our-team/winona.png",
        nickname: "winona",
        name: "winona-name",
        position: "marketing-specialist"
      },
      {
        image: "/images/about-us/our-team/pola.png",
        nickname: "pola",
        name: "pola-name",
        position: "qa-specialist"
      },
      {
        image: "/images/about-us/our-team/zyra.png",
        nickname: "zyra",
        name: "zyra-name",
        position: "marketing-specialist"
      },
      {
        image: "/images/about-us/our-team/virnel.png",
        nickname: "virnel",
        name: "virnel-name",
        position: "designer"
      },
      {
        image: "/images/about-us/our-team/karlo.png",
        nickname: "karlo",
        name: "karlo-name",
        position: "designer"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto lg:max-w-screen-lg" }, _attrs))}><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"><!--[-->`);
      ssrRenderList(unref(members), (member, key) => {
        _push(`<div class="flex justify-center"><div><img${ssrRenderAttr("src", member.image)} class="max-w-full mb-5"${ssrRenderAttr("alt", member.nickname)} loading="lazy"><div class="flex flex-col gap-y-1 text-center"><div class="text-[16px] md:text-[20px] font-[600] text-black">${ssrInterpolate(_ctx.$t(member.nickname))}</div><div class="text-[16px] md:text-[18px] font-[400] text-black">${ssrInterpolate(_ctx.$t(member.name))}</div><div class="text-[16px] font-[300] text-black">${ssrInterpolate(_ctx.$t(member.position))}</div></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OurTeam.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/about-us/innovation.png");
const _imports_2 = publicAssetsURL("/images/about-us/puzzle.png");
const _imports_3 = publicAssetsURL("/images/about-us/shield.png");
const _imports_4 = publicAssetsURL("/images/about-us/sticky.png");
const _sfc_main = {
  __name: "about-us",
  __ssrInlineRender: true,
  setup(__props) {
    const { canonicalUrl } = useCanonical();
    const { t } = useI18n();
    const staticMetaTitle = t("about-title");
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
      const _component_PageHeader = _sfc_main$2;
      const _component_TechStackMarquee = __nuxt_component_4;
      const _component_OurTeam = _sfc_main$1;
      const _component_ContactEmail = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        title: _ctx.$t("About Us"),
        description: _ctx.$t("about-text")
      }, null, _parent));
      _push(`<div class="px-5 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mb-10"><div class="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-x-8 gap-y-8 px-5"><div class="flex"><img${ssrRenderAttr("src", _imports_0)} class="rounded-2xl object-cover w-full h-full" alt="" loading="lazy"></div><div class="flex flex-col justify-center"><div class="text-black font-poppins font-[600] text-[25px] lg:text-[40px] mb-5 xl:mb-7">${ssrInterpolate(_ctx.$t("innovating-business"))}</div><p class="font-inter text-[18px] text-black font-[300] mb-5 xl:mb-7">${ssrInterpolate(_ctx.$t("dedicated-providing"))}</p><p class="font-inter text-[18px] text-black font-[300] xl:mb-7">${ssrInterpolate(_ctx.$t("staying-ahead"))}</p></div></div></div><div class="py-16">`);
      _push(ssrRenderComponent(_component_TechStackMarquee, null, null, _parent));
      _push(`</div><div class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mb-10"><div class="relative">`);
      _push(ssrRenderComponent(unref(DotLottieVue), {
        background: "transparent",
        class: "hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        style: { "width": "1500px", "height": "1500px" },
        autoplay: "",
        loop: "",
        src: "https://lottie.host/7e67d469-9dcf-4317-9cee-139c46135a1f/coUWrtlAJz.lottie"
      }, null, _parent));
      _push(`<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"><img loading="lazy"${ssrRenderAttr("src", _imports_2$1)} class="hidden md:block w-[10000px]" alt="shadow-overlay"></div><div class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-black mb-5">${ssrInterpolate(_ctx.$t("why-choose"))}</div><p class="font-inter font-[300] text-[18px] text-center mx-auto text-black lg:w-[80%] mb-8 lg:mb-16">${ssrInterpolate(_ctx.$t("provide-more"))}</p><div class="mx-auto lg:max-w-screen-md"><div class="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-5 gap-x-5 lg:gap-10"><div class="flex justify-center md:pt-20"><div class="card bg-white shadow-md text-primary-content p-2 text-center w-96"><div class="flex justify-center my-5"><img${ssrRenderAttr("src", _imports_2)} loading="lazy" alt="cutting-edge"></div><div class="text-center font-poppins font-[600] text-[25px] md:px-0 text-black mb-5">${ssrInterpolate(_ctx.$t("cutting-edge"))}</div><p class="font-inter font-[300] text-[18px] mx-auto text-black sm:w-[80%] mb-8">${ssrInterpolate(_ctx.$t("specialize-developing"))}</p></div></div><div class="flex justify-center md:pb-20"><div class="card bg-white shadow-md text-primary-content p-2 text-center w-96"><div class="flex justify-center my-5"><img loading="lazy"${ssrRenderAttr("src", _imports_3)} alt="expertise"></div><div class="text-center font-poppins font-[600] text-[25px] md:px-0 text-black mb-5">${ssrInterpolate(_ctx.$t("expertise-innovation"))}</div><p class="font-inter font-[300] text-[18px] mx-auto text-black sm:w-[80%] mb-8">${ssrInterpolate(_ctx.$t("deep-understanding"))}</p></div></div><div class="md:col-span-2 flex justify-center"><div class="card bg-white shadow-md text-primary-content p-2 text-center w-96"><div class="flex justify-center my-5"><img loading="lazy"${ssrRenderAttr("src", _imports_4)} alt="technology"></div><div class="text-center font-poppins font-[600] text-[25px] md:px-0 text-black w-[80%] mx-auto mb-5">${ssrInterpolate(_ctx.$t("reliable-tech"))}</div><p class="font-inter font-[300] text-[18px] mx-auto text-black sm:w-[80%] mb-8">${ssrInterpolate(_ctx.$t("trust-paramount"))}</p></div></div></div></div></div></div><div class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-16 mb-10"><div class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-black mb-5">${ssrInterpolate(_ctx.$t("meet-team"))}</div><p class="font-inter font-[300] text-[18px] text-center mx-auto text-black lg:w-[80%] mb-12 lg:mb-16">${ssrInterpolate(_ctx.$t("team-experts"))}</p>`);
      _push(ssrRenderComponent(_component_OurTeam, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ContactEmail, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
