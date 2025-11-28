# ⚡ MySQL 优化

本文档介绍如何优化 MySQL 数据库以提高性能和减少资源占用。

[[toc]]

## 内存优化

### 调整 MySQL 内存配置

在 `docker-compose.yaml` 中添加内存限制和优化参数：

```yaml
services:
  mysql:
    image: mysql:8.1.0-oracle
    command:
      - '--character-set-server=utf8mb4'
      - '--collation-server=utf8mb4_unicode_ci'
      - '--binlog_expire_logs_seconds=259200'
      - '--default-authentication-plugin=mysql_native_password'
      - '--innodb_buffer_pool_size=256M'  # 根据可用内存调整
      - '--innodb_log_file_size=64M'
      - '--max_connections=100'
      - '--table_open_cache=2000'
    deploy:
      resources:
        limits:
          memory: 512M  # 限制容器最大内存
```

### 推荐配置

**小型部署（1-2GB RAM）**：
```yaml
- '--innodb_buffer_pool_size=128M'
- '--max_connections=50'
```

**中型部署（4GB RAM）**：
```yaml
- '--innodb_buffer_pool_size=512M'
- '--max_connections=100'
```

**大型部署（8GB+ RAM）**：
```yaml
- '--innodb_buffer_pool_size=1G'
- '--max_connections=200'
```

## 磁盘优化

### 清理二进制日志

```sql
-- 查看日志大小
SHOW BINARY LOGS;

-- 清理 3 天前的日志
PURGE BINARY LOGS BEFORE DATE_SUB(NOW(), INTERVAL 3 DAY);
```

### 优化表

```sql
USE danmuapi;

-- 优化所有表
OPTIMIZE TABLE danmu_cache;
OPTIMIZE TABLE media_info;
OPTIMIZE TABLE match_history;
```

### 定期清理旧数据

```sql
-- 清理 30 天前的缓存
DELETE FROM danmu_cache WHERE created_at < DATE_SUB(NOW(), INTERVAL 30 DAY);

-- 清理 90 天前的日志
DELETE FROM system_logs WHERE created_at < DATE_SUB(NOW(), INTERVAL 90 DAY);
```

## 性能监控

### 查看数据库大小

```sql
SELECT 
    table_schema AS 'Database',
    ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS 'Size (MB)'
FROM information_schema.tables
WHERE table_schema = 'danmuapi'
GROUP BY table_schema;
```

### 查看表大小

```sql
SELECT 
    table_name AS 'Table',
    ROUND(((data_length + index_length) / 1024 / 1024), 2) AS 'Size (MB)'
FROM information_schema.tables
WHERE table_schema = 'danmuapi'
ORDER BY (data_length + index_length) DESC;
```

### 查看慢查询

```sql
-- 启用慢查询日志
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2;

-- 查看慢查询
SHOW VARIABLES LIKE 'slow_query%';
```

## 自动化维护

### 创建定期清理脚本

创建 `cleanup.sh`：

```bash
#!/bin/bash

# 清理 30 天前的缓存
docker exec danmu-mysql mysql -u danmuapi -p"$MYSQL_PASSWORD" danmuapi -e "
DELETE FROM danmu_cache WHERE created_at < DATE_SUB(NOW(), INTERVAL 30 DAY);
OPTIMIZE TABLE danmu_cache;
"

echo "Database cleanup completed at $(date)"
```

### 设置定时任务

```bash
# 编辑 crontab
crontab -e

# 每周日凌晨 3 点执行清理
0 3 * * 0 /path/to/cleanup.sh >> /var/log/danmu-cleanup.log 2>&1
```

## 常见问题

### 数据库占用空间过大

参考 [常见问题 - 数据库大小](/常见问题#database-size)

### MySQL 容器内存不足

- 减少 `innodb_buffer_pool_size`
- 增加容器内存限制
- 清理旧数据

### 查询速度慢

- 添加索引
- 优化查询语句
- 增加 `innodb_buffer_pool_size`

---

## 📚 相关文档

- **[❓ 常见问题](/常见问题)** - 数据库相关问题
- **[🚀 快速开始](/快速开始)** - 部署配置

