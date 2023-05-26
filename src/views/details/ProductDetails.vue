<template>
  <div class="about">
    <detail-banner />
    <product-info />
    <shop-info />
    <detail-images-info />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DetailStoreModule } from "./store";
import detailBanner from "./childCom/detailBanner.vue";
import productInfo from "./childCom/productInfo.vue";
import shopInfo from "./childCom/shopInfo.vue";
import detailImagesInfo from "./childCom/detailImagesInfo.vue";

@Component({
  name: "productDetail",
  components: {
    detailBanner,
    productInfo,
    shopInfo,
    detailImagesInfo,
  },
})
export default class extends Vue {
  public id = this.$route.params.id;

  get productDetail() {
    return DetailStoreModule.productDetail;
  }

  created() {
    DetailStoreModule.getProductDetailAction(this.id);
  }
}
</script>
