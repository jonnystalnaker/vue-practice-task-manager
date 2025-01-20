import { defineStore } from "pinia";

// Define the state type
interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
}

export const useTaskStore = defineStore("taskStore", {
  // State
  state: (): TaskState => ({
    tasks: [],
  }),

  // Actions
  actions: {
    addTask(title: string, description: string) {
      this.tasks.push({
        id: Date.now(),
        title,
        description,
        completed: false,
      });
    },
    toggleTaskCompletion(id: number) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask(id: number) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = false; // Toggle to incomplete if completed
      }
      this.tasks = this.tasks.filter((task) => task.id !== id);
      console.log("Updated tasks in store:", this.tasks); // Confirm the array is updated
    },
    async fetchRandomTodo() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${Math.floor(
          Math.random() * 200 + 1
        )}`
      );
      const todo = await response.json();
      this.tasks.push({
        id: todo.id,
        title: todo.title,
        description: "", // Default value for description
        completed: false, // Ensure newly fetched tasks are always incomplete
      });
    },
  },

  // Enable persistence
  persist: true,
});
