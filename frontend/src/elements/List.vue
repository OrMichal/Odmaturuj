<script setup lang="ts">
import Paragraph from './Paragraph.vue';

  const props = defineProps<{
    items: Array<string>
  }>();
</script>

<template>
  <ul>
    <li v-for="item of items">
      <Paragraph>{{ item }}</Paragraph>
    </li>
  </ul>
</template>

<style scoped>
ul {
  all: unset;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: start;
}

li {
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

li:before {
  content: "- ";
  font-size: 1.5rem;
}
</style>
