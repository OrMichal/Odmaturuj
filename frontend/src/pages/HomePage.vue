<script setup lang="ts">
import {faBarsStaggered, faBolt, faBookBible, faBrain} from '@fortawesome/free-solid-svg-icons';
import InfoIconCard from '../components/cards/InfoIconCard.vue';
import TimeCountdown from '../components/utils/TimeCountdown.vue';
import Heading from '../elements/Heading.vue';
import HeroSection from '../sections/Home/HeroSection.vue';
import HighlightedSection from '../components/utils/HighlightedSection.vue';

</script>

<template>
  <div class="wrapper">
    <HeroSection />    
    <TimeCountdown />
    <section class="benefits">
      <Heading>Proč používat právě Odmaturuj?</Heading>      
        <HighlightedSection class="cards">
          <InfoIconCard :icon="faBarsStaggered" heading="Vše podle CERMAT">
            Všechno, co se může objevit u maturity, máte tady. Přehledně a lidsky vysvětleno.
          </InfoIconCard>
          <InfoIconCard :icon="faBolt" heading="Rychlé procvičování">
            Krátká cvičení, která stihneš o přestávce nebo v tramvaji.
          </InfoIconCard>
          <InfoIconCard :icon="faBookBible" heading="Vše na jednom místě">
            Literární rozbory i jazykové pojmy - jednoduše a srozumitelně.
          </InfoIconCard>
          <InfoIconCard :icon="faBrain" heading="Studujte chytře">
            Zde máte vše v souvislostech a tudíž se to naučíte rychleji a efektivněji.
          </InfoIconCard>
        </HighlightedSection>
    </section>
  </div>
</template>

<style scoped>
  .wrapper {
    width: 100%;
    max-width: var(--content-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 150px;
  }

  section.benefits {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px
  }

  section.benefits .cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1fr));
    gap: 25px;
  }
</style>
