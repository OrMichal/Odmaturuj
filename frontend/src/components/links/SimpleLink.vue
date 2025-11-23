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
  box-sizing: border-box;
  padding: 4px 20px;
  background-color: var(--primary-light);
  color: hsl(from var(--white) h s calc(l - 20));
  font-size: clamp(1rem, 1vw, 1.5rem);
  font-weight: 400;
  border-radius: 8px;
  transition: 200ms ease;
}

.link:hover {
  background-color: var(--primary-dark);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
}
</style>
