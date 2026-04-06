<template>
  <div ref="projectsContainer">
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="project-section relative overflow-hidden"
      :class="section.bg"
    >
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[500px]"
        >
          <template v-for="(col, colIndex) in section.columns" :key="colIndex">
            <!-- Text Block -->
            <div
              v-if="col.type === 'text'"
              class="text-block self-center"
              :data-section="index"
            >
              <h3 class="text-[#64748B] text-[24px] font-[400]">
                {{ col.titleKey }}
              </h3>

              <p
                v-if="col.descriptionSubtitle"
                class="text-[#20252CE5] font-semibold text-[16px] mt-5"
              >
                {{ col.descriptionSubtitle }}
              </p>

              <p v-else class="text-[#20252CE5] font-normal text-[14px] mt-5">
                {{ col.description }}
              </p>

              <template v-if="col.descriptionBody">
                <ul
                  v-if="Array.isArray(col.descriptionBody)"
                  class="list-disc list-inside text-[#20252CE5] font-normal text-[14px] mt-5 space-y-0"
                >
                  <li v-for="(item, i) in col.descriptionBody" :key="i">
                    {{ item }}
                  </li>
                </ul>
                <p v-else class="text-[#20252CE5] font-normal text-[14px] mt-5">
                  {{ col.descriptionBody }}
                </p>
              </template>

              <div v-if="col.solution" class="mt-5">
                <div
                  class="p-5 text-white bg-[#64748B] text-[16px] font-semibold space-y-3 rounded-[6px]"
                >
                  <p>{{ col.solutionLabel || "Solution" }}</p>
                  <ul
                    v-if="Array.isArray(col.solution)"
                    class="list-disc list-inside font-normal text-[14px] space-y-1"
                  >
                    <li v-for="(item, i) in col.solution" :key="i">
                      {{ item }}
                    </li>
                  </ul>
                  <p v-else>{{ col.solution }}</p>
                </div>
              </div>
            </div>

            <!-- Image Block -->
            <div
              v-else-if="col.type === 'image'"
              class="image-parallax"
              :data-direction="col.direction"
            >
              <NuxtImg
                :src="col.src"
                class="object-cover rounded-[14px]"
                :class="col.class"
                :width="col.width || '598px'"
                :height="col.height || '460px'"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  sections: {
    type: Array,
    required: true,
  },
});

const projectsContainer = ref(null);
let ctx = null;

onMounted(() => {
  ctx = gsap.context(() => {
    const sectionEls = gsap.utils.toArray(".project-section");

    sectionEls.forEach((section) => {
      const textBlock = section.querySelector(".text-block");
      const upImages = section.querySelectorAll(
        '.image-parallax[data-direction="up"]',
      );
      const downImages = section.querySelectorAll(
        '.image-parallax[data-direction="down"]',
      );

      if (textBlock) gsap.set(textBlock, { opacity: 0, y: 50 });
      gsap.set(upImages, { opacity: 0, y: 120 });
      gsap.set(downImages, { opacity: 0, y: 120 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 2,
          anticipatePin: 1,
        },
      });

      if (textBlock) {
        tl.to(
          textBlock,
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          0,
        );
      }
      tl.to(
        downImages,
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
        0.8,
      );
      tl.to(
        upImages,
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
        1.2,
      );
    });
  }, projectsContainer.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
