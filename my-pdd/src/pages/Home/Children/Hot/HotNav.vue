<template>
    <div class="hotNav">
        <div v-if="homenav.length>0" class="hot-content">
          <div class="nav-content-inner">
            <div class="hot-item" v-for="(item,index) in homenav" :key="index">
             <img :src="item.iconurl" alt="">
             <span>{{item.icontitle}}</span>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "HotNav",
  data() {
    return {
      homeNavList: []
    };
  },
  computed: {
    ...mapState(["homenav"])
  }
};
</script>
<style lang="stylus" scoped>
.hotNav {
  width: 100%;
  // height: 100%;
  background: #F5F5F5;
  padding-bottom: 10px;
  position: relative;

  .hot-content {
    width: 100%;
    overflow-x: scroll;
    background: #fff;

    .nav-content-inner {
      height: 180px;
      width: 720px;
      display: flex;
      flex-wrap: wrap;

      .hot-item {
        width: 90px;
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #666666;

        img {
          width: 40%;
          margin-bottom: 5px;
        }
      }
    }
  }

  .hot-content::-webkit-scrollbar {
    // 隐藏默认导航条
    display: none;
  }
}
</style>
