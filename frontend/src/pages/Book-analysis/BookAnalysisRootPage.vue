<script setup lang="ts">
import {faBrain, faClipboardList, faSearch} from '@fortawesome/free-solid-svg-icons';
import InfoIconCard from '../../components/cards/InfoIconCard.vue';
import ArticleHeading from '../../elements/ArticleHeading.vue';
import SectionHeading from '../../elements/SectionHeading.vue';
import HighlightedSection from '../../components/utils/HighlightedSection.vue';

</script>

<template>
  <section class="wrapper">
    <SectionHeading heading="Rozbory knih">
      Prohlédněte a zopakujte si rozbory knih, které máte v seznamu maturitní četby.
    </SectionHeading>
    <ArticleHeading heading="Co tu najdete?">
      <HighlightedSection class="cards">
        <InfoIconCard :icon="faSearch" heading="Skutečný obsah knihy">
          Každá kniha má stručně popsaný příběh omezený jen na nutné informace.
        </InfoIconCard>
        <InfoIconCard :icon="faBrain" heading="Co chtěl autor říci">
          Dozvíte se také u každé knihy, na co chtěl autor svým dílem upozornit.
        </InfoIconCard>
        <InfoIconCard :icon="faClipboardList" heading="Jaké jsou hlavní motivy">
          Připomenete si také hlavní motivy díla.
        </InfoIconCard>
      </HighlightedSection>
    </ArticleHeading>
  </section>
</template>

<style scoped>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .cards {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

</style>
