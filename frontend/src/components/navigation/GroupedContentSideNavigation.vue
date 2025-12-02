<script setup lang="ts">
import { computed, ref } from "vue";
import SearchBar from "../utils/SearchBar.vue";
import type { IGroupedSearchable } from "../../interfaces/IGroupedSearchable";
import SideBarLink from "./SideBarLink.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faSquareCaretRight} from "@fortawesome/free-solid-svg-icons";

const searchQuery = ref("");
const isOpen = ref(false);

const props = defineProps<{
  data: IGroupedSearchable[];
  routePrefix: string;
}>();

const includesQuery = (value: string): boolean => {
  return value.toLowerCase().trim().includes(searchQuery.value.toLowerCase().trim());
};

const filteredGroups = computed(() => {
  return props.data.reduce<Record<string, IGroupedSearchable[]>>((acc, curr) => {
    if (includesQuery(curr.group_name) || includesQuery(curr.value)) {
      if (!acc[curr.group_name]) acc[curr.group_name] = [];
      acc[curr.group_name]?.push(curr);
    }
    return acc;
  }, {});
});

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
      <SearchBar @update="(val) => (searchQuery = val)" />

      <section class="links">
        <div 
          class="group"
          v-for="group of Object.keys(filteredGroups)"
          :key="group"
        >
          <h6>{{ group }}</h6>

          <SideBarLink
            v-for="value of filteredGroups[group]"
            @click="close"
            :key="value._id"
            :to="`${routePrefix}/${value._id}`"
          >
            {{ value.value }}
          </SideBarLink>
        </div>

        <div v-if="Object.keys(filteredGroups).length === 0" class="not-found">
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

.hamburger:hover {
  background: var(--accent-hover);
  transform: scale(1.05);
}

.hamburger span {
  font-weight: 500;
}

.hamburger.open {
  background: var(--accent-active);
}

.hamburger.open .fa-icon {
  transform: rotate(90deg);
  transition: transform 0.3s ease;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
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
  border-right: 1px solid #ffffff20;
  background: var(--background);
  transition: transform 0.3s ease;
}

section.links {
  display: flex;
  flex-direction: column;
  gap: 25px;
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
    display: flex;
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
