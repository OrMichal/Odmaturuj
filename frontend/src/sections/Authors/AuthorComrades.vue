<script setup lang="ts">
import {computed} from 'vue';
import AuthorCard from '../../components/cards/AuthorCard.vue';
import {useFetch} from '../../composables/useFetch';
import type {IAuthor} from '../../dto/Author';
import {ApiUrl} from '../../envs';

const props = defineProps<{
  groupId: string;
  authorId: string;
}>();

const { data, loading, error } = useFetch<IAuthor[]>(`${ApiUrl}/authorGroups/${props.groupId}/authors`, `authorGroup ${props.groupId} authors`)
const authors = computed(() => data.value?.filter(a => a._id != props.authorId));
</script>

<template>
  <div class="wrapper">
    <div v-if="loading">loading...</div>
    <div v-else-if="error">error: {{ error }}</div>
    <div v-else-if="!data">could not get data</div>
    <div v-else class="authors">
      <AuthorCard v-for="author of authors" :author="author" />
    </div>
  </div>
</template>

<style scoped>
.authors {
  display: flex;
  flex-direction: row;
  gap: 25px;
}
</style>
