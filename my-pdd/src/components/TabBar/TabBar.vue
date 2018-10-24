<template>
    <div class="bottom-tab">
        <span class="tab-item" @click="rouerChange('/home')">
            <img :src="this.$route.path.match('/home')?tabBarImgArr[0].selected: tabBarImgArr[0].normal" alt="" srcset="">
            <span :class="{onSelect:this.$route.path.match('/home')}">首页</span>
        </span>
         <span class="tab-item" @click="rouerChange('/recommend')">
            <img :src="this.$route.path.match('/recommend')?tabBarImgArr[1].selected: tabBarImgArr[1].normal" alt="" srcset="">
            <span :class="{onSelect:this.$route.path.match('/recommend')}">推荐</span>
        </span>
         <span class="tab-item" @click="rouerChange('/search')">
            <img :src="this.$route.path.match('/search')?tabBarImgArr[2].selected: tabBarImgArr[2].normal" alt="" srcset="">
            <span :class="{onSelect:this.$route.path.match('/search')}">搜索</span>
        </span>
         <span class="tab-item" @click="rouerChange('/chat')">
            <img :src="this.$route.path.match('/chat')?tabBarImgArr[3].selected: tabBarImgArr[3].normal" alt="" srcset="">
            <span :class="{onSelect:this.$route.path.match('/chat')}">购物车</span>
        </span>
         <span class="tab-item" @click="rouerChange('/me')">
            <img :src="this.$route.path.match('/me')?tabBarImgArr[4].selected: tabBarImgArr[4].normal" alt="" srcset="">
            <span :class="{onSelect:this.$route.path.match('/me')}">我的</span>
        </span>
    </div>
</template>
<script>
export default {
  name: "TabBar",
  data() {
    return {
      tabBarImgArr: [
        {
          normal: require("../../../static/img/icon_home.png"),
          selected: require("../../../static/img/icon_home_selected.png")
        },
        {
          normal: require("../../../static/img/icon_intro.png"),
          selected: require("../../../static/img/icon_intro_selected.png")
        },
        {
          normal: require("../../../static/img/icon_search.png"),
          selected: require("../../../static/img/icon_search_selected.png")
        },
        {
          normal: require("../../../static/img/icon_chat.png"),
          selected: require("../../../static/img/icon_chat_selected.png")
        },
        {
          normal: require("../../../static/img/icon_mine.png"),
          selected: require("../../../static/img/icon_mine_selected.png")
        }
      ]
    };
  },
  methods: {
    rouerChange(path) {
      this.$router.replace(path);
    }
  }
};
</script>
<style scoped lang="stylus">
.bottom-tab {
    width: 100%;
    height: 50px;
    position: fixed;
    display: flex;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;

    .tab-item {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #666;

        img {
            width: 30%;
            margin-bottom: 2px;
        }

        .onSelect {
            color: red;
        }
    }
}
</style>

