<template>
  <div class="sidebar">
    <h2>Posts</h2>
    <ul>
      <Suspense v-for="post in paginatedPosts" :key="post.id">
        <template #default>
          <li>
            <router-link :to="{ name: 'PostDetails', params: { id: post.id } }">
              {{ post.title }}
            </router-link>
            <p>{{ truncate(post.body) }}</p>
          </li>
        </template>
        <template #fallback>
          <li class="loading">Loading post...</li>
        </template>
      </Suspense>
    </ul>
    <div class="pagination">
      <button
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        Previous
      </button>
      <button
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

interface Post {
  id: number;
  title: string;
  body: string;
}

const posts = ref<Post[]>([]);
const currentPage = ref(1);
const postsPerPage = 10;

const paginatedPosts = computed(() =>
  posts.value.slice(
    (currentPage.value - 1) * postsPerPage,
    currentPage.value * postsPerPage
  )
);

const totalPages = computed(() => Math.ceil(posts.value.length / postsPerPage));

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts.value = await response.json();
};

const truncate = (text: string, maxLength = 50) =>
  text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

const changePage = (page: number) => {
  currentPage.value = page;
};

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
.sidebar {
  padding: 1rem;
  border-right: 1px solid #ddd;
  max-width: 300px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}

.router-link {
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
}

.router-link:hover {
  text-decoration: underline;
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
