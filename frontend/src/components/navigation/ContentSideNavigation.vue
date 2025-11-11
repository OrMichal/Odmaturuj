<script setup lang="ts">
import {ref} from "vue";
import SearchBar from "../utils/SearchBar.vue";

const searchQuery = ref("");
const props = defineProps<{
  
}>();
</script>

<template>
  <aside class="wrapper">
    <SearchBar :query="searchQuery" />
  </aside>
</template>

<style scoped>
</style>
