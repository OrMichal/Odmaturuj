<script setup lang="ts">
import {RouterLink} from 'vue-router';
defineProps({
  to: {
    type: [String, Object],
    required: true
  }
});
</script>

<template>
  <RouterLink :to="to">
    <span class="link">
      <slot />
    </span>
  </RouterLink>
</template>

<style scoped>
  .link {
    font-size: clamp(1.1rem, 1.7vw, 1.4rem);
    box-sizing: border-box;
    border-radius: 6px;
    padding: 2px 20px;
    background-color: var(--accent);
    color: var(--text-primary);
    font-weight: 700;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  
    transition: ease 300ms;
  }

  .link:hover {
    background-color: hsl(from var(--accent) h s l / 0.8);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  }
</style>
