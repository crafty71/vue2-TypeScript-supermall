<template>
  <div>
    <van-image
      fit="contain"
      :src="require('@/assets/img/home/recommend_bg.png')"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "popular-week",
})
export default class extends Vue {}
</script>

<style lang="less" scoped></style>
