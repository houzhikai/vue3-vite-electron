import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorldVue from "./components/HelloWorld.vue";
import WelcomeItemVue from "./components/WelcomeItem.vue";
import WelcomeItem2 from "./components/WelcomeItem2.vue";
import TheWelcomeVue from "./components/TheWelcome.vue";

import "./assets/main.css";

const routes = [
  { path: "/", component: TheWelcomeVue },
  { path: "/about1", component: WelcomeItemVue },
  { path: "/about2", component: WelcomeItem2 },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
const app = createApp(App);
app.use(router);
app.mount("#app");
