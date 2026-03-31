<template>
  <div class="bg-[#ebf0f7] min-h-screen">
    <div class="md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto">
      <Navbar />
    </div>

    <div class="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div class="text-center max-w-2xl">
        <!-- 404 Error -->
        <div v-if="error.statusCode === 404" class="mb-8">
          <h1
            class="text-6xl md:text-8xl font-bold font-poppins text-[#0b1552] mb-4"
          >
            404
          </h1>
          <h2
            class="text-3xl md:text-4xl font-semibold font-inter text-gray-800 mb-4"
          >
            {{ $t("not-found") }}
          </h2>
          <p class="text-lg text-gray-600 font-inter mb-8">
            {{ $t("not-found-text") }}
          </p>
        </div>

        <!-- Other Errors -->
        <div v-else class="mb-8">
          <h1 class="text-6xl md:text-8xl font-bold text-red-600 mb-4">
            {{ error.statusCode || "Error" }}
          </h1>
          <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Something went wrong
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            {{ error.message || "An unexpected error occurred" }}
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="handleGoHome"
            class="px-6 py-3 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] shadow-cyan-500/50 text-white font-medium rounded-lg hover:bg-[#2c5282] transition-colors"
          >
            {{ $t("go-home") }}
          </button>
          <button
            @click="handleGoBack"
            class="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
          >
            {{ $t("go-back") }}
          </button>
        </div>
      </div>
    </div>

    <!-- Footer (only if not products page) -->
    <div
      v-if="!isProductsPage"
      class="md:max-w-[90%] lg:max-w-[95%] xl:max-w-[95%] mx-auto"
    >
      <Footer />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const route = useRoute();

const isProductsPage = computed(() => {
  return route.path.startsWith("/optical-microscope");
});

const handleError = () => clearError({ redirect: "/" });

const handleGoHome = () => {
  clearError({ redirect: "/" });
};

const handleGoBack = () => {
  if (window.history.length > 1) {
    clearError();
    window.history.back();
  } else {
    clearError({ redirect: "/" });
  }
};
</script>
