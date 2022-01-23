import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import EuroJackpot from "../views/Lottery.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/eurojackpot",
    name: "EuroJackpot",
    component: EuroJackpot,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
