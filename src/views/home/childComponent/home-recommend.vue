<template>
  <van-row type="flex" justify="space-around">
    <van-col
      span="4"
      v-for="item in homeMultiData?.recommend?.list"
      :key="item.title"
    >
      <a :href="item.link">
        <van-image fit="contain" :src="item.image" />
        <span>{{ item.title }}</span>
      </a>
    </van-col>
  </van-row>
</template>

<script lang="ts">
import { IHomeMultiDataUse } from "@/service/home/type";
import { Vue, Component } from "vue-property-decorator";
import { HomeStoreModule } from "../store";

@Component({
  name: "home-recommend",
})
export default class extends Vue {
  /**
   * @description: 计算属性 获取轮播图
   * @return {*} IHomeMultiDataUse
   */
  get homeMultiData(): IHomeMultiDataUse {
    return HomeStoreModule.HomeMultiData;
  }
}
</script>

<style lang="less" scoped></style>
