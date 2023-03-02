<script setup>
  import { useCssModule, ref, computed } from 'vue';

  const dark = ref(false);
  const $style = useCssModule();
  const theme = computed(() => {
    return dark.value ? $style.dark : $style.defaults;
  });
</script>

<template>
  <label :class="theme">
    <input v-model="dark" type="checkbox" />ダークモード
  </label>
</template>

<style module>
  .dark {
    background-color: black;
    color: white;
  }
  .defaults {
    background-color: white;
    color: black;
  }
</style>
