<script setup lang="ts">
import Counter from "./components/Counter.vue";
</script>

<template>
  <div>
    <h2>Counter.vue (TypeScript based)</h2>
    <Counter :initialCount="10" />
  </div>
</template>
