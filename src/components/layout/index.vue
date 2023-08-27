<template>
  <a-layout class="layout">
    <Sider :toggleSider="state.toggleSider" />
    <a-layout>
      <Header
        :toggleSider="state.toggleSider"
        @toggleSider="handleToggleSider"
      />
      <a-layout-content
        :style="{
          margin: '24px 0',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        Content
      </a-layout-content>
      <Footer />
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import Sider from "./Sider.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import { reactive } from "vue";

const state = reactive({
  toggleSider: false,
});
const handleToggleSider = () => {
  state.toggleSider = !state.toggleSider;
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
}

.layout {
  height: 100vh;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
