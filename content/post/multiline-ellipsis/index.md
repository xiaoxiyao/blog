+++
categories = ["learn"]
date = "2015-11-14T20:59:54+08:00"
description = "纯css实现多行文本溢出显示省略号"
draft = false
image = ""
tags = ["CSS","HTML"]
title = "多行文本溢出显示省略号"

+++

最近工作中遇到需要控制显示的文本长度的问题，css 中的`text-overflow:ellipsis`可以在溢出容器的文本后面自动加上省略号，但是文本必须不能换行：

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

于是在网络上搜寻了一些多行文本的解决方案，找到了一种适合 webkit 内核浏览器的方案，有一个可以直接使用的 WebKit 私有属性`-webkit-line-clamp`。`-webkit-line-clamp`用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的 WebKit 属性：

- `display: -webkit-box;` 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
- `-webkit-box-orient` 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。

```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```

<p data-height="268" data-theme-id="0" data-slug-hash="zvyXmW" data-default-tab="html" data-user="xiaoxiyao" class='codepen'>See the Pen <a href='http://codepen.io/xiaoxiyao/pen/zvyXmW/'>多行文本溢出显示省略号</a> by xiaoxiyao (<a href='http://codepen.io/xiaoxiyao'>@xiaoxiyao</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
