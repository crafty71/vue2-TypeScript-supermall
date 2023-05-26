<template>
  <div id="app">
    <router-view />
    <TabbarCom />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TabbarCom from "./components/tabbar/TabbarCom.vue";

@Component({
  name: "App",
  components: {
    TabbarCom,
  },
})
export default class extends Vue {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
