<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import Navbar from './components/navigation/Navbar.vue';
import Footer from './components/assets/Footer.vue';
</script>

<template>
  <div class="wrapper">
    <Navbar />
    <div class="content-wrapper">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100dvh;
    height: 100%;
  }
  .content-wrapper {
    box-sizing: border-box;
    padding: 50px 30px;
    max-width: var(--content-width);
    width: 100%;
    height: 100%;
  }
</style>
