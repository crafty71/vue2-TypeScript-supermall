<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/category"
        >分类</van-tabbar-item
      >
      <van-tabbar-item icon="search" replace to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/mine"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Tabbar",
})
export default class extends Vue {
  public active = 0;
}
</script>

<style lang="less" scoped></style>
