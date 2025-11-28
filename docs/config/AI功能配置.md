# 🤖 AI 功能配置

AI 功能可以帮助系统更智能地识别和匹配媒体文件，提高弹幕匹配的准确率。

[[toc]]

## AI 功能介绍

御坂网络弹幕服务的 AI 功能包括：

- **智能文件名识别** - 从复杂的文件名中提取关键信息
- **模糊匹配** - 处理文件名变体和别名
- **自动学习** - 从用户修正中学习，提高准确率
- **多语言支持** - 识别中文、日文、英文等多种语言

## 支持的 AI 服务

### OpenAI

**推荐指数**：⭐⭐⭐⭐⭐

**配置步骤**：

1. 获取 OpenAI API Key：
   - 访问 [OpenAI Platform](https://platform.openai.com/)
   - 注册并登录
   - 进入 **API Keys** 页面
   - 创建新的 API Key

2. 在系统中配置：
   - 登录 Web UI
   - 进入 **设置** → **AI 配置**
   - 选择 **OpenAI**
   - 填入 API Key
   - 选择模型（推荐 `gpt-3.5-turbo` 或 `gpt-4`）
   - 保存配置

### Azure OpenAI

**推荐指数**：⭐⭐⭐⭐

**配置步骤**：

1. 在 Azure Portal 创建 OpenAI 资源
2. 获取 Endpoint 和 API Key
3. 在系统中配置：
   - 选择 **Azure OpenAI**
   - 填入 Endpoint
   - 填入 API Key
   - 填入 Deployment Name
   - 保存配置

### 其他兼容 OpenAI API 的服务

支持任何兼容 OpenAI API 格式的服务，如：

- **Claude** (通过代理)
- **本地部署的 LLM** (如 Ollama)
- **第三方 API 服务**

**配置步骤**：

1. 选择 **自定义 API**
2. 填入 API Endpoint
3. 填入 API Key（如需要）
4. 选择或填入模型名称
5. 保存配置

## 配置示例

### OpenAI 配置

```yaml
ai:
  provider: openai
  api_key: sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  model: gpt-3.5-turbo
  temperature: 0.3
  max_tokens: 500
```

### 本地 Ollama 配置

```yaml
ai:
  provider: custom
  endpoint: http://localhost:11434/v1
  model: llama2
  temperature: 0.3
```

## 功能开关

可以在 Web UI 中控制 AI 功能的使用场景：

- **自动匹配时使用 AI** - 新增媒体时自动调用 AI 识别
- **搜索时使用 AI** - 手动搜索时使用 AI 优化结果
- **批量处理时使用 AI** - 批量导入时使用 AI

## 性能优化

### 降低 API 调用成本

1. **启用缓存** - 相同文件名不重复调用
2. **调整 temperature** - 降低到 0.1-0.3 提高稳定性
3. **使用更便宜的模型** - `gpt-3.5-turbo` 而非 `gpt-4`
4. **限制调用频率** - 设置每日调用上限

### 提高识别准确率

1. **提供更多上下文** - 配置好元数据源
2. **手动修正错误** - 系统会学习
3. **使用更强大的模型** - `gpt-4` 准确率更高
4. **调整 prompt** - 在高级设置中自定义 prompt

## 常见问题

### API Key 无效

- 检查 API Key 是否正确
- 确认账户有足够余额
- 检查 API Key 权限

### 识别速度慢

- 使用更快的模型（如 `gpt-3.5-turbo`）
- 减少 `max_tokens` 参数
- 考虑使用本地模型

### 识别不准确

- 先配置好元数据源：[元数据源配置](/config/metadata)
- 提高模型质量（使用 `gpt-4`）
- 手动修正后系统会学习
- 检查文件名是否包含足够信息

### 成本过高

- 启用缓存功能
- 使用 `gpt-3.5-turbo` 而非 `gpt-4`
- 设置每日调用上限
- 考虑使用本地模型（Ollama）

---

## 📚 相关文档

- **[🎬 元数据源配置](/config/metadata)** - 配置 TMDB、TVDB 等
- **[🔗 Webhook 配置](/config/webhook)** - 自动化工作流
- **[❓ 常见问题](/faq#ai-issues)** - AI 相关问题排查

