<script setup lang="ts">
  const props = defineProps({
    to: {
      type: [String, Object],
      required: true
    }
  });
</script>

<template>
  <router-link :to="to">
    <span class="link">
      <slot />
    </span>
  </router-link>
</template>

<style scoped>
  .link {
    font-size: 1rem;
    font-weight: 300;
    color: var(--white);
  }

  .link:hover {
    color: hsl(from var(--white) h s calc(l - 20));
  }
</style>
