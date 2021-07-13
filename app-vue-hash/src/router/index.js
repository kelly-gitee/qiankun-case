import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RouterView from "../components/RouterView.vue";

Vue.use(VueRouter);

// let prefix = ''

// // 判断是 qiankun 环境则增加路由前缀
// if (window.__POWERED_BY_QIANKUN__) {
//   prefix = '/micro/vue'
// }

// const routes = [
//   {
//     path: prefix + '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: prefix + '/about',
//     name: 'about',
//     component: () => import('../views/About.vue')
//   }
// ]

const routes = [
  {
    path: "/app-vue-hash",
    name: "RouterView",
    component: RouterView,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
    ],
  },
];

export default routes;
