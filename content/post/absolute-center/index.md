+++
categories = ["learn"]
date = "2015-12-31T19:26:54+08:00"
description = "一种纯css实现的垂直定位技术，简单方便"
draft = false
image = ""
tags = ["CSS","HTML"]
title = "绝对定位垂直居中"

+++

我们经常使用`margin: 0 auto`来使元素水平居中，垂直居中往往是比较麻烦的地方，然而`margin: auto`也能方便的让元素垂直居中，在申明元素高度的情况下，只需使用下面的 css：

```css
margin: auto;
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
```

注意必须申明元素高度，可以使用%属性和 min-/max-属性。

看下面的示例：

<p data-height="268" data-theme-id="0" data-slug-hash="GoNbmP" data-default-tab="result" data-user="xiaoxiyao" class='codepen'>See the Pen <a href='http://codepen.io/xiaoxiyao/pen/GoNbmP/'>Absolute Centering</a> by xiaoxiyao (<a href='http://codepen.io/xiaoxiyao'>@xiaoxiyao</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

> 参考：[http://www.smashingmagazine.com/2013/08/absolute-horizontal-vertical-centering-css/](http://www.smashingmagazine.com/2013/08/absolute-horizontal-vertical-centering-css/)
