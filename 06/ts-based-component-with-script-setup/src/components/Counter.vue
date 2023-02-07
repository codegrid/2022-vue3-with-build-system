<script setup lang="ts">
  const props = withDefaults(
    defineProps<{ count: number | null; step: number }>(),
    { count: 0, step: 1 } // 初期値の指定
  );

  const emit = defineEmits<{
    (eventName: 'countChange', count: number): void;
    (eventName: 'countReset'): void;
  }>();

  const countUp = () => {
    if (props.count !== null) {
      emit('countChange', props.count + props.step);
    }
  };
  const countReset = () => {
    emit('countReset');
  };
</script>

<!-- <script setup lang="ts">
  import { PropType } from 'vue';

  const props = defineProps({
    count: { type: Number as PropType<number | null>, default: 0 },
    step: { type: Number, default: 1 },
  });
  const emit = defineEmits({
    countChange: null,
  });
  const countUp = () => {
    if (props.count !== null) {
      emit('countChange', props.count + props.step);
    }
  };
</script>
-->

<template>
  <div class="Counter">
    <button class="Counter-UpButton" @click="countUp">
      {{ count }}
    </button>
    <button @click="countReset">reset</button>
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
