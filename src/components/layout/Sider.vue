<template>
  <a-layout-sider
    v-model:collapsed="props.toggleSider"
    :trigger="null"
    collapsible
  >
    <div class="sider-header">
      <a-image
        class="logo"
        src="https://aliyuncdn.antdv.com/logo.png"
        :preview="false"
        alt="logo"
        :width="35"
      />
      <div v-show="!props.toggleSider" class="title">Test-Project</div>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from "vue";

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
const selectedKeys = ref<string[]>(["1"]);

const props = defineProps({
  toggleSider: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="less">
.sider-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 16px;
  padding: 6px;
  background: #0a0f13;
  .logo {
    background: #ccc;
    margin: 16px;
    padding: 5px;
  }
  .title {
    color: #fff;
    font-size: 18px;
  }
}
</style>
