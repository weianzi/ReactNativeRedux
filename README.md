# ReactNativeRedux
> * 在项目[ReactNativeWeb](https://github.com/weianzi/ReactNativeWeb) 基础上加入了 Redux，改用ES6语法。
* 借用[react-web](https://github.com/taobaofed/react-web)实现三端（IOS/Android/Web）共用一套逻辑代码（因组件各异，部分代码要分开写），生成原生的IOS/Android应用和Web应用。

## 效果
![效果](https://raw.githubusercontent.com/weianzi/ReactNativeWeb/master/pic.jpg)

## Web效果地址

因跨域，MAC系统终端输入以下代码，启动Chrome
```
open -a "Google Chrome" --args --disable-web-security
```
然后输入
```
http://weianzi.github.io/ReactNativeWeb/web/output/index.html
```

windows下, 请参考：
```
Chrome浏览器如何设置可以解决Ajax跨域
http://jingyan.baidu.com/article/7c6fb4281d685780642c900a.html
```

## 入口

* Web ：index.web.js
* IOS ：index.ios.js
* Android ：index.android.js

## 开发系统

* >= MAC 10.10.5， >= Xcode 7， Android 6.0 (API 23)

## 依赖

* node.js: > "4.0.0"
* npm: > "3.0.0"
* babel: "^6.5.2"
* react: "^0.14.7"
* react-dom: "^0.14.7"
* react-native: "^0.20.0"
* react-web: "^0.2.3"
* ...

## 安装依赖

```
npm i 
```
## Web版本

### 开启web服务

```
npm run web-dev
```

### 打包web页面js文件

```
npm run web-bundle
```
执行之后会在 web/output 目录下生成静态文件


## IOS版本
前提：安装好react native开发环境 [官方](http://facebook.github.io/react-native/docs/getting-started.html#content) [中文](http://reactnative.cn/docs/0.20/getting-started.html#content)

```
用xcode 打开项目 ios/ReactNativeRedux.xcodeproj，然后运行
```

## Android版本
前提：先安装好react native开发环境 [官方](http://facebook.github.io/react-native/docs/getting-started.html#content) [中文](http://reactnative.cn/docs/0.20/getting-started.html#content)

```
进入项目根目录，命令行输入：react-native run-android
```
## 提示
先安装好react native和redux，确定ios/android正常运行后，再安装react-web
```
npm install react-web-cli -g
react-web init <ExistedProjectDir>
```
