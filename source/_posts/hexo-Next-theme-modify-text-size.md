---
title: hexo(Next主题)修改文字大小
comments: true
categories:
  - blog
tags:
  - 字体修改
  - Next主题
  - hexo
  - next
abbrlink: 48438
date: 2021-05-04 17:48:25
description: 在hexo(Next主题)下，其默认的字体还是有点大的，那么如何如何修改文字大小呢？（版本hexo：5.4.0、next：8.3.0）
keywords:
top: 
---

在hexo搭建完成后，使用next主题，发现有些字体过大，比如标题下面提示文章发表时间、分类、标签等字体。以下提出我的修改方式（版本hexo：5.4.0、next：8.3.0）。
默认建好之后，如下图所示，字体有点大。

<img src="https://i.ibb.co/HhdvjGy/hexo-next-theme.png" width="50%" height="50%" title="hexo标题" alt="hexo标题"/>


<!--more-->
首先去主题配置文件`_config.yml`查找Font以便于修改字体大小。通过搜寻，可以看到以下的结果：

代码如下：

    font:
      enable: true
    
      # Uri of fonts host, e.g. https://fonts.googleapis.com (Default).
      host:
    
      # Font options:
      # `external: true` will load this font family from `host` above.
      # `family: Times New Roman`. Without any quotes.
      # `size: x.x`. Use `em` as unit. Default: 1 (16px)
    
      # Global font settings used for all elements inside <body>.
      global:
        external: true
        family: Monda
        size: 16px
    
      # Font settings for site title (.site-title).
      title:
        external: true
        family: 
        size:
    
      # Font settings for headlines (<h1> to <h6>).
      headings:
        external: true
        family: Roboto Slab
        size:
    
      # Font settings for posts (.post-body).
      posts:
        external: true
        family: 
        size: 16px
    
      # Logo 字体
      logo:
        external: true
        family: Lobster Two
        size: 24
    
      # Font settings for <code> and code blocks.
      codes:
        external: true
        family: PT Mono
可以看出只有全局、题目、多级标题、文章、代码的字体设置，并没有细致到我们需要的位置，于是我思考一定有一个地方设置了多种不同情况下所用到字体的大小。通过各方面的搜索，发现在`themes\next\source\css\_variables`下的`base.styl`中有这么一块：

    // Font size
    $font-size-base           = (hexo-config('font.enable') and hexo-config('font.global.size') is a 'unit') ? unit(hexo-config('font.global.size'), em) : 1em;
    $font-size-smallest       = .75em;
    $font-size-smaller        = .8125em;
    $font-size-small          = .875em;
    $font-size-medium         = 1em;
    $font-size-large          = 1.125em;
    $font-size-larger         = 1.25em;
    $font-size-largest        = 1.5em;

看到了和我猜想一样的设置了不同情况下的字体的大小，其中`font-size-smallest`控制的就是红框中的字体大小，我进行了如下修改：

    $font-size-smallest       = .65em;
    $font-size-smaller        = .75em;
    $font-size-small          = .8em;

结果如下：
<img src="https://i.ibb.co/Hn0QYMZ/hexo-font2.png" width="50%" height="50%" title="hexo标题" alt="hexo标题"/>


至此就完成了文字大小的修改。
里面剩下的设置就自由发挥吧。
