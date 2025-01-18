<template>
  <div class="container">
    <h1>User Information</h1>
    <label>
      Name:
      <input v-model="user.name" />
    </label>
    <label>
      Email:
      <input v-model="user.email" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "UsersPage",
  setup() {
    const user = reactive({
      name: "John Doe",
      email: "john.doe@example.com",
    });

    return {
      user,
    };
  },
});
</script>
