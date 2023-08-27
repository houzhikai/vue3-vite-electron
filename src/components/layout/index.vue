<template>
    <a-layout class="layout">
      <Sider />
      <a-layout>
        <a-layout-header style="background: #fff">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  import Sider from './Sider.vue'
  import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons-vue';
  const selectedKeys = ref<string[]>(['1']);
  const collapsed = ref<boolean>(false);
  </script>
  <style>
  body{
    margin: 0;
    padding: 0;
  }
  .layout{
    height: 100vh;
  }
  
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
  
  
  
  .site-layout .site-layout-background {
    background: #fff;
  }
  </style>