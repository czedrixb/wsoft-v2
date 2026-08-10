<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 bg-black/50 z-[60] flex justify-center"
        style="padding-top: 96px"
        @click.self="close"
      >
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="modelValue"
            class="relative bg-[#f8fafc] border border-[rgba(240,224,254,0.4)] rounded-[28px] p-[40px] w-[calc(100%-32px)] max-w-[856px] h-fit"
            @click.stop
          >
            <!-- Close X -->
            <button
              type="button"
              @click="close"
              class="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-[#473720] hover:bg-[rgba(240,224,254,0.4)] rounded-[4px] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Search input row -->
            <div class="flex items-center gap-2 h-8 pl-1 pr-2 py-1 border border-[rgba(240,224,254,0.4)] rounded-[7px]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#473720] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="6" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-3.5-3.5" />
              </svg>
              <input
                ref="inputRef"
                v-model="query"
                type="text"
                :placeholder="$t('search.placeholder')"
                class="flex-1 bg-transparent outline-none text-[12px] font-opensans font-normal text-[#473720] placeholder-[#473720]/50"
                @keydown.enter.prevent="onEnter"
                @keydown.arrow-up.prevent="moveCursor(-1)"
                @keydown.arrow-down.prevent="moveCursor(1)"
              />
              <button
                v-if="query"
                type="button"
                @click="query = ''"
                class="text-[#473720] hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Separator -->
            <div class="border-t border-[rgba(240,224,254,0.4)] mt-6"></div>

            <!-- Suggestions section -->
            <div class="mt-6">
              <p class="text-[14px] font-opensans font-semibold text-[#64748B] mb-2">
                {{ $t('search.suggestions') }}
              </p>

              <ClientOnly>
                <div class="border border-[rgba(240,224,254,0.4)] rounded-[7px] p-4 flex flex-col gap-2">
                  <!-- Empty state (WOS-264 #13) -->
                  <template v-if="!query && recentSearches.length === 0">
                    <div class="flex flex-col items-center gap-3 py-4">
                      <!-- Animated sparkle-search icon (matches Figma "animated icn - search") -->
                      <div class="flex items-center gap-4">
                        <svg class="search-sparkle-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="11" stroke="#9CA3AF" stroke-width="2.5" stroke-linecap="round"/>
                          <line x1="28.5" y1="28.5" x2="38" y2="38" stroke="#9CA3AF" stroke-width="2.5" stroke-linecap="round"/>
                          <!-- Sparkle -->
                          <path d="M20 10 L21 14 L25 15 L21 16 L20 20 L19 16 L15 15 L19 14 Z" fill="#9CA3AF" class="sparkle-main"/>
                          <path d="M27 8 L27.8 10.2 L30 11 L27.8 11.8 L27 14 L26.2 11.8 L24 11 L26.2 10.2 Z" fill="#9CA3AF" class="sparkle-small"/>
                        </svg>
                        <svg class="search-sparkle-icon search-sparkle-icon--delay" width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="11" stroke="#D1D5DB" stroke-width="2.5" stroke-linecap="round"/>
                          <line x1="28.5" y1="28.5" x2="38" y2="38" stroke="#D1D5DB" stroke-width="2.5" stroke-linecap="round"/>
                          <path d="M20 10 L21 14 L25 15 L21 16 L20 20 L19 16 L15 15 L19 14 Z" fill="#D1D5DB" class="sparkle-main"/>
                          <path d="M27 8 L27.8 10.2 L30 11 L27.8 11.8 L27 14 L26.2 11.8 L24 11 L26.2 10.2 Z" fill="#D1D5DB" class="sparkle-small"/>
                        </svg>
                      </div>
                      <p class="text-[12px] font-opensans text-[#473720]/50 px-2">
                        {{ $t('search.recent') }}
                      </p>
                    </div>
                  </template>

                  <!-- Recent searches (no query) -->
                  <template v-else-if="!query">
                    <div
                      v-for="(term, i) in recentSearches"
                      :key="`recent-${term}`"
                      class="flex items-center justify-between px-2 py-1 rounded-[4px] cursor-pointer transition-colors"
                      :class="cursor === i ? 'bg-[rgba(240,224,254,0.4)]' : 'hover:bg-[rgba(240,224,254,0.4)]'"
                      @click="selectRecent(term)"
                      @mouseenter="cursor = i"
                    >
                      <span class="text-[12px] font-opensans font-normal text-[#473720] truncate flex-1">{{ term }}</span>
                      <button
                        type="button"
                        @click.stop="removeRecent(term)"
                        class="ml-2 text-[#473720]/50 hover:text-[#473720] transition-colors shrink-0"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </template>

                  <!-- Live results -->
                  <template v-else-if="results.length > 0">
                    <template v-for="(group, groupKey) in groupedResults" :key="groupKey">
                      <p v-if="group.length > 0" class="text-[11px] font-opensans font-semibold text-[#64748B]/70 px-2 pt-1 uppercase tracking-wide">
                        {{ $t(`search.groups.${groupKey}`) }}
                      </p>
                      <div
                        v-for="(item, idx) in group"
                        :key="item.id"
                        class="flex items-center px-2 py-1 rounded-[4px] cursor-pointer transition-colors"
                        :class="cursor === flatIndex(groupKey, idx) ? 'bg-[rgba(240,224,254,0.4)]' : 'hover:bg-[rgba(240,224,254,0.4)]'"
                        @click="navigateTo(item)"
                        @mouseenter="cursor = flatIndex(groupKey, idx)"
                      >
                        <span class="text-[12px] font-opensans font-normal text-[#473720] truncate flex-1">{{ item.title }}</span>
                      </div>
                    </template>
                  </template>

                  <!-- No results (WOS-264 #13) -->
                  <template v-else-if="query && !isLoading">
                    <div class="flex flex-col items-center gap-3 py-4">
                      <div class="flex items-center gap-4">
                        <svg class="search-sparkle-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="11" stroke="#9CA3AF" stroke-width="2.5" stroke-linecap="round"/>
                          <line x1="28.5" y1="28.5" x2="38" y2="38" stroke="#9CA3AF" stroke-width="2.5" stroke-linecap="round"/>
                          <path d="M20 10 L21 14 L25 15 L21 16 L20 20 L19 16 L15 15 L19 14 Z" fill="#9CA3AF" class="sparkle-main"/>
                          <path d="M27 8 L27.8 10.2 L30 11 L27.8 11.8 L27 14 L26.2 11.8 L24 11 L26.2 10.2 Z" fill="#9CA3AF" class="sparkle-small"/>
                        </svg>
                        <svg class="search-sparkle-icon search-sparkle-icon--delay" width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="11" stroke="#D1D5DB" stroke-width="2.5" stroke-linecap="round"/>
                          <line x1="28.5" y1="28.5" x2="38" y2="38" stroke="#D1D5DB" stroke-width="2.5" stroke-linecap="round"/>
                          <path d="M20 10 L21 14 L25 15 L21 16 L20 20 L19 16 L15 15 L19 14 Z" fill="#D1D5DB" class="sparkle-main"/>
                          <path d="M27 8 L27.8 10.2 L30 11 L27.8 11.8 L27 14 L26.2 11.8 L24 11 L26.2 10.2 Z" fill="#D1D5DB" class="sparkle-small"/>
                        </svg>
                      </div>
                      <p class="text-[12px] font-opensans text-[#473720]/50 px-2">
                        {{ $t('search.noResults') }}
                      </p>
                    </div>
                  </template>

                  <!-- Loading -->
                  <template v-else-if="isLoading">
                    <p class="text-[12px] font-opensans text-[#473720]/50 px-2 py-1 animate-pulse">
                      ...
                    </p>
                  </template>
                </div>
              </ClientOnly>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, computed, nextTick, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useSearchIndex } from "@/composables/useSearchIndex";

const props = defineProps({
  modelValue: { type: Boolean, default: false },
});
const emit = defineEmits(["update:modelValue"]);
const router = useRouter();
const { t } = useI18n();
const { search } = useSearchIndex();

const inputRef = ref(null);
const query = ref("");
const results = ref([]);
const isLoading = ref(false);
const cursor = ref(-1);
const recentSearches = ref([]);

const RECENT_KEY = "wlabs-recent-searches";

const loadRecent = () => {
  try {
    recentSearches.value = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
  } catch {
    recentSearches.value = [];
  }
};

const saveRecent = (term) => {
  const trimmed = term.trim();
  if (!trimmed) return;
  const list = [trimmed, ...recentSearches.value.filter((s) => s !== trimmed)].slice(0, 6);
  recentSearches.value = list;
  localStorage.setItem(RECENT_KEY, JSON.stringify(list));
};

const removeRecent = (term) => {
  recentSearches.value = recentSearches.value.filter((s) => s !== term);
  localStorage.setItem(RECENT_KEY, JSON.stringify(recentSearches.value));
};

const GROUP_ORDER = ["page", "product", "news"];
const GROUP_KEY_MAP = { page: "pages", product: "products", news: "news" };

const groupedResults = computed(() => {
  const groups = { pages: [], products: [], news: [] };
  for (const item of results.value) {
    const gk = GROUP_KEY_MAP[item.type];
    if (gk) groups[gk].push(item);
  }
  return groups;
});

const flatIndex = (groupKey, idx) => {
  let offset = 0;
  for (const gk of ["pages", "products", "news"]) {
    if (gk === groupKey) return offset + idx;
    offset += groupedResults.value[gk].length;
  }
  return offset + idx;
};

const flatResults = computed(() => [
  ...groupedResults.value.pages,
  ...groupedResults.value.products,
  ...groupedResults.value.news,
]);

let searchTimer = null;

watch(query, (val) => {
  cursor.value = -1;
  if (!val.trim()) {
    results.value = [];
    isLoading.value = false;
    return;
  }
  isLoading.value = true;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(async () => {
    results.value = await search(val);
    isLoading.value = false;
  }, 150);
});

watch(
  () => props.modelValue,
  async (open) => {
    if (open) {
      loadRecent();
      document.body.style.overflow = "hidden";
      await nextTick();
      inputRef.value?.focus();
    } else {
      document.body.style.overflow = "";
      query.value = "";
      results.value = [];
      cursor.value = -1;
    }
  }
);

const close = () => emit("update:modelValue", false);

const onEsc = (e) => {
  if (e.key === "Escape" && props.modelValue) close();
};

onMounted(() => window.addEventListener("keydown", onEsc));
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onEsc);
  document.body.style.overflow = "";
});

const moveCursor = (dir) => {
  const max = query.value
    ? flatResults.value.length - 1
    : recentSearches.value.length - 1;
  if (max < 0) return;
  cursor.value = Math.max(-1, Math.min(max, cursor.value + dir));
};

const navigateTo = (item) => {
  saveRecent(query.value);
  close();
  router.push(item.route);
};

const selectRecent = (term) => {
  query.value = term;
  nextTick(() => inputRef.value?.focus());
};

const onEnter = () => {
  if (query.value && cursor.value >= 0 && flatResults.value[cursor.value]) {
    navigateTo(flatResults.value[cursor.value]);
  } else if (!query.value && cursor.value >= 0 && recentSearches.value[cursor.value]) {
    selectRecent(recentSearches.value[cursor.value]);
  }
};
</script>

<style scoped>
/* Animated sparkle search icon (WOS-264 #13) */
@keyframes sparkle-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.55; transform: scale(0.88); }
}

@keyframes sparkle-rotate {
  0%   { transform: rotate(0deg) scale(1); }
  50%  { transform: rotate(20deg) scale(1.15); }
  100% { transform: rotate(0deg) scale(1); }
}

.search-sparkle-icon {
  animation: sparkle-pulse 2s ease-in-out infinite;
}

.search-sparkle-icon--delay {
  animation-delay: 0.6s;
}

.sparkle-main {
  transform-origin: center;
  animation: sparkle-rotate 2s ease-in-out infinite;
}

.sparkle-small {
  transform-origin: center;
  animation: sparkle-rotate 2s ease-in-out infinite;
  animation-delay: 0.3s;
}
</style>
