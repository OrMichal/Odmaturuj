<script setup lang="ts">
import SubHeading from './SubHeading.vue';
defineProps<{
  heading: string
}>();
</script>

<template>
  <div class="section-wrapper">
    <SubHeading>{{ heading }}</SubHeading>
    <slot />
  </div>
</template>

<style scoped>
.section-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
}

.section-wrapper > *:first-child {
  color: var(--accent);
  font-weight: 500;
}
</style>
