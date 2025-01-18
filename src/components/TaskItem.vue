<template>
  <div
    :class="{ completed: task.completed, 'task-completed': task.completed }"
    class="task-item"
  >
    <div class="task-info">
      <router-link :to="{ name: 'TaskDetails', params: { id: task.id } }">
        <h3>{{ task.title }}</h3>
      </router-link>
      <p>{{ task.description }}</p>
    </div>
    <div class="task-actions">
      <button @click="$emit('toggle', task.id)" class="complete-btn">
        <i
          :class="
            task.completed ? 'fas fa-times-circle' : 'fas fa-check-circle'
          "
        ></i>
      </button>
      <button @click="$emit('delete', task.id)" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<{
        id: number;
        title: string;
        description: string;
        completed: boolean;
      }>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;

  &.completed {
    background-color: #e0ffe0;
    text-decoration: line-through;
  }

  .task-info {
    h3 {
      margin: 0;
      font-size: 1.2rem;
    }

    p {
      margin: 0.5rem 0 0;
      font-size: 0.9rem;
      color: #666;
    }

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
        color: #007bff;
      }
    }
  }

  .task-actions {
    display: flex;
    gap: 0.5rem;

    button {
      padding: 0.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1.5rem;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        opacity: 0.8;
      }
    }

    .complete-btn {
      background-color: #4caf50;

      &:hover {
        background-color: #45a049;
      }
    }

    .delete-btn {
      background-color: #ff4d4d;

      &:hover {
        background-color: #e63939;
      }
    }
  }
}
</style>
