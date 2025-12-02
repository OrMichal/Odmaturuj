<script setup lang="ts">
import type {IBook} from '../../dto/Book';
import List from '../../elements/List.vue';
import Paragraph from '../../elements/Paragraph.vue';
import SubHeading from '../../elements/SubHeading.vue';

defineProps<{
  book: IBook
}>();
</script>

<template>
  <div class="card">
    <section class="wrapper">
      <SubHeading>{{ book.name }} ({{ book.release_year }})</SubHeading>
      <List :items="book.bullet_points" />
    </section>
    <section class="wrapper">
      <SubHeading>Děj</SubHeading>
      <article>
        <Paragraph>{{ book.content }}</Paragraph>
      </article>
    </section>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 25px;
  box-sizing: border-box;
  background-color: var(--primary-dark);
  padding: 20px;
  border-radius: 10px;
}

section.wrapper {
  display: flex;
  flex-direction: column;
}

section.wrapper > *:first-child {
  font-weight: 600;
  color: var(--accent);
}

section.wrapper > *:not(:first-child) {
  padding-left: 15px;
}
</style>
