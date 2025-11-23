<script setup lang="ts">
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const emits = defineEmits<{
  (e: "update", value: string): void
}>();

const handler = (e: any) => emits("update", e.target.value);
</script>

<template>
  <div class="wrapper">
    <div class="icon-wrapper">
      <FontAwesomeIcon :icon="faSearch" size="xl" />
    </div>
    <input @input="handler" placeholder="Hledat... " type="text" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 12px;
  border-radius: 12px;
  background-color: var(--primary-dark);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s, background-color 0.3s;
}

.wrapper:has(input:focus) {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  background-color: var(--primary);
}

.icon-wrapper {
  color: var(--accent);
  display: flex;
  align-items: center;
}

input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--white);
  font-size: 0.8rem;
  padding: 6px 0;
  transition: color 0.3s;
}

input::placeholder {
  color: var(--text-muted);
  font-weight: 400;
}

/* Optional: subtle hover effect */
.wrapper:hover {
  background-color: var(--primary-hover);
}
</style>

