
# React Native Web

> 借用react-web实现三端（IOS/Android/Web）共用一套逻辑代码（因组件各异，部分代码要分开写），生成原生的IOS/Android应用和Web应用。

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

* >= MAC10.10.5， >= Xcode7，Android 6.0 (API 23)

## 版本要求

* node.js >4.0.0
* npm >3.0.0
* "babel": "^6.5.2"
* "react": "^0.14.7"
* "react-dom": "^0.14.7"
* "react-native": "^0.17.0"
* "react-web": "^0.1.3"

## 安装

```
npm i 
```

## 开启web服务

```
npm run web-dev
```

## 打包web页面js文件

```
npm run web-bundle
```
执行之后会在 web/output 目录下生成静态文件
