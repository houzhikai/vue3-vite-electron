<template>
    <a-layout class="layout">
      <Sider />
      <a-layout>
        <Header />
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          Content
        </a-layout-content>
        <Footer />
      </a-layout>
    </a-layout>
  </template>
  <script lang="ts" setup>
  import Sider from './Sider.vue';
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  
  </script>
  <style>
  body{
    margin: 0;
    padding: 0;
  }
  .layout{
    height: 100vh;
  }
  
  
  .site-layout .site-layout-background {
    background: #fff;
  }
  </style>