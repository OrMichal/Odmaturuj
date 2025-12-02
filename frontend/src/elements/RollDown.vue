<script setup lang="ts">
defineProps<{
  summary: string;
}>();
</script>

<template>
  <details>
    <summary>{{ summary }}</summary>
    <section>
      <slot />
    </section>
  </details>
</template>

<style scoped>
details {
  width: 100%;
  display: flex;
  flex-direction: column;
}

details summary::marker {
  content: "+ ";
}

details[open] > section {
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: var(--primary-light-dark);
}

details[open] summary {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

details[open] summary::marker {
  content: "- ";
}

summary {
  width: 100%;
  font-size: 1.5rem;
  color: var(--accent);
  font-weight: 600;
  user-select: none;
  box-sizing: border-box;
  padding: 5px 20px;
  background-color: var(--primary-dark);
  border-radius: 10px;
}

summary:hover {
  background-color: var(--primary-light);
  cursor: pointer;
}
</style>
