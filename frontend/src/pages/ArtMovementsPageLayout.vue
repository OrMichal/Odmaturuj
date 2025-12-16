<script setup lang="ts">
import {computed} from 'vue';
import ContentSideNavigation from '../components/navigation/ContentSideNavigation.vue';
import {useFetch} from '../composables/useFetch';
import {ApiUrl} from '../envs';
import {ArtMovementToSearchable, type IArtMovement} from '../dto/ArtMovement';
import ErrorBox from '../components/utils/ErrorBox.vue';
import LoadingPlaceholder from '../components/utils/LoadingPlaceholder.vue';

const { data, error, loading } = useFetch<IArtMovement[]>(`${ApiUrl}/art_movements`, `all art movements`);

const movs = computed(() => data.value?.map(d => ArtMovementToSearchable(d)));

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
  <div v-else-if="!data || !movs">
    <ErrorBox>
      Nastala chyba při formátování dat
    </ErrorBox>
  </div>
  <div v-else class="wrapper">
    <div class="container">
      <ContentSideNavigation  :data="movs" route-prefix="/art-movements" />
      <router-view />
    </div>
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

.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
}

@media screen and (width < 800px) {
  .container {
    flex-direction: column;
  }
}
</style>
