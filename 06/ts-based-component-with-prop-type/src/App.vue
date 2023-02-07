<script setup lang="ts">
  import { ref } from 'vue';
  import Counter from './components/Counter.vue';
  import CounterObjectProps from './components/CounterObjectProps.vue';
  import CounterClassProps, {
    CounterParams,
  } from './components/CounterClassProps.vue';

  const step = 45;
  const count = ref(180);
  const onCountChange = (newCount: number) => {
    count.value = newCount > 360 ? 0 : newCount;
  };

  const counterParams = ref({ count: 180, step: 45 });
  const onCounterParamsChange = (newCount: number) => {
    counterParams.value.count = newCount > 360 ? 0 : newCount;
  };

  const counterParamsInstance = ref(new CounterParams(180, 45));
  const onCounterParamsInstanceChange = (newCount: number) => {
    counterParamsInstance.value =
      newCount > 360
        ? new CounterParams(0, 45)
        : new CounterParams(newCount, 45);
  };
</script>

<template>
  <Counter :count="count" :step="step" @countChange="onCountChange" />
  <CounterObjectProps
    :counterParams="counterParams"
    @countChange="onCounterParamsChange"
  />
  <CounterClassProps
    :counterParams="counterParamsInstance"
    @countChange="onCounterParamsInstanceChange"
  ></CounterClassProps>
</template>
