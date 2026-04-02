import { ref } from 'vue';
import { s as setInterval } from './interval-DGKf6Zoj.mjs';

const useInterval = (callback, delay) => {
  const intervalRef = ref(null);
  const stop = () => {
    if (intervalRef.value) {
      clearInterval(intervalRef.value);
      intervalRef.value = null;
    }
  };
  const start = () => {
    if (!intervalRef.value) {
      intervalRef.value = setInterval();
    }
  };
  return {
    stop,
    start
  };
};

export { useInterval as u };
