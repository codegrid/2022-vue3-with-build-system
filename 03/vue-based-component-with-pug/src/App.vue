<script setup>
  import Counter from './components/Counter.vue';
</script>

<template>
  <div>
    <h2>Counter.vue with Pug</h2>
    <Counter :initialCount="10" />
  </div>
</template>
