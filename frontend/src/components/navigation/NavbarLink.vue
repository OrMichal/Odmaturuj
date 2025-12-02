<script setup lang="ts">
import {ref, watch} from 'vue';
import {useRoute} from 'vue-router';

  const props = defineProps({
    to: {
      type: [String, Object],
      required: true
    }
  });
  const route = useRoute();
  const isActive = ref(route.fullPath.split("/")[1] == props.to.substring(1));

  watch(() => route.fullPath, (newPath, _) => {
    const activeRoute = newPath.split("/")[1];
    isActive.value = activeRoute == props.to.substring(1);
  })
</script>

<template>
  <router-link :to="to">
    <span class="link" :class="{ selected: isActive }">
      <slot/>
    </span>
  </router-link>
</template>

<style scoped>
  .link {
    font-weight: 500;
    font-size: 1.5rem;
    box-sizing: border-box;
    padding: 0px 10px;
    color: var(--white);
    background: linear-gradient(90deg, var(--accent), var(--accent));
    background-repeat: no-repeat;
    background-size: auto;
    background-position: -300px 0px;
    
  }

  .link:hover {
    cursor: pointer;
    animation: 0.2s ease forwards anim;
  }

  .selected {
    color: var(--accent);
  }

  @keyframes anim {
    from {
      background-position: -300px 0px;
    } to {
      background-position: 0px 0px;
      color: var(--text-primary);
    }
  }
</style>
