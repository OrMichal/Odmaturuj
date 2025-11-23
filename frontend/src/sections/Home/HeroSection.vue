<script setup lang="ts">
  import MegaHeading from '../../elements/MegaHeading.vue';
  import Paragraph from '../../elements/Paragraph.vue';
  import ImportantLink from '../../components/links/ImportantLink.vue';
import SimpleLink from '../../components/links/SimpleLink.vue';
</script>

<template>
  <section class="hero">
    <section class="hero-heading">
      <MegaHeading>Čeština bez stresu</MegaHeading>
      <Paragraph>Zvládní ústní i písemnou část s jistotou.</Paragraph>
    </section>
    <section class="hero-links">
      <ImportantLink to="/exercise">Začít se připravovat</ImportantLink>
      <SimpleLink to="/authors">Zopakovat si autory</SimpleLink>
      <SimpleLink to="/book-analysis">Mrknout na povinnou četbu</SimpleLink>
    </section>
  </section>
</template>

<style scoped>
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    container: hero-sect / inline-size;
    width: 100%;
  }

  .hero-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-links {
    margin-top: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }

  @container hero-sect (width < 1000px) {
    .hero-links {
      flex-direction: column;
    }

    .hero-links > * > * {
      width: 100%;
      align-self: stretch;
    }
  }
</style>
