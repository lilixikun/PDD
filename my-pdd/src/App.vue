<template>
  <div id="app">
    <router-view/>
    <tab-bar v-show="$route.meta.showBottomTabBar"></tab-bar>
  </div>
</template>
<script>
import TabBar from "./components/TabBar/TabBar";
export default {
  components: {
    TabBar
  },
  mounted: function() {
    console.log(this.$route);
  }
};
</script>

<style lang="stylus">
#app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  position: relative;
}
</style>
