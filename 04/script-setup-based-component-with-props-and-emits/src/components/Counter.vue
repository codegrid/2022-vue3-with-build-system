<!-- <script>
  // const eventName = 'countChange';
</script> -->

<script setup>
  const props = defineProps({
    count: { type: Number, default: 0 },
    step: { type: Number, default: 1 },
  });
  const emit = defineEmits({
    countChange: null,
  });
  const countUp = () => emit('countChange', props.count + props.step);

  // build error
  // const eventName = 'countChange';
  // const emit = defineEmits({ [eventName]: null });
  // const countUp = () => emit(eventName, props.count + props.step);
</script>

<!-- <script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      count: { type: Number, default: 0 },
      step: { type: Number, default: 1 },
    },
    emits: {
      countChange: null,
    },
    setup(props, ctx) {
      const countUp = () => ctx.emit('countChange', props.count + props.step);
      return { countUp };
    },
  });w
</script> -->

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
