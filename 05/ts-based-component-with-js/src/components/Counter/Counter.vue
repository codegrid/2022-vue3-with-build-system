<script lang="ts">
  import { defineComponent } from 'vue';
  // import { angleUp } from './angleUp';
  import { angleUp } from './js/angleUp';

  export default defineComponent({
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      countUp() {
        this.count = angleUp({ angle: this.count, step: 45 });
      },
    },
  });
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
