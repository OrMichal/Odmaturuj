<script setup lang="ts">
import {useFetch} from '../../composables/useFetch';
import type {IAuthor} from '../../dto/Author';
import ArticleHeading from '../../elements/ArticleHeading.vue';
import List from '../../elements/List.vue';
import RollDown from '../../elements/RollDown.vue';
import {ApiUrl} from '../../envs';

const props = defineProps<{
  authorId: string;
}>();

const { data, error, loading } = useFetch<IAuthor>(`${ApiUrl}/authors/${props.authorId}`, `author ${props.authorId}`);
</script>

<template>
  <div v-if="loading">
    načítání...
  </div>
  <div v-else-if="error">
    nastala chyba: {{ error }}
  </div>
  <RollDown v-if="data" :summary="`${data.firstname} ${data.middlename} ${data.lastname}`">
    <div class="wrapper">
      <List :items="data.important_bullet_points!" />
      <ArticleHeading heading="Životopis">{{ data.long_biography }}</ArticleHeading>
    </div>
  </RollDown> 
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
</style>
