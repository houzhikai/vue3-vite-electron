<template>
  <a-layout-header style="background: #fff">
    <menu-unfold-outlined
      v-if="props.toggleSider"
      class="trigger"
      @click="handleClickOpen"
    />
    <menu-fold-outlined v-else class="trigger" @click="handleClickClose" />
  </a-layout-header>
</template>

<script setup lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";

const props = defineProps({
  toggleSider: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["toggleSider"]);
const handleClickOpen = () => {
  emit("toggleSider", true);
};
const handleClickClose = () => {
  emit("toggleSider", false);
};
</script>

<style scoped lang="less">
.trigger {
  font-size: 20px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
</style>
