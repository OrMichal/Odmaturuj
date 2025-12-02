<script setup lang="ts">
import { computed, ref } from "vue";
import SearchBar from "../utils/SearchBar.vue";
import type { ISearchable } from "../../interfaces/ISearchable.ts";
import SideBarLink from "./SideBarLink.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";

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

const touchStartX = ref(0);
const touchEndX = ref(0);

const handleTouchStart = (event: TouchEvent) => {
  touchStartX.value = event?.touches[0]?.clientX!;
};

const handleTouchMove = (event: TouchEvent) => {
  touchEndX.value = event.touches[0]?.clientX!;
};

const handleTouchEnd = (_: TouchEvent) => {
  const distance = touchEndX.value - touchStartX.value;

  if(touchStartX.value < 40 && distance > 20 && !isOpen.value) {
    isOpen.value = true;
  }
};

const close = () => (isOpen.value = false);
</script>

<template>
  <div class="swipe-area"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <button class="hamburger" @click="isOpen = true">
      <FontAwesomeIcon :icon="faCircleChevronRight" />
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
  font-size: 2rem;
  background: none;
  border: none;
  color: var(--accent);
  cursor: pointer;
  z-index: 1001;
}

/* OVERLAY */
.overlay {
  position: fixed;
  inset: 0;
  background: #0008;
  backdrop-filter: blur(2px);
  z-index: 1000;
}

/* BASE SIDEBAR */
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

/* LINKS */
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

/* MOBILE DRAWER */
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

