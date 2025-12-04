<script setup lang="ts">
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faMoon } from '@fortawesome/free-solid-svg-icons';

  let show = ref(false);

  setTimeout(() => {
    show.value = true;
  }, 4000);
</script>

<template>
  <div class="card">
    <div class="header">
      <div/>
      <div/>
    </div>
    <div class="content">
      <div v-if="show">
        <div>
          <FontAwesomeIcon :icon="faMoon" />
          <span>Zdá se, že nám hlavní server spinká</span>
        </div>
        <div>
          <span>Jdu mu dát pěstí!</span>
          <span>Za půlminutku bude vše hezky načteno, vydržte prosím</span>
        </div>
      </div>
      <div v-else>
        Vydržte prosím chviličku, načítají se záznamy
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: 600px;
  background: var(--primary-light-dark);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.25);
  color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: fadeIn 0.4s ease-out;
}


.header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0.4;
}


.header div {
  height: 12px;
  background: var(--primary-light);
  border-radius: 0.5rem;
}

.header div:last-child {
  width: 30%;
}


.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: clamp(0.8rem, 1vw, 1.4rem);
}


.content > div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}


.content div:first-child > div:first-child {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: clamp(1rem, 1.5vw, 1.4rem);
  font-weight: 600;
}


.content div:first-child > div:last-child {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  opacity: 0.9;
}


svg {
  font-size: 1.8rem;
  color: var(--accent);
}


.content > div {
  text-align: center;
  opacity: 0.8;
  animation: pulse 1.5s infinite ease-in-out;
}


@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}


@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

</style>
