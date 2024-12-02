import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Post from "@/pages/Post.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/post/:id", component: Post },
  ],
});

export default router;
