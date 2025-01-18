<template>
  <div class="container">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link>
    </nav>
    <transition name="fade-blur" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup lang="ts">
// No additional logic is required here as the router handles the views
</script>

<style>
.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1em;
  box-sizing: border-box;
}
/* Basic styling for navigation */
nav {
  padding: 1rem;
  background-color: #f0f0f0;
  margin-bottom: 1rem;
}

nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: #007bff;
}

nav a:hover {
  text-decoration: underline;
}
/* Fade and blur transition */
.fade-blur-enter-active,
.fade-blur-leave-active {
  transition: opacity 0.5s ease, filter 0.5s ease;
}

.fade-blur-enter-from,
.fade-blur-leave-to {
  opacity: 0;
  filter: blur(10px);
}

.fade-blur-leave-from,
.fade-blur-enter-to {
  opacity: 1;
  filter: blur(0);
}
</style>
