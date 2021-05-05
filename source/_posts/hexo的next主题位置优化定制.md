---
title: hexo的next主题位置优化定制（缩小距离）
comments: true
categories:
  - blog
tags:
  - hexo
  - next
  - Next主题
  - 位置优化
description: >-
  hexo的next主题默认下，博文标题与描述，文章之间的距离比较大，那怎么缩小呢？（版本hexo：5.4.0、next：8.3.0）首页每个博文展示之间的宽度太宽？我怎么样才能调窄一些让它看起来紧凑一些？看着next的布局中内容展示区太窄，如何定制next主题阅读器宽度？
keywords: 缩小博文标题与描述之间的距离 缩小描述与文章之间的距离
abbrlink: 14522
date: 2021-05-05 13:26:05
top:
---
我也是刚开始使用next主题，还需要慢慢折腾，在折腾过程中，把遇到的问题记录下来，并附上解决过程，希望能帮助遇到同样问题的新手们。
## 调整首页博文之间的间距

### 博文间距的距离

想让首页的博文之间的间距缩小一些，看着紧凑些，要如何进行处理呢？我们只需要修改themes\next\source\css_variables\base.styl文件内的post-eof-margin-top和post-eof-margin-bottom这两个值，影响的是博文之间分割线的上下间距，如果想紧凑就调小，如果想宽松就是放大。

    //  .post-expand .post-eof
    //  In Muse scheme, margin above and below the post separator
    $post-eof-margin-top          = 80px; //  or 160px for more white space;
    $post-eof-margin-bottom       = 60px; //  or 120px for less white space;

<!--more-->
### 博文描述与全文阅读之间的间距
看着博文描述与全文阅读按钮之间的间距太宽？这里也是可以修改的，需要修改的文件路径是themes\next\source\css_common\components\post\post-header.styl，查找并调整。

    .posts-expand .post-header {
      font-size: $font-size-large;
      margin-bottom: 10px;
      text-align: center;
    }

### 调整博文作者行和博文描述的间距
感觉博文作者行与博文描述间的具体太宽？或者你感觉还不够？怎么办呢？其实只需要修改themes\你的主题\source\css_common\components\post\post-header.styl文件内的

    .posts-expand .post-meta-container {
      color: $grey-dark;
      font-family: $font-family-posts;
      font-size: $font-size-smallest;
      margin-top: 3px;
    //这个值是是修改博文作者行与上面博文标题的间距的，你可以调整试一下
      .post-description {
        font-size: $font-size-small;
        margin-top: 2px;  
    //修改这里的这个的大值小就可以实现修改博文作者行与博文描述间的距离
      }
## 在侧边栏添加邮箱

在**主题配置文件**  source/_data/next.yml 中添加social配置：
```
# Social links
social:
  Email: mailto:gamesdoa@gmail.com

social_icons:
  enable: true
  Email: envelope
```
文章内容宽度还在慢慢折腾，有其他问题随时补充。
改了好几个地方还是不能调整，找到方法后更新。