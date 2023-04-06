<script setup>
  import { ref, computed } from 'vue';

  const dark = ref(false);
  const theme = computed(() => {
    return dark.value ? 'dark' : 'defaults';
  });
</script>

<template>
  <label :class="theme">
    <input v-model="dark" type="checkbox" />ダークモード
  </label>
</template>

<style scoped>
  .dark {
    background-color: black;
    color: white;
  }
  .defaults {
    background-color: white;
    color: black;
  }
</style>
