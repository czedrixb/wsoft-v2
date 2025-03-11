<template>
  <div>
    <div class="hidden lg:block">
      <div
        class="carousel carousel-vertical rounded-box md:h-[30rem] h-[27rem] overflow-y-auto"
        @scroll="handleScroll"
      >
        <div
          v-for="(service, key) in services"
          :key="key"
          class="carousel-item h-full mb-5"
        >
          <div
            class="flex flex-col relative justify-between items-center gap-y-8 lg:flex-row mb-14"
          >
            <transition name="fade-down" :appear="true">
              <div
                v-show="visibleItems.includes(key)"
                class="text-left lg:w-[45%]"
              >
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
            </transition>

            <transition name="zoom-in" :appear="true">
              <div
                v-show="visibleItems.includes(key)"
                class="divider bg-[#C5C5C5] h-[1.5px] hidden lg:block lg:!w-[1.5px] lg:divider-horizontal"
              ></div>
            </transition>

            <transition name="fade-up" :appear="true">
              <div v-show="visibleItems.includes(key)" class="flex justify-end">
                <img
                  :src="service.image"
                  class="lg:w-[430px] xl:w-[500px]"
                  alt="web-development"
                />
              </div>
            </transition>

            <div
              class="absolute hidden lg:block lg:left-[47.7%] xl:left-[50%] bottom-[50%]"
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

    <div class="block lg:hidden">
      <div
        v-for="(service, key) in services"
        :key="key"
        class="flex flex-col relative justify-between items-center gap-y-8 lg:flex-row mb-14"
      >
        <div class="text-left lg:w-[45%]">
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
          class="absolute hidden lg:block lg:left-[47.7%] xl:left-[50%] bottom-[50%]"
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
</template>

<script setup>
import { ref, onMounted } from "vue";

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

const visibleItems = ref([]);

const handleScroll = () => {
  const items = document.querySelectorAll(".carousel-item");
  items.forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
      if (!visibleItems.value.includes(index)) {
        visibleItems.value.push(index);
      }
    }
  });
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.fade-down-enter-active {
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-down-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-up-enter-active {
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.zoom-in-enter-active {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.zoom-in-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
</style>
