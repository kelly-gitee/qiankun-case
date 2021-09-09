import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let prefix = '';

// 判断是 qiankun 环境则增加路由前缀
if (window.__POWERED_BY_QIANKUN__) {
  prefix = '/app-vue-hash';
}

const routes = [
  {
    path: prefix + '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: prefix + '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
];

export default routes;
