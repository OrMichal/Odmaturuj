<script setup lang="ts">
import HyperHeading from './HyperHeading.vue';
import Paragraph from './Paragraph.vue';

defineProps<{
  heading: string
}>();
</script>

<template>
  <section>
    <HyperHeading>{{ heading }}</HyperHeading>
    <Paragraph>
      <slot />
    </Paragraph>
  </section>
</template>

<style scoped>
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
    border-bottom: 1px solid var(--accent);
  }
</style>
