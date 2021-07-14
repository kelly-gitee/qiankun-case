import "./public-path";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./router";
import store from "./store";

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render({ data = {}, container } = {}) {
  router = new VueRouter({
    routes,
  });
  instance = new Vue({
    router,
    store,
    data() {
      return {
        parentRouter: data.router,
        parentVuex: data.store,
      };
    },
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#appVueHash") : "#appVueHash");
  // 判断 qiankun 环境则进行路由拦截，判断跳转路由是否有 /app-vue-hash 开头前缀，没有则加上
  if (window.__POWERED_BY_QIANKUN__) {
    router.beforeEach((to, from, next) => {
      if (!to.path.includes("/app-vue-hash")) {
        next({
          path: "/app-vue-hash" + to.path,
        });
      } else {
        next();
      }
    });
  }
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
//测试全局变量污染
console.log("window.a", window.a);

export async function bootstrap() {
  console.log("vue app bootstraped");
}

export async function mount(props) {
  console.log("props from main framework", props.data);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
