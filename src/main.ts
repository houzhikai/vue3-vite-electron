import { createApp } from "vue";
import Layout from "@/components/layout/index.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./components/routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
const app = createApp(Layout);
app.use(router);
app.mount("#app");
