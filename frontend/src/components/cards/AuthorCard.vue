<script setup lang="ts">
import type {IAuthor} from '../../dto/Author';
import Button from '../../elements/Button.vue';
import Heading from '../../elements/Heading.vue';
import Paragraph from '../../elements/Paragraph.vue';
import ImportantLink from '../links/ImportantLink.vue';

const props = defineProps<{
  author: IAuthor
}>();
</script>

<template>
  <div class="card">
    <Heading>{{ author.firstname }} {{ author.lastname }}</Heading>
    <Paragraph>{{ author.roles }}</Paragraph>
    <ImportantLink class="button" :to="`/authors/${author._id}`">Zobrazit</ImportantLink>
  </div>
</template>

<style scoped>
.card {
  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  border: 2px solid var(--accent);
  border-radius: 10px;
}

.card > *:first-child {
  font-size: 1.7rem;
}

.button {
  margin-top: 20px;
  align-self: end;
}

.button > * {
  font-size: 1rem;
}
</style>
