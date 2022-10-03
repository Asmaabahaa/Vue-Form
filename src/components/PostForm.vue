<script setup lang="ts">
import { usePosts, type Post } from "@/stores/posts";
import { ref, type Ref } from "vue";

const defaultPost: Post = { title: "", description: "", location: "" };

const post: Ref<Post> = ref<Post>({ ...defaultPost });
const form = ref();
const { addPost } = usePosts();
async function onSubmit() {
  // TODO add async await
  await addPost({ ...post.value });
  post.value = defaultPost;
}
</script>

<template>
  <form ref="form" @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="title">Title</label>
      <input v-model="post.title" type="text" class="form-control" placeholder="Enter Post Title" />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea v-model="post.description" class="form-control" required type="textarea" placeholder="Description "
        rows="3"></textarea>
    </div>
    <div class="form-group">
      <label for="location">Location</label>
      <input v-model="post.location" class="form-control" type="text" placeholder="Location" />
    </div>
    <!-- TODO should be autocomplete with google maps API -->
      <button type="submit" class="add-post-btn btn btn-primary ">Add Post</button>

  </form>
</template>

<style scoped>
  .add-post-btn{
    margin-top: 20px;
  }
</style>
