<script setup lang="ts">

</script>

<template>
  <div class="card">
    <h4>Oopsie daisie, nastala chyba!</h4>
    <p>
      <slot />
    </p>
  </div>
</template>

<style scoped>
  .card {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    background-color: #fe4655;
    color: #fdfcfe;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 8px;
  }

  h4 {
    all: unset;
    font-size: clamp(1.3rem, 1.7vw, 1.7rem);
    font-weight: 600;
    text-transform: uppercase;
  }

  p {
    font-size: clamp(0.9rem, 1vw, 1.3rem);
  }
</style>
