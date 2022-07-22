import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/create",
      name: "create",
      component: () => import("../views/createView.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("../views/editView.vue"),
    },
  ],
});

export default router;
