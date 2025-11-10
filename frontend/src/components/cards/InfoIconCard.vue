<script setup lang="ts">
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import Paragraph from '../../elements/Paragraph.vue';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

  const props = defineProps<{
    icon: IconDefinition,
    heading: string
  }>();
</script>

<template>
  <div class="card">
    <FontAwesomeIcon :icon="icon" size="5x" color="var(--accent)" />
    <div class="card-content">
      <span>{{ heading }}</span>
      <Paragraph>
        <slot />
      </Paragraph>
    </div>
  </div>
</template>

<style scoped>
  .card {
    background-color: var(--primary-dark);
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 50px;
    box-sizing: border-box;
    border: 3px solid var(--accent);
    padding: 25px;
    padding-bottom: 50px;
    border-radius: 10px;
  }

  .card-content {
    display: flex;
    flex-direction: column;

    font-weight: 100;
  }

  .card-content *:is(p) {
    padding-left: 25px;
  }

  .card-content span {
    padding: 0px;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent);
  }
</style>
