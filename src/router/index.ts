import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SkillsView from "../views/SkillsView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/skills",
      name: "Skills",

      component: SkillsView,
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
