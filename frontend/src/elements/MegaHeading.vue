<script setup lang="ts">
</script>

<template>
  <h1>
    <slot />
  </h1>
</template>

<style scoped>
  h1 {
    all: unset;

    color: var(--accent);
    font-weight: 900;
    font-size: clamp(2.5rem, 4vw, 4rem);
  }
</style>
