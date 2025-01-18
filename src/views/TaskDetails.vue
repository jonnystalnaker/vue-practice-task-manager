<template>
  <div class="container">
    <h1>Task Details</h1>
    <p><strong>Title:</strong> {{ task?.title }}</p>
    <p><strong>Completed:</strong> {{ task?.completed ? "Yes" : "No" }}</p>
    <button @click="toggleCompletion">Toggle Completion</button>
    <button @click="deleteTask">Delete Task</button>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from "@/stores/taskStore";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const taskStore = useTaskStore();

const task = taskStore.tasks.find(
  (t) => t.id === Number.parseInt(route.params.id as string)
);

const toggleCompletion = () => {
  if (task) taskStore.toggleTaskCompletion(task.id);
};

const deleteTask = () => {
  if (task) {
    taskStore.deleteTask(task.id);
    router.push("/"); // Redirect to the home page after deletion
  }
};
</script>
