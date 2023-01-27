<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    data() {
      return {
        count: 0 as number | null,
      };
    },
    methods: {
      // clearCount() {
      //   this.count = null;
      // },
      countUp() {
        if (this.count !== null) {
          this.count++;
        }
      },
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
