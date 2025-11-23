<script setup lang="ts">
import Heading from '../../elements/Heading.vue';
import SubHeading from '../../elements/SubHeading.vue';
import type {IAnchor} from '../../interfaces/IAnchor';

  const props = defineProps<{
    anchors: Array<IAnchor>
  }>();
</script>

<template>
  <aside>
    <h6>Na této stránce</h6>
    <div class="anchors">
      <router-link v-for="anchor of anchors" :to="`#${anchor.id}`">
        <span>{{ anchor.name }}</span>
      </router-link>
    </div>
  </aside>
</template>

<style scoped>
  aside {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    height: 100%;
  }

  aside h6 {
    all: unset;
    font-weight: 500;
    width: auto;
    text-wrap: none;
    font-size: 1.3rem;
    color: var(--accent);
  }

  aside .anchors {
    padding-left: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  span {
    opacity: 0.8;
    color: var(--white);
  }

  span:hover {
    opacity: 0.6;
  }
</style>
