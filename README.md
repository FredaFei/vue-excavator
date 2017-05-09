## Vue.js实现一个汽车租售的电商系统

## 环境搭建
 
 - **基础环境**
 - node -- 最新稳定版(某些插件对版本的要求)
 - [nrm2](https://github.com/Pana/nrm) -- NPM registry manager, fast switch between different registries: npm, cnpm, nj, taobao
 - **浏览器**
 - chrome，插件[Vue.js devtools](https://github.com/vuejs/vue-devtools)
 - **接口管理平台**
 - [rap](http://thx.github.io/RAP/study.html)
 - **模拟数据**
 - [mockjs](http://mockjs.com/)
 
## vue-cli构建项目涉及的技术栈
 - mvvm库: vue2
 - 包管理工具: npm、yarn
 - 构建工具: webpack2
 - Js语言相关: ES2015、ES2016
 - UI库：Element
 - 编译工具: babel
 - css预处理器: sass、postcss
 - 模块化规范: ES6 Module、CommonJS
 - 接口管理平台：rap

## vue技术栈

 - vue
 - vue-router
 - vue-resource [用axios替代了]
 - vuex
 - vue-loader
 - vue-cli
 - vue-devtools

**项目开发目录**
```
|...
|- src [项目主要开发模块]
    |
    |- component[组件]
    |- |- foot  [底部组件]
    |- |- top [头部组件]
    |- |- ... [其他组件]
    |
    |- modules[数据模型]
    |- |- js [js文件]
    |- |- icon [icon样式]
    |- |- scss [公共样式]
    |- pages
    |- |- index [主页]
    |- |- | - index.html 
    |- |- product [产品]
    |- |- | - product.html 
    |- |- login [登录]
    |- |- | - login.html
    |- |- ... [其他页面]
|...

```

## 项目涉及的UI库
 + 饿了么：[Element](http://element.eleme.io/#/zh-CN)

## 其他基于vue的UI库

 - [mint-ui](http://mint-ui.github.io/#!/zh-cn) 移动端组件库
 - [WeUI](https://github.com/weui/weui)
 - [iview](https://www.iviewui.com/) 主要服务于 PC 界面的中后台产品
 - [museui](http://www.muse-ui.org/#/index) Material Desigin

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
 