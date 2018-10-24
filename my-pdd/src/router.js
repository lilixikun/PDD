import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  //mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/home",
      component: () => import("./pages/Home/Home.vue"),
      children: [{
          path: "hot",
          component: () => import("./pages/Home/Children/Hot/Hot.vue")
        },
        {
          path: '/home',
          redirect: '/home/hot'
        }
      ]
    },
    {
      path: '/recommend',
      component: () => import('./pages/Recommend/Recommend.vue'),
      meta: {
        showBottomTabBar: true
      }
    },
    {
      path: '/search',
      component: () => import('./pages/Search/Search.vue'),
      meta: {
        showBottomTabBar: true
      }
    },
    {
      path: '/chat',
      component: () => import('./pages/Chat/Chat.vue'),
      meta: {
        showBottomTabBar: true
      }
    },
    {
      path: '/me',
      component: () => import('./pages/Me/Me.vue'),
      meta: {
        showBottomTabBar: true
      }
    },
  ]
});