<template>
  <div class="about">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="item in productDetail?.skuInfo?.skus"
        :key="item.stockId"
      >
        <van-image fit="contain" :src="item.img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DetailStoreModule } from "../store";

@Component({
  name: "detail-banner",
})
export default class extends Vue {
  get productDetail() {
    return DetailStoreModule.productDetail;
  }
}
</script>
