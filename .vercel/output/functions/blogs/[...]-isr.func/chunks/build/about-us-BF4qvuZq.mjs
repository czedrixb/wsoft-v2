import { _ as _export_sfc, u as useHead, a as _sfc_main$7 } from './server.mjs';
import { _ as __nuxt_component_1 } from './TechStack-BWgKLLon.mjs';
import { computed, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main$3 = {
  __name: "AnimatedAboutHeader",
  __ssrInlineRender: true,
  setup(__props) {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    const aboutContainer = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      const _component_TechStack = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "aboutContainer",
        ref: aboutContainer
      }, _attrs))}><div class="about-section my-40"><div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10"><div class="relative"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="about-text self-center"><h2 class="text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent">${ssrInterpolate(_ctx.$t("about.title"))}</h2><p class="text-[#20252CE5] font-semibold text-[16px] mt-8 max-w-lg">${ssrInterpolate(_ctx.$t("about.description"))}</p></div><div class="about-img-1">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/about-us/about-us-1.png",
        class: "object-cover w-full",
        width: "598px",
        height: "460px"
      }, null, _parent));
      _push(`</div><div class="about-img-2">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/about-us/about-us-2.png",
        class: "object-cover w-full rounded-[14px]",
        width: "598px",
        height: "460px"
      }, null, _parent));
      _push(`</div></div></div></div><div class="mt-20">`);
      _push(ssrRenderComponent(_component_TechStack, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedAboutHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "AnimatedAbout",
  __ssrInlineRender: true,
  setup(__props) {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    const aboutAnimatedContainer = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "aboutAnimatedContainer",
        ref: aboutAnimatedContainer
      }, _attrs))}><div class="about-section bg-[#e2e8f0]"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="relative"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="self-center"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("about.animated_about.cutting_edge.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[14px] mt-8 max-w-md">${ssrInterpolate(_ctx.$t("about.animated_about.cutting_edge.description"))}</p></div><div class="relative flex items-center justify-center"><div class="section-main-img w-full">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/about-us/cutting-edge.png",
        class: "h-auto max-w-full object-cover",
        width: "598px",
        alt: _ctx.$t("about.animated_about.cutting_edge.title")
      }, null, _parent));
      _push(`</div><div class="section-animate-img absolute inset-0 flex items-center justify-center z-10">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/about-us/cutting-edge-animate.png",
        class: "h-auto object-cover",
        width: "200px",
        alt: _ctx.$t("about.animated_about.cutting_edge.title")
      }, null, _parent));
      _push(`</div></div><div class="section-second-text self-center"><p class="text-[#20252CE5] font-semibold text-[14px] mt-8 max-w-md">${ssrInterpolate(_ctx.$t("about.animated_about.cutting_edge.second_description"))}</p></div></div></div></div></div><div class="about-section bg-[#ffffff]"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="relative"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="section-second-text self-center"><p class="text-[#20252CE5] font-semibold text-[14px] mt-8 max-w-md">${ssrInterpolate(_ctx.$t(
        "about.animated_about.expertise_innovation.second_description"
      ))}</p></div><div class="relative flex items-center justify-center"><div class="section-main-img w-full">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/about-us/expertise-innovation.png",
        class: "h-auto max-w-full object-cover",
        width: "598px",
        alt: _ctx.$t("about.animated_about.expertise_innovation.title")
      }, null, _parent));
      _push(`</div><div class="section-animate-img absolute inset-0 flex items-center justify-center z-10">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/about-us/cutting-edge-animate.png",
        class: "h-auto object-cover",
        width: "200px",
        alt: _ctx.$t("about.animated_about.cutting_edge.title")
      }, null, _parent));
      _push(`</div></div><div class="self-center"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("about.animated_about.expertise_innovation.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[14px] mt-8 max-w-md">${ssrInterpolate(_ctx.$t("about.animated_about.expertise_innovation.description"))}</p></div></div></div></div></div><div class="about-section bg-[#e2e8f0]"><div class="mx-auto px-8 max-w-screen-4xl py-16"><div class="relative"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"><div class="self-center"><h3 class="text-[#64748B] text-[24px] font-[400]">${ssrInterpolate(_ctx.$t("about.animated_about.reliable_partner.title"))}</h3><p class="text-[#20252CE5] font-semibold text-[14px] mt-8">${ssrInterpolate(_ctx.$t("about.animated_about.reliable_partner.description"))}</p></div><div class="relative flex items-center justify-center"><div class="section-main-img w-full">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/about-us/reliable-technology.png",
        class: "h-auto max-w-full object-cover",
        width: "598px",
        alt: _ctx.$t("about.animated_about.reliable_partner.title")
      }, null, _parent));
      _push(`</div><div class="section-animate-img absolute inset-0 flex items-center justify-center z-10">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/revamp/about-us/cutting-edge-animate.png",
        class: "h-auto object-cover",
        width: "200px",
        alt: _ctx.$t("about.animated_about.cutting_edge.title")
      }, null, _parent));
      _push(`</div></div><div class="section-second-text self-center"><p class="text-[#20252CE5] font-semibold text-[14px] mt-8 max-w-md">${ssrInterpolate(_ctx.$t("about.animated_about.reliable_partner.second_description"))}</p></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedAbout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AnimatedTeam",
  __ssrInlineRender: true,
  setup(__props) {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    const teamContainer = ref(null);
    ref(null);
    ref(null);
    const members = ref([
      {
        image: "/images/revamp/about-us/our-team/matt.png",
        nickname: "matt",
        position: "ceo"
      },
      {
        image: "/images/revamp/about-us/our-team/ricky.png",
        nickname: "ricky",
        position: "project-manager"
      },
      {
        image: "/images/revamp/about-us/our-team/joseph.png",
        nickname: "joseph",
        position: "full-pm"
      },
      { image: "/images/about-us/hoon.png", nickname: "hoon", position: "full-sa" },
      {
        image: "/images/revamp/about-us/our-team/lin.png",
        nickname: "lin",
        position: "administrative-officer"
      },
      {
        image: "/images/revamp/about-us/our-team/songyi.png",
        nickname: "songyi",
        position: "designer"
      },
      {
        image: "/images/revamp/about-us/our-team/gale.png",
        nickname: "gale",
        position: "operation-manager"
      },
      {
        image: "/images/revamp/about-us/our-team/jaimie.png",
        nickname: "jaimie",
        position: "junior-project"
      },
      {
        image: "/images/revamp/about-us/our-team/salve.png",
        nickname: "salve",
        position: "corporate-secretary"
      },
      {
        image: "/images/revamp/about-us/our-team/lora.png",
        nickname: "lora",
        position: "communications-manager"
      },
      {
        image: "/images/revamp/about-us/our-team/ben.png",
        nickname: "ben",
        position: "full-tpm"
      },
      {
        image: "/images/revamp/about-us/our-team/czedrix.png",
        nickname: "czedrix",
        position: "full-stack"
      },
      {
        image: "/images/revamp/about-us/our-team/neil.png",
        nickname: "neil",
        position: "full-ai"
      },
      {
        image: "/images/revamp/about-us/our-team/jason.png",
        nickname: "jason",
        position: "full-stack"
      },
      {
        image: "/images/revamp/about-us/our-team/winona.png",
        nickname: "winona",
        position: "marketing-specialist"
      },
      {
        image: "/images/revamp/about-us/our-team/pola.png",
        nickname: "pola",
        position: "qa-specialist"
      },
      {
        image: "/images/revamp/about-us/our-team/zyra.png",
        nickname: "zyra",
        position: "marketing-specialist"
      },
      {
        image: "/images/revamp/about-us/our-team/virnel.png",
        nickname: "virnel",
        position: "designer"
      },
      {
        image: "/images/revamp/about-us/our-team/karlo.png",
        nickname: "karlo",
        position: "designer"
      }
    ]);
    const memberChunks = computed(() => {
      const chunks = [];
      for (let i = 3; i < members.value.length; i += 3) {
        chunks.push(members.value.slice(i, i + 3));
      }
      return chunks;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "my-40",
        ref_key: "teamContainer",
        ref: teamContainer
      }, _attrs))}><div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10"><div class="max-w-4xl mx-auto"><h2 class="text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent">${ssrInterpolate(_ctx.$t("about.team.title"))}</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-5"><p class="text-[#20252CE5] font-semibold text-[16px] mt-8 max-w-lg">${ssrInterpolate(_ctx.$t("about.team.description_1"))}</p><p class="text-[#20252CE5] font-semibold text-[16px] mt-8 max-w-lg">${ssrInterpolate(_ctx.$t("about.team.description_2"))}</p></div></div><div class="my-40 text-center"><p class="text-[#64748B] text-[24px]">${ssrInterpolate(_ctx.$t("about.team.meet_team"))}</p></div><div class="team-scroll-section relative"><div class="team-display-area relative overflow-hidden"><div class="team-row team-row-first grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(members.value.slice(0, 3), (member) => {
        _push(`<div class="flex bg-[#F8FAFC] gap-8">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: member.image,
          width: "144px",
          height: "100%",
          class: "object-cover",
          alt: member.nickname
        }, null, _parent));
        _push(`<div class="py-2"><p class="text-[#64748B] text-[48px] leading-[1.2] font-light capitalize">${ssrInterpolate(member.nickname)}</p><p class="text-[#64748B] text-[24px] leading-[1.3]">${ssrInterpolate(_ctx.$t(`about.team.members.${member.nickname}.name`))}</p><p class="text-[#20252CE5] text-[14px] font-semibold leading-[1.3] mt-4 capitalize">${ssrInterpolate(_ctx.$t(`about.team.positions.${member.position}`))}</p></div></div>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(memberChunks.value, (chunk, index) => {
        _push(`<div class="team-row-slide grid grid-cols-1 md:grid-cols-3 gap-8 absolute top-0 left-0 w-full"${ssrRenderAttr("data-index", index)}><!--[-->`);
        ssrRenderList(chunk, (member) => {
          _push(`<div class="flex bg-[#F8FAFC] gap-8">`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: member.image,
            width: "144px",
            height: "100%",
            class: "object-cover",
            alt: member.nickname
          }, null, _parent));
          _push(`<div class="py-2"><p class="text-[#64748B] text-[48px] leading-[1.2] font-light capitalize">${ssrInterpolate(member.nickname)}</p><p class="text-[#64748B] text-[24px] leading-[1.3]">${ssrInterpolate(_ctx.$t(`about.team.members.${member.nickname}.name`))}</p><p class="text-[#20252CE5] text-[14px] font-semibold leading-[1.3] mt-4 capitalize">${ssrInterpolate(_ctx.$t(`about.team.positions.${member.position}`))}</p></div></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedTeam.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "about-us",
  __ssrInlineRender: true,
  setup(__props) {
    const { canonicalUrl } = useCanonical();
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
      const _component_AnimatedAboutHeader = _sfc_main$3;
      const _component_AnimatedAbout = _sfc_main$2;
      const _component_AnimatedTeam = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4f38d955>`);
      _push(ssrRenderComponent(_component_AnimatedAboutHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_AnimatedAbout, null, null, _parent));
      _push(`<div class="mb-20" data-v-4f38d955>`);
      _push(ssrRenderComponent(_component_AnimatedTeam, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/revamp/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f38d955"]]);

export { aboutUs as default };
