<script setup lang="ts">
import {RouterView} from 'vue-router';
import GroupedContentSideNavigation from '../components/navigation/GroupedContentSideNavigation.vue';
import {useFetch} from '../composables/useFetch';
import {ref, watch} from 'vue';
import {ApiUrl} from '../envs';
import type {IGroupedSearchable} from '../interfaces/IGroupedSearchable';
import {GroupedSearchableFromBookAnalysis, type IBookAnalysis} from '../dto/BookAnalysis';

const { data, error, loading } = useFetch<IBookAnalysis[]>(`${ApiUrl}/books_analysis`, "");
const searchables = ref<IGroupedSearchable[] | null>(null);

watch(data, async (_, __) => {
  if(data.value) {
    searchables.value = await Promise.all(data.value.map(d => GroupedSearchableFromBookAnalysis(d)));
  }
});

</script>

<template>
  <div class="wrapper">
    <div v-if="loading">loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="data && searchables" class="container">
      <GroupedContentSideNavigation route-prefix="/book-analysis" :data="searchables" />
      <router-view />
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 50px;
    height: 100%;
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  @media screen and (width < 800px) {
    .container {
      flex-direction: column;
      gap: 15px;
    }
  }
</style>
