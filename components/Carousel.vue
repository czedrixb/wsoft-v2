<template>
  <div class="relative w-full py-10">
    <!-- Prev Button -->
    <button
      @click="prevSlide"
      class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-1.5 md:p-2 backdrop-blur-sm transition-all"
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

    <div
      class="flex items-center justify-center overflow-hidden"
      style="height: 320px"
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
          <div class="text-white grid grid-cols-12">
            <div class="col-span-12 order-2 md:order-1 md:col-span-6">
              <div class="flex flex-col h-full">
                <div class="flex-grow space-y-2 md:space-y-8 mb-16">
                  <div
                    class="text-[16px] md:text-[24px] font-medium leading-snug"
                  >
                    <p>
                      {{ $t(`home.carousel.slide${slide.id + 1}.title.line1`) }}
                    </p>
                    <p>
                      {{ $t(`home.carousel.slide${slide.id + 1}.title.line2`) }}
                    </p>
                  </div>

                  <div
                    class="font-semibold text-[11px] md:text-[16px] opacity-90 hidden sm:block"
                  >
                    <p>
                      {{
                        $t(
                          `home.carousel.slide${slide.id + 1}.description.line1`,
                        )
                      }}
                    </p>
                  </div>

                  <div
                    class="font-semibold text-[11px] md:text-[16px] opacity-90 hidden sm:block"
                  >
                    <p>
                      {{
                        $t(
                          `home.carousel.slide${slide.id + 1}.description.line2`,
                        )
                      }}
                    </p>
                  </div>

                  <div
                    class="font-semibold text-[11px] opacity-90 sm:hidden line-clamp-3"
                  >
                    <p>
                      {{
                        $t(
                          `home.carousel.slide${slide.id + 1}.description.line1`,
                        )
                      }}
                    </p>
                  </div>
                </div>
                <button
                  class="btn w-auto border bg-transparent hover:bg-[#2376E9] hover:border-[#2376E9] border-[#F8FAFC99] rounded-full px-4 md:px-8 py-1.5 md:py-2 flex gap-2 md:gap-3 items-center mt-4 md:mt-0 self-start text-[11px] md:text-sm"
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
              </div>
            </div>
            <!-- Image -->
            <div
              class="col-span-12 order-1 md:order-2 md:col-span-6 flex justify-center md:justify-end md:items-end"
            >
              <img
                :src="slide.image"
                :alt="$t(`home.carousel.slide${slide.id + 1}.title.line2`)"
                class="h-[160px] sm:h-[220px] md:h-[280px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center gap-2 mt-3">
      <button
        v-for="(slide, i) in slides"
        :key="`dot-${slide.id}`"
        @click="goToSlide(i)"
        class="rounded-full transition-all duration-300"
        :class="i === activeIndex ? 'bg-white w-4 h-2' : 'bg-white/40 w-2 h-2'"
      />
    </div>

    <!-- Next Button -->
    <button
      @click="nextSlide"
      class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-1.5 md:p-2 backdrop-blur-sm transition-all"
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
const slides = [
  {
    id: 0,
    gradientClass: "bg-gradient-to-r from-[#E96F23] to-[#D0B802]",
    image: "/images/home/banner/icon-1.png",
  },
  {
    id: 1,
    gradientClass: "bg-gradient-to-r from-[#2376E9] to-[#02C7D0]",
    image: "/images/home/banner/icon-2.png",
  },
  {
    id: 2,
    gradientClass: "bg-gradient-to-r from-[#C123E9] to-[#5F02D0]",
    image: "/images/home/banner/icon-3.png",
  },
];

const activeIndex = ref(1);
const total = slides.length;

const slideWidth = ref("936px");

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
  updateSlideWidth();
  window.addEventListener("resize", updateSlideWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSlideWidth);
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
    const xOffset = pos * (vw < 768 ? vw * 0.85 : 900);
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
