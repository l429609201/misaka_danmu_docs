---
layout: home
title: 首页
---

<div align="center">
<img alt="logo.png" height="100" width="100" src="/logo.png"/>
<h1>
御坂网络弹幕服务
</h1>
<p align="center">
一个功能强大的自托管弹幕聚合与管理服务，兼容 <a href="https://api.dandanplay.net/swagger/index.html">dandanplay</a> API 规范
</p>

<a href="快速开始">快速开始</a>
|
<a href="客户端配置">客户端配置</a>
|
<a href="config/元数据源配置">元数据配置</a>
|
<a href="常见问题">常见问题</a>
|
<a href="问题反馈">问题反馈</a>
|
<a href="https://github.com/l429609201/misaka_danmu_server">GitHub</a>

<p></p>

[![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github)](https://github.com/l429609201/misaka_danmu_server)
![GitHub License](https://img.shields.io/github/license/l429609201/misaka_danmu_server)
![Docker Pulls](https://img.shields.io/docker/pulls/l429609201/misaka_danmu_server)
[![Telegram](https://img.shields.io/badge/Telegram-misaka__danmu__server-blue?logo=telegram)](https://t.me/misaka_danmaku)

<hr style="height: 1px;">

<img src="/screenshot/主页.png" alt="screenshot" id="screenshot">

<p>支持 <strong>Yamby</strong> <strong>Hills</strong> <strong>小幻影视</strong> <strong>SenPlayer</strong> <strong>Afusekt</strong> <strong>dd-danmaku</strong> 等兼容 <a href="https://api.dandanplay.net/swagger/index.html">dandanplay API</a> 标准的播放器</p>

</div>

<!--@include: ./other.md{2,}-->

## ✨ 核心功能

- **智能匹配**: 通过文件名或元数据（TMDB, TVDB等）智能匹配您的影视文件，提供准确的弹幕
- **Web管理界面**: 提供直观的Web UI，用于搜索导入弹幕、管理媒体库、创建API令牌、配置搜索源优先级、查看后台任务
- **弹幕源管理**: 支持从资源仓库加载或上传离线包安装弹幕源，支持备份和恢复
- **元数据整合**: 支持与 TMDB, TVDB, Bangumi, Douban, IMDb 集成
- **自动化**: 支持通过 Webhook 接收来自 Emby, Jellyfin, Plex 等服务的通知，实现全自动化弹幕导入
- **灵活部署**: 提供 Docker 镜像和 Docker Compose 文件，方便快速部署

<!--@include: ./disclaimer.md{2,}-->

---

## 👨‍💻 贡献者

<a href="https://github.com/l429609201/misaka_danmu_server/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=l429609201/misaka_danmu_server" alt="contributors" />
</a>

---

## 📈 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=l429609201/misaka_danmu_server&type=Date)](https://www.star-history.com/#l429609201/misaka_danmu_server&Date)

---

## 📚 参考项目

- [dandanplayapi](https://api.dandanplay.net/swagger/index.html)
- [danmuku](https://github.com/lyz05/danmaku)
- [emby-toolkit](https://github.com/hbq0405/emby-toolkit)
- [swagger-ui](https://github.com/swagger-api/swagger-ui)
- [Bangumi-syncer](https://github.com/SanaeMio/Bangumi-syncer)
- [imdbsource](https://github.com/wumode/MoviePilot-Plugins/tree/main/plugins.v2/imdbsource)
- [MoviePilot](https://github.com/jxxghp/MoviePilot)
