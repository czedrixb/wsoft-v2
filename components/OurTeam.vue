<template>
  <div class="mx-auto lg:max-w-screen-lg">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div
        v-for="(member, key) in members"
        :key="key"
        class="flex justify-center"
      >
        <div>
          <img
            :src="member.image"
            class="max-w-full mb-5"
            :alt="member.nickname"
            loading="lazy"
          />

          <div class="flex flex-col gap-y-1 text-center">
            <div class="text-[16px] md:text-[20px] font-[600] text-black">
              {{ $t(member.nickname) }}
            </div>
            <div class="text-[16px] md:text-[18px] font-[400] text-black">
              {{ $t(member.name) }}
            </div>
            <div class="text-[16px] font-[300] text-black">
              {{ $t(member.position) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const members = ref([
  {
    image: "/images/about-us/our-team/matt.png",
    nickname: "matt",
    name: "matt-name",
    position: "ceo",
  },
  {
    image: "/images/about-us/our-team/ricky.png",
    nickname: "ricky",
    name: "ricky-name",
    position: "project-manager",
  },
  {
    image: "/images/about-us/our-team/joseph.png",
    nickname: "joseph",
    name: "joseph-name",
    position: "full-pm",
  },
  {
    image: "/images/about-us/hoon.png",
    nickname: "hoon",
    name: "hoon-name",
    position: "full-sa",
  },
  {
    image: "/images/about-us/our-team/lin.png",
    nickname: "lin",
    name: "lin-name",
    position: "administrative-officer",
  },
  {
    image: "/images/about-us/our-team/songyi.png",
    nickname: "songyi",
    name: "songyi-name",
    position: "designer",
  },
  {
    image: "/images/about-us/our-team/gale.png",
    nickname: "gale",
    name: "gale-name",
    position: "operation-manager",
  },
  {
    image: "/images/about-us/our-team/jaimie.png",
    nickname: "jaimie",
    name: "jaimie-name",
    position: "junior-project",
  },
  {
    image: "/images/about-us/our-team/salve.png",
    nickname: "salve",
    name: "salve-name",
    position: "corporate-secretary",
  },
  {
    image: "/images/about-us/our-team/lora.png",
    nickname: "lora",
    name: "lora-name",
    position: "communications-manager",
  },
  {
    image: "/images/about-us/our-team/ben.png",
    nickname: "ben",
    name: "ben-name",
    position: "full-tpm",
  },
  {
    image: "/images/about-us/our-team/czedrix.png",
    nickname: "czedrix",
    name: "czedrix-name",
    position: "full-stack",
  },
  // {
  //   image: "/images/about-us/rj.png",
  //   nickname: "rj",
  //   name: "rj-name",
  //   position: "full-stack",
  // },
  {
    image: "/images/about-us/our-team/mon.png",
    nickname: "mon",
    name: "mon-name",
    position: "designer",
  },
  // {
  //   image: "/images/about-us/our-team/orland.png",
  //   nickname: "orland",
  //   name: "orland-name",
  //   position: "designer",
  // },
  {
    image: "/images/about-us/our-team/neil.png",
    nickname: "neil",
    name: "neil-name",
    position: "full-ai",
  },
  {
    image: "/images/about-us/our-team/jason.png",
    nickname: "jason",
    name: "jason-name",
    position: "full-stack",
  },
  {
    image: "/images/about-us/our-team/winona.png",
    nickname: "winona",
    name: "winona-name",
    position: "marketing-specialist",
  },
  {
    image: "/images/about-us/our-team/pola.png",
    nickname: "pola",
    name: "pola-name",
    position: "qa-specialist",
  },
  {
    image: "/images/about-us/our-team/zyra.png",
    nickname: "zyra",
    name: "zyra-name",
    position: "marketing-specialist",
  },
  {
    image: "/images/about-us/our-team/virnel.png",
    nickname: "virnel",
    name: "virnel-name",
    position: "designer",
  },
  {
    image: "/images/about-us/our-team/karlo.png",
    nickname: "karlo",
    name: "karlo-name",
    position: "designer",
  },
]);
</script>
