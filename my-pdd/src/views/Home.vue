<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <button @click.prevent="close()">关闭</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Indicator } from "mint-ui";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted: function() {
    console.log(
      "mounted：此时，组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了"
    );
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle"
    });
    setTimeout(() => {
      Indicator.close();
    }, 2000);
  },
  methods: {
    close() {}
  }
};
</script>
