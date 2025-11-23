<script setup lang="ts">
import {faBrain, faClipboardList, faSearch} from '@fortawesome/free-solid-svg-icons';
import InfoIconCard from '../../components/cards/InfoIconCard.vue';
import ArticleHeading from '../../elements/ArticleHeading.vue';
import SectionHeading from '../../elements/SectionHeading.vue';
import HighlightedSection from '../../components/utils/HighlightedSection.vue';

</script>

<template>
  <div class="wrapper">
    <SectionHeading heading="Umělecké směry">
      Prohlédněte a zopakujte si všechny umělecké směry vyžadované CERMATem.
    </SectionHeading>
    <ArticleHeading heading="Co tu najdete?">
      <HighlightedSection>
        <InfoIconCard :icon="faSearch" heading="Přehled směrů" >
          Každý směr má krátkou definici, období, hlavní znaky a zástupce, které si jednoduše zapamatujete.
        </InfoIconCard>
        <InfoIconCard :icon="faBrain" heading="Jednoduché vysvětlení" >
          Žádné složité definice. Vše, co je nutné znát k maturitě je jasně a jednoduše vyznačeno.
        </InfoIconCard>
        <InfoIconCard :icon="faClipboardList" heading="Představitelé" >
          Spojte směr s konkrétními autory z literatury.
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
}
</style>
