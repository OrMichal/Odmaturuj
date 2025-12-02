<script setup lang="ts">
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import Paragraph from '../../elements/Paragraph.vue';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

  defineProps<{
    icon: IconDefinition,
    heading: string
  }>();
</script>

<template>
  <div class="card">
    <FontAwesomeIcon class="icon" :icon="icon" size="4x" color="var(--accent)" />
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
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 20px;
    box-sizing: border-box;
    padding: 20px 15px;
    border-radius: 10px;
    container: card-cnt / inline-size;
  }

  .card-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    font-weight: 100;
    box-sizing: border-box;
  }

  .card-content span {
    padding: 0px;
    font-size: clamp(1.2rem, 1.7vw,2rem);
    font-weight: 700;
    color: var(--accent);
  }

  @container card-cnt (width < 500px) {
    .icon {
      display: none;
    }
  }

  @container card-cnt (width > 600px) {
    .icon {
      display: block;
    }
  }
</style>
