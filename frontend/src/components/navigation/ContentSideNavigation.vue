<script setup lang="ts">
import { computed, ref } from "vue";
import SearchBar from "../utils/SearchBar.vue";
import type { ISearchable } from "../../interfaces/ISearchable.ts";
import SideBarLink from "./SideBarLink.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faSquareCaretRight} from "@fortawesome/free-solid-svg-icons";

const searchQuery = ref("");
const isOpen = ref(false);

const props = defineProps<{
  data: ISearchable[];
  routePrefix: string;
}>();

const includesQuery = (value: string): boolean => {
  return value.toLowerCase().trim().includes(searchQuery.value.toLowerCase().trim());
};

const filteredData = computed(() => props.data.filter(d => includesQuery(d.value)));
const close = () => (isOpen.value = false);
</script>

<template>
  <div class="swipe-area">
    <button 
      class="hamburger" 
      :class="{ open: isOpen }" 
      @click="isOpen = !isOpen"
      aria-label="Toggle menu"
    >
      <FontAwesomeIcon size="lg" :icon="faSquareCaretRight" />
      <span>Menu</span>
    </button>

    <div v-if="isOpen" class="overlay" @click="close"></div>

    <aside class="wrapper" :class="{ open: isOpen }">
      <SearchBar @update="(val) => searchQuery = val" />
      <section class="links">
        <SideBarLink 
          v-for="value of filteredData" 
          :to="`${routePrefix}/${value.id}`"
          @click="close"
        >
          {{ value.value }}
        </SideBarLink>
        <div v-if="filteredData.length == 0" class="not-found">
          Nepovedlo se najít žádné takové záznamy.
        </div>
      </section>
    </aside>
  </div>
</template>

<style scoped>
.hamburger {
  display: none;
  font-size: 1.2rem;
  background: var(--accent);
  color: var(--text-primary);
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.overlay {
  position: fixed;
  inset: 0;
  background: #0008;
  backdrop-filter: blur(2px);
  z-index: 1000;
}

aside.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  box-sizing: border-box;
  padding-right: 40px;
  max-width: 30rem;
  border-right: 1px solid #ffffff20;
  background: var(--background);
  transition: transform 0.3s ease;
}

section.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.group h6 {
  all: unset;
  font-size: 1.3rem;
  color: var(--accent);
}

.not-found {
  box-sizing: border-box;
  padding: 5px;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  aside.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 80vw;
    max-width: 320px;
    height: 100vh;
    padding: 20px;
    transform: translateX(-100%);
    z-index: 1001;
  }

  aside.wrapper.open {
    transform: translateX(0);
  }
}
</style>

