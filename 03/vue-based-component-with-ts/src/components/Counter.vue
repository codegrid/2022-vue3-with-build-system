<!-- <script lang="ts">
import { defineComponent, ref } from "vue";


export default defineComponent({
  props: {
    initialCount: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const count = ref(props.initialCount);
    const countUp = () => (count.value = increment(count.value));
    return { count, countUp };
  },
});
</script> -->

<script setup lang="ts">
import { ref } from "vue";

const increment = (current: number): number => {
  return current + 1;
};
// const props = withDefaults(defineProps<{ initialCount: number }>(), {
//   initialCount: 0,
// });
const props = defineProps<{ initialCount: number }>();
const count = ref(props.initialCount);
const countUp = () => {
  count.value = increment(count.value);
};
</script>

<template>
  <div class="Counter">
    <button class="Counter-UpButton" @click="countUp">{{ count }}</button>
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
