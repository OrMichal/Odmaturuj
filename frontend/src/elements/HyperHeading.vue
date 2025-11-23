<script setup lang="ts">
</script>

<template>
  <h3>
    <slot />
  </h3>
</template>

<style scoped>
  h3 {
    all: unset;
    font-weight: 700;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: var(--accent);
  }
</style>
