<template>
    <a-layout-header style="background: #fff">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        </a-layout-header>
</template>

<script setup  lang="ts">
import {ref} from 'vue';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons-vue';

  
  const selectedKeys = ref<string[]>(['1']);
  const collapsed = ref<boolean>(false);
</script>

<style scoped lang="less">
.trigger {
    font-size: 20px;
    line-height: 64px;
    padding: 0 12px;
    cursor: pointer;
    transition: color 0.3s;
  }
  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
  
</style>