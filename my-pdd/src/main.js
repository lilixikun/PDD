import Vue from "vue";
import router from "./router";
import store from "./store";
import MintUI from 'mint-ui';
import LyTab from 'ly-tab';
import 'mint-ui/lib/style.css';
import App from "./App.vue";
import {
  Tabbar,
  TabItem
} from 'mint-ui';
Vue.use(MintUI);
Vue.use(LyTab);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");