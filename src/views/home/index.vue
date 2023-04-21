<template>
  <div class="home">
    <div class="title">品优购</div>
    <home-banner />
    <van-divider />
    <home-recommend />
    <van-divider />
    <popular-week />
    <van-divider />
    <tab-bar />
    <recommend-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"; // @ is an alias to /src
import { HomeStoreModule } from "./store/index";
import homeBanner from "./childComponent/home-banner.vue";
import homeRecommend from "./childComponent/home-recommend.vue";
import popularWeek from "./childComponent/popular-week.vue";
import tabBar from "./childComponent/tab-bar.vue";
import RecommendList from "./childComponent/recommend-list.vue";

@Component({
  components: {
    homeBanner,
    homeRecommend,
    popularWeek,
    tabBar,
    RecommendList,
  },
})
export default class HomeView extends Vue {
  created() {
    HomeStoreModule.getHomeMultiDataAction();
    HomeStoreModule.getHomeDataAction();
  }
}
</script>

<style lang="less">
.home {
  .title {
    text-align: center;
    background: pink;
    color: #fff;
    height: 40px;
    line-height: 40px;
  }
}
.image {
  width: 100%;
}
</style>
