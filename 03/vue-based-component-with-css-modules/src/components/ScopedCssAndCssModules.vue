<template>
  <p class="normalColor">normal</p>
  <p :class="$style.alertColor">alert</p>
</template>

<style scoped>
  .normalColor {
    color: silver;
  }
</style>

<style module>
  .alertColor {
    color: red;
  }
</style>
