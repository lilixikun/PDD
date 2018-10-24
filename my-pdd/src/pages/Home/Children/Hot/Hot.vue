<template>
    <div class="hot">我是热门</div>
</template>
<script>
export default {
  name: "Hot",
  data() {
    return {};
  },
  mounted: function() {
    console.log(this.$route);
  }
};
</script>
<style lang="stylus" scoped>
.hot {
    width: 100%;
    height: 100%;
    padding-top: 46px;
    background: #F5F5F5;
}
</style>
