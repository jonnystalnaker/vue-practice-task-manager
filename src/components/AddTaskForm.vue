<template>
  <div class="add-task-container">
    <form @submit.prevent="handleSubmit" class="add-task-form">
      <div>
        <label for="title">Task Title</label>
        <input
          id="title"
          v-model="title"
          type="text"
          placeholder="Enter task title"
          required
        />
      </div>
      <div>
        <label for="description">Task Description</label>
        <textarea
          id="description"
          v-model="description"
          placeholder="Enter task description"
          required
        ></textarea>
      </div>
      <div class="button-group">
        <button type="submit">Add Task</button>
        <Suspense>
          <template #default>
            <button
              type="button"
              @click="fetchRandomTodo"
              class="fetch-random-btn"
            >
              Fetch Random Todo
            </button>
          </template>
          <template #fallback>
            <button class="fetch-random-btn loading" disabled>
              Loading...
            </button>
          </template>
        </Suspense>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { useTaskStore } from "@/stores/taskStore";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const title = ref("");
    const description = ref("");
    const taskStore = useTaskStore();

    const handleSubmit = () => {
      if (title.value.trim() && description.value.trim()) {
        taskStore.addTask(title.value, description.value);
        title.value = "";
        description.value = "";
      } else {
        alert("Please fill out both fields before submitting.");
      }
    };

    const fetchRandomTodo = async () => {
      try {
        await taskStore.fetchRandomTodo();
      } catch (error) {
        console.error("Failed to fetch random todo:", error);
      }
    };

    return {
      title,
      description,
      handleSubmit,
      fetchRandomTodo,
    };
  },
});
</script>

<style scoped lang="scss">
.add-task-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.add-task-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin: 1em auto 0;

  label {
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
  }

  .button-group {
    display: flex;
    gap: 1rem;

    button {
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;

      &:hover {
        opacity: 0.9;
      }

      &:first-child {
        background-color: #4caf50;
        color: white;

        &:hover {
          background-color: #45a049;
        }
      }

      &:last-child {
        background-color: #007bff;
        color: white;

        &:hover {
          background-color: #0056b3;
        }

        &.loading {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
