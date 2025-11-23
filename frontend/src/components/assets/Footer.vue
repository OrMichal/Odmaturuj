<script setup lang="ts">
import SimpleTextLink from '../links/SimpleTextLink.vue';
import Logo from './Logo.vue';

</script>

<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="content">
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
        </section>
      </div>
      <div class="content-footer">
        &copy; Michal Orsah
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .footer {
    background-color: var(--primary-dark);
    box-sizing: border-box;
    padding: 20px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    container: footer-cnt / inline-size;
  }

  .content {
    width: 100cqw;
    max-width: var(--content-width);
    box-sizing: border-box;
    padding: 0px 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .content-footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 1.5rem;
    font-weight: 600;
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

  @container footer-cnt (width < 500px) {
    .content {
      flex-direction: column;
      align-items: start;
      gap: 25px;
    }
  }
</style>
