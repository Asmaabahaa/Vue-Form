<script setup lang="ts">
import { usePosts } from "@/stores/posts";
import { storeToRefs } from "pinia";
import { watchEffect } from "vue";

const postsStore = usePosts();
const { fetchPosts } = postsStore;
const { posts } = storeToRefs(postsStore);

watchEffect(() => {
  fetchPosts();
});
</script>
<template>

  <div>Posts List</div>
  <div v-for="post in posts" :key="post.id">
    <div class="card ">
      <div class="row no-gutters">
        <div class="col-md-12">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.description }}</p>
            <p class="card-text"><small class="text-muted">{{ post.location }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
