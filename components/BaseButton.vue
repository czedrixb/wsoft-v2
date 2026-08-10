<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'group relative inline-flex items-center justify-center gap-[10px] rounded-[999px] pl-[56px] pr-[40px] py-[8px] border border-solid transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-clip shadow-[0px_16px_32px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)] cursor-pointer shrink-0',
      isPrimary
        ? 'border-[#E96F23] hover:bg-[#E96F23]'
        : 'border-[rgba(32,37,44,0.9)] hover:bg-[rgba(32,37,44,0.05)] min-h-[36px]',
    ]"
  >
    <span
      :class="[
        'relative transition-all',
        isPrimary
          ? 'font-satoshi font-bold text-[20px] leading-[28px] bg-gradient-to-r from-[#E96F23] to-[#D0B802] bg-clip-text text-transparent group-hover:text-white'
          : 'font-opensans font-semibold text-[14px] text-[rgba(32,37,44,0.9)]',
      ]"
    >
      <slot />
    </span>

    <!-- Primary trailing icon: send/mail -->
    <NuxtImg
      v-if="isPrimary"
      src="/images/revamp/mail-submit-icon.svg"
      width="24"
      height="24"
      alt=""
      class="relative shrink-0 transition-all"
      style="filter: invert(49%) sepia(72%) saturate(600%) hue-rotate(353deg) brightness(100%);"
    />

    <!-- Secondary trailing icon: chat bubble (Figma node 96:45886) -->
    <svg
      v-else
      width="16"
      height="16"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="shrink-0"
    >
      <path d="M12.5 6.16669C12.5023 7.0466 12.2967 7.91461 11.9 8.70002C11.4296 9.64118 10.7065 10.4328 9.81165 10.9862C8.91678 11.5396 7.88551 11.8329 6.83335 11.8334C5.95344 11.8356 5.08542 11.6301 4.30001 11.2334L0.500014 12.5L1.76668 8.70002C1.36997 7.91461 1.16439 7.0466 1.16668 6.16669C1.16709 5.11452 1.46042 4.0832 2.01383 3.18839C2.56723 2.29352 3.35885 1.5704 4.30001 1.10002C5.08542 0.703306 5.95344 0.497725 6.83335 0.500019H7.16668C8.55625 0.57668 9.86871 1.16319 10.8528 2.14726C11.8368 3.13132 12.4234 4.44379 12.5 5.83335V6.16669Z" stroke="#20252C" stroke-opacity="0.9" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (v) => ["primary", "secondary"].includes(v),
  },
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const isPrimary = computed(() => props.variant === "primary");
</script>
