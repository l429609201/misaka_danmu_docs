# ⚡ MySQL 优化

本文档介绍如何优化 MySQL 数据库以提高性能和减少资源占用。

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

## 已初始化 MySQL 的内存优化

如果您的 MySQL 容器已经初始化并运行，可以通过以下方式修改配置。

### 方法一：修改 command 参数（推荐）

直接在 `docker-compose.yaml` 的 `command:` 部分添加小内存参数，然后重启容器即可生效。

```yaml
services:
  mysql:
    image: mysql:8.1.0-oracle
    command:
      - '--character-set-server=utf8mb4'
      - '--collation-server=utf8mb4_unicode_ci'
      - '--binlog_expire_logs_seconds=259200'
      - '--default-authentication-plugin=mysql_native_password'
      # --- 小内存优化配置 ---
      - '--innodb_buffer_pool_size=128M'           # InnoDB缓冲池大小 (默认128M,可根据内存调整)
      - '--innodb_log_file_size=32M'               # 日志文件大小
      - '--innodb_log_buffer_size=8M'              # 日志缓冲区大小
      - '--max_connections=50'                     # 最大连接数 (默认151,减少到50)
      - '--table_open_cache=64'                    # 表缓存 (默认4000,减少到64)
      - '--performance_schema=OFF'                 # 关闭性能监控 (节省内存)
      - '--innodb_flush_log_at_trx_commit=2'       # 日志刷新策略 (提升性能,略降安全性)
      - '--innodb_flush_method=O_DIRECT'           # 绕过操作系统缓存
```

**操作步骤：**

1. 修改 `docker-compose.yaml` 添加上述 command 参数
2. 重启 MySQL 容器：
   ```bash
   docker compose restart mysql
   ```
3. 验证配置是否生效：
   ```bash
   docker exec -it danmu-mysql mysql -u root -p -e "SHOW VARIABLES LIKE 'innodb_buffer_pool_size';"
   ```

> **说明**：这种方式**无需映射配置文件**，修改 command 后重启容器即可永久生效。

### 方法二：通过配置文件修改

1. **创建自定义配置文件**

   在宿主机上创建配置文件 `my.cnf`：

   ```ini
   [mysqld]
   # --- 小内存优化配置 ---
   innodb_buffer_pool_size=128M
   innodb_log_file_size=32M
   innodb_log_buffer_size=8M
   max_connections=50
   table_open_cache=64
   performance_schema=OFF
   innodb_flush_log_at_trx_commit=2
   innodb_flush_method=O_DIRECT
   ```

2. **修改 docker-compose.yaml 挂载配置文件**

   在 `volumes` 中添加配置文件挂载：

   ```yaml
   services:
     mysql:
       image: mysql:8.1.0-oracle
       volumes:
         - ./db-data:/var/lib/mysql
         - ./my.cnf:/etc/mysql/conf.d/custom.cnf:ro  # 添加这行
   ```

3. **重启 MySQL 容器**

   ```bash
   docker compose restart mysql
   ```

4. **验证配置是否生效**

   ```bash
   docker exec -it danmu-mysql mysql -u root -p -e "SHOW VARIABLES LIKE 'innodb_buffer_pool_size';"
   ```

### 方法三：通过 SQL 命令修改（运行时）

部分参数可以在运行时动态修改，**无需重启**：

```sql
-- 进入 MySQL 容器
docker exec -it danmu-mysql mysql -u root -p

-- 修改可动态调整的参数
SET GLOBAL innodb_buffer_pool_size = 134217728;  -- 128MB
SET GLOBAL max_connections = 50;
SET GLOBAL table_open_cache = 64;
SET GLOBAL innodb_flush_log_at_trx_commit = 2;

-- 验证修改
SHOW VARIABLES LIKE 'innodb_buffer_pool_size';
SHOW VARIABLES LIKE 'max_connections';
```

> **注意**：通过 SQL 命令修改的参数在 MySQL 重启后会恢复默认值。如需持久化，请使用方法一。

### 参数说明

| 参数 | 推荐值 | 说明 | 能否运行时修改 |
|------|--------|------|----------------|
| `innodb_buffer_pool_size` | 128M | InnoDB 缓冲池大小，越大查询越快 | ✅ 可以 |
| `innodb_log_file_size` | 32M | 日志文件大小 | ❌ 需重启 |
| `innodb_log_buffer_size` | 8M | 日志缓冲区大小 | ❌ 需重启 |
| `max_connections` | 50 | 最大连接数 | ✅ 可以 |
| `table_open_cache` | 64 | 表缓存数量 | ✅ 可以 |
| `performance_schema` | OFF | 性能监控（关闭可节省内存） | ❌ 需重启 |
| `innodb_flush_log_at_trx_commit` | 2 | 日志刷新策略（2=每秒刷新） | ✅ 可以 |
| `innodb_flush_method` | O_DIRECT | 绕过操作系统缓存 | ❌ 需重启 |

### 查看当前内存占用

```sql
-- 查看 InnoDB 缓冲池状态
SHOW ENGINE INNODB STATUS\G

-- 查看关键内存参数
SHOW VARIABLES WHERE Variable_name IN (
    'innodb_buffer_pool_size',
    'innodb_log_file_size',
    'innodb_log_buffer_size',
    'max_connections',
    'table_open_cache',
    'performance_schema'
);
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

