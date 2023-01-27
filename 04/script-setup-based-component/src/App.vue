<script setup>
  import SimpleCounter from './components/Counter.vue';
  import { title as counterTitle } from './settings.js';
</script>

<template>
  <h1>{{ counterTitle }}</h1>
  <SimpleCounter />
</template>
