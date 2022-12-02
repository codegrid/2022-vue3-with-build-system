<script>
  import { defineComponent } from 'vue';
  import Counter from './components/Counter/index.vue';

  export default defineComponent({
    components: {
      Counter,
    },
  });
</script>

<template>
  <div>
    <h2>Counter/index.vue (Src Imports)</h2>
    <Counter :initialCount="10" />
  </div>
</template>
