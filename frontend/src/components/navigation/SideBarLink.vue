<script setup lang="ts">
  defineProps<{
    to: string;
  }>();
</script>

<template>
  <router-link class="link" :to="to">
    <div>
      <span>
        <slot />
      </span>
    </div>
  </router-link>
</template>

<style scoped>
  .link {
    width: 100%;
  }

  div {
    width: 100%;
    box-sizing: border-box;
    padding: 3px 10px;
    color: var(--white);
  }

  div:hover > span {
    color: var(--accent);
    opacity: 0.7;
  }

  span {
    font-size: 1rem;
  }
</style>
