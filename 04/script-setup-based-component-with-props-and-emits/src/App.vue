<script setup>
  import { ref } from 'vue';
  import Counter from './components/Counter.vue';

  const initialCount = 180;
  const step = 45;
  const count = ref(initialCount);
  const onCountChange = (newCount) => {
    count.value = newCount > 360 ? 0 : newCount;
  };
</script>

<template>
  <Counter :count="count" :step="step" @countChange="onCountChange" />
</template>
