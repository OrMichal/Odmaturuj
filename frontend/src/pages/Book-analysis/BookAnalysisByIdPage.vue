<script setup lang="ts">
import {useRoute} from 'vue-router';
import AnchorNav from '../../components/navigation/AnchorNav.vue';
import {useFetch} from '../../composables/useFetch';
import type {IBookAnalysis} from '../../dto/BookAnalysis';
import SectionHeading from '../../elements/SectionHeading.vue';
import {ApiUrl} from '../../envs';
import type {IAnchor} from '../../interfaces/IAnchor';
import {watch} from 'vue';
import AuthorDetailsCard from '../../components/cards/AuthorDetailsCard.vue';
import ArticleHeading from '../../elements/ArticleHeading.vue';
import List from '../../elements/List.vue';
import HighlightedSection from '../../components/utils/HighlightedSection.vue';
import Paragraph from '../../elements/Paragraph.vue';
import BreakLine from '../../elements/BreakLine.vue';

const route = useRoute();

let { data, loading, error } = useFetch<IBookAnalysis>(`${ApiUrl}/books_analysis/${route.params.id}`, `book analysis ${route.params.id}`)

watch(() => route.params.id, () => {
  ({ data, loading, error } = useFetch<IBookAnalysis>(`${ApiUrl}/books_analysis/${route.params.id}`, `book analysis ${route.params.id}`));
});

const anchors: IAnchor[] = [
  { id: "basic-info", name: "Základní informace" },
  { id: "timestamp", name: "Časoprostor" },
  { id: "topics", name: "Témata" },
  { id: "motives", name: "Motivy" },
  { id: "main-characters", name: "Hlavní postavy" },
  { id: "story", name: "Děj" },
  { id: "context", name: "Literární kontext" },
  { id: "narrator", name: "Vypravěč" },
  { id: "main-thoughts", name: "Hlavní myšlenky díla" },
  { id: "language-devices", name: "Jazykové prostředky" },
  { id: "composition", name: "Kompozice" }
];
</script>

<template>
  <div v-if="loading">loading</div>
  <div v-else-if="error">error: {{ error }}</div>
  <div v-else-if="!data">could not get data</div>
  <section v-else class="container">
    <section class="wrapper">
      <SectionHeading :heading="data.name">{{ data.release_year }}</SectionHeading>
      <AuthorDetailsCard v-for="authorId of data.author_ids" :author-id="authorId" />
      <BreakLine />
      <ArticleHeading heading="Základní informace" id="basic-info">
        <List :items="data.basic_info" />
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Časoprostor" id="timestamp">
        <List :items="data.timestamp_info_points" />
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Témata" id="topics">
        <List :items="data.themes" />
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Motivy" id="motives">
        <List :items="data.motives" />
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Hlavní postavy" id="main-characters">
        <HighlightedSection>
          <ArticleHeading class="character" v-for="character of data.main_characters" :heading="character.name">
            <List :items="character.bullet_points" />
          </ArticleHeading>
        </HighlightedSection>
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Děj" id="story">
        <HighlightedSection>
          <Paragraph>{{ data.story }}</Paragraph>
        </HighlightedSection>
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Literární kontext" id="context">
        <HighlightedSection>
          <Paragraph>{{ data.context }}</Paragraph>
        </HighlightedSection>
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Vypravěč" id="narrator">
        <List :items="data.narrator_bullet_points" />
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Hlavní myšlenky díla" id="main-thoughts">
        <List :items="data.main_thought_points" />
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Jazykové prostředky" id="language-devices">
        <List :items="data.language_devices" />
      </ArticleHeading>
      <BreakLine />
      <ArticleHeading heading="Kompozice" id="composition">
        <List :items="data.composition" />
      </ArticleHeading>
    </section>
    <AnchorNav class="anchor" :anchors="anchors" />
  </section>
</template>

<style scoped>
  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .character > *:first-child {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1200px) {
    .anchor {
      display: none;
    }
  }
</style>
