<script setup lang="ts">
  // 以下はNG、詳細は https://v3.ja.vuejs.org/api/sfc-script-setup.html#typescript-%E3%81%AE%E3%81%BF%E3%81%AE%E6%A9%9F%E8%83%BD
  // import { CounterParams as CounterProps } from '../types';

  export interface CounterProps {
    count: number | null;
    step: number;
  }
  const props = withDefaults(defineProps<CounterProps>(), {
    count: 0,
    step: 1,
  });

  const emit = defineEmits<{
    (eventName: 'countChange', count: number): void;
    (eventName: 'countReset'): void;
  }>();

  const countUp = () => {
    if (props.count !== null) {
      emit('countChange', props.count + props.step);
    }
  };
</script>

<template>
  <div class="Counter">
    <button class="Counter-UpButton" @click="countUp">
      {{ count }}
    </button>
  </div>
</template>

<style scoped>
  .Counter {
    padding: 100px;
    border: dotted 1px gray;
  }
  .Counter-UpButton {
    border: solid 2px black;
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 3em;
    cursor: pointer;
  }
</style>
