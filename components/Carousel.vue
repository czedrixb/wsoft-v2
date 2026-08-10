<template>
  <div class="relative w-full pt-10">
    <!-- Prev Button -->
    <button
      @click="prevSlide"
      class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-1.5 md:p-2 backdrop-blur-sm transition-all hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>

    <!-- Slides viewport -->
    <div
      class="flex items-center justify-center overflow-hidden"
      style="height: 320px"
      @mouseenter="pauseAutoSlide"
      @mouseleave="resumeAutoSlide"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <div
        v-for="(slide, i) in slides"
        :key="slide.id"
        class="absolute transition-all duration-500 ease-in-out cursor-pointer"
        :style="getSlideStyle(i)"
        @click="goToSlide(i)"
      >
        <div
          class="rounded-[20px] md:rounded-[28px] p-4 md:p-8 mx-auto"
          :class="slide.gradientClass"
          :style="{ width: slideWidth }"
        >
          <div class="grid grid-cols-12">
            <!-- Left: text column -->
            <div class="col-span-12 order-2 md:order-1 md:col-span-6">
              <div class="flex flex-col h-full">
                <div class="flex-grow space-y-2 md:space-y-6 mb-16">
                  <!-- Title: Satoshi Regular 24px / lh 32px -->
                  <div>
                    <p
                      class="font-satoshi font-normal text-lg md:text-[24px] leading-snug md:leading-[32px]"
                      :class="slide.id === 1 ? 'text-[#752323]' : 'text-[#fbfaf5]'"
                    >
                      {{
                        $t(`home.carousel.slide${slide.id + 1}.title.line1`, {
                          brand: $t(
                            isUedu
                              ? "home.carousel.brand-uedu"
                              : "home.carousel.brand",
                          ),
                        })
                      }}
                    </p>
                    <p
                      class="font-satoshi font-normal text-lg md:text-[24px] leading-snug md:leading-[32px]"
                      :class="slide.id === 1 ? 'text-[#752323]' : 'text-[#fbfaf5]'"
                    >
                      {{ $t(`home.carousel.slide${slide.id + 1}.title.line2`) }}
                    </p>
                  </div>

                  <!-- Body: Open Sans SemiBold 14px — desktop -->
                  <div class="hidden sm:block">
                    <p
                      class="font-opensans font-semibold text-sm md:text-[14px] leading-normal"
                      :class="slide.id === 1 ? 'text-[#473720]' : 'text-[#f8fafc]'"
                    >
                      {{
                        $t(
                          `home.carousel.slide${slide.id + 1}.description.line1`,
                        )
                      }}
                    </p>
                  </div>

                  <div class="hidden sm:block">
                    <p
                      class="font-opensans font-semibold text-sm md:text-[14px] leading-normal"
                      :class="slide.id === 1 ? 'text-[#473720]' : 'text-[#f8fafc]'"
                    >
                      {{
                        $t(
                          `home.carousel.slide${slide.id + 1}.description.line2`,
                        )
                      }}
                    </p>
                  </div>

                  <!-- Body: mobile only -->
                  <div class="sm:hidden">
                    <p
                      class="font-opensans font-semibold text-sm leading-normal line-clamp-3"
                      :class="slide.id === 1 ? 'text-[#473720]' : 'text-[#f8fafc]'"
                    >
                      {{
                        $t(
                          `home.carousel.slide${slide.id + 1}.description.line1`,
                        )
                      }}
                    </p>
                  </div>
                </div>

                <!-- Read more button: Open Sans SemiBold 14px + drop shadow -->
                <router-link to="/products">
                  <button
                    class="btn w-auto border rounded-full px-4 md:px-8 py-1.5 md:py-2 flex gap-2 md:gap-3 items-center mt-4 md:mt-0 self-start bg-transparent font-opensans font-semibold text-sm md:text-[14px] shadow-[0px_16px_32px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]"
                    :class="
                      slide.id === 1
                        ? 'border-[#752323] text-[#752323] hover:bg-[#752323] hover:border-[#752323] hover:text-white'
                        : 'border-[#F8FAFC99] text-[#F8FAFC99] hover:bg-[#2376E9] hover:border-[#2376E9] hover:text-white'
                    "
                  >
                    {{ $t("home.carousel.readMore") }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      class="md:w-4 md:h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </router-link>
              </div>
            </div>

            <!-- Right: product image + Figma glow ellipses -->
            <div
              class="col-span-12 order-1 md:order-2 md:col-span-6 flex justify-center md:justify-end md:items-end"
            >
              <!-- Outer container: mix-blend-mode applied to the entire image+glow group -->
              <div
                class="relative h-[160px] sm:h-[220px] md:h-[280px] rounded-[10px] md:rounded-[14px] overflow-visible"
                :style="{
                  aspectRatio: slide.imageAspect,
                  mixBlendMode: slide.imageBlend,
                }"
              >
                <!-- Base product image (clean neon graphic from Figma) -->
                <img
                  :src="slide.image"
                  :alt="$t(`home.carousel.slide${slide.id + 1}.title.line2`)"
                  class="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
                <!-- Glow ellipse overlays (positioned as % of container, rotated 29.41° per Figma) -->
                <div
                  v-for="(glow, gi) in slide.glows"
                  :key="gi"
                  class="absolute pointer-events-none"
                  :style="{
                    left: glow.left,
                    top: glow.top,
                    width: glow.width,
                    height: glow.height,
                    mixBlendMode: glow.blend,
                    transform: 'rotate(29.41deg)',
                  }"
                >
                  <img :src="glow.src" class="block w-full h-full" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Card shade: soft colored glow that bleeds below each card (from Figma) -->
    <div
      class="relative h-14 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <img
        v-for="(slide, i) in slides"
        :key="`shade-${slide.id}`"
        :src="slide.shade"
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full transition-opacity duration-500"
        :style="{ opacity: i === activeIndex ? 1 : 0 }"
        alt=""
      />
    </div>

    <!-- Pill / dot indicators -->
    <div class="flex justify-center gap-2 mt-6 md:mt-10">
      <button
        v-for="(slide, i) in slides"
        :key="`dot-${slide.id}`"
        @click="goToSlide(i)"
        class="transition-all duration-300"
        :aria-label="`Slide ${i + 1}`"
      >
        <img
          :src="
            i === activeIndex
              ? '/images/home/banner/carousel/indicator-active.svg'
              : '/images/home/banner/carousel/indicator-inactive.svg'
          "
          class="h-4 w-10"
          alt=""
        />
      </button>
    </div>

    <!-- Next Button -->
    <button
      @click="nextSlide"
      class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-1.5 md:p-2 backdrop-blur-sm transition-all hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const isUedu = ref(false);

// ─── Slide definitions ───────────────────────────────────────────────────────
// imageAspect: matches Figma container proportions (portrait, ~0.70)
// imageBlend:  applied to the whole image+glow group (matching Figma layer blend)
// shade:       Figma "shade" SVG — soft colored glow cast below the card
// glows:       layered glow ellipses inside the image container (% of container)
//              left/top are the top-left corner of the ellipse div
//              blend modes match Figma's per-ellipse setting
// ─────────────────────────────────────────────────────────────────────────────
const slides = [
  {
    id: 0, // orange → gold  (Figma "slide 3")
    gradientClass: "bg-gradient-to-r from-[#E96F23] to-[#D0B802]",
    image: "/images/home/banner/carousel/frame-0.png",
    imageBlend: "hard-light",
    imageAspect: "242/345",
    shade: "/images/home/banner/carousel/shade-0.svg",
    glows: [
      // Ellipse 33 — soft-light
      { src: "/images/home/banner/carousel/glow-0-0.svg", blend: "soft-light", left: "29%", top: "30%", width: "75%", height: "58%" },
      // Ellipse 34 — soft-light (overhangs left edge)
      { src: "/images/home/banner/carousel/glow-0-1.svg", blend: "soft-light", left: "-8%", top: "14%", width: "75%", height: "58%" },
      // Ellipse 35 — soft-light
      { src: "/images/home/banner/carousel/glow-0-2.svg", blend: "soft-light", left: "25%", top: "14%", width: "60%", height: "39%" },
      // Ellipse 36 — soft-light
      { src: "/images/home/banner/carousel/glow-0-3.svg", blend: "soft-light", left: "16%", top: "45%", width: "54%", height: "35%" },
    ],
  },
  {
    id: 1, // pink → yellow  (Figma "slide 1" — center / active by default)
    gradientClass: "bg-gradient-to-r from-[#FFD5EB] to-[#E1D176]",
    image: "/images/home/banner/carousel/frame-1.png",
    imageBlend: "soft-light",
    imageAspect: "323/461",
    shade: "/images/home/banner/carousel/shade-1.svg",
    glows: [
      // Ellipse 29 — soft-light
      { src: "/images/home/banner/carousel/glow-1-0.svg", blend: "soft-light", left: "5%", top: "11%", width: "63%", height: "50%" },
      // Ellipse 37 — soft-light
      { src: "/images/home/banner/carousel/glow-1-1.svg", blend: "soft-light", left: "25%", top: "19%", width: "75%", height: "58%" },
      // Ellipse 38 — soft-light
      { src: "/images/home/banner/carousel/glow-1-2.svg", blend: "soft-light", left: "32%", top: "8%", width: "60%", height: "39%" },
      // Ellipse 39 — soft-light
      { src: "/images/home/banner/carousel/glow-1-3.svg", blend: "soft-light", left: "14%", top: "36%", width: "54%", height: "35%" },
    ],
  },
  {
    id: 2, // magenta → purple  (Figma "slide 2")
    gradientClass: "bg-gradient-to-r from-[#C123E9] to-[#5F02D0]",
    image: "/images/home/banner/carousel/frame-2.png",
    imageBlend: "plus-lighter",
    imageAspect: "242/345",
    shade: "/images/home/banner/carousel/shade-2.svg",
    glows: [
      // Ellipse 30 — saturation
      { src: "/images/home/banner/carousel/glow-2-0.svg", blend: "saturation", left: "24%", top: "11%", width: "75%", height: "58%" },
      // Ellipse 31 — color-dodge
      { src: "/images/home/banner/carousel/glow-2-1.svg", blend: "color-dodge", left: "22%", top: "57%", width: "60%", height: "39%" },
      // Ellipse 32 — plus-lighter
      { src: "/images/home/banner/carousel/glow-2-2.svg", blend: "plus-lighter", left: "16%", top: "22%", width: "54%", height: "35%" },
    ],
  },
];

const activeIndex = ref(1);
const total = slides.length;
const slideWidth = ref("936px");

const AUTO_SLIDE_INTERVAL = 2000;
let autoSlideTimer = null;

const startAutoSlide = () => {
  stopAutoSlide();
  autoSlideTimer = setInterval(() => {
    nextSlide();
  }, AUTO_SLIDE_INTERVAL);
};

const stopAutoSlide = () => {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
  }
};

const pauseAutoSlide = () => stopAutoSlide();
const resumeAutoSlide = () => startAutoSlide();

const SWIPE_THRESHOLD = 50;
let touchStartX = 0;

const onTouchStart = (e) => {
  touchStartX = e.touches[0].clientX;
  pauseAutoSlide();
};

const onTouchEnd = (e) => {
  const deltaX = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(deltaX) >= SWIPE_THRESHOLD) {
    if (deltaX < 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
  resumeAutoSlide();
};

const updateSlideWidth = () => {
  const vw = window.innerWidth;
  if (vw < 480) {
    slideWidth.value = `${vw - 64}px`;
  } else if (vw < 768) {
    slideWidth.value = `${vw - 80}px`;
  } else if (vw < 1100) {
    slideWidth.value = `${vw - 120}px`;
  } else {
    slideWidth.value = "936px";
  }
};

onMounted(() => {
  isUedu.value = window.location.hostname === "ueducation.co.kr";
  updateSlideWidth();
  window.addEventListener("resize", updateSlideWidth);
  startAutoSlide();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSlideWidth);
  stopAutoSlide();
});

const getPosition = (slideIndex) => {
  let diff = slideIndex - activeIndex.value;
  if (diff > Math.floor(total / 2)) diff -= total;
  if (diff < -Math.floor(total / 2)) diff += total;
  return diff;
};

const getSlideStyle = (slideIndex) => {
  const pos = getPosition(slideIndex);
  const absPos = Math.abs(pos);

  if (absPos > 1) {
    return { opacity: 0, pointerEvents: "none", zIndex: 0 };
  }

  if (pos === 0) {
    return {
      left: "50%",
      transform: "translateX(-50%) scale(1)",
      opacity: 1,
      zIndex: 10,
      pointerEvents: "auto",
      filter: "none",
    };
  } else {
    const vw = typeof window !== "undefined" ? window.innerWidth : 1200;
    const xOffset =
      pos *
      (vw < 768
        ? vw * 0.85 // mobile
        : vw < 1100
          ? vw * 0.7 // tablet — proportional so side cards peek in (matches Figma)
          : 900); // desktop
    return {
      left: "50%",
      transform: `translateX(-50%) translateX(${xOffset}px) translateY(20px) scale(0.78)`,
      opacity: 0.45,
      zIndex: 5,
      pointerEvents: "auto",
      filter: "blur(1.5px)",
    };
  }
};

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % total;
};
const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + total) % total;
};
const goToSlide = (i) => {
  activeIndex.value = i;
};
</script>

<style scoped>
.overflow-hidden {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.overflow-hidden::-webkit-scrollbar {
  display: none;
}
</style>
