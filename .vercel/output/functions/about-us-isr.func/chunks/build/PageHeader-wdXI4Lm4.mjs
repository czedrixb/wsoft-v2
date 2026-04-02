import { a as _sfc_main$7 } from './server.mjs';
import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-Dfg11rWA.mjs';
import { useRoute } from 'vue-router';

const _sfc_main = {
  __name: "PageHeader",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    blogMeta: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const route = useRoute();
    const props = __props;
    const showBlogMeta = computed(() => {
      return props.blogMeta && route.path.includes("/blogs/");
    });
    const shouldShowDescription = computed(() => {
      if (!props.description) return false;
      const isBlogPage = route.path.includes("/blog");
      if (isBlogPage) {
        return props.description && props.description.trim() !== "";
      }
      return !!props.description;
    });
    const contentContainerClass = computed(() => {
      return showBlogMeta.value ? "w-[80%] 2xl:w-[60%]" : "";
    });
    const titleClass = computed(() => {
      const baseClasses = "font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-black mb-5";
      return showBlogMeta.value ? baseClasses : `${baseClasses} text-center`;
    });
    const descriptionClass = computed(() => {
      const baseClasses = "font-inter font-[300] text-[18px] text-black";
      return showBlogMeta.value ? baseClasses : `${baseClasses} text-center mx-auto w-[80%] 2xl:w-[60%]`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-[100%] lg:h-[24rem] overflow-hidden relative mb-10" }, _attrs))}><video class="w-full min-h-[30rem] xl:h-full object-cover" autoplay loop muted playsinline><source${ssrRenderAttr("src", _imports_0)} type="video/mp4"> Your browser does not support the video tag. </video><div class="absolute inset-0 bg-[#ebf0f7] opacity-[.60] hidden lg:block"></div><div class="absolute inset-0 flex justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/about-us/hero-overlay.png",
        width: "1500px",
        height: "800px",
        class: "hidden md:block",
        alt: "hero-overlay"
      }, null, _parent));
      _push(`</div><div class="absolute inset-0 flex justify-center items-center"><div class="${ssrRenderClass(contentContainerClass.value)}">`);
      if (showBlogMeta.value && __props.blogMeta) {
        _push(`<div class="flex flex-wrap items-center mb-1"><span class="font-poppins text-[#999999] text-[14px] font-[500] me-4">${ssrInterpolate(__props.blogMeta.date)}</span><span class="font-poppins text-[#333333] text-[14px] font-[700]">${ssrInterpolate(__props.blogMeta.author)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="${ssrRenderClass(titleClass.value)}">${ssrInterpolate(__props.title)}</h1>`);
      if (shouldShowDescription.value) {
        _push(`<h2 class="${ssrRenderClass(descriptionClass.value)}">${ssrInterpolate(__props.description)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
