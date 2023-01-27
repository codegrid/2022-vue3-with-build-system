<!-- <script>
  import { defineComponent, ref } from 'vue';
  import { fetchInitialCount } from './fetchInitialCount';

  export default defineComponent({
    async setup() {
      const initialCount = await fetchInitialCount();
      const count = ref(initialCount);
      const countUp = () => count.value++;
      return {
        count,
        countUp,
      };
    },
  });
</script> -->

<script setup>
  import { ref } from 'vue';
  import { fetchInitialCount } from './fetchInitialCount';

  const initialCount = await fetchInitialCount();
  const count = ref(initialCount);
  const countUp = () => count.value++;
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
