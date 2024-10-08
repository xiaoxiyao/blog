+++
categories = ["learn"]
date = "2016-04-07"
description = "移动端的工作已经越来越成为前端工作的重要内容，除了平常的项目开发，HTML 头部标签功能，特别是meta标签显得非常重要。"
draft = false
image = ""
tags = ["WebApp","HTML"]
title = "移动web前端常用的meta标签"
+++

* 优先使用最新ie和chrome
```html
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  ```

* 360使用webkit内核(极速模式)
```html
  <meta name="renderer" content="webkit">
  ```

* 禁止百度转码
```html
  <meta http-equiv="Cache-Control" content="no-siteapp" />
  ```

* viewport
  ```html
  <meta name ="viewport" content ="width=device-width,initial-scale=1.0,maximum-scale=1,user-scalable=no" />
  ```
  content属性的详细介绍:
  <table class="mdl-data-table mdl-shadow--2dp">
    <thead>
      <tr>
        <th>属性名</th>
        <th>取值</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>width</td>
        <td>正整数 或 device-width</td>
        <td>定义视口的宽度，单位为像素</td>
      </tr>
      <tr>
        <td>height</td>
        <td>正整数 或 device-height</td>
        <td>定义视口的高度，单位为像素，一般不用</td>
      </tr>
      <tr>
        <td>initial-scale</td>
        <td>[0.0-10.0]</td>
        <td>定义初始缩放值</td>
      </tr>
      <tr>
        <td>minimum-scale</td>
        <td>[0.0-10.0]</td>
        <td>定义缩小最小比例，它必须小于或等于maximum-scale设置</td>
      </tr>
      <tr>
        <td>maximum-scale</td>
        <td>[0.0-10.0]</td>
        <td>定义放大最大比例，它必须大于或等于minimum-scale设置</td>
      </tr>
      <tr>
        <td>user-scalable</td>
        <td>yes/no</td>
        <td>定义是否允许用户手动缩放页面，默认值yes</td>
      </tr>
    </tbody>
  </table>

* 禁止自动识别(电话号码,日期,地址,email)
  ```html
  <meta name="format-detection" content="telephone=no,address=no,date=no,email=no">
  ```


##### ios相关

* 添加到主屏后的标题
  ```html
  <meta name="apple-mobile-web-app-title" content="标题">
  ```

* 添加到主屏后的图标
  ```html
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon.png" />
  ```
  `rel`取值:
    * `apple-touch-icon` 图片自动处理成圆角和高光等效果
    * `apple-touch-icon-precomposed` 禁止系统自动添加效果，直接显示原图   

    `sizes` 默认57x57

* 从主屏启动时启动画面
  ```html
  <link rel="apple-touch-startup-image" sizes="768x1004" href="/splash-screen.png" />
  ```
    * `sizes` 默认320x480
    * iPad 的启动画面是不包括状态栏区域的, iphone包含状态栏区域

* 启用webapp模式
  ```html
  <meta name="apple-mobile-web-app-capable" content="yes" />
  ```

* 设置状态栏背景颜色(webapp模式启用时生效)
  ```html
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  ```
  `content`取值:
    * `default` 默认
    * `black` 黑色
    * `black-translucent` 黑色半透明
  如果设置为 `default` 或 `black` ,网页内容从状态栏底部开始。 如果设置为 `black-translucent` ,网页内容充满整个屏幕，顶部会被状态栏遮挡。

* 添加智能 App 广告条 Smart App Banner
    ```html
    <meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
    ```

##### android 相关

* chrome地址栏和状态栏变色  
  
    ```html
    <meta name="theme-color" content="#db5945">
    ```

##### wp 相关
* 磁贴颜色
    ```html
    <meta name="msapplication-TileColor" content="#000"/>
    ```

* 磁贴图标
    ```html
    <meta name="msapplication-TileImage" content="icon.png"/>
    ```

* 点击无高光
    ```html
    <meta name="msapplication-tap-highlight" content="no">
    ```

##### 其它

```html
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">

<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">

<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">

<!-- UC应用模式 -->
<meta name="browsermode" content="application">

<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">

<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">

<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
```
