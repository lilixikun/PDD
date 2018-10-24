<template>
  <div class="home">
    <ly-tab
    v-model="selectedId"
    :items="items"
    :options="options"
    @change="change"
    class="flex"
    >
    </ly-tab>
    <router-view/>
  </div>
 
</template>
  
<script>
export default {
  name: "Home",
  data() {
    return {
      selectedId: 0,
      items: [
        { label: "热门", path: "/home/hot" },
        { label: "服饰", path: "/home/dress" },
        { label: "鞋包", path: "/home/bag" },
        { label: "母婴", path: "/home/mbaby" },
        { label: "百货", path: "/home/general" },
        { label: "食品", path: "/home/food" },
        { label: "内衣", path: "/home/shirt" },
        { label: "男装", path: "/home/man" },
        { label: "电器", path: "/home/ele" }
      ],
      options: {
        activeColor: "#1d98bd"
      }
    };
  },
  methods: {
    change(item, index) {
      this.$router.replace(item.path);
    }
  },
  mounted: function() {
    console.log(this.$route);
  }
};
</script>
<style scoped lang="stylus">
.home {
  width: 100%;
  height: 100%;
  background: #f5f5f5;

  .flex {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
  }
}
</style>

