<template>
  <div>
    <div
      class="px-8 md:px-0 md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto"
    >
      <div class="md:text-center max-w-6xl mx-auto">
        <h2
          class="text-4xl lg:text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent"
        >
          <span>{{ displayedTitle }}</span>
          <span
            class="inline-block w-[3px] h-[56px] ml-1 align-middle bg-gradient-to-b from-[#2376E9] to-[#02C7D0] rounded-sm"
            :class="showCursor ? 'opacity-100' : 'opacity-0'"
          />
        </h2>

        <p class="text-lg lg:text-[24px] text-[#20252CE5] mt-5">
          {{ $t("home.banner.subtitle") }}
        </p>
      </div>
    </div>

    <div class="mt-40">
      <Carousel />
    </div>

    <div class="mt-[6rem] mx-auto max-w-lg text-center px-5">
      <p class="text-black text-[16px] font-semibold text-justify">
        {{ $t("home.banner.description") }}
      </p>

      <div class="mt-8 flex justify-center">
        <router-link to="/about-us">
          <button
            class="group btn w-auto py-2 flex gap-3 items-center relative overflow-hidden rounded-full px-8"
          >
            <div
              class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#2376E9] to-[#02C7D0]"
            >
              <div
                class="w-full h-full rounded-full bg-white group-hover:bg-transparent transition-all"
              ></div>
            </div>
            <span
              class="relative z-10 font-medium bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent group-hover:text-white group-hover:[background:none] group-hover:[-webkit-text-fill-color:white] transition-all"
            >
              {{ $t("home.banner.button") }}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="relative z-10 transition-all"
            >
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#2376E9" />
                  <stop offset="100%" stop-color="#02C7D0" />
                </linearGradient>
              </defs>
              <path
                d="M5 12h14"
                stroke="url(#grad)"
                class="group-hover:stroke-white transition-all"
              />
              <path
                d="m12 5 7 7-7 7"
                stroke="url(#grad)"
                class="group-hover:stroke-white transition-all"
              />
            </svg>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const titles = computed(() => [
  t("home.banner.title1"),
  t("home.banner.title2"),
  t("home.banner.title3"),
  t("home.banner.title4"),
  t("home.banner.title5"),
  t("home.banner.title6"),
  t("home.banner.title7"),
  t("home.banner.title8"),
]);

const displayedTitle = ref("");
const showCursor = ref(true);

let typingTimer = null;
let cursorTimer = null;
let currentIndex = 0;

const TYPING_SPEED = 50;
const ERASE_SPEED = 30;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_ERASE = 400;

const stopAll = () => {
  clearTimeout(typingTimer);
  clearInterval(cursorTimer);
};

const startCursorBlink = () => {
  clearInterval(cursorTimer);
  showCursor.value = true;
  cursorTimer = setInterval(() => {
    showCursor.value = !showCursor.value;
  }, 500);
};

const eraseTitle = (callback) => {
  const erase = () => {
    if (displayedTitle.value.length > 0) {
      displayedTitle.value = displayedTitle.value.slice(0, -1);
      typingTimer = setTimeout(erase, ERASE_SPEED);
    } else {
      typingTimer = setTimeout(callback, PAUSE_AFTER_ERASE);
    }
  };
  erase();
};

const typeTitle = (text, callback) => {
  let i = 0;
  const type = () => {
    if (i < text.length) {
      displayedTitle.value += text[i];
      i++;
      typingTimer = setTimeout(type, TYPING_SPEED);
    } else {
      typingTimer = setTimeout(() => {
        eraseTitle(callback);
      }, PAUSE_AFTER_TYPE);
    }
  };
  type();
};

const cycleNext = () => {
  const text = titles.value[currentIndex];
  currentIndex = (currentIndex + 1) % titles.value.length;
  typeTitle(text, cycleNext);
};

const startCycle = () => {
  stopAll();
  displayedTitle.value = "";
  currentIndex = 0;
  startCursorBlink();
  cycleNext();
};

watch(titles, () => {
  startCycle();
});

onMounted(() => {
  startCycle();
});

onUnmounted(() => {
  stopAll();
});
</script>

<style scoped>
button:hover {
  background-image:
    linear-gradient(to right, #2376e9, #2376e9),
    linear-gradient(to right, #2376e9, #2376e9) !important;
}
</style>
