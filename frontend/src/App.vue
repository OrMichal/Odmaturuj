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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  .content-wrapper {
    box-sizing: border-box;
    padding: 50px 30px;
    width: 100%;
    max-width: var(--content-width);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
