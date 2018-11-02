import Vue from "vue";
import router from "./router";
import store from "./store/store";
import MintUI from "mint-ui";
import LyTab from "ly-tab";
import "mint-ui/lib/style.css";
import App from "./App.vue";
import {
  Swipe,
  SwipeItem,
  Toast
} from 'mint-ui';
Vue.use(MintUI);
Vue.use(LyTab);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Toast);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");