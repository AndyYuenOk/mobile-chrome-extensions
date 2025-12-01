# Chrome 移动端扩展

通过 AdGuard 拦截 Chrome HTTPS 请求并注入 Tampermonkey 脚本

实现 Chrome 移动端使用 Tampermonkey 脚本

AdGuard 过滤广告 + FlClash 代理教程

# 推荐脚本

**现在 Tampermonkey 很多脚本不是为 AdGuard 设计的，仅有部分能正常安装使用**

希望有更多人使用到 Chrome 脚本，能有更多脚本适配 AdGuard

这里推荐一些能用的，好用的 AdGuard 脚本，希望能帮到更多人，如果你有好用的脚本欢迎反馈

| 脚本 | 主要功能 |
| --- | --- |
| [知乎手机网页优化](https://greasyfork.org/scripts/389371) | 阻止网页自动跳转应用 |
| [阻止跳转APP for 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili](https://greasyfork.org/scripts/491579) | 阻止网页自动跳转应用 |
| [自动展开](https://greasyfork.org/scripts/438656) | 自动展开文档隐藏部分 |
| [骚扰拦截](https://greasyfork.org/scripts/440871) | 自动拦截或删除下载弹窗、悬浮按钮等元素 |
| [聚合搜索引擎切换导航 + GitHub搜索结果增强(移动端优化)](https://greasyfork.org/scripts/513481) | 搜索引擎切换 |
| [Bilibili - 优化未登录情况下的移动网页端](https://greasyfork.org/scripts/497732) | 播放视频，查看评论 |

---

**前言**

5202年了，移动 Chrome 还不支持扩展，是技术原因吗，肯定不是，是利益问题

每隔一段时间我都会去搜一下移动 Chrome 支持扩展的消息，很可惜未来一段时间都没希望。

最近偶然间发现安卓 AdGuard + Chrome 能使用 Tampermonkey 一些扩展，但对我来说也足够了

因为在安装配置过程中有很多问题，网上资料又很少，所以写下此教程

**为什么要使用扩展**

当然是要治一下国内移动网页毒瘤啦，比如知乎、哔哩哔哩
 
如果你手机安装了相关应用，用 Chrome 打开移动网页会自动转跳到应用，并且自动关闭网页，相当恶心

**为什么要使用 chrome**

用 Chome 的主要原因是同步功能，这是其他浏览器做不到的

---

# Chome 脚本

Chome 使用 Tampermonkey 脚本，必须要安装 AdGuard

## 安装应用，授权获取应用列表

AdGuard 必须是付费版本，安装完成后，先不要打开，先授权

在国产系统安装 AdGuard 完成后，可能不会提示授权，要手动打开获取应用列表权限

授权成功后，打开应用直接点击【开始安全浏览网页】进入应用，不用微调

## 安装 CA 证书，开启 HTTPS 过滤

点击【有些广告未被拦截。了解如何修复此问题。】->【继续】->【下一步】->【保存证书】

按照步骤安装 CA 证书，安装成功后返回应用，会提示【HTTPS 过滤已激活】

## 设置应用权限和过滤

这里建议关闭所有应用代理，只代理 Chrome

点击【应用管理】，点击右上角菜单【暂停所有流量的路由】

然后搜索 Chrome，打开【通过 AdGuard 路由流量】

## 安装 Tampermonkey 扩展

 * 仅有部分脚本能正常安装使用

 阻止知乎跳转到应用
 
 - 搜索脚本

   https://greasyfork.org

   或者使用镜像

   https://home.greasyfork.org.cn

   https://scriptcat.org/

   点击【安装此脚本】按钮会打开 js 代码页面

   【有梯子】复制页面链接
   
   【无梯子】保存当前 js 文件

- 安装扩展
  
  点击【设置】->【过滤】->【扩展】->【添加扩展程序】->【从文件或 URL 导入】

  【有梯子】填脚本链接，ps:先开启clash代理adguard安装完后再关闭clash
  
  【无梯子】点击浏览选择脚本文件

开启 AdGuard VPN 就可以使用了

如果没有生效，手动结束 AdGuard Chrome 运行并重新打开，经常改一些配置会出现奇奇怪怪问题，一般重新打开都能解决

到此基本可以在 Chrome 使用脚本了

---

# Chrome 脚本 + AdGuard 过滤广告 + FlClash 代理

这里教程使用 FlCash 0.8.91、AdGuard 4.14.15 版本，其他版本不保证

FlClash https://t.me/FlClash/1100

AdGuard https://liteapks.com/adguard-2.html

# FlClash

这里是全新安装后的默认配置，没有修改任何配置，配置不对容易出问题

## 基础配置

1. 添加自己的订阅

2. 【工具】->【进阶配置】->【网络】->【VPN】关闭通过VpnService自动路由系统所有流量

3. 【工具】->【进阶配置】->【DNS】->【覆写DNS】开启覆盖配置中的DNS选项

## DNS 模式【重要】

这里有两种方式配合 AdGuard 使用，FakeIp 和 RedirHost 模式，按需配置

推荐使用 RedirHost 模式

### FakeIp 模式

- 对于需要代理应用来说，少一次 dns 解析请求，返回的都是假 ip，理论上会更快

- 在 FakeIp 模式下，需要在【Fakeip过滤】中添加 local.adguard.org 域名

### RedirHost 模式

- 对于需要代理应用来说，多一次 dns 解析请求，返回的都是真 ip，理论上问题更少

- 【遵守规则】DNS连接跟随rules,需配置proxy-server-nameserver，开启此选项

- 【DNS模式】选择 redirHost

- 开启 sniffer

  - 【工具】->【进阶配置】->【脚本】->【添加】[sniffer 脚本](https://raw.githubusercontent.com/AndyYuenOk/mobile-chrome-extensions/refs/heads/main/sniffer.js)

- 覆写订阅配置

  - 【配置】->【订阅菜单】->【更多】->【覆写】->【脚本】，选择刚才添加的脚本

### 开启代理服务

要在仪表盘开启代理服务才可以，不要忘了开启服务

# AdGuard

## 设置应用代理

关闭所有应用代理，【应用管理】->【暂停所有流量的路由】

只开启需要过滤广告的应用，如小红书、哔哩哔哩等，翻墙应用Play Store、Chrome等，避免其他应用使用出现问题。

## 设置代理服务器

点击【设置】->【过滤】->【网络】->【代理】->【代理服务器】->【添加代理】

代理类型 SOCKS5， 代理主机 127.0.0.1，代理端口 7890，开启【通过 SOCKS5 路由 UDP】，关闭【使用 FakeDNS】

## 只过滤广告的应用不走代理服务器

- FlClash RedirHost 模式

过滤广告的应用，如小红书、哔哩哔哩等，建议关闭【通过代理路由应用程序】，这样应用不会走代理服务器，速度更快

- FlClash FakeIp 模式

过滤广告的应用必须开启【通过 adguard 路由流量】选项，因为 clash 返回的都是假 ip，应用请求必须代理到 clash

---

* 如果出现应用打不开，上网慢，主要还是 DNS 的问题
