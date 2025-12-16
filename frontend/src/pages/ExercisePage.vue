<script setup lang="ts">
  import ExerciseTypeCard from '../components/cards/ExerciseTypeCard.vue';
  import Heading from '../elements/Heading.vue';
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <Heading>Vyberte si typ cvičení a pusťte se do přípravy</Heading>
      <div class="cards">
        <ExerciseTypeCard to="/random" name="Náhodné">
          Mix nejrůznějších otázek napříč celou databází. Ideální pro rychlé a pestré opakování všeho naráz.
        </ExerciseTypeCard>
        <ExerciseTypeCard to="/authors" name="Autoři a jejich skupiny">
          Procvič si znalost českých i světových autorů, jejich literárních skupin, generací a vzájemných souvislostí.
        </ExerciseTypeCard>
        <ExerciseTypeCard to="/movements" name="Umělecké směry">
          Otázky zaměřené na jednotlivé literární směry, jejich znaky, představitele a historické souvislosti.
        </ExerciseTypeCard>
        <ExerciseTypeCard to="/eras" name="Povinná četba">
          Procvičte si povinnou maturitní četbu podle svého výběru.
        </ExerciseTypeCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .container {
    width: 100%;
    container: exercises-cnt / inline-size;
  }

  .cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @container exercises-cnt (width < 600px) {
    .cards {
      display: flex;
      flex-direction: column;
    }
  }
</style>
