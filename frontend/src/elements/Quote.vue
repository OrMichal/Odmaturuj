<script setup lang="ts">
  const props = defineProps<{
    source: string
  }>();
</script>

<template>
  <section>
    <blockquote>
      <slot />
    </blockquote>
    <span>{{ source }}</span>
  </section>
</template>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  section blockquote {
    margin: 0;
    box-sizing: border-box;
    border-left: 3px solid var(--accent);
    padding-left: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  section span {
    align-self: end;
  }
</style>
