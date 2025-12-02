<script setup lang="ts">
</script>

<template>
  <p>
    <slot />
  </p>
</template>

<style scoped>
  p {
    all: unset;
    width: 100%;
    font-size: clamp(1rem, 2vw, 1.3rem);
    opacity: 0.8;
    font-weight: 400;
  }
</style>
