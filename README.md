# 项目说明 qiankun-case

用`qiankun`来实现`vue`技术栈的前端微服务

`main`是主项目，`app-vue-hash`是`hash`模式路由的子项目，`app-vue-history`是`history`模式路由的子项目

`qiankun`的开发和打包和正常模式一模一样，它使用一个全局变量`__POWERED_BY_QIANKUN__`来区分微前端模式和正常模式，不需要额外的配置和代码。

具体的原理分析和介绍可以看：[qiankun 微前端方案实践及总结](https://juejin.im/post/6844904185910018062) 和 [qiankun 微前端实践总结（二）](https://juejin.im/post/6856569463950639117)

## 运行和打包

在根目录下：

先安装依赖： `npm install`，再执行`npm run install-all`为所有项目安装依赖，最后执行`npm run start-all`即可启动所有的项目。

如果报错可更新 app-vue-history 里面的 vue && vue-template-compiler ==> npm update vue vue-template-compiler

`npm run build-all`可以打包所有`vue`项目，`jQuery`项目不需要打包。



## 分支介绍

- `master` 分支： `qiankun` 的常规基础用法
- `feature/hash-router` 分支 ：主子项目都是 `hash` 模式
- `feature/abstract-route` 分支 ：主项目同时展示两个子应用的不同页面，子项目使用 abstract 路由
- `feature/routing-page` 分支 ：在主项目的某个路由页面加载子应用
- `feature/share-component` 分支 ：项目间共享组件的例子
- `feature/use-main-app-component` 分支 ：子项目复用主项目的依赖

