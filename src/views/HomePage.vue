<template>
  <div class="container">
    <h1>Task Manager!</h1>
    <AddTaskForm />
    <TaskList />
  </div>
</template>

<script setup lang="ts">
import AddTaskForm from "@/components/AddTaskForm.vue";
import TaskList from "@/components/TaskList.vue";
</script>
