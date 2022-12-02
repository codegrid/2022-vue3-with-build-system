<script setup>
import { ref } from "vue";

const props = defineProps({
  initialCount: {
    type: Number,
    default: 0,
  },
});
const count = ref(props.initialCount);
const countUp = () => count.value++;
</script>

<template lang="pug">
div(class="Counter")
  button(class="Counter-UpButton", @click="countUp") {{count}}
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
