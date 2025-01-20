<template>
  <div class="container">
    <h1>Task Manager!</h1>
    <div class="home__layout">
      <div class="home__main">
        <AddTaskForm />
        <TaskList />
      </div>
      <Sidebar />
    </div>
  </div>
</template>

<script setup lang="ts">
import AddTaskForm from "@/components/AddTaskForm.vue";
import Sidebar from "@/components/SideBar.vue";
import TaskList from "@/components/TaskList.vue";
</script>
<style scoped lang="scss">
.home {
  &__layout {
    display: flex;
    gap: 1rem;
  }
}
</style>
