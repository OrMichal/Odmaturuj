<script setup lang="ts">
import { ref } from "vue";
import Logo from "../assets/Logo.vue";
import ImportantLink from "../links/ImportantLink.vue";
import NavbarLink from "./NavbarLink.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const isOpen = ref(false);
const toggle = () => (isOpen.value = !isOpen.value);
const close = () => (isOpen.value = false);
</script>

<template>
  <nav class="navbar">
    <Logo />

    <div class="links desktop-only">
      <NavbarLink to="/">Domů</NavbarLink>
      <NavbarLink to="/authors">Autoři</NavbarLink>
      <NavbarLink to="/art-movements">Umělecké směry</NavbarLink>
      <NavbarLink to="/book-analysis">Rozbory knih</NavbarLink>
      <NavbarLink to="/exercise">Cvičení</NavbarLink>
    </div>

    <ImportantLink class="desktop-only" to="/exercise">
      Procvičovat
    </ImportantLink>

    <button class="hamburger mobile-only" :class="{ rotated: isOpen }" @click="toggle">
      <FontAwesomeIcon :icon="faBars" />
    </button>
  </nav>

  <transition name="slide">
    <div v-if="isOpen" class="mobile-menu mobile-only">
      <NavbarLink to="/" @click="close">Domů</NavbarLink>
      <NavbarLink to="/authors" @click="close">Autoři</NavbarLink>
      <NavbarLink to="/art-movements" @click="close">Umělecké směry</NavbarLink>
      <NavbarLink to="/book-analysis" @click="close">Rozbory knih</NavbarLink>

      <ImportantLink to="/exercise" @click="close">
        Procvičovat
      </ImportantLink>
    </div>
  </transition>
</template>

<style scoped>
.navbar {
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.links {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.rotated {
  transform: rotateX('-180deg');
}

.mobile-menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background: var(--primary-light);
  padding: 15px 20px;
  border-top: 1px solid #ffffff20;
}

.hamburger {
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--accent);
  cursor: pointer;
  transition: ease 200ms;
}

.desktop-only {
  display: flex;
}

.mobile-only {
  display: none;
}

@media (max-width: 1150px) {
  .desktop-only {
    display: none !important;
  }
  .mobile-only {
    display: flex;
  }
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
</style>
