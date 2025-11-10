<script setup lang="ts">
import type {PropType} from 'vue';

  defineProps({
    type: {
      type: String as PropType<"button" | "submit">,
      default: "button",
      required: true,
    },
    onClick: {
      type: Function as PropType<(event: MouseEvent) => void>,
      required: true
    }
  })
</script>

<template>
  <button :type="type" @click="onClick">
    <slot />
  </button>
</template>

<style lang="css" scoped>

</style>
