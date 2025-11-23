<script setup lang="ts">
import {computed} from 'vue';
import ContentSideNavigation from '../components/navigation/ContentSideNavigation.vue';
import {useFetch} from '../composables/useFetch';
import {ApiUrl} from '../envs';
import {ArtMovementToSearchable, type IArtMovement} from '../dto/ArtMovement';

const { data, error, loading } = useFetch<IArtMovement[]>(`${ApiUrl}/art_movements`, `all art movements`);

const movs = computed(() => data.value?.map(d => ArtMovementToSearchable(d)));

</script>

<template>
  <div class="wrapper">
    <section class="sidebar">
      <div v-if="loading">loading...</div>
      <div v-else-if="error">error: {{ error }}</div>
      <div v-else-if="!data || !movs">could not get data</div>
      <ContentSideNavigation v-else :data="movs" route-prefix="/art-movements" />
    </section>
    <section class="content">
      <router-view />
    </section>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100%;
  gap: 50px;
}

.content {
  width: 100%;
}

.anchors {
  height: 100%;
}
</style>
