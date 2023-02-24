import { computed, ref, watch, type Ref } from 'vue';
import { defineStore } from 'pinia';
import postsService from '@/api/postsService';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostWithIsWatched extends IPost {
  isWatched: boolean;
}

export const usePostsStore = defineStore('postsStore', () => {
  const posts: Ref<IPostWithIsWatched[]> = ref([]);

  const totalPostsCount = computed(() => posts.value.length);

  const getPosts = async () => {
    const { data } = await postsService.getPosts();

    posts.value = data.map((post) => ({ ...post, isWatched: false }));
  };

  const togglePostIsWatched = (id: number) => {
    const post = posts.value.find((post) => post.id === id);

    if (post) {
      post.isWatched = !post.isWatched;
    }
  };

  const deletePost = (id: number) => {
    posts.value = posts.value.filter((post) => post.id !== id);
  };

  const getPostsFromLocalStorage = () => {
    const postsJSON = localStorage.getItem('posts');

    if (typeof postsJSON === 'string') {
      const postsFromLocalStorage = JSON.parse(postsJSON);

      if (Array.isArray(postsFromLocalStorage) && postsFromLocalStorage[0].id) {
        posts.value = postsFromLocalStorage as IPostWithIsWatched[];
      }
    }
  };

  watch(
    posts,
    (newVal) => {
      localStorage.setItem('posts', JSON.stringify(newVal));
    },
    { deep: true }
  );

  getPostsFromLocalStorage();

  return {
    posts,
    totalPostsCount,
    getPosts,
    togglePostIsWatched,
    deletePost,
  };
});
