<script setup lang="ts">
import Logo from '../assets/Logo.vue';
import ImportantLink from '../links/ImportantLink.vue';
import NavbarLink from './NavbarLink.vue';
</script>

<template>
  <nav class="navbar">
    <Logo />
    <div class="links">
      <NavbarLink to="/">Domů</NavbarLink>
      <NavbarLink to="/authors">Autoři</NavbarLink>
      <NavbarLink to="/art-movements">Umělecké směry</NavbarLink>
      <NavbarLink to="/book-analysis">Rozbory knih</NavbarLink>
      <NavbarLink to="/exercise">Cvičení</NavbarLink>
    </div>
    <ImportantLink to="/exercise">Procvičovat</ImportantLink>
  </nav>
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
</style>
