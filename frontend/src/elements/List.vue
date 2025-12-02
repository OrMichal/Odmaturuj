<script setup lang="ts">
import Paragraph from './Paragraph.vue';

  defineProps<{
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
  gap: 10px;
}

li {
  font-weight: 400;
  display: inline-flex;
  align-items: start;
  gap: 10px;
}

li:before {
  content: "+";
  font-size: 1.2rem;
}
</style>
