<!-- step1 -->
<!-- <template>
  <div>
    <p>JavaScriptです。</p>
  </div>
</template>

<style module>
  p {
    color: orange;
  }
</style> -->

<!-- step2 -->
<!-- <template>
  <div :class="$style.container">
    <p>JavaScriptです。</p>
  </div>
</template>

<style module>
  .container p {
    color: orange;
  }
</style> -->

<!-- step2.1 -->
<!-- <template>
  <div :class="$style.container">
    <p>JavaScriptです。</p>
  </div>
</template>

<style module>
  .container > p {
    color: orange;
  }
</style> -->

<!-- step4.1 -->
<template>
  <div :class="$style.CommentReply">
    <p>JavaScriptです。</p>
  </div>
</template>

<style module>
  .CommentReply {
    padding: 10px;
    text-align: right;
    background-color: darkslategray;
  }
  .CommentReply > p {
    color: orange;
  }
</style>
