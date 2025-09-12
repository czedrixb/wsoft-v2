export const useInterval = (callback, delay) => {
  const intervalRef = ref(null);

  onMounted(() => {
    intervalRef.value = setInterval(callback, delay);
  });

  onUnmounted(() => {
    if (intervalRef.value) {
      clearInterval(intervalRef.value);
    }
  });

  const stop = () => {
    if (intervalRef.value) {
      clearInterval(intervalRef.value);
      intervalRef.value = null;
    }
  };

  const start = () => {
    if (!intervalRef.value) {
      intervalRef.value = setInterval(callback, delay);
    }
  };

  return {
    stop,
    start,
  };
};
