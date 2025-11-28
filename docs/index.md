---
layout: home
title: 首页
hero:
  name: 御坂网络弹幕服务
  text: 自托管弹幕聚合与管理服务
  tagline: 一个功能强大的弹幕（Danmaku）聚合与管理服务，兼容 dandanplay API 规范
  image:
    src: /logo.png
    alt: 御坂网络弹幕服务
  actions:
    - theme: brand
      text: 快速开始
      link: /快速开始
    - theme: alt
      text: 客户端配置
      link: /客户端配置
    - theme: alt
      text: GitHub
      link: https://github.com/l429609201/misaka_danmu_server
features:
  - icon: 🎯
    title: 智能匹配
    details: 通过文件名或元数据（TMDB, TVDB等）智能匹配您的影视文件，提供准确的弹幕
  - icon: 🌐
    title: Web管理界面
    details: 提供直观的Web UI，用于搜索导入弹幕、管理媒体库、配置API令牌和系统设置
  - icon: 🔌
    title: 弹幕源管理
    details: 支持从资源仓库加载或上传离线包来安装弹幕源，支持备份和恢复功能
  - icon: 📚
    title: 元数据整合
    details: 支持与 TMDB, TVDB, Bangumi, Douban, IMDb 集成，丰富您的媒体信息
  - icon: 🤖
    title: 自动化
    details: 支持通过 Webhook 接收来自 Sonarr, Radarr, Emby 等服务的通知，实现全自动化
  - icon: 🐳
    title: 灵活部署
    details: 提供 Docker 镜像和 Docker Compose 文件，方便快速部署
---

<div align="center" style="margin-top: 40px;">

## 📚 文档导航

### 快速入门
- **[🚀 快速开始](/快速开始)** - Docker Compose 一键部署指南
- **[📱 客户端配置](/客户端配置)** - 播放器弹幕接口配置

### 功能配置
- **[🎬 元数据源配置](/config/元数据源配置)** - TMDB, TVDB, Bangumi 等 API 密钥配置
- **[🤖 AI 功能配置](/config/AI功能配置)** - AI 智能匹配和识别增强配置
- **[🔗 Webhook 配置](/config/Webhook配置)** - Emby/Jellyfin/Plex 自动化配置
- **[🤖 Telegram Bot](/config/Telegram机器人)** - 机器人集成指南

### 高级功能
- **[🎬 弹幕功能配置](/advanced/弹幕功能配置)** - Token管理、输出控制、存储配置等
- **[🔧 弹幕源管理](/advanced/弹幕源管理)** - 弹幕源加载、备份与恢复

### 运维与优化
- **[⚡ MySQL 优化](/ops/MySQL内存优化)** - 内存优化配置指南
- **[❓ 常见问题](/常见问题)** - 故障排除与解决方案

</div>
