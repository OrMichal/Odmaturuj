<script setup lang="ts">
  import Heading from '../../../elements/Heading.vue';
  import type { IAuthor } from '../../../dto/Author';
  import { useFetch } from '../../../composables/useFetch';
  import { ApiUrl } from '../../../envs';
  import type { IAuthorGroup } from '../../../dto/AuthorGroup';
  import LoadingPlaceholder from '../../../components/utils/LoadingPlaceholder.vue';
  import ErrorBox from '../../../components/utils/ErrorBox.vue';
  import AuthorCard from '../../../components/cards/AuthorCard.vue';
  import ArticleHeading from '../../../elements/ArticleHeading.vue';

  const { data: authors, loading: author_loading, error: author_err } = useFetch<IAuthor[]>(`${ApiUrl}/authors`, "all_authors");
  const { data: author_groups, loading: author_group_loading, error: author_group_err } = useFetch<IAuthorGroup[]>(`${ApiUrl}/authorGroups`, "all_author_groups");
</script>

<template>
  <LoadingPlaceholder v-if="author_loading || author_group_loading" />
  <ErrorBox v-else-if="author_err || author_group_err">
    {{ author_err || author_group_err }}
  </ErrorBox>
  <div v-else class="container">
    <div class="wrapper">
      <Heading>Vyberte autory a skupiny</Heading>
      <ArticleHeading heading="Autoři">
        <div class="cards">
          <AuthorCard v-for="author of authors" :author="author" />
        </div>
      </ArticleHeading>
      <ArticleHeading heading="Autoři">
        <div class="cards">
          <AuthorCard v-for="author of authors" :author="author" />
        </div>
      </ArticleHeading>
    </div>
  </div>
</template>

<style scoped>
  .container {
    width: 100%;
  }

  .wrapper {
    width: 100%;
  }
</style>
