<script lang="ts">
  import { defineComponent, ref, Ref } from 'vue';

  // Ref型を型注釈として記述
  const countUpWithValidation = (count: Ref) => {
    if (count.value === null) {
      throw new Error('countがnullの状態でカウントアップしようとしました!');
    }
    count.value++;
  };

  export default defineComponent({
    setup() {
      const count = ref<number | null>(0);
      const countUp = () => countUpWithValidation(count);
      return { count, countUp };
    },
  });
</script>

<template>
  <div class="Counter">
    <button class="Counter-UpButton" @click="countUp">{{ count }}</button>
    <button @click="count = null">clear</button>
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
