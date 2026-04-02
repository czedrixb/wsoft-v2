import { a as _sfc_main$7 } from './server.mjs';
import { ref, watch, nextTick, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useI18n } from 'vue-i18n';
import { g as gsapWithCSS, S as ScrollTrigger } from './ScrollTrigger-Br7O8lZa.mjs';

const _sfc_main = {
  __name: "Catalogue",
  __ssrInlineRender: true,
  setup(__props) {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    const { t, tm, locale } = useI18n();
    const catalogueContainer = ref(null);
    const productsGrid = ref(null);
    let ctx = null;
    const items = ref([]);
    const updateItems = () => {
      items.value = [
        {
          color: "#6AA05D",
          productName: t("products.items.poreDensity.productName"),
          subText: t("products.items.poreDensity.subText"),
          catalogueNumber: t("products.items.poreDensity.catalogueNumber"),
          productType: t("products.items.poreDensity.productType"),
          descriptions: tm("products.items.poreDensity.descriptions"),
          image: "pore-density.png",
          programs: [
            {
              name: t(
                "products.items.poreDensity.programs.skinPoreDensityAnalysis"
              ),
              features: tm("products.items.poreDensity.programs.features")
            }
          ],
          intendedUse: t("products.items.poreDensity.intendedUse"),
          researchUse: [
            t("products.researchUseOnly"),
            t("products.notForCosmetic")
          ],
          packageComponents: tm("products.items.poreDensity.packageComponents")
        },
        {
          color: "#5790DE",
          productName: t("products.items.skinFlake.productName"),
          subText: t("products.items.skinFlake.subText"),
          catalogueNumber: t("products.items.skinFlake.catalogueNumber"),
          productType: t("products.items.skinFlake.productType"),
          descriptions: tm("products.items.skinFlake.descriptions"),
          image: "flake-area.png",
          programs: [
            {
              name: t("products.items.skinFlake.programs.skinPoreDensityAnalysis"),
              features: []
            },
            {
              name: t(
                "products.items.skinFlake.programs.skinFlakeAreaRatioAnalysis"
              ),
              features: []
            }
          ],
          intendedUse: t("products.items.skinFlake.intendedUse"),
          researchUse: [t("products.researchUseOnly"), t("products.notForMedical")],
          packageComponents: tm("products.items.skinFlake.packageComponents")
        },
        {
          color: "#802FA5",
          productName: t("products.items.skinTexture.productName"),
          subText: t("products.items.skinTexture.subText"),
          catalogueNumber: t("products.items.skinTexture.catalogueNumber"),
          productType: t("products.items.skinTexture.productType"),
          descriptions: tm("products.items.skinTexture.descriptions"),
          image: "skin-roughness.png",
          programs: [
            {
              name: t(
                "products.items.skinTexture.programs.skinPoreDensityAnalysis"
              ),
              features: []
            },
            {
              name: t(
                "products.items.skinTexture.programs.skinFlakeAreaRatioAnalysis"
              ),
              features: []
            },
            {
              name: t(
                "products.items.skinTexture.programs.skinTextureRoughnessAnalysis"
              ),
              features: []
            }
          ],
          intendedUse: t("products.items.skinTexture.intendedUse"),
          researchUse: [
            t("products.researchUseOnly"),
            t("products.notForCosmeticClaims")
          ],
          packageComponents: tm("products.items.skinTexture.packageComponents")
        },
        {
          color: "#D86429",
          productName: t("products.items.skinTone.productName"),
          subText: t("products.items.skinTone.subText"),
          catalogueNumber: t("products.items.skinTone.catalogueNumber"),
          productType: t("products.items.skinTone.productType"),
          descriptions: tm("products.items.skinTone.descriptions"),
          image: "skin-tone.png",
          programs: [
            {
              name: t("products.items.skinTone.programs.skinDarknessAnalysis"),
              features: tm("products.items.skinTone.programs.features")
            }
          ],
          intendedUse: t("products.items.skinTone.intendedUse"),
          researchUse: [
            t("products.researchUseOnly"),
            t("products.notForCosmeticEfficacy")
          ],
          packageComponents: tm("products.items.skinTone.packageComponents")
        }
      ];
    };
    updateItems();
    const initAnimations = () => {
      ctx == null ? void 0 : ctx.revert();
      ctx = gsapWithCSS.context(() => {
        ScrollTrigger.matchMedia({
          "(min-width: 1024px)": () => {
            var _a;
            const allItems = (_a = productsGrid.value) == null ? void 0 : _a.querySelectorAll(".catalogue-item");
            if (!allItems || allItems.length < 2) return;
            const leftItems = [...allItems].filter((_, i) => i % 2 === 0);
            const rightItems = [...allItems].filter((_, i) => i % 2 !== 0);
            rightItems.forEach((rightCard, i) => {
              const leftCard = leftItems[i];
              if (!leftCard) return;
              gsapWithCSS.set(rightCard, { y: 120, opacity: 0 });
              gsapWithCSS.to(rightCard, {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: leftCard,
                  start: "top 70%",
                  end: "top 20%",
                  scrub: 1.5
                }
              });
            });
          }
        });
      }, catalogueContainer.value);
    };
    watch(locale, async () => {
      updateItems();
      await nextTick();
      initAnimations();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "catalogueContainer",
        ref: catalogueContainer
      }, _attrs))}><div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20"><!--[-->`);
      ssrRenderList(items.value, (item, key) => {
        _push(`<div class="flex flex-col h-full catalogue-item"${ssrRenderAttr("data-index", key)}><div class="rounded-[6px] text-white text-center p-5 mb-5" style="${ssrRenderStyle({ backgroundColor: item.color })}"><h2 class="font-inter font-[400] text-[20px]">${ssrInterpolate(item.productName)}</h2><span class="font-600 text-[12px] text-[#F8FAFC99]">${ssrInterpolate(item.subText)}</span></div><div class="mb-4"><div class="flex items-center gap-x-2 mb-2"><div class="bg-[#64748B] px-2 py-1 rounded-[2px] text-white font-[600] text-[14px] shrink-0 whitespace-nowrap"><span class="font-inter">${ssrInterpolate(_ctx.$t("products.catalogueNumber"))}</span></div><span class="text-black text-[14px] font-[600] flex-1 truncate">${ssrInterpolate(item.catalogueNumber)}</span></div><div class="flex items-center gap-x-2"><div class="bg-[#64748B] px-2 py-1 rounded-[2px] text-white font-[600] text-[14px] shrink-0 whitespace-nowrap"><span class="font-inter">${ssrInterpolate(_ctx.$t("products.productType"))}</span></div><span class="text-black text-[14px] font-[600] flex-1">${ssrInterpolate(item.productType)}</span></div></div><div class="text-black font-[600] text-[14px] mb-5"><div class="h-[18rem] overflow-y-auto"><!--[-->`);
        ssrRenderList(item.descriptions, (desc, index) => {
          _push(`<p class="mt-5 first:mt-0">${ssrInterpolate(desc)}</p>`);
        });
        _push(`<!--]--></div></div>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `/images/products/${item.image}`,
          alt: "pore-density",
          class: "w-full h-auto mb-5"
        }, null, _parent));
        _push(`<div class="mt-[3rem]"><div class="h-[17rem]"><div class="border-b-[1px] border-[#64748B] mb-2"><p class="font-inter font-[400] text-[20px] text-black">${ssrInterpolate(_ctx.$t("products.includedProgram"))}</p></div><div class="text-black text-[14px] font-[600]"><!--[-->`);
        ssrRenderList(item.programs, (program, programKey) => {
          _push(`<div class="mb-4 last:mb-0"><p class="mb-1">${ssrInterpolate(program.name)}</p><ul class="list-disc ps-7"><!--[-->`);
          ssrRenderList(program.features, (feature, index) => {
            _push(`<li class="mb-1 last:mb-0">${ssrInterpolate(feature)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        });
        _push(`<!--]--></div></div><div class="h-[15rem]"><div class="border-b-[1px] border-[#64748B] mb-2"><p class="font-inter font-[400] text-[20px] text-black">${ssrInterpolate(_ctx.$t("products.intendedUse"))}</p></div><div class="text-black text-[14px] font-[600]"><p class="min-h-[20px]">${ssrInterpolate(item.intendedUse)}</p></div></div><div class="h-[15rem]"><div class="border-b-[1px] border-[#64748B] mb-2"><p class="font-inter font-[400] text-[20px] text-black">${ssrInterpolate(_ctx.$t("products.researchUseDisclaimer"))}</p></div><div class="text-black text-[14px] font-[600]"><!--[-->`);
        ssrRenderList(item.researchUse, (line, index) => {
          _push(`<p class="mb-1 last:mb-0">${ssrInterpolate(line)}</p>`);
        });
        _push(`<!--]--></div></div><div class="h-[17rem]"><div class="border-b-[1px] border-[#64748B] mb-2"><p class="font-inter font-[400] text-[20px] text-black">${ssrInterpolate(_ctx.$t("products.packageComponents"))}</p></div><div class="text-black text-[14px] font-[600]"><ol class="list-decimal ps-3"><!--[-->`);
        ssrRenderList(item.packageComponents, (component, index) => {
          _push(`<li class="mb-1 last:mb-0">${ssrInterpolate(component)}</li>`);
        });
        _push(`<!--]--></ol></div></div><div class="h-[15rem]"><div class="border-b-[1px] border-[#64748B] mb-2"><p class="font-inter font-[400] text-[20px] text-black">${ssrInterpolate(_ctx.$t("products.pricing"))}</p></div><div class="text-black text-[14px] font-[600]"><p class="min-h-[20px]">${ssrInterpolate(_ctx.$t("products.pricingUponRequest"))}</p></div></div><div class="h-[15rem]"><div class="border-b-[1px] border-[#64748B] mb-2"><p class="font-inter font-[400] text-[20px] text-black">${ssrInterpolate(_ctx.$t("products.leadTime"))}</p></div><div class="text-black text-[14px] font-[600]"><p class="min-h-[20px]">${ssrInterpolate(_ctx.$t("products.leadTimeValue"))}</p></div></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Catalogue.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
