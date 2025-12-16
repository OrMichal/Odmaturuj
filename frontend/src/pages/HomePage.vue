<script setup lang="ts">
  import {faBarsStaggered, faBolt, faBookBible, faBrain} from '@fortawesome/free-solid-svg-icons';
  import InfoIconCard from '../components/cards/InfoIconCard.vue';
  import TimeCountdown from '../components/utils/TimeCountdown.vue';
  import Heading from '../elements/Heading.vue';
  import HeroSection from '../sections/Home/HeroSection.vue';
  import HighlightedSection from '../components/utils/HighlightedSection.vue';
  import ArticleHeading from '../elements/ArticleHeading.vue';
  import List from '../elements/List.vue';
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
    <ArticleHeading heading="Co dělat, když najdu chybu?">
      Jakožto student se pořád jen učít a je možné, že na stránce najdete nějaké chyby.
      Pokud najdete jakoukoliv chybu ať už syntaktickou, pravopisnou, obsahovou anebo jakoukoliv jinou, budu moc rád, když mi dáte vědět.
      Máte více způsobů, jak nahlásit chybu. <br> Pro mě ta nejpohodlnější je otevří issue na githubu a tam to popsat. <br>
      Jiná možnost je napsat mi email na adresu: michalorsah32@gmail.com
    </ArticleHeading>
    <ArticleHeading heading="Omezení hostingem">
      Tato stránka je hostována pomocí služby Vercel a tedy má jistá omezení, která mohou způsobovat, že stránka občas prostě nepojede.
      V takovém případě s tím bohužel nemohu nic udělat, protože si placený hosting nemohu aktuálně dovolit &#128513;<br>
      Limitace, která hosting přináší:<br>
      <List :items="[ 
        'Občas delší načítání — při prvním otevření po delší době může server chvíli startovat.',
        'Limitované množství požadavků — může dojít k zpomalení nebo omezení při velkém počtu návštěvníků'
      ]" />
    </ArticleHeading>
    <ArticleHeading heading="Máte návrh na vylepšení?">
      Uvítám jakýkoliv nápad na rozšíření obsahu - třeba rozbory děl, tipy k maturitě nebo funkce, které by mohly usnadnit přípravu z Matuře.
      Můžete se ozvat případně pomocí emailu.
    </ArticleHeading>
    <ArticleHeading heading="Upozornění">
      Tento web slouží hlavně jako studijní pomůcka. Ikdyž se snažím, tak pořád nemůže být vše fakticky správně. Doporučuji tedy informace ověřovat.
      Pokud narazíte na faktické chyby, tak bych byl moc rád za jejich nahlášení.
    </ArticleHeading>
  </div>
</template>

<style scoped>
  .wrapper {
    width: 100%;
    max-width: var(--content-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 75px;
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
