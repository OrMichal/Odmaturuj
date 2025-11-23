<script setup lang="ts">
import {faBoltLightning, faClipboardList, faLightbulb} from '@fortawesome/free-solid-svg-icons';
import InfoIconCard from '../../components/cards/InfoIconCard.vue';
import SectionHeading from '../../elements/SectionHeading.vue';
import SubHeading from '../../elements/SubHeading.vue';
import ArticleHeading from '../../elements/ArticleHeading.vue';
import HighlightedSection from '../../components/utils/HighlightedSection.vue';

</script>

<template>
  <div class="wrapper">
    <SectionHeading heading="Autoři">
      Přehled autorů podle literárních směrů. Vyberte si autora a ponořte se do studia.
    </SectionHeading>
    <ArticleHeading heading="Co tu najdete?">
      <HighlightedSection>
        <InfoIconCard :icon="faLightbulb" heading="Všechno podle CERMAT" >
          Materiály jsou podle oficiálních požadavků k maturitní zkoušce.
        </InfoIconCard>
        <InfoIconCard :icon="faBoltLightning" heading="Rychlé procvičování" >
          10 minut? Stačí to. Krátké cvičení, které opravdu prověří, co musíš umět.
        </InfoIconCard>
        <InfoIconCard :icon="faClipboardList" heading="Autoři a shrnutí" >
          Krátké životopisy, klíčová díla a témata.
        </InfoIconCard>
      </HighlightedSection>
    </ArticleHeading>
  </div>
</template>

<style scoped>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 50px;
    box-sizing: border-box;
  }

  .motivation {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .cards {
    border: 2px solid var(--accent);
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
</style>
