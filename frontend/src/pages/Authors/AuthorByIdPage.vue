<script setup lang="ts">
import {useRoute} from 'vue-router';
import {useFetch} from '../../composables/useFetch';
import type {IAuthor} from '../../dto/Author';
import {ApiUrl} from '../../envs';
import SectionHeading from '../../elements/SectionHeading.vue';
import AuthorGroup from '../../components/roll-downs/AuthorGroup.vue';
import List from '../../elements/List.vue';
import Paragraph from '../../elements/Paragraph.vue';
import type {IBook} from '../../dto/Book';
import BookCard from '../../components/cards/BookCard.vue';
import ArticleHeading from '../../elements/ArticleHeading.vue';
import {computed, watch} from 'vue';
import AuthorComrades from '../../sections/Authors/AuthorComrades.vue';
import type {IAnchor} from '../../interfaces/IAnchor';
import AnchorNav from '../../components/navigation/AnchorNav.vue';
import BreakLine from '../../elements/BreakLine.vue';
import ErrorBox from '../../components/utils/ErrorBox.vue';
import LoadingPlaceholder from '../../components/utils/LoadingPlaceholder.vue';

const route = useRoute();
const Id = computed(() => route.params.id);

let { data: author, error, loading } = useFetch<IAuthor>(`${ApiUrl}/authors/${Id.value}`, `author ${Id.value}`);
let { data: books, error: error_books, loading: loading_books } = useFetch<IBook[]>(`${ApiUrl}/authors/${Id.value}/books`, `author ${Id.value} books`);

watch(() => route.params.id, () => {
  ({ data: author, error, loading } = useFetch<IAuthor>(`${ApiUrl}/authors/${Id.value}`, `author ${Id.value}`));
  ({ data: books, error: error_books, loading: loading_books } = useFetch<IBook[]>(`${ApiUrl}/authors/${Id.value}/books`, `author ${Id.value} books`));
}, { immediate: true });

const anchors: Array<IAnchor> = [
  { id: "important-info", name: "Důležité údaje" },
  { id: "biography", name: "Životopis" },
  { id: "art-work", name: "Tvorba a díla" },
  { id: "other-authors", name: "Další autoři" },
];

</script>

<template>
  <div v-if="loading || loading_books" class="error">
    <LoadingPlaceholder />
  </div>
  <div v-else-if="error || error_books" class="error">
    <ErrorBox>
      {{ error }}
      {{ error_books }}
    </ErrorBox>
  </div>
  <div v-else-if="!author || !books">
    <ErrorBox>
      Nepovedlo se získat informace o tomto autorovi.
    </ErrorBox>
  </div>

  <section v-else class="container">
    <section class="wrapper">
      <SectionHeading :heading="author?.firstname + ' ' + author?.lastname">
        {{ author.roles }}
      </SectionHeading>
      <ArticleHeading heading="Skupiny, do kterých patřil">
        <section class="author-groups">
          <AuthorGroup v-for="group_id of author.group_ids" :group-id="group_id" />
        </section>
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Důležité údaje" id="important-info">
        <List :items="author.important_bullet_points" />
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Životopis" id="biography">
        <article>
          <Paragraph>{{ author.long_biography }}</Paragraph>
        </article>
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Tvorba a díla" id="art-work">
        <div class="books">
          <BookCard v-for="book of books" :book="book" />
        </div>
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Další autoři" id="other-authors">
        <AuthorComrades v-for="groupid of author.group_ids" :group-id="groupid" :author-id="author._id" />
      </ArticleHeading>
    </section>
    <AnchorNav class="anchor" :anchors="anchors" />
  </section>
</template>

<style scoped>
.wrapper {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 50px;
  container: author-cnt / inline-size;
}

.author-groups {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.books {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

@container author-cnt (width < 1200px) {
  .anchor {
    display: none;
  }
}
</style>
