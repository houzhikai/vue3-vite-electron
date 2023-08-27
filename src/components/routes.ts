import WelcomeItemVue from "./WelcomeItem.vue";
import WelcomeItem2 from "./WelcomeItem2.vue";
import Home from "@/views/home/index.vue";

import {
  HomeOutlined,
  MenuUnfoldOutlined,
  DesktopOutlined,
} from "@ant-design/icons-vue";

import { h } from "vue";

export const routes = [
  {
    path: "/",
    name: "home",
    icon: () => h(HomeOutlined),
    component: Home,
  },
  {
    path: "/about1",
    name: "test1",
    icon: () => h(DesktopOutlined),
    component: WelcomeItemVue,
  },
  {
    path: "/about2",
    name: "test2",
    icon: () => h(MenuUnfoldOutlined),
    component: WelcomeItem2,
  },
];
