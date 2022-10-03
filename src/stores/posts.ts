import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

export interface Post {
  id: string;
  title: string;
  description: string;
  location: string;
}

const URL =
  "/api/post/listing-posts/7383c3144975097502747c29f87e584301a8a4579d5bd9b0093b60f9c9714a28?page=1";

const posts: Ref<Post[]> = ref<Post[]>([]);

export const usePosts = defineStore("posts", () => {
  async function fetchPosts() {
    // TODO call API to fetch Posts;
    try {
      const res = await fetch(URL, {
        headers: {
          Accept: "application/json",
        },
      });

      const data = await res.json();
      console.log(data.posts[0]);
      const postsData = data.posts.map(
        ({ post_id, post_name, post_body, post_location }): Post =>
          ({
            id: post_id,
            title: post_name,
            description: post_body,
            location: post_location,
          } as Post)
      );
      console.log(postsData);
      posts.value = postsData;
      console.log(posts.value);
    } catch (error) {
      console.log(error);
    }
  }

  async function addPost(postData: Post) {
    // TODO Should call API to add Post
    posts.value = [postData, ...posts.value];
  }

  return { posts, fetchPosts, addPost };
});
