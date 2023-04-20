import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import TestPage from "../pages/TestPage.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "home" },
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/test",
    name: "test",
    component: TestPage,
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
