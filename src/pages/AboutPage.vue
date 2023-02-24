<template>
  <h2>This is an About page</h2>

  <div>Counter: {{ counter }}</div>

  <button @click="decrement">Decrement</button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
// import { useCounterOptionsStore } from '@/stores/counterOptionsStore'; // Options store
import { useCounterSetupStore } from '@/stores/counterSetupStore'; // Setup store

// Использование Options store и Setup store одинаково
const counterStore = useCounterSetupStore();

const { decrement } = counterStore; // actions в Options / functions в Setup
const { counter } = storeToRefs(counterStore); // state и getters в Options / ref и computed в Setup
</script>
