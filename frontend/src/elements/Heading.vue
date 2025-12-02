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
    color: var(--accent);
    font-weight: 600;
    font-size: clamp( 1.7rem, 2vw,2.3rem);
  }
</style>
