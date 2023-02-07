<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    props: {
      counterParams: {
        type: Object as PropType<{ count: number; step: number }>,
        default: () => ({ count: 0, step: 1 }),
      },
    },
    emits: {
      countChange: null,
    },
    setup(props, ctx) {
      const countUp = () => {
        ctx.emit(
          'countChange',
          props.counterParams.count + props.counterParams.step
        );
      };
      return { countUp };
    },
  });
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
