<template>
  <div class="scroll-container">
    <div class="hidden lg:block">
      <div class="service-sections overflow-y-scroll h-screen">
        <div
          v-for="(service, key) in services"
          :key="key"
          class="service-section h-screen flex flex-col relative justify-between items-center gap-y-8 lg:flex-row mb-14"
        >
          <div class="text-left lg:w-[37.3%]">
            <div class="block lg:hidden">
              <div
                class="radial-progress bg-white text-[#C1C1C1] mb-5"
                style="--value: 100; --size: 3rem; --thickness: 2px"
                role="progressbar"
              >
                {{ service.number }}
              </div>
            </div>
            <div
              class="text-[#475766] font-poppins font-[600] text-[25px] lg:text-[40px] w-[70%] mb-5"
            >
              {{ $t(service.title) }}
            </div>
            <p
              class="font-inter text-[18px] text-[#475766] font-[300] lg:w-[80%]"
            >
              {{ $t(service.description) }}
            </p>
          </div>

          <div
            class="divider bg-[#C5C5C5] h-[1.5px] hidden lg:block lg:!w-[1.5px] lg:divider-horizontal"
          ></div>

          <div class="flex justify-end">
            <img
              :src="service.image"
              class="lg:w-[430px] xl:w-[500px]"
              alt="web-development"
            />
          </div>

          <div
            class="absolute hidden lg:block lg:left-[50%] xl:left-[50%] bottom-[50%]"
          >
            <div
              class="radial-progress bg-white border-[#159ADE] text-[#159ADE]"
              :style="`--value: ${service.progress}; --size: 3rem; --thickness: 2px`"
              role="progressbar"
            >
              {{ service.number }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = ref([
  {
    number: 1,
    title: "web-dev",
    description: "create-website",
    image: "/images/home/web-development.png",
    progress: 25,
  },
  {
    number: 2,
    title: "web-app",
    description: "build-innovative",
    image: "/images/home/web-application.png",
    progress: 50,
  },
  {
    number: 3,
    title: "ui-design",
    description: "design-intuitive",
    image: "/images/home/ui-design.png",
    progress: 75,
  },
  {
    number: 4,
    title: "ai-utilization",
    description: "cut-customer",
    image: "/images/home/ai-utilization.png",
    progress: 100,
  },
]);

onMounted(() => {
  gsap.utils.toArray(".service-section").forEach((section) => {
    const textLeft = section.querySelector(".text-left");
    const imageRight = section.querySelector(".flex.justify-end");

    gsap.set(textLeft, { y: "-50%" });
    gsap.set(imageRight, { y: "50%" });

    ScrollTrigger.create({
      trigger: section,
      start: "top 70%",
      end: "bottom 30%",
      scroller: ".service-sections",
      onEnter: () => {
        gsap.to(textLeft, {
          y: "0%",
          duration: 1,
          ease: "power3.out",
        });
        gsap.to(imageRight, {
          y: "0%",
          duration: 1,
          ease: "power3.out",
        });
      },
      onLeave: () => {
        gsap.to(textLeft, {
          y: "-50%",
          duration: 1,
          ease: "power3.in",
        });
        gsap.to(imageRight, {
          y: "50%",
          duration: 1,
          ease: "power3.in",
        });
      },
      onEnterBack: () => {
        gsap.to(textLeft, {
          y: "0%",
          duration: 1,
          ease: "power3.out",
        });
        gsap.to(imageRight, {
          y: "0%",
          duration: 1,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(textLeft, {
          y: "-50%",
          duration: 1,
          ease: "power3.in",
        });
        gsap.to(imageRight, {
          y: "50%",
          duration: 1,
          ease: "power3.in",
        });
      },
      markers: false,
      toggleActions: "play none none reverse",
    });
  });
});
</script>




<style scoped>
.service-sections {
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.service-sections::-webkit-scrollbar {
  display: none;
}
</style>