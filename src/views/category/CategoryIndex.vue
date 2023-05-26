<template>
  <div>
    <div class="parent">
      <div class="div1">1</div>
      <div class="div2">2</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.parent {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  height: 100vh;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
  background: pink;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
  background: yellow;
}
</style>
