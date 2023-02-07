<script setup lang="ts">
  import { ref } from 'vue';
  import Counter from './components/Counter.vue';
  import CounterObjectProps from './components/CounterObjectProps.vue';
  import CounterWithPropDef, {
    CounterProps,
  } from './components/CounterWithPropDef.vue';
  import { CounterParams } from './types';

  const initialCount = 180;
  const step = 45;
  const count = ref(initialCount);
  const onCountChange = (newCount: number) => {
    count.value = newCount > 360 ? 0 : newCount;
  };
  const onCountReset = () => {
    count.value = initialCount;
  };

  const counterParams = ref<CounterParams>({ count: 180, step: 45 });
  const onCounterParamsChange = (newCount: number) => {
    counterParams.value.count = newCount > 360 ? 0 : newCount;
  };

  const counterProps = ref<CounterProps>({ count: 180, step: 45 });
  const onCounterPropsChange = (newCount: number) => {
    counterProps.value.count = newCount > 360 ? 0 : newCount;
  };
</script>

<template>
  <Counter
    :count="count"
    :step="step"
    @countChange="onCountChange"
    @countReset="onCountReset"
  />
  <CounterObjectProps
    :counterParams="counterParams"
    @countChange="onCounterParamsChange"
  />
  <CounterWithPropDef
    :count="counterProps.count"
    :step="counterProps.step"
    @countChange="onCounterPropsChange"
  />
</template>
