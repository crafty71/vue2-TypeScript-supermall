<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in homeMultiData?.banner?.list" :key="item.acm">
      <img :src="item?.image" :alt="item.title" class="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { IHomeMultiDataUse } from "@/service/home/type";
import { Component, Vue } from "vue-property-decorator";
import { HomeStoreModule } from "../store";

@Component({
  name: "home-banner",
})
export default class extends Vue {
  /**
   * @description: 计算属性 获取轮播图
   * @return {*}
   */
  get homeMultiData(): IHomeMultiDataUse {
    return HomeStoreModule.HomeMultiData;
  }
}
</script>

<style lang="less" scoped></style>
