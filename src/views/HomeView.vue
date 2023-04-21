<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { getHomeMultiData } from "@/service/home";

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  private getHomeMultiData = async () => {
    const res = await getHomeMultiData();
    console.log(res);
  };
  created() {
    this.getHomeMultiData();
  }
}
</script>
