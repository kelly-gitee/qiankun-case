import Home from "../views/Home/home";
import About from "../views/About/about";

let prefix = "";
// 判断是 qiankun 环境则增加路由前缀
if (window.__POWERED_BY_QIANKUN__) {
  prefix = "/app-react";
}

const Router = [
  {
    path: prefix + "/home",
    component: Home,
  },
  {
    path: prefix + "/about",
    component: About,
  },
];

export default Router;
