<script setup lang="ts">
import {computed} from 'vue';
import AuthorCard from '../../components/cards/AuthorCard.vue';
import {useFetch} from '../../composables/useFetch';
import type {IAuthor} from '../../dto/Author';
import {ApiUrl} from '../../envs';
import LoadingPlaceholder from '../../components/utils/LoadingPlaceholder.vue';
import ErrorBox from '../../components/utils/ErrorBox.vue';

const props = defineProps<{
  groupId: string;
  authorId: string;
}>();

const { data, loading, error } = useFetch<IAuthor[]>(`${ApiUrl}/authorGroups/${props.groupId}/authors`, `authorGroup ${props.groupId} authors`)
const authors = computed(() => data.value?.filter(a => a._id != props.authorId));
</script>

<template>
  <div class="wrapper">
    <div v-if="loading">
      <LoadingPlaceholder />
    </div>
    <div v-else-if="error">
      <ErrorBox>
        {{ error }}
      </ErrorBox>
    </div>
    <div v-else-if="!data">
      <ErrorBox>
        Nastala chyba při formátování dat.
      </ErrorBox>
    </div>
    <div v-else class="authors">
      <AuthorCard v-for="author of authors" :author="author" />
    </div>
  </div>
</template>

<style scoped>
.authors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

</style>
