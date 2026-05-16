# 📡 类弹弹play接口

御坂网络弹幕服务提供 **弹弹play API 兼容接口**，适用于支持自定义弹幕源的播放器与插件。

## 接口前缀

基础地址：

```text
http://<服务器地址>:7768/api/v1/<你的Token>
```

兼容地址：

```text
http://<服务器地址>:7768/api/v1/<你的Token>/api/v2
```

> 当前主项目同时兼容 `/{token}` 与 `/{token}/api/v2` 两套路由。

## v2.7.0 改动

::: tip Misaka 扩展说明
`GET /taskcomment/{taskId}` 与 `GET /comment/{episodeId}` 的异步模式并不是弹弹play 标准接口，而是 **Misaka 弹幕库单独设计的扩展能力**。

设计这个扩展的原因是：某些 **电影、长视频或较慢的数据源** 在获取弹幕时耗时较长，客户端如果一直同步等待，容易因为超时而拿不到结果。

因此在 v2.7.0 中，Misaka 增加了“**先返回任务ID，再由客户端轮询结果**”的处理方式，用来解决弹幕下载慢导致的客户端超时问题。
:::

### 新增接口
- `GET /taskcomment/{taskId}`：轮询异步弹幕下载任务状态

### 已改动接口
- `GET /comment/{episodeId}`：新增 `async` 参数
- 当 `async=1` 且任务超时未完成时，会返回 `taskId`
- 客户端随后调用 `/taskcomment/{taskId}` 继续轮询
- 该机制特别适合 **电影弹幕、长视频弹幕、下载较慢源站** 的场景

## 当前兼容接口

| 接口 | 说明 |
|------|------|
| `GET /search/anime` | 搜索作品 |
| `GET /search/episodes` | 搜索作品及分集 |
| `GET /bangumi/{bangumiId}` | 获取作品详情与分集列表 |
| `GET /comment/{episodeId}` | 获取弹幕 |
| `GET /taskcomment/{taskId}` | 轮询异步弹幕任务 |
| `POST /match` | 匹配单个文件 |

## 1. 搜索作品

**接口介绍**

用于按作品名称搜索弹幕库中的作品列表，也可触发后备搜索结果返回。

**接口 URL**

```http
GET /search/anime
```

**接口参数**

- `keyword`：作品名称，推荐参数
- `anime`：作品名称，兼容参数
- `episode`：分集号，可选

**示例请求 URL**

```http
GET http://127.0.0.1:7768/api/v1/<你的Token>/search/anime?keyword=进击的巨人
```

**响应示例**

```json
{
  "success": true,
  "errorCode": 0,
  "errorMessage": "",
  "animes": [
    {
      "animeId": 123,
      "bangumiId": "A123",
      "animeTitle": "进击的巨人",
      "type": "tvseries",
      "typeDescription": "TV动画",
      "imageUrl": "https://example.com/poster.jpg",
      "year": 2013,
      "episodeCount": 25,
      "rating": 0.0,
      "isFavorited": false
    }
  ]
}
```

## 2. 搜索作品及分集

**接口介绍**

用于按作品名称搜索，并直接返回该作品下的分集列表。

**接口 URL**

```http
GET /search/episodes
```

**接口参数**

- `anime`：作品名称
- `episode`：分集号，可选

**示例请求 URL**

```http
GET http://127.0.0.1:7768/api/v1/<你的Token>/search/episodes?anime=进击的巨人&episode=1
```

**响应示例**

```json
{
  "success": true,
  "hasMore": false,
  "animes": [
    {
      "animeId": 123,
      "animeTitle": "进击的巨人",
      "type": "tvseries",
      "typeDescription": "TV动画",
      "episodes": [
        {
          "episodeId": 25000123010001,
          "episodeTitle": "第1集",
          "isLibrary": true
        }
      ]
    }
  ]
}
```

## 3. 获取作品详情

**接口介绍**

根据 `bangumiId` 获取作品详情与分集列表。

**接口 URL**

```http
GET /bangumi/{bangumiId}
```

**接口参数**

- `bangumiId`：作品ID，可为 `A123` 这类兼容ID，也可为真实作品ID

**示例请求 URL**

```http
GET http://127.0.0.1:7768/api/v1/<你的Token>/bangumi/{bangumiId}
```

例如：

```http
GET http://127.0.0.1:7768/api/v1/<你的Token>/bangumi/A123
```

**响应重点字段**

- `animeId`：作品ID
- `bangumiId`：兼容作品ID
- `episodes`：分集列表
- `type` / `typeDescription`：作品类型

**响应示例**

```json
{
  "success": true,
  "errorCode": 0,
  "errorMessage": "",
  "bangumi": {
    "animeId": 123,
    "bangumiId": "A123",
    "animeTitle": "进击的巨人",
    "type": "tvseries",
    "typeDescription": "TV动画",
    "imageUrl": "https://example.com/poster.jpg",
    "searchKeyword": "进击的巨人",
    "year": 2013,
    "summary": "暂无简介",
    "episodes": [
      {
        "episodeId": 25000123010001,
        "episodeTitle": "第1集 致两千年后的你",
        "episodeNumber": "1"
      },
      {
        "episodeId": 25000123010002,
        "episodeTitle": "第2集 那一天",
        "episodeNumber": "2"
      }
    ]
  }
}
```


## 4. 获取弹幕

**接口介绍**

根据 `episodeId` 获取指定分集的弹幕内容。

**接口 URL**

```http
GET /comment/{episodeId}
```

**接口参数**

- `episodeId`：分集ID
- `from`：起始时间，单位秒，可选
- `withRelated`：是否包含关联弹幕，可选
- `chConvert`：简繁转换，`0` 不转换、`1` 转简体、`2` 转繁体
- `async`：v2.7.0 新增，传 `1` 时启用异步模式

**示例请求 URL**

```http
GET http://127.0.0.1:7768/api/v1/<你的Token>/comment/25000123010001?from=0&withRelated=true&chConvert=0
```

**异步模式示例 URL**

```http
GET http://127.0.0.1:7768/api/v1/<你的Token>/comment/25000123010001?async=1
```

**同步响应示例**

```json
{
  "count": 2,
  "comments": [
    {
      "cid": 0,
      "p": "12.3,1,16777215,[source]",
      "m": "第一条弹幕"
    },
    {
      "cid": 1,
      "p": "18.8,1,16777215,[source]",
      "m": "第二条弹幕"
    }
  ]
}
```

**异步响应示例**

```json
{
  "count": 0,
  "comments": [],
  "status": "pending",
  "taskId": "0d7b7e2d-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

## 5. 轮询异步任务

**接口介绍**

用于轮询 `/comment/{episodeId}?async=1` 返回的异步任务状态。

**接口 URL**

```http
GET /taskcomment/{taskId}
```

**接口参数**

- `taskId`：异步任务ID

**示例请求 URL**

```http
GET http://127.0.0.1:7768/api/v1/<你的Token>/taskcomment/{taskId}
```

例如：

```http
GET http://127.0.0.1:7768/api/v1/<你的Token>/taskcomment/0d7b7e2d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

**响应示例**

```json
{
  "status": "completed",
  "taskId": "0d7b7e2d-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "episodeId": 25000123010001,
  "progress": 100,
  "description": "任务完成"
}
```

当 `status=completed` 后，再调用 `/comment/{episodeId}` 获取真正弹幕内容。

## 6. 单文件匹配

**接口介绍**

根据文件名匹配单个视频文件的弹幕条目。

**接口 URL**

```http
POST /match
```

**接口参数**

- `fileName`：文件名
- `fileHash`：文件哈希，可选
- `fileSize`：文件大小，可选
- `videoDuration`：视频时长，可选

**示例请求 URL**

```http
POST http://127.0.0.1:7768/api/v1/<你的Token>/match
Content-Type: application/json
```

**请求体示例**

```json
{
  "fileName": "进击的巨人 S01E01.mkv",
  "fileHash": null,
  "fileSize": 0,
  "videoDuration": 0
}
```

**响应示例**

```json
{
  "success": true,
  "errorCode": 0,
  "errorMessage": "",
  "isMatched": true,
  "matches": [
    {
      "episodeId": 25000123010001,
      "animeId": 123,
      "animeTitle": "进击的巨人",
      "episodeTitle": "第1集",
      "type": "tvseries",
      "typeDescription": "TV动画",
      "shift": 0
    }
  ]
}
```


