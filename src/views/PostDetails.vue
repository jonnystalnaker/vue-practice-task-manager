<template>
  <div>
    <h1>{{ post?.title }}</h1>
    <p>{{ post?.body }}</p>
    <h2>Comments</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <p>
          <strong>{{ comment.name }}</strong> ({{ comment.email }})
        </p>
        <p>{{ comment.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const route = useRoute();
const post = ref<Post | null>(null);
const comments = ref<Comment[]>([]);

const fetchPostDetails = async (id: number) => {
  const [postResponse, commentsResponse] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
  ]);
  post.value = await postResponse.json();
  comments.value = await commentsResponse.json();
};

onMounted(() => {
  const postId = Number(route.params.id);
  fetchPostDetails(postId);
});
</script>
