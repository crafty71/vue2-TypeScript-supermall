<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    :immediate-check="false"
  >
    <van-cell>
      <van-row>
        <van-col
          span="12"
          v-for="item in homeData?.list"
          :key="item.iid + item.acm"
        >
          <van-card
            :price="item.price"
            :title="item.title"
            :origin-price="item.orgPrice"
            :thumb="item.show.img"
            @click="handleCardClick(item.iid)"
          />
        </van-col>
      </van-row>
    </van-cell>
  </van-list>
</template>

<script lang="ts">
import { IHomeData } from "@/service/home/home-data";
import { Component, Vue } from "vue-property-decorator";
import { HomeStoreModule } from "../store";
import { getHomeData } from "@/service/home";

@Component({
  name: "recommend-list",
})
export default class extends Vue {
  public loading = false;
  public finished = false;

  /**
   * @description: 获取首页数据
   * @return {*}
   */
  get homeData(): IHomeData {
    return HomeStoreModule.homeData;
  }

  /**
   * @description: 下拉刷新事件
   * @return {*}
   */
  public async onLoad(): Promise<void> {
    const pages = HomeStoreModule.page + 1;
    HomeStoreModule.setPage(pages);
    const params = {
      type: HomeStoreModule.type,
      page: HomeStoreModule.page,
    };
    const res = await getHomeData(params);
    this.homeData.list = [...this.homeData.list, ...res.data.list];
    this.loading = false;
    if (this.homeData.isEnd) {
      this.finished = true;
    }
  }
  public handleCardClick(id: string) {
    this.$router.push(`/detail/${id}`);
  }
}
</script>

<style lang="less" scoped></style>
