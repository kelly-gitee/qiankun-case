import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/about/',
  },
  {
    path: '/about/*',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue'),
  },
];

const router = new VueRouter({
  // mode: 'hash',
  // base: process.env.BASE_URL,
  routes,
});

export default router;
