<template>
  <div class="tab-bar">
    <van-sticky :offset-top="0">
      <van-tabs
        v-model="active"
        style="height: 60px"
        :sticky="true"
        @click="onClick"
        animated
      >
        <van-tab
          :title="item.title"
          v-for="item in tabBarLists"
          :name="item.sort"
          :key="item.title"
        ></van-tab>
      </van-tabs>
    </van-sticky>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { tabBarList } from "@/config/tab-bar-config";
import { HomeStoreModule } from "../store";
import { IHomeData } from "@/service/home/home-data";

@Component({
  name: "tab-bar",
})
export default class extends Vue {
  public active = 0;
  public tabBarLists = tabBarList;

  /**
   * @description: tab点击事件
   * @param {*} name
   * @return {*}
   */
  public onClick(name: string): void {
    HomeStoreModule.setHomeDataMutation({} as IHomeData);
    HomeStoreModule.setType(name);
    HomeStoreModule.setPage(1);
    const params = {
      type: HomeStoreModule.type,
      page: HomeStoreModule.page,
    };
    HomeStoreModule.getHomeDataAction(params);
  }
}
</script>

<style lang="less" scoped>
.tab-bar {
  height: 65px;
}
</style>
