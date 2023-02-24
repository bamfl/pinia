import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

// Setup store
export const useCounterSetupStore = defineStore('counterSetupStore', () => {
  const counter = ref(0);
  const title = ref('CounterState');

  const doubleCounter = computed(() => counter.value * 2);

  const increment = () => counter.value++;

  const decrement = () => counter.value--;

  return {
    counter,
    title,
    doubleCounter,
    increment,
    decrement,
  };
});
