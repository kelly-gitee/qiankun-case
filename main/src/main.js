import "whatwg-fetch";
import "custom-event-polyfill";
import "core-js/stable/promise";
import "core-js/stable/symbol";
import "core-js/stable/string/starts-with";
import "core-js/web/url";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start, setDefaultMountApp } from "qiankun";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

const getActiveRule = (hash) => (location) => location.hash.startsWith(hash);
registerMicroApps([
  {
    name: "app-vue-hash",
    entry: "http://localhost:1111",
    container: "#appContainer",
    activeRule: getActiveRule("#/app-vue-hash"),
    props: { data: { store, router } },
  },
]);

// setDefaultMountApp("/#/app-vue-hash");
start();
