<template>
  <div class="my-40" ref="teamContainer">
    <div class="mx-auto px-8 max-w-screen-2xl pb-0 md:py-16 mb-0 md:mb-10">
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-4xl lg:text-[60px] leading-tight font-bold bg-gradient-to-r from-[#FFD5EB] to-[#E1D176] bg-clip-text text-transparent"
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

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(member, index) in members"
          :key="member.nickname"
          class="team-member flex bg-[#F8FAFC] gap-8 md:flex-col md:items-center md:gap-6 md:p-4 md:rounded-[7px] lg:flex-row lg:items-stretch lg:gap-8 lg:p-0 lg:rounded-none"
          :data-index="index"
        >
          <NuxtImg
            :src="member.image"
            width="144px"
            height="100%"
            class="object-cover md:w-[144px] md:h-[166px] md:rounded-[7px] md:shrink-0 lg:h-full lg:rounded-none"
            :alt="member.nickname"
          />
          <div class="py-2 md:w-full">
            <p
              class="text-[#64748B] text-xl lg:text-[30px] leading-[1.2] font-light capitalize"
            >
              {{ $t(`about.team.members.${member.nickname}.nickname`) }}
            </p>
            <p class="text-[#64748B] text-md lg:text-[24px] leading-[1.3]">
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
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamContainer = ref(null);
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
    image: "/images/revamp/about-us/our-team/sing.png",
    nickname: "sing",
    position: "project-manager",
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
    image: "/images/revamp/about-us/our-team/karlo.png",
    nickname: "karlo",
    position: "designer",
  },
]);

function initAnimation() {
  ctx?.revert();

  ctx = gsap.context(() => {
    const memberCards = gsap.utils.toArray(".team-member");

    memberCards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          delay: (i % 3) * 0.15,
        },
      );
    });
  }, teamContainer.value);
}

onMounted(() => {
  initAnimation();
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
