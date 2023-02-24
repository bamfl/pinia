<template>
  <h2>This is an Home page</h2>

  <div>{{ title }}</div>
  <div>Counter: {{ counter }}</div>
  <div>Double counter: {{ doubleCounter }}</div>

  <button @click="increment">Increment</button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
// import { useCounterOptionsStore } from '@/stores/counterOptionsStore'; // Options store
import { useCounterSetupStore } from '@/stores/counterSetupStore'; // Setup store

// Использование Options store и Setup store одинаково
const counterStore = useCounterSetupStore();

const { increment } = counterStore; // actions в Options / functions в Setup
const { counter, doubleCounter, title } = storeToRefs(counterStore); // state и getters в Options / ref и computed в Setup
</script>
