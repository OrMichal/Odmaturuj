<script setup lang="ts">
import {RouterView} from 'vue-router';
import GroupedContentSideNavigation from '../components/navigation/GroupedContentSideNavigation.vue';
import type { IGroupedSearchable } from '../interfaces/IGroupedSearchable';
import {useFetch} from '../composables/useFetch';
import {SearchableFromAuthor, type IAuthor} from '../dto/Author';
import {ref, watch} from 'vue';
import {ApiUrl} from '../envs';
import ErrorBox from '../components/utils/ErrorBox.vue';
import LoadingPlaceholder from '../components/utils/LoadingPlaceholder.vue';

const { data, error, loading } = useFetch<IAuthor[]>(`${ApiUrl}/authors`, "");
const searchables = ref<IGroupedSearchable[] | null>(null);

watch(data, async (_, __) => {
  if(data.value) {
    searchables.value = await Promise.all(data.value.map(d => SearchableFromAuthor(d)));
  }
});

</script>

<template>
  <div v-if="loading">
    <LoadingPlaceholder />
  </div>
  <div v-else-if="error">
    <ErrorBox>
      {{ error }}
    </ErrorBox>
  </div>
  <div v-else-if="data && searchables" class="wrapper">
    <div class="container">
      <GroupedContentSideNavigation route-prefix="/authors" :data="searchables!" />
      <router-view />
    </div>
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
