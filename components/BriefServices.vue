<template>
  <div class="hidden lg:block">
    <div class="scroll-container">
      <div class="hidden lg:block">
        <div class="service-sections overflow-y-scroll h-screen">
          <div
            v-for="(service, key) in services"
            :key="key"
            class="service-section h-screen grid grid-cols-2 items-center gap-y-8 lg:flex-row mb-14 w-full"
          >
            <div class="left-side text-left">
              <div>
                <div
                  class="radial-progress bg-white text-[#C1C1C1] mb-5"
                  style="--value: 100; --size: 3rem; --thickness: 2px"
                  role="progressbar"
                >
                  {{ service.number }}
                </div>
              </div>
              <h2
                class="text-[#475766] font-poppins font-[600] text-[25px] lg:text-[40px] w-[70%]"
              >
                {{ $t(service.title) }}
              </h2>

              <div v-if="service.slogan" class="mt-5">
                <!-- <span
                  class="font-inter text-[18px] text-[#475766] font-[300] lg:w-[70%] xl:w-[50%] 2xl:w-[40%]"
                >
                  {{ $t("slogan") }}:
                </span> -->
                <p
                  class="font-inter text-[18px] text-[#475766] font-[600] lg:w-[80%] xl:w-[70%]"
                >
                  {{ $t(service.slogan) }}
                </p>
              </div>

              <p
                class="font-inter text-[18px] text-[#475766] font-[300] lg:w-[80%] xl:w-[70%] mt-5"
              >
                {{ $t(service.description) }}
              </p>
            </div>

            <div class="right-side flex justify-end">
              <NuxtImg
                :src="service.image"
                width="650px"
                height="100%"
                alt="web-development"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useNuxtApp } from "#app";

const { $gsap, $ScrollTrigger } = useNuxtApp();

const services = ref([
  {
    number: 1,
    title: "action-detection",
    slogan: "reading-behavior",
    description: "offers-advanced",
    image: "/images/home/action-detection.png",
    progress: 0,
  },
  {
    number: 2,
    title: "rag",
    slogan: "retrieving-knowledge",
    description: "rag-technology",
    image: "/images/home/rag-new.png",
    progress: 20,
  },
  {
    number: 3,
    title: "data-driven",
    slogan: "reimagining-business",
    description: "data-driven-text",
    image: "/images/home/web-development.png",
    progress: 40,
  },
  {
    number: 4,
    title: "web-app",
    description: "build-innovative",
    image: "/images/home/web-application.png",
    progress: 60,
  },
  {
    number: 5,
    title: "ui-design",
    description: "design-intuitive",
    image: "/images/home/ui-design.png",
    progress: 80,
  },
  {
    number: 6,
    title: "ai-utilization",
    description: "cut-customer",
    image: "/images/home/ai-utilization-new.png",
    progress: 100,
  },
]);

onMounted(() => {
  if (!$gsap || !$ScrollTrigger) return;

  $gsap.utils.toArray(".service-section").forEach((section) => {
    const textLeft = section.querySelector(".left-side");
    const imageRight = section.querySelector(".right-side");

    $gsap.set(textLeft, { y: "-50%" });
    $gsap.set(imageRight, { y: "50%" });

    $ScrollTrigger.create({
      trigger: section,
      start: "top 70%",
      end: "bottom 30%",
      scroller: ".service-sections",
      onEnter: () => {
        $gsap.to(textLeft, { y: "0%", duration: 2, ease: "power3.out" });
        $gsap.to(imageRight, { y: "0%", duration: 2, ease: "power3.out" });
      },
      onLeave: () => {
        $gsap.to(textLeft, { y: "-50%", duration: 2, ease: "power3.in" });
        $gsap.to(imageRight, { y: "50%", duration: 2, ease: "power3.in" });
      },
      onEnterBack: () => {
        $gsap.to(textLeft, { y: "0%", duration: 2, ease: "power3.out" });
        $gsap.to(imageRight, { y: "0%", duration: 2, ease: "power3.out" });
      },
      onLeaveBack: () => {
        $gsap.to(textLeft, { y: "-50%", duration: 2, ease: "power3.in" });
        $gsap.to(imageRight, { y: "50%", duration: 2, ease: "power3.in" });
      },
      markers: false,
      toggleActions: "play none none reverse",
    });
  });

  // Enable scroll snapping
  $gsap.to(".service-sections", {
    scrollSnapType: "y mandatory",
    duration: 0, // No animation on scroll-snap
  });

  $ScrollTrigger.refresh();
});

onBeforeUnmount(() => {
  if ($ScrollTrigger && typeof $ScrollTrigger.killAll === "function") {
    $ScrollTrigger.killAll();
  }
});
</script>

<style scoped>
.service-sections {
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-snap-type: y mandatory; /* Make sure snap is enabled */
}

.service-sections::-webkit-scrollbar {
  display: none;
}

.service-section {
  scroll-snap-align: start;
}
</style>
