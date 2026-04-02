import { _ as _export_sfc, u as useHead, a as _sfc_main$7 } from './server.mjs';
import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { g as gsapWithCSS, S as ScrollTrigger } from './ScrollTrigger-Br7O8lZa.mjs';
import { useI18n } from 'vue-i18n';
import { _ as _sfc_main$2 } from './AnimatedProjects-D0cMCju1.mjs';
import { u as useCanonical, a as useStructuredData } from './useCanonical-BQilDA_U.mjs';
import { u as useInterval } from './useInterval-Fw70iFP5.mjs';
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
import './interval-DGKf6Zoj.mjs';

const _sfc_main$1 = {
  __name: "AnimatedProjectsHeader",
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
      }, _attrs))}><div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10"><div class="products-header-section relative"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]"><div class="self-center"><h2 class="text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent">${ssrInterpolate(unref(t)("our-projects.title"))}</h2><p class="text-[#20252CE5] font-semibold text-[16px] mt-8 max-w-lg">${ssrInterpolate(unref(t)("our-projects.description"))}</p></div><div class="products-header-img">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/our-projects/our-project-img.png",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedProjectsHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "our-projects",
  __ssrInlineRender: true,
  setup(__props) {
    const { canonicalUrl } = useCanonical();
    const heroWords = [
      "hero-1",
      "hero-2",
      "hero-3",
      "hero-4",
      "hero-5",
      "hero-6",
      "hero-7"
    ];
    ref([
      {
        number: 1,
        title: "action-detection",
        slogan: "reading-behavior",
        description: "offers-advanced",
        image: "/images/home/action-detection.png",
        progress: 0
      },
      {
        number: 2,
        title: "rag",
        slogan: "retrieving-knowledge",
        description: "rag-technology",
        image: "/images/home/rag-new.png",
        progress: 20
      },
      {
        number: 3,
        title: "data-driven",
        slogan: "reimagining-business",
        description: "data-driven-text",
        image: "/images/home/web-development.png",
        progress: 40
      },
      {
        number: 4,
        title: "web-app",
        description: "build-innovative",
        image: "/images/home/web-application.png",
        progress: 60
      },
      {
        number: 5,
        title: "ui-design",
        description: "design-intuitive",
        image: "/images/home/ui-design.png",
        progress: 80
      },
      {
        number: 6,
        title: "ai-utilization",
        description: "cut-customer",
        image: "/images/home/ai-utilization-new.png",
        progress: 100
      }
    ]);
    const currentIndex = ref(0);
    computed(() => heroWords[currentIndex.value]);
    useInterval();
    const { locale, t } = useI18n();
    computed(() => locale.value);
    const staticMetaTitle = t("home-title");
    const staticMetaDescription = t("home-description");
    const staticMetaKeywords = [
      t("home-meta-keyword"),
      ...Array.from({ length: 53 }, (_, i) => t(`home-meta-keyword-${i + 1}`))
    ].join(", ");
    const structuredData = useStructuredData("home");
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
      const _component_AnimatedProjectsHeader = _sfc_main$1;
      const _component_AnimatedProjects = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e71750fe>`);
      _push(ssrRenderComponent(_component_AnimatedProjectsHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_AnimatedProjects, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/revamp/our-projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ourProjects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e71750fe"]]);

export { ourProjects as default };
