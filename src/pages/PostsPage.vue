<template>
  <h2>Posts page</h2>

  <div style="margin-bottom: 10px">
    Total posts count: {{ totalPostsCount }}
  </div>

  <button @click="getPosts">Get posts</button>

  <div v-for="post in posts" :key="post.id" style="margin: 10px 0">
    {{ post.id }}: {{ post.title }} - isWatched: {{ post.isWatched }}

    <div>
      <button @click="deletePost(post.id)" style="margin-right: 10px">
        Delete
      </button>

      <button @click="togglePostIsWatched(post.id)">Toggle isWatched</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePostsStore } from '@/stores/postsStore';

const postsStore = usePostsStore();

const { getPosts, togglePostIsWatched, deletePost } = postsStore;
const { posts, totalPostsCount } = storeToRefs(postsStore);
</script>
