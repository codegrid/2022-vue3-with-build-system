<script setup>
  import Counter from './components/Counter.vue';
</script>

<template>
  <Suspense>
    <template #default>
      <!-- 非同期処理が完了した時の描画 -->
      <Counter />
    </template>
    <template #fallback>
      <!-- 非同期処理が実行中の時の描画 -->
      <div>Now Loading...</div>
    </template>
  </Suspense>
</template>
