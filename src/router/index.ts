import HomePage from "@/views/HomePage.vue";
import PostDetails from "@/views/PostDetails.vue";
import TaskDetails from "@/views/TaskDetails.vue";
import UsersPage from "@/views/UsersPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/task/:id",
    name: "TaskDetails",
    component: TaskDetails,
    props: true,
  },
  {
    path: "/users",
    name: "UsersPage",
    component: UsersPage,
  },
  {
    path: "/posts/:id",
    name: "PostDetails",
    component: PostDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
