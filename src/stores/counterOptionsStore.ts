import { defineStore } from 'pinia';

interface ICounterState {
  counter: number;
  title: string;
}

// Options store
export const useCounterOptionsStore = defineStore('counterOptionsStore', {
  state: (): ICounterState => ({
    counter: 0,
    title: 'CounterState',
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});
