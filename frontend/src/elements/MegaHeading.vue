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
    font-size: 4rem;
  }
</style>
