<script setup lang="ts"></script>

<template>
  <header>
    <RouterLink to="/" style="margin-right: 10px">Home</RouterLink>
    <RouterLink to="/about" style="margin-right: 10px">About</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </header>

  <RouterView />
</template>

<style scoped></style>
