<template>
  <div class="task-list">
    <h2>Task List</h2>
    <transition-group name="task" tag="div" class="task-list">
      <TaskItem
        v-for="task in taskStore.tasks"
        :key="task.id"
        :task="task"
        @toggle="toggleTask"
        @delete="handleDelete"
      />
    </transition-group>
    <p v-if="taskStore.tasks.length === 0">
      No tasks available. Add a task to get started!
    </p>
  </div>
</template>

<script lang="ts">
import TaskItem from "@/components/TaskItem.vue";
import { useTaskStore } from "@/stores/taskStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: { TaskItem },
  setup() {
    const taskStore = useTaskStore();

    return {
      taskStore, // Use the store directly in the template
      toggleTask: taskStore.toggleTaskCompletion,
      handleDelete: taskStore.deleteTask,
    };
  },
});
</script>
<style scoped lang="scss">
.task-list {
  margin-top: 1em;
}
/* Fade-in-up for new tasks */
.task-enter-active {
  animation: fadeInUp 0.5s ease-out;
}
.task-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

/* Jiggle on task completion */
.task-completed {
  animation: jiggle 0.5s ease-in-out;
}

/* Slide-out-left for task deletion */
.task-leave-active {
  animation: slideOutLeft 0.5s ease forwards;
}
.task-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.task-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes jiggle {
  0%,
  100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(2deg);
  }
  50% {
    transform: rotate(-2deg);
  }
}

@keyframes slideOutLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
}
</style>
