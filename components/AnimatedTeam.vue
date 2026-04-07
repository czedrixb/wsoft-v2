<template>
  <div class="my-40" ref="teamContainer">
    <div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10">
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-4xl lg:text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent"
        >
          {{ $t("about.team.title") }}
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <p class="text-[#20252CE5] font-semibold text-[16px] mt-8 max-w-lg">
            {{ $t("about.team.description_1") }}
          </p>
          <p class="text-[#20252CE5] font-semibold text-[16px] mt-8 max-w-lg">
            {{ $t("about.team.description_2") }}
          </p>
        </div>
      </div>

      <div class="my-40 text-center">
        <p class="text-[#64748B] text-[24px]">
          {{ $t("about.team.meet_team") }}
        </p>
      </div>

      <div ref="teamScrollSection" class="team-scroll-section relative">
        <div
          ref="teamDisplayArea"
          class="team-display-area relative overflow-hidden"
          :style="{ height: displayAreaHeight }"
        >
          <div
            class="team-row team-row-first grid grid-cols-1 md:grid-cols-3 gap-8 absolute top-0 left-0 w-full"
          >
            <div
              v-for="member in members.slice(0, 3)"
              :key="member.nickname"
              class="flex bg-[#F8FAFC] gap-8"
            >
              <NuxtImg
                :src="member.image"
                width="144px"
                height="100%"
                class="object-cover"
                :alt="member.nickname"
              />
              <div class="py-2">
                <p
                  class="text-[#64748B] text-3xl lg:text-[48px] leading-[1.2] font-light capitalize"
                >
                  {{ member.nickname }}
                </p>
                <p class="text-[#64748B] text-[24px] leading-[1.3]">
                  {{ $t(`about.team.members.${member.nickname}.name`) }}
                </p>
                <p
                  class="text-[#20252CE5] text-[14px] font-semibold leading-[1.3] mt-4 capitalize"
                >
                  {{ $t(`about.team.positions.${member.position}`) }}
                </p>
              </div>
            </div>
          </div>

          <div
            v-for="(chunk, index) in memberChunks"
            :key="index"
            class="team-row-slide grid grid-cols-1 md:grid-cols-3 gap-8 absolute top-0 left-0 w-full"
            :data-index="index"
          >
            <div
              v-for="member in chunk"
              :key="member.nickname"
              class="flex bg-[#F8FAFC] gap-8"
            >
              <NuxtImg
                :src="member.image"
                width="144px"
                height="100%"
                class="object-cover"
                :alt="member.nickname"
              />
              <div class="py-2">
                <p
                  class="text-[#64748B] text-3xl lg:text-[48px] leading-[1.2] font-light capitalize"
                >
                  {{ member.nickname }}
                </p>
                <p class="text-[#64748B] text-[24px] leading-[1.3]">
                  {{ $t(`about.team.members.${member.nickname}.name`) }}
                </p>
                <p
                  class="text-[#20252CE5] text-[14px] font-semibold leading-[1.3] mt-4 capitalize"
                >
                  {{ $t(`about.team.positions.${member.position}`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamContainer = ref(null);
const teamScrollSection = ref(null);
const teamDisplayArea = ref(null);
const displayAreaHeight = ref("auto");
let ctx = null;

const members = ref([
  {
    image: "/images/revamp/about-us/our-team/matt.png",
    nickname: "matt",
    position: "ceo",
  },
  {
    image: "/images/revamp/about-us/our-team/ricky.png",
    nickname: "ricky",
    position: "project-manager",
  },
  {
    image: "/images/revamp/about-us/our-team/joseph.png",
    nickname: "joseph",
    position: "full-pm",
  },
  { image: "/images/about-us/hoon.png", nickname: "hoon", position: "full-sa" },
  {
    image: "/images/revamp/about-us/our-team/lin.png",
    nickname: "lin",
    position: "administrative-officer",
  },
  {
    image: "/images/revamp/about-us/our-team/songyi.png",
    nickname: "songyi",
    position: "designer",
  },
  {
    image: "/images/revamp/about-us/our-team/gale.png",
    nickname: "gale",
    position: "operation-manager",
  },
  {
    image: "/images/revamp/about-us/our-team/jaimie.png",
    nickname: "jaimie",
    position: "junior-project",
  },
  {
    image: "/images/revamp/about-us/our-team/salve.png",
    nickname: "salve",
    position: "corporate-secretary",
  },
  {
    image: "/images/revamp/about-us/our-team/lora.png",
    nickname: "lora",
    position: "communications-manager",
  },
  {
    image: "/images/revamp/about-us/our-team/ben.png",
    nickname: "ben",
    position: "full-tpm",
  },
  {
    image: "/images/revamp/about-us/our-team/czedrix.png",
    nickname: "czedrix",
    position: "full-stack",
  },
  {
    image: "/images/revamp/about-us/our-team/neil.png",
    nickname: "neil",
    position: "full-ai",
  },
  {
    image: "/images/revamp/about-us/our-team/jason.png",
    nickname: "jason",
    position: "full-stack",
  },
  {
    image: "/images/revamp/about-us/our-team/winona.png",
    nickname: "winona",
    position: "marketing-specialist",
  },
  {
    image: "/images/revamp/about-us/our-team/pola.png",
    nickname: "pola",
    position: "qa-specialist",
  },
  {
    image: "/images/revamp/about-us/our-team/zyra.png",
    nickname: "zyra",
    position: "marketing-specialist",
  },
  {
    image: "/images/revamp/about-us/our-team/virnel.png",
    nickname: "virnel",
    position: "designer",
  },
  {
    image: "/images/revamp/about-us/our-team/karlo.png",
    nickname: "karlo",
    position: "designer",
  },
]);

const memberChunks = computed(() => {
  const chunks = [];
  for (let i = 3; i < members.value.length; i += 3) {
    chunks.push(members.value.slice(i, i + 3));
  }
  return chunks;
});

const isMobile = () => window.innerWidth < 768;

function initAnimation() {
  ctx?.revert();

  ctx = gsap.context(() => {
    const firstRow = teamDisplayArea.value?.querySelector(".team-row-first");
    const slideRows = gsap.utils.toArray(".team-row-slide");
    const rowCount = slideRows.length;

    if (!firstRow || !slideRows.length) return;

    const mobile = isMobile();
    const allRows = [firstRow, ...slideRows];
    let maxHeight = 0;

    allRows.forEach((row) => {
      gsap.set(row, {
        position: "relative",
        visibility: "visible",
        y: 0,
        opacity: 1,
      });
      const h = row.offsetHeight;
      if (h > maxHeight) maxHeight = h;
    });

    gsap.set(allRows, { position: "absolute", top: 0, left: 0, width: "100%" });
    displayAreaHeight.value = `${maxHeight}px`;
    gsap.set(teamDisplayArea.value, { height: maxHeight });

    if (mobile) {
      allRows.forEach((row, i) => {
        gsap.set(row, { position: "relative", y: 0, opacity: 0 });
      });
      displayAreaHeight.value = "auto";
      gsap.set(teamDisplayArea.value, { height: "auto" });

      allRows.forEach((row, i) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(row, { opacity: 1, duration: 0.4, ease: "power1.out" });
          },
        });
      });
      return;
    }

    const offscreenDown = window.innerHeight;
    const offscreenUp = -maxHeight - 40;

    gsap.set(firstRow, { y: 0, opacity: 1 });
    gsap.set(slideRows, { y: offscreenDown, opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: teamScrollSection.value,
        start: "center center",
        end: `+=${rowCount * 120}%`,
        pin: true,
        scrub: 2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    slideRows.forEach((row, i) => {
      const offset = i * 1.6;
      tl.to(row, { y: 0, duration: 1.2, ease: "power2.out" }, offset);

      if (i < slideRows.length - 1) {
        tl.to(
          slideRows[i + 1],
          { y: maxHeight + 40, duration: 1.2, ease: "power2.out" },
          offset,
        );
      }

      const exiting = i === 0 ? firstRow : slideRows[i - 1];
      tl.to(
        exiting,
        { y: offscreenUp, opacity: 0, duration: 1, ease: "power2.in" },
        offset,
      );
    });
  }, teamContainer.value);
}

onMounted(async () => {
  await nextTick();
  initAnimation();

  window.addEventListener("resize", handleResize);
});

let resizeTimer = null;
function handleResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    initAnimation();
    ScrollTrigger.refresh();
  }, 300);
}

onUnmounted(() => {
  ctx?.revert();
  window.removeEventListener("resize", handleResize);
  clearTimeout(resizeTimer);
});
</script>
