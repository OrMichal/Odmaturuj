<script setup lang="ts">
import SimpleTextLink from '../links/SimpleTextLink.vue';
import Logo from './Logo.vue';

</script>

<template>
  <footer class="footer">
    <div class="wrapper">
      <section class="logo-section">
        <Logo />
        <span class="subheading">easy matura</span>
      </section>
      <section class="links">
        <section class="link-section">
          <SimpleTextLink to="/">Domů</SimpleTextLink>
          <SimpleTextLink to="/authors">Autoři</SimpleTextLink>
          <SimpleTextLink to="/art-movements">Umělecké směry</SimpleTextLink>
          <SimpleTextLink to="/book-analysis">Rozbory knih</SimpleTextLink>
          <SimpleTextLink to="/exercise">Cvičení</SimpleTextLink>
        </section>
        <section class="link-section">
        </section>
      </section>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    background-color: var(--primary-dark);
    box-sizing: border-box;
    padding: 20px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wrapper {
    width: var(--content-width);
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .logo-section {
    display: flex;
    flex-direction: column;
  }

  .subheading {
    box-sizing: border-box;
    padding: 0px 10px;
  }

  .links {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  .link-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
