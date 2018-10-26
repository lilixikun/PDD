<template>
    <div class="hot">
      <mt-swipe :auto="4000" v-if="homecasual.length>0" :style="screenH">
        <mt-swipe-item v-for="(item) in homecasual" :key="item.imgurl">
          <img :src="item.imgurl" alt="" width="100%">
          {{item.imgurl}}
        </mt-swipe-item>
      </mt-swipe>
       <hot-nav></hot-nav>
      <shop-list></shop-list>
    </div>
</template>
<script>
import { mapState } from "vuex";
import HotNav from "./HotNav";
import ShopList from "./ShopList";
export default {
  name: "Hot",
  data() {
    return {
      // 1. 屏幕的宽度
      screenW:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      casualList: []
    };
  },
  components: {
    HotNav,
    ShopList
  },
  computed: {
    ...mapState(["homecasual"]),
    screenH() {
      return {
        width: "100%",
        height: `${this.screenW * 0.37}px`
      };
    }
  },
  mounted: function() {
    this.$store.dispatch("getHomeCasual");
    this.$store.dispatch("getHomenav");
    this.$store.dispatch("getShopList");
  }
};
</script>
<style lang="stylus" scoped>
// .mint-swipe {
// height: 140px;
// }
.hot {
  width: 100%;
  height: 100%;
  padding-top: 40px;
  background: #F5F5F5;
}
</style>
