<script setup lang="ts">
import {useFetch} from '../../composables/useFetch';
import type {IAuthor} from '../../dto/Author';
import type {IAuthorGroup} from '../../dto/AuthorGroup';
import Paragraph from '../../elements/Paragraph.vue';
import RollDown from '../../elements/RollDown.vue';
import SubHeading from '../../elements/SubHeading.vue';
import {ApiUrl} from '../../envs';
import AuthorCard from '../cards/AuthorCard.vue';

const props = defineProps<{
  groupId: string;
}>();

const { data: authors, loading: loading_authors, error: error_authors } = useFetch<IAuthor[]>(`${ApiUrl}/authorGroups/${props.groupId}/authors`, `authorGroup ${props.groupId} authors`);
const { data: group, error, loading } = useFetch<IAuthorGroup>(`${ApiUrl}/authorGroups/${props.groupId}`, `authorGroup ${props.groupId}`);
</script>

<template>
  <div v-if="loading || loading_authors" class="loading">
    loading...
  </div>
  <div v-else-if="error || error_authors" class="error">
    {{ error || error_authors }}
  </div>
  <section v-else-if="group">
    <RollDown :summary="group.name" >
      <div class="wrapper">
        <div class="container">
          <SubHeading>Cíle</SubHeading>
          <ul class="intentions">
            <li v-for="intention of group.intentions">
              <Paragraph >{{ intention }}</Paragraph>
            </li>
          </ul>
        </div>
        <div class="container">
          <SubHeading>Charakteristika</SubHeading>
          <Paragraph>{{ group.desc }}</Paragraph>
        </div>
        <div class="container">
          <SubHeading>Představitelé</SubHeading>
          <div class="authors">
            <AuthorCard v-for="author of authors" :author="author" />
          </div>
        </div>
      </div>
    </RollDown>
  </section>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .container > *:first-child {
    font-weight: 700;
    color: var(--accent);
  }

  .container > *:nth-child(2) {
    padding-left: 20px;
  }

  ul.intentions {
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  li::before {
    font-size: 1.3rem;
    content: '- ';
  }

  .authors {
    display: flex;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;
  }
</style>
