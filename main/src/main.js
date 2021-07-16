import 'whatwg-fetch';
import 'custom-event-polyfill';
import 'core-js/stable/promise';
import 'core-js/stable/symbol';
import 'core-js/stable/string/starts-with';
import 'core-js/web/url';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { registerMicroApps, start, setDefaultMountApp, initGlobalState } from 'qiankun';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

registerMicroApps(
  [
    {
      name: 'app-vue-hash',
      entry: 'http://localhost:1111',
      container: '#appContainer',
      activeRule: '/app-vue-hash',
      props: { data: { store, router } },
    },
    {
      name: 'app-vue-history',
      entry: 'http://localhost:2222',
      container: '#appContainer',
      activeRule: '/app-vue-history',
      props: { data: store },
    },
    {
      name: 'app-react',
      entry: 'http://localhost:3333',
      container: '#appContainer',
      activeRule: '/app-react',
    },
  ],
  {
    beforeLoad: [
      (app) => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      (app) => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - main]:', value, prev));

setGlobalState({
  ignore: 'main',
  user: {
    name: 'main',
  },
});

setDefaultMountApp('/app-vue-hash');
start();
