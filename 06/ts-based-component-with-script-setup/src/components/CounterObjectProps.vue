<script setup lang="ts">
  import { CounterParams } from '../types';

  const props = withDefaults(defineProps<{ counterParams: CounterParams }>(), {
    counterParams: () => ({ count: 0, step: 1 }),
  });

  const emit = defineEmits<{
    (eventName: 'countChange', count: number): void;
    (eventName: 'countReset'): void;
  }>();

  const countUp = () => {
    if (props.counterParams.count !== null) {
      emit('countChange', props.counterParams.count + props.counterParams.step);
    }
  };
</script>

<template>
  <div class="Counter">
    <button class="Counter-UpButton" @click="countUp">
      {{ counterParams.count }}
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
