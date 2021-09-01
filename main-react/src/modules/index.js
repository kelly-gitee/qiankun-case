// 导入qiankun内置函数
import {
  addGlobalUncaughtErrorHandler,
  registerMicroApps, // 注册子应用
  start, // 启动
} from "qiankun";
// 微应用的信息
import apps from "./apps";

/**
 * 注册微应用
 * 第一个参数 - 微应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 微应用加载前
  beforeLoad: (app) => {
    // 加载微应用前，加载进度条
    console.log("before load", app.name);
    return Promise.resolve();
  },
  afterMount: (app) => {
    // 挂载微应用前，进度条加载完成
    console.log("after mount", app.name);
    return Promise.resolve();
  },
});

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event) => {
  console.error(event);
});

// 导出 qiankun 的启动函数
export default start;
