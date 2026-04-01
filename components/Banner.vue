<template>
  <div>
    <div
      class="px-8 md:px-0 md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto"
    >
      <div class="md:text-center max-w-6xl mx-auto">
        <h2
          class="text-[60px] leading-tight font-bold bg-gradient-to-r from-[#2376E9] to-[#02C7D0] bg-clip-text text-transparent"
        >
          <span>{{ displayedTitle }}</span
          ><span
            class="inline-block w-[3px] h-[56px] ml-1 align-middle bg-gradient-to-b from-[#2376E9] to-[#02C7D0] rounded-sm"
            :class="showCursor ? 'opacity-100' : 'opacity-0'"
          />
        </h2>

        <p class="text-[24px] text-[#20252CE5] mt-5">
          {{ $t("home.banner.subtitle") }}
        </p>
      </div>
    </div>

    <div class="mt-40">
      <Carousel />
    </div>

    <div class="mt-[6rem] mx-auto max-w-lg text-center px-5">
      <p class="text-black text-[14px] font-semibold text-justify">
        {{ $t("home.banner.description") }}
      </p>

      <div class="mt-8 flex justify-center">
        <button
          class="btn w-auto border rounded-full px-8 py-2 flex gap-3 items-center relative overflow-hidden text-[#2376E9] hover:text-white border-transparent"
          style="
            background-clip: padding-box, border-box;
            background-origin: padding-box, border-box;
            border: double 1px transparent;
            background-image:
              linear-gradient(white, white),
              linear-gradient(to right, #2376e9, #2376e9);
          "
        >
          <span class="relative z-10 bg-transparent">{{
            $t("home.banner.button")
          }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="relative z-10"
          >
            v
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const fullTitle = computed(() => t("home.banner.title"));

const displayedTitle = ref("");
const showCursor = ref(true);
const isDone = ref(false);

let typingTimer = null;
let cursorTimer = null;

const startTyping = () => {
  clearInterval(typingTimer);
  clearInterval(cursorTimer);

  displayedTitle.value = "";
  isDone.value = false;
  showCursor.value = true;
  let index = 0;
  const text = fullTitle.value;

  typingTimer = setInterval(() => {
    if (index < text.length) {
      displayedTitle.value += text[index];
      index++;
    } else {
      clearInterval(typingTimer);
      isDone.value = true;
      setTimeout(() => {
        clearInterval(cursorTimer);
        showCursor.value = false;
      }, 2000);
    }
  }, 50);

  cursorTimer = setInterval(() => {
    showCursor.value = !showCursor.value;
  }, 500);
};

watch(fullTitle, () => {
  startTyping();
});

onMounted(() => {
  startTyping();
});

onUnmounted(() => {
  clearInterval(typingTimer);
  clearInterval(cursorTimer);
});
</script>

<style scoped>
button:hover {
  background-image:
    linear-gradient(to right, #2376e9, #2376e9),
    linear-gradient(to right, #2376e9, #2376e9) !important;
}
</style>
