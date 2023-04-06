<script setup>
  import CommentReply from './CommentReply.vue';
</script>

<!-- step1 -->
<!-- <template>
  <div>
    <p>好きなPG言語はなんですか？</p>
    <CommentReply />
  </div>
</template>

<style module>
  p {
    color: yellow;
    text-decoration: underline;
  }
</style> -->

<!-- step2 -->
<!-- <template>
  <div :class="$style.container">
    <p>好きなPG言語はなんですか？</p>
    <CommentReply />
  </div>
</template>

<style module>
  .container p {
    color: yellow;
    text-decoration: underline;
  }
</style>
 -->
<!-- step2.1 -->
<!-- <template>
  <div :class="$style.container">
    <p>好きなPG言語はなんですか？</p>
    <CommentReply />
  </div>
</template>

<style module>
  .container > p {
    color: yellow;
    text-decoration: underline;
  }
</style> -->

<!-- step5 -->
<template>
  <div :class="$style.comment">
    <p :class="$style.text">好きなPG言語はなんですか？</p>
    <CommentReply :class="$style.reply" />
  </div>
</template>

<style module>
  .comment {
    padding: 30px;
    border: solid 1px yellow;

    /* 追加 */
    display: grid;
    grid-template:
      'text reply' auto
      / 50% auto;
    gap: 10px;
  }
  .text {
    color: yellow;
    text-decoration: underline;

    /* 追加 */
    grid-area: text;
  }
  /* 追加 */
  .reply {
    grid-area: reply;
  }
</style>
