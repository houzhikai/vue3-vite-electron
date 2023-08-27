import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorldVue from "./components/HelloWorld.vue";
import WelcomeItemVue from "./components/WelcomeItem.vue";
import WelcomeItem2 from "./components/WelcomeItem2.vue";

const routes = [
  // { path: "/", component: HelloWorldVue },
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
