<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    props: {
      count: { type: Number as PropType<number | null>, default: 0 },
      step: { type: Number, default: 1 },
    },
    emits: {
      countChange: null,
    },
    setup(props, ctx) {
      const countUp = () => {
        if (props.count !== null) {
          ctx.emit('countChange', props.count + props.step);
        }
      };
      return { countUp };
    },
  });
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
