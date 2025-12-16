<script setup lang="ts">
import {useRoute} from 'vue-router';
import {useFetch} from '../../composables/useFetch';
import {ApiUrl} from '../../envs';
import {watch} from 'vue';
import SectionHeading from '../../elements/SectionHeading.vue';
import type {IArtMovement} from '../../dto/ArtMovement';
import ArticleHeading from '../../elements/ArticleHeading.vue';
import List from '../../elements/List.vue';
import AuthorCard from '../../components/cards/AuthorCard.vue';
import type {IAuthor} from '../../dto/Author';
import Paragraph from '../../elements/Paragraph.vue';
import HighlightedSection from '../../components/utils/HighlightedSection.vue';
import Quote from '../../elements/Quote.vue';
import BreakLine from '../../elements/BreakLine.vue';
import AnchorNav from '../../components/navigation/AnchorNav.vue';
import type {IAnchor} from '../../interfaces/IAnchor';
import ErrorBox from '../../components/utils/ErrorBox.vue';
import LoadingPlaceholder from '../../components/utils/LoadingPlaceholder.vue';

  const route = useRoute();
  let { data: movement, loading: loading_movement, error: error_movement } = useFetch<IArtMovement>(`${ApiUrl}/art_movements/${route.params.id}`, `movement ${route.params.id} data`);
  let { data: authors, loading: loading_authors, error: error_authors } = useFetch<IAuthor[]>(`${ApiUrl}/art_movements/${route.params.id}/authors`, `movement ${route.params.id} authors`);

  watch(() => route.params.id, () => {
    ({ data: movement, loading: loading_movement, error: error_movement } = useFetch<IArtMovement>(`${ApiUrl}/art_movements/${route.params.id}`, `movement ${route.params.id} data`));
    ({ data: authors, loading: loading_authors, error: error_authors } = useFetch<IAuthor[]>(`${ApiUrl}/art_movements/${route.params.id}/authors`, `movement ${route.params.id} authors`));
  }, { immediate: true });

  const anchors: IAnchor[] = [
    { id: "main-signs", name: "Hlavní znaky" },
    { id: "recognition", name: "Jak ho poznat?" },
    { id: "detailed-desc", name: "Podrobnější popis" },
    { id: "typical-genres", name: "Typické žánry" },
    { id: "text-sample", name: "Ukázka textu" },
    { id: "main-authors", name: "Hlavní představitelé" },
  ];
</script>

<template>
  <section class="container">
    <div v-if="loading_movement">
      <LoadingPlaceholder />
    </div>
    <div v-else-if="error_movement">
      <ErrorBox>
        {{ error_movement }}
      </ErrorBox>
    </div>
    <div v-else-if="!movement">
      <ErrorBox>
        Nastala chyba při formátování dat
      </ErrorBox>
    </div>
    <section class="wrapper"> 
      <SectionHeading :heading="movement?.name!">{{ movement?.timespan }}</SectionHeading>
      <ArticleHeading heading="Hlavní znaky" id="main-signs">
        <List :items="movement?.bullet_points!" />
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Jak ho spolehlivě poznat?" id="recognition">
        <HighlightedSection>
          <Paragraph>{{ movement?.recognition }}</Paragraph>
        </HighlightedSection>
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Podrobnější popis" id="detailed-desc">
        <Paragraph>{{ movement?.description }}</Paragraph>
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Typické žánry" id="typical-genres">
        <List :items="movement?.typical_genres!" />
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Ukázka textu" id="text-sample">
        <Quote :source="movement?.text_source!">{{ movement?.text_sample }}</Quote>
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Vysvětlení textu">
        <Paragraph>{{ movement?.text_explanation }}</Paragraph>
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Hlavní představitelé" id="main-authors">
        <div v-if="loading_authors">loading authors...</div>
        <div v-else-if="error_authors">error: {{ error_authors }}</div>
        <div v-else-if="!authors">could not get authors of this movement</div>
        <div v-else class="cards">
          <AuthorCard v-for="author of authors" :author="author" />
        </div>
      </ArticleHeading>
    </section>
    <AnchorNav class="anchor" :anchors="anchors" />
  </section>
</template>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.container {
  display: flex;
  flex-direction: row;
  gap: 50px;
}

.cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

@media screen and (max-width: 1200px) {
  .anchor {
    display: none;
  }
}
</style>
