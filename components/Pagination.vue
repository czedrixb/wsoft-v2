<template>
  <div class="flex items-center justify-end gap-2 px-10 py-4 self-stretch">
    <!-- Prev -->
    <button
      :disabled="currentPage === 1"
      class="flex h-9 items-center gap-2.5 px-6 py-2 border border-[#E2E8F0] rounded-[22px_7px_7px_22px] shadow-sm disabled:opacity-45 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors bg-white"
      @click="changePage(currentPage - 1)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M11.332 12L7.33203 8L11.332 4"
          :stroke="currentPage === 1 ? '#E2E8F0' : '#20252CE6'"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.66797 4V12"
          :stroke="currentPage === 1 ? '#E2E8F0' : '#20252CE6'"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- Page numbers -->
    <template v-for="page in visiblePages" :key="page">
      <span
        v-if="page === '…'"
        class="flex h-9 items-center px-1.5 text-sm font-medium text-[#20252C99]"
      >
        …
      </span>
      <button
        v-else
        :class="[
          'flex h-9 min-w-[36px] items-center justify-center gap-2.5 px-4 py-2 rounded-[7px] border shadow-sm text-sm font-medium transition-colors',
          page === currentPage
            ? 'bg-[#20252CE6] text-white border-[#20252CE6]'
            : 'bg-[#E2E8F0] text-[#20252CE6] border-[#20252CE6] hover:bg-[#cbd5e1]',
        ]"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
    </template>

    <!-- Next -->
    <button
      :disabled="currentPage === totalPages"
      class="flex h-9 items-center gap-2.5 px-6 py-2 border border-[#E2E8F0] rounded-[7px_22px_22px_7px] shadow-sm disabled:opacity-45 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors bg-white"
      @click="changePage(currentPage + 1)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M4.66797 12L8.66797 8L4.66797 4"
          :stroke="currentPage === totalPages ? '#E2E8F0' : '#20252CE6'"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.332 4V12"
          :stroke="currentPage === totalPages ? '#E2E8F0' : 'black'"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  currentPage: { type: Number, default: 1 },
  totalPages: { type: Number, required: true },
});

const emit = defineEmits(["update:currentPage"]);

const changePage = (page) => {
  if (page < 1 || page > props.totalPages) return;
  emit("update:currentPage", page);
};

const visiblePages = computed(() => {
  const { currentPage: cur, totalPages: total } = props;
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (cur <= 4) return [1, 2, 3, 4, 5, "…", total];
  if (cur >= total - 3)
    return [1, "…", total - 4, total - 3, total - 2, total - 1, total];
  return [1, "…", cur - 1, cur, cur + 1, "…", total];
});
</script>
