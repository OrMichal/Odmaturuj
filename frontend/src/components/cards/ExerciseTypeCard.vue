<script setup lang="ts">
  import Paragraph from '../../elements/Paragraph.vue';
  import SubHeading from '../../elements/SubHeading.vue';
  import ImportantLink from '../links/ImportantLink.vue';

  defineProps<{
    name: String,
    to: String
  }>();
</script>

<template>
  <div class="container">
    <div class="card">
      <SubHeading>{{ name }}</SubHeading>
      <Paragraph>
        <slot />
      </Paragraph>
      <ImportantLink :to="'/exercise' + to">Vybrat</ImportantLink>
    </div>
  </div>
</template>

<style scoped>
  .container {
    width: 100%;
    container: exercise-card-cnt / inline-size;
  }

  .card {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: solid 1px var(--accent);
    border-radius: 8px;
    box-sizing: border-box;
    padding: 15px;
  }

  .card > *:first-child {
    color: var(--accent);
  }

  .card > *:last-child {
    margin-top: 25px;
    align-self: end;
  }
</style>
