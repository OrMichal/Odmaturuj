<script setup lang="ts">
import {RouterView} from 'vue-router';
import GroupedContentSideNavigation from '../components/navigation/GroupedContentSideNavigation.vue';
import type {ISearchable} from '../interfaces/ISearchable';
import {useFetch} from '../composables/useFetch';
import {SearchableFromAuthor, type IAuthor} from '../dto/Author';
import {ref, watch} from 'vue';
import {ApiUrl} from '../envs';

const { data, error, loading } = useFetch<IAuthor[]>(`${ApiUrl}/authors`, "");
const searchables = ref<ISearchable[] | null>(null);

watch(data, async (prev, curr) => {
  if(data.value) {
    searchables.value = await Promise.all(data.value.map(d => SearchableFromAuthor(d)));
  }
});

</script>

<template>
  <div class="wrapper">
    <div v-if="loading">loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <GroupedContentSideNavigation route-prefix="/authors" v-else-if="data && searchables" :data="searchables!" />
    <router-view />
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 10px;
    height: 100%;
  }

</style>
