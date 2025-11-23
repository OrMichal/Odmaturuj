<script setup lang="ts">
</script>

<template>
  <h4>
    <slot />
  </h4>
</template>

<style scoped>
  h4 {
    all: unset;
    color: var(--white);
    font-size: clamp(1.3rem,2vw, 2rem);
    font-weight: 400;
  }
</style>
