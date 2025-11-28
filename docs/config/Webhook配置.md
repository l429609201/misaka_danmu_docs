# 🔗 Webhook 配置

Webhook 功能允许御坂网络弹幕服务与其他媒体管理工具自动集成，实现全自动化工作流。

[[toc]]

## 支持的服务

- **Emby** - 媒体服务器
- **Jellyfin** - 开源媒体服务器
- **Plex** - 媒体服务器

## Webhook 工作原理

1. 媒体服务器或下载工具添加/更新媒体文件
2. 触发 Webhook 通知御坂弹幕服务
3. 系统自动识别媒体信息
4. 自动匹配并下载弹幕
5. 弹幕立即可用

## 配置步骤

### 1. 获取 Webhook URL

登录 Web UI，进入 **设置** → **Webhook 配置**，复制 Webhook URL：

```
http://<服务器IP>:7768/api/webhook
```

### 2. 配置 Sonarr

1. 打开 Sonarr Web UI
2. 进入 **Settings** → **Connect**
3. 点击 **+** 添加新连接
4. 选择 **Webhook**
5. 配置：
   - **Name**: Misaka Danmu
   - **URL**: `http://<IP>:7768/api/webhook`
   - **Method**: POST
   - **Triggers**: 勾选 `On Download` 和 `On Upgrade`
6. 测试并保存

### 3. 配置 Radarr

配置方法与 Sonarr 相同：

1. 进入 **Settings** → **Connect**
2. 添加 **Webhook**
3. 填入 URL 和触发条件
4. 保存配置

### 4. 配置 Emby

1. 安装 Emby Webhook 插件
2. 进入 **插件** → **Webhook 配置**
3. 添加新 Webhook：
   - **URL**: `http://<IP>:7768/api/webhook`
   - **Events**: 选择 `Library.New` 和 `Library.Updated`
4. 保存配置

### 5. 配置 Jellyfin

1. 安装 Jellyfin Webhook 插件
2. 进入 **控制台** → **插件** → **Webhook**
3. 添加 Webhook：
   - **Webhook URL**: `http://<IP>:7768/api/webhook`
   - **Events**: 勾选 `Item Added` 和 `Item Updated`
4. 保存配置

### 6. 配置 Plex

1. 需要 Plex Pass 订阅
2. 进入 **Settings** → **Webhooks**
3. 添加 Webhook URL：`http://<IP>:7768/api/webhook`
4. 保存配置

## 高级配置

### 自定义 Webhook 参数

在 Web UI 的 Webhook 配置中，可以设置：

- **自动匹配阈值** - 匹配置信度低于此值时不自动处理
- **通知设置** - Webhook 触发时是否发送通知
- **过滤规则** - 只处理特定类型的媒体

### Webhook 认证

为了安全，可以启用 Webhook 认证：

1. 在 Web UI 生成 Webhook Token
2. 在 Webhook URL 中添加 Token：
   ```
   http://<IP>:7768/api/webhook?token=<YOUR_TOKEN>
   ```

## 测试 Webhook

### 手动测试

使用 curl 命令测试：

```bash
curl -X POST http://<IP>:7768/api/webhook \
  -H "Content-Type: application/json" \
  -d '{
    "eventType": "Test",
    "series": {
      "title": "测试剧集",
      "path": "/media/test.mkv"
    }
  }'
```

### 查看 Webhook 日志

在 Web UI 的 **日志** 页面可以查看 Webhook 调用记录。

## 常见问题

### Webhook 未触发

- 检查 URL 是否正确
- 确认防火墙允许访问
- 查看源服务（Sonarr/Emby 等）的日志
- 测试网络连接：`curl http://<IP>:7768/api/health`

### Webhook 触发但未处理

- 检查 Webhook 日志
- 确认媒体文件路径正确
- 检查是否配置了过滤规则
- 查看系统日志排查错误

### 路径映射问题

如果 Sonarr/Radarr 和弹幕服务的文件路径不同，需要配置路径映射：

1. 进入 **设置** → **路径映射**
2. 添加映射规则：
   - **源路径**: `/downloads/media`
   - **目标路径**: `/media`
3. 保存配置

---

## 📚 相关文档

- **[🎬 元数据源配置](/config/metadata)** - 提高匹配准确率
- **[🤖 AI 功能配置](/config/ai)** - AI 辅助识别
- **[🤖 Telegram Bot](/config/telegram)** - 接收通知
- **[❓ 常见问题](/faq)** - 故障排除

