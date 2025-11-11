<script setup lang="ts">
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

  const props = defineProps<{
    query: string
  }>();
</script>

<template>
  <search class="wrapper">
    <div class="icon-wrapper">
      <FontAwesomeIcon :icon="faSearch" size="xl" color="var(--accent)" />
    </div>
    <div class="input">
      <input placeholder="hledat..." type="text">
    </div>
  </search>
</template>

<style scoped>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    padding: 5px 0px;
  }

  .wrapper:has(input:focus) {
    border-bottom: 1px solid var(--accent);
  }

  .icon-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
  }

  div.input {
    background-color: var(--primary);
  }
  
  input {
    border: none;
    color: var(--white);
    background-color: transparent;
    font-weight: 500;
    margin-right: 10px;
    font-size: 1.4rem;
    box-sizing: border-box;
    padding: 4px 10px;
  }

  input:focus {
    outline: none;
  }
</style>
