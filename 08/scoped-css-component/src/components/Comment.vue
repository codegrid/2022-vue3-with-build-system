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

<style scoped>
  p {
    color: yellow;
    text-decoration: underline;
  }
</style> -->

<!-- step2 -->
<!-- <template>
  <div class="container">
    <p>好きなPG言語はなんですか？</p>
    <CommentReply />
  </div>
</template>

<style scoped>
  .container p {
    color: yellow;
    text-decoration: underline;
  }
</style> -->

<!-- step2.5 -->
<!-- <template>
  <div class="container">
    <p>好きなPG言語はなんですか？</p>
    <CommentReply class="child-root" />
  </div>
</template>

<style scoped>
  .container p:not(.child-root) {
    color: yellow;
    text-decoration: underline;
  }
</style> -->

<!-- step3 -->
<!-- <template>
  <div class="container">
    <p>好きなPG言語はなんですか？</p>
    <CommentReply />
  </div>
</template>

<style scoped>
  .container {
    padding: 30px;
    border: solid 1px yellow;
  }
  .container > p {
    color: yellow;
    text-decoration: underline;
  }
</style> -->

<!-- step4.1 -->
<!-- <template>
  <div class="Comment">
    <p>好きなPG言語はなんですか？</p>
    <CommentReply />
  </div>
</template>

<style scoped>
  .Comment {
    padding: 30px;
    border: solid 1px yellow;
  }
  .Comment > p {
    color: yellow;
    text-decoration: underline;
  }
</style> -->

<!-- step5 -->
<template>
  <div class="comment">
    <p class="text">好きなPG言語はなんですか？</p>
    <CommentReply class="reply" />
  </div>
</template>

<style scoped>
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
