---
title: 关于hexo-leancloud-counter-security配置问题
comments: true
categories:
  - hexo
tags:
  - leancloud配置问题
abbrlink: 313
date: 2021-05-04 22:24:13
description:
keywords:
top:
---

## 关于hexo-leancloud-counter-security配置问题

参考博主的博客配置leancloud：
https://www.jianshu.com/p/e0a719bac963 
在前面配置leancloud都很顺利，但是突然遇到BUG.
输入以下代码后：

    hexo lc-counter register <name> <pass>
出现如下错误：

    $ hexo lc-counter register <name> <pass>
    INFO  Validating config
    FATAL {
      err: TypeError: serverURL option is required for apps from CN region
## 解决方法
<!-- more -->
**一定要确认 Hexo `_config.yml` 中 `leancloud_counter_security` 的 `app_id` 和 `app_key` 都是有效的。
另外一定要和下方这个格式一样输入内容。**

    leancloud_counter_security:
      enable_sync: true
      app_id: <leancloud中的appid>（下图中1）
      app_key: <leancloud中的app_key>（下图中2）
      server_url: <leancloud中的REST API 服务器地址>（下图中3）
      username: <name> （自定义）
      password: <pass> （自定义）
**这里面的username和password要以下代码中的用户名和密码一致才能成功。再次输入。**

       hexo lc-counter register <name> <pass>
       INFO  **** is successfully signed up
**提示成功。**
参考下图
<img src="https://i.ibb.co/60cK1Qt/4563.png" width="80%" height="80%" title="hexo-leancloud-counter-security" alt="hexo-leancloud-counter-security"/>

仅记录自己配置leancloud踩过的坑，这个点有很多博主没有写， 就是 **【server_url: <leancloud中的REST API 服务器地址>】** 项，一定要添加进去。
这个点让我翻了好久，最后在官方文档里得到解决。

**参考以下链接解决：**
https://github.com/theme-next/hexo-leancloud-counter-security
**在下方链接停留了很久，不过也学到了不少东西。**
https://www.jianshu.com/p/e0a719bac963 
**这个问题解决后，回到上面的这个链接，继续完成即可。**

希望本文帮助大家在配置leancloud的时候，少走点弯路。