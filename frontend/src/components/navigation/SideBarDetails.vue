
<script setup lang="ts">
import { ref, watch } from 'vue';
import RollDown from '../../elements/RollDown.vue';

const props = defineProps<{
  summary: string,
  opened: boolean
}>();

const open = ref(props.opened);
</script>

<template>
  <RollDown :summary="summary" :open="opened">
    <div class="links">
      <slot />
    </div>
  </RollDown>
</template>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--primary-dark);
  transition: all 0.1s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 12px 16px;
  color: var(--text-light);
  background-color: var(--primary-light);
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s, color 0.3s;
}

.heading:hover {
  background-color: var(--accent);
  color: black;
}

.heading svg {
  transition: transform 0.3s;
}

.heading svg.rotated {
  transform: rotate(180deg);
}

.selected-heading {
  color: var(--accent);
}
</style>

