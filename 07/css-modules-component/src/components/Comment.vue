<script setup>
  import CommentReply from './CommentReply.vue';
</script>

<template>
  <div>
    <p :class="$style.text">好きなPG言語はなんですか？</p>
    <CommentReply />
  </div>
</template>

<style module>
  .text {
    color: yellow;
    text-decoration: underline;
  }
</style>
