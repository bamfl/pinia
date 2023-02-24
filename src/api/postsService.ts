import axios from 'axios';
import type { IPost } from '@/stores/postsStore';

class PostsService {
  async getPosts() {
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

    return await axios.get<IPost[]>(postsUrl);
  }
}

export default new PostsService();
