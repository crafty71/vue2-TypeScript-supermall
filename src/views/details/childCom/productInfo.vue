<template>
  <van-panel :desc="productDetail?.skuInfo?.priceRange">
    <template #header>
      <p class="title">{{ productDetail?.skuInfo?.title }}</p>
    </template>
    <template #default>
      <div class="title">
        <span class="new-price">{{ productDetail?.skuInfo?.priceRange }} </span>
        <span class="old-price">{{
          productDetail?.skuInfo?.defaultPrice
        }}</span>
      </div>
      <div class="describe">
        <van-row>
          <van-col
            span="8"
            v-for="(item, index) in productDetail?.columns"
            :key="index"
            >{{ item }}</van-col
          >
        </van-row>
      </div>
    </template>
    <template #footer>
      <div class="footer">
        <van-row>
          <van-col
            :span="24 / productDetail?.shopInfo?.services?.length"
            v-for="item in productDetail?.shopInfo?.services"
            :key="item.name"
            >{{ item.name }}</van-col
          >
        </van-row>
      </div>
    </template>
  </van-panel>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DetailStoreModule } from "../store";

@Component({
  name: "product-info",
})
export default class extends Vue {
  get productDetail() {
    return DetailStoreModule.productDetail;
  }
}
</script>

<style lang="less" scoped>
.title {
  text-align: left;
  margin: 20px;
  .new-price {
    color: #fb5978;
    font-size: 35px;
  }
  .old-price {
    text-decoration: line-through;
  }
}

.describe {
  margin: 20px;
  font-size: 14px;
}

.footer {
  font-size: 14px;
}
</style>
