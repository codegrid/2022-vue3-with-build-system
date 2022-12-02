<script setup>
  import { ref } from 'vue';

  const props = defineProps({ initialCnt: { type: Number, default: 0 } });
  const count = ref(props.initialCnt);
  const countUp = () => count.value++;
</script>

<template>
  <div class="Counter">
    <button class="Counter-UpButton" @click="countUp">
      {{ count }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
  $base-background-color: #fafafa;
  .Counter {
    background-color: $base-background-color;
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
