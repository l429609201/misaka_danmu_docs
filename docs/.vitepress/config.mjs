import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "御坂网络弹幕服务",
    titleTemplate: ":title - 御坂网络弹幕服务 自托管弹幕聚合与管理",
    description: "一个功能强大的自托管弹幕（Danmaku）聚合与管理服务，兼容 dandanplay API 规范",
    cleanUrls: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: {
            src: '/logo.png',
            alt: 'logo',
        },
        nav: [
            {text: '首页', link: '/'},
            {
                text: '快速入门',
                items: [
                    {text: '快速开始', link: '/快速开始'},
                    {text: '客户端配置', link: '/客户端配置'},
                    {text: '类dandanplay接口', link: '/类dandanplay接口'},



                ]
            },
            {
                text: '功能配置',
                items: [
                    {text: '元数据源配置', link: '/config/元数据源配置'},
                    {text: 'AI 功能配置', link: '/config/AI功能配置'},
                    {text: 'Webhook 配置', link: '/config/Webhook配置'},
                    {text: '过滤配置', link: '/config/过滤配置'},
                    {text: '通知与交互', link: '/config/通知与交互'},
                    {text: '名称转换', link: '/config/名称转换'},
                    {text: '设置', link: '/config/设置'},
                    {text: '弹幕库管理', link: '/advanced/弹幕库管理'},
                    {text: '弹幕编辑', link: '/advanced/弹幕编辑'},
                    {text: '弹幕源管理', link: '/advanced/弹幕源管理'},
                    {text: '弹幕API功能', link: '/advanced/弹幕API功能配置'},
                    {text: '本地剧集组', link: '/advanced/本地剧集组'},
                    {text: '拆分数据源', link: '/advanced/拆分数据源'},
                    {text: '媒体获取', link: '/advanced/媒体获取'},
                    {text: '外部控制', link: '/advanced/外部控制'},
                    {text: '一键更新与更新历史', link: '/advanced/一键更新与更新历史'},
                ]
            },
            {
                text: '进阶操作',
                items: [
                    {text: '连接已有数据库', link: '/ops/连接已有数据库'},
                    {text: '13源地区限制解除', link: '/advanced/13源地区限制解除'},
                ]
            },
            {
                text: '运维优化',
                items: [
                    {text: 'MySQL 优化', link: '/ops/MySQL内存优化'},
                    {text: '定时任务', link: '/ops/定时任务'},
                    {text: '缓存日志清理', link: '/ops/缓存日志清理任务说明'},
                ]
            },
            {
                text: '帮助',
                items: [
                    {text: '常见问题', link: '/常见问题'},
                    {text: '问题反馈', link: '/问题反馈'},
                    {text: '更新日志', link: '/更新日志'},
                    {text: '参与开发', link: '/dev/'},
                ]
            },
        ],
        sidebar: [
            {
                text: '快速入门',
                items: [
                    {
                        text: '快速开始',
                        link: '/快速开始',
                        collapsed: true,
                        items: [
                            {text: '步骤 1: 准备 docker-compose.yaml', link: '/快速开始#步骤-1-准备-docker-compose-yaml'},
                            {text: '步骤 1-1: 拆分部署（可选）', link: '/快速开始#步骤-1-1-拆分部署-可选'},
                            {text: '步骤 2: 修改配置并启动', link: '/快速开始#步骤-2-修改配置并启动'},
                            {text: '步骤 3: 访问和配置', link: '/快速开始#步骤-3-访问和配置'},
                            {text: '步骤 4: 环境变量说明', link: '/快速开始#步骤-4-环境变量说明'},
                        ]
                    },
                    {
                        text: '客户端配置',
                        link: '/客户端配置',
                        collapsed: true,
                        items: [
                            {text: '获取弹幕Token', link: '/客户端配置#获取弹幕token'},
                            {text: '配置弹幕接口', link: '/客户端配置#配置弹幕接口'},
                            {text: '支持的播放器', link: '/客户端配置#支持的播放器'},
                            {text: '常见问题', link: '/客户端配置#常见问题'},
                        ]
                    },
                    {
                        text: '类dandanplay接口',
                        link: '/类dandanplay接口',
                        collapsed: true,
                        items: [
                            {text: '接口前缀', link: '/类dandanplay接口#接口前缀'},
                            {text: 'v2.7.0 改动', link: '/类dandanplay接口#v2-7-0-改动'},
                            {text: '当前兼容接口', link: '/类dandanplay接口#当前兼容接口'},
                            {text: '获取弹幕', link: '/类dandanplay接口#4-获取弹幕'},
                            {text: '轮询异步任务', link: '/类dandanplay接口#5-轮询异步任务'},
                            {text: '单文件匹配', link: '/类dandanplay接口#6-单文件匹配'},
                        ]
                    },
                ]
            },
            {
                text: '功能配置',
                items: [
                    {
                        text: '元数据源配置',
                        link: '/config/元数据源配置',
                        collapsed: true,
                        items: [
                            {text: '支持的元数据源', link: '/config/元数据源配置#📋-支持的元数据源'},
                            {text: 'TMDB', link: '/config/元数据源配置#🎬-tmdb-the-movie-database'},
                            {text: 'TVDB', link: '/config/元数据源配置#📺-tvdb-thetvdb'},
                            {text: 'Bangumi', link: '/config/元数据源配置#🎭-bangumi-番组计划'},
                            {text: 'Douban', link: '/config/元数据源配置#📖-douban-豆瓣'},
                            {text: 'IMDb', link: '/config/元数据源配置#🎥-imdb-internet-movie-database'},
                            {text: '元数据源优先级设置', link: '/config/元数据源配置#🔧-元数据源优先级设置'},
                        ]
                    },
                    {
                        text: 'AI 功能配置',
                        link: '/config/AI功能配置',
                        collapsed: true,
                        items: [
                            {text: 'AI 功能概览', link: '/config/AI功能配置#📋-ai-功能概览'},
                            {text: '支持的 AI 提供商', link: '/config/AI功能配置#🤖-支持的-ai-提供商'},
                            {text: '在系统中配置 AI', link: '/config/AI功能配置#⚙️-在系统中配置-ai'},
                            {text: 'AI 功能详细说明', link: '/config/AI功能配置#🎯-ai-功能详细说明'},
                            {text: '最佳实践', link: '/config/AI功能配置#💡-最佳实践'},
                        ]
                    },
                    {
                        text: 'Webhook 配置',
                        link: '/config/Webhook配置',
                        collapsed: true,
                        items: [
                            {text: '获取 Webhook URL', link: '/config/Webhook配置#_1-获取-webhook-url'},
                            {text: '配置媒体服务器', link: '/config/Webhook配置#_2-配置媒体服务器'},
                        ]
                    },
                    {
                        text: '过滤配置',
                        link: '/config/过滤配置',
                        collapsed: true,
                        items: [
                            {text: '条目标题过滤', link: '/config/过滤配置#条目标题过滤'},
                            {text: '分集名称过滤', link: '/config/过滤配置#分集名称过滤'},
                            {text: '过滤技巧', link: '/config/过滤配置#过滤技巧'},
                            {text: '注意事项', link: '/config/过滤配置#注意事项'},
                        ]
                    },
                    {
                        text: '通知与交互',
                        link: '/config/通知与交互',
                        collapsed: true,
                        items: [
                            {text: 'Telegram Bot（内置）', link: '/config/通知与交互#telegram-bot-内置'},
                            {text: 'Server酱³ Bot（内置）', link: '/config/通知与交互#server酱³-bot-内置'},
                            {text: '第三方方案：表哥 Bot', link: '/config/通知与交互#第三方方案-表哥-telegram-bot'},
                        ]
                    },
                    {
                        text: '名称转换',
                        link: '/config/名称转换',
                        collapsed: true,
                        items: [
                            {text: '繁体转简体', link: '/config/名称转换#繁体转简体'},
                            {text: '自定义名称转换', link: '/config/名称转换#自定义名称转换'},
                            {text: '与 Webhook 的配合', link: '/config/名称转换#与-webhook-的配合'},
                        ]
                    },
                    {
                        text: '设置',
                        link: '/config/设置',
                        collapsed: true,
                        items: [
                            {text: '代理配置', link: '/config/设置#代理配置'},
                            {text: '安全设置', link: '/config/设置#安全设置'},
                            {text: '识别词配置', link: '/config/设置#识别词配置'},
                            {text: '会话管理', link: '/config/设置#会话管理'},
                            {text: '参数配置', link: '/config/设置#参数配置'},
                            {text: '修改密码', link: '/config/设置#修改密码'},
                        ]
                    },
                    {
                        text: '弹幕库管理',
                        link: '/advanced/弹幕库管理',
                        collapsed: true,
                        items: [
                            {text: '条目结构', link: '/advanced/弹幕库管理#条目结构'},
                            {text: '条目管理', link: '/advanced/弹幕库管理#条目管理'},
                            {text: '弹幕来源管理', link: '/advanced/弹幕库管理#弹幕来源管理'},
                            {text: '分集管理', link: '/advanced/弹幕库管理#分集管理'},
                            {text: '自定义创建条目', link: '/advanced/弹幕库管理#自定义创建条目'},
                            {text: '导入 XML 弹幕', link: '/advanced/弹幕库管理#导入-xml-弹幕'},
                            {text: '自动刮削别名', link: '/advanced/弹幕库管理#自动刮削别名'},
                        ]
                    },
                    {
                        text: '弹幕编辑',
                        link: '/advanced/弹幕编辑',
                        collapsed: true,
                        items: [
                            {text: '拆分弹幕', link: '/advanced/弹幕编辑#拆分弹幕'},
                            {text: '合并弹幕', link: '/advanced/弹幕编辑#合并弹幕'},
                            {text: '偏移弹幕', link: '/advanced/弹幕编辑#偏移弹幕'},
                        ]
                    },
                    {
                        text: '弹幕源管理',
                        link: '/advanced/弹幕源管理',
                        collapsed: true,
                        items: [
                            {text: '从资源仓库加载', link: '/advanced/弹幕源管理#_1-从资源仓库加载'},
                            {text: '上传离线包', link: '/advanced/弹幕源管理#_2-上传离线包'},
                            {text: '备份和恢复', link: '/advanced/弹幕源管理#_3-备份和恢复'},
                            {text: '重载弹幕源', link: '/advanced/弹幕源管理#_4-重载弹幕源'},
                            {text: '注意事项', link: '/advanced/弹幕源管理#_5-注意事项'},
                            {text: '故障排除', link: '/advanced/弹幕源管理#_6-故障排除'},
                        ]
                    },
                    {
                        text: '弹幕API功能',
                        link: '/advanced/弹幕API功能配置',
                        collapsed: true,
                        items: [
                            {text: 'Anime 接口', link: '/advanced/弹幕API功能配置#anime-接口'},
                            {text: '指令功能', link: '/advanced/弹幕API功能配置#指令输入功能'},
                            {text: 'Token管理', link: '/advanced/弹幕API功能配置#token管理'},
                            {text: '弹幕输出控制', link: '/advanced/弹幕API功能配置#弹幕输出控制'},
                            {text: '弹幕存储配置', link: '/advanced/弹幕API功能配置#弹幕存储配置'},
                            {text: '高级设置', link: '/advanced/弹幕API功能配置#高级设置'},
                            {text: '常见问题', link: '/advanced/弹幕API功能配置#常见问题'},
                        ]
                    },
                    {
                        text: '本地剧集组',
                        link: '/advanced/本地剧集组',
                        collapsed: true,
                        items: [
                            {text: 'JSON 文件格式', link: '/advanced/本地剧集组#json-文件格式'},
                            {text: '使用场景', link: '/advanced/本地剧集组#使用场景'},
                        ]
                    },
                    {
                        text: '拆分数据源',
                        link: '/advanced/拆分数据源',
                        collapsed: true,
                        items: [
                            {text: '使用方法', link: '/advanced/拆分数据源#使用方法'},
                            {text: '适用场景', link: '/advanced/拆分数据源#适用场景'},
                        ]
                    },
                    {
                        text: '媒体获取',
                        link: '/advanced/媒体获取',
                        collapsed: true,
                        items: [
                            {text: '获取方式', link: '/advanced/媒体获取#获取方式'},
                            {text: '从媒体服务读取', link: '/advanced/媒体获取#从媒体服务读取'},
                            {text: '本地扫描', link: '/advanced/媒体获取#本地扫描'},
                            {text: '扫描本地弹幕', link: '/advanced/媒体获取#扫描本地弹幕'},
                        ]
                    },
                    {
                        text: '外部控制',
                        link: '/advanced/外部控制',
                        collapsed: true,
                        items: [
                            {text: '启用外部控制', link: '/advanced/外部控制#启用外部控制'},
                            {text: 'API 文档', link: '/advanced/外部控制#api-文档'},
                            {text: '认证方式', link: '/advanced/外部控制#认证方式'},
                            {text: 'API 接口列表', link: '/advanced/外部控制#api-接口列表'},
                            {text: '接口调试', link: '/advanced/外部控制#🧪-接口调试'},
                        ]
                    },
                    {
                        text: '一键更新与更新历史',
                        link: '/advanced/一键更新与更新历史',
                        collapsed: true,
                        items: [
                            {text: '功能概览', link: '/advanced/一键更新与更新历史#📋-功能概览'},
                            {text: '使用方法', link: '/advanced/一键更新与更新历史#🚀-使用方法'},
                            {text: '更新日志说明', link: '/advanced/一键更新与更新历史#📝-更新日志说明'},
                            {text: '更新配置', link: '/advanced/一键更新与更新历史#⚙️-更新配置'},
                            {text: '常见问题', link: '/advanced/一键更新与更新历史#⚠️-常见问题'},
                        ]
                    },
                ]
            },
            {
                text: '进阶操作',
                items: [
                    {
                        text: '连接已有数据库',
                        link: '/ops/连接已有数据库',
                        collapsed: true,
                        items: [
                            {text: 'MySQL 数据库操作', link: '/ops/连接已有数据库#mysql-数据库操作'},
                            {text: 'PostgreSQL 数据库操作', link: '/ops/连接已有数据库#postgresql-数据库操作'},
                        ]
                    },
                    {
                        text: '13源地区限制解除',
                        link: '/advanced/13源地区限制解除',
                        collapsed: true,
                        items: [
                            {text: '功能说明', link: '/advanced/13源地区限制解除#🎯-功能说明'},
                            {text: '配置方法', link: '/advanced/13源地区限制解除#🔧-配置解析方法'},
                            {text: '解析服务器获取', link: '/advanced/13源地区限制解除#🏗️-解析服务器获取'},
                            {text: '使用说明', link: '/advanced/13源地区限制解除#🔍-使用说明'},
                            {text: '故障排除', link: '/advanced/13源地区限制解除#🛠️-故障排除'},
                        ]
                    },
                ]
            },
            {
                text: '运维与优化',
                items: [
                    {
                        text: 'MySQL 优化',
                        link: '/ops/MySQL内存优化',
                        collapsed: true,
                        items: [
                            {text: '内存优化', link: '/ops/MySQL内存优化#内存优化'},
                            {text: '已初始化 MySQL 的内存优化', link: '/ops/MySQL内存优化#已初始化-mysql-的内存优化'},
                            {text: '磁盘优化', link: '/ops/MySQL内存优化#磁盘优化'},
                            {text: '性能监控', link: '/ops/MySQL内存优化#性能监控'},
                            {text: '自动化维护', link: '/ops/MySQL内存优化#自动化维护'},
                        ]
                    },
                    {
                        text: '定时任务',
                        link: '/ops/定时任务',
                        collapsed: true,
                        items: [
                            {text: '任务列表概览', link: '/ops/定时任务#任务列表概览'},
                            {text: 'TMDB自动刮削与剧集组映射', link: '/ops/定时任务#tmdb自动刮削与剧集组映射'},
                            {text: '刷新最新集弹幕/定时增量追更', link: '/ops/定时任务#刷新最新集弹幕-定时增量追更'},
                            {text: '数据库备份任务', link: '/ops/定时任务#数据库备份任务'},
                            {text: '缓存日志清理任务', link: '/ops/缓存日志清理任务说明'},
                            {text: '查看任务执行状态', link: '/ops/定时任务#查看任务执行状态'},
                        ]
                    },
                ]
            },
            {
                text: '帮助',
                items: [
                    {
                        text: '常见问题',
                        link: '/常见问题',
                        collapsed: true,
                        items: [
                            {text: '忘记密码怎么办？', link: '/常见问题#reset-password'},
                            {text: '弹幕库搜索不到内容怎么办？', link: '/常见问题#search-empty'},
                            {text: '数据库文件越来越大怎么办？', link: '/常见问题#database-size'},
                            {text: '如何配置 TMDB/TVDB API Key?', link: '/常见问题#metadata-api'},
                            {text: 'AI 功能无法使用怎么办?', link: '/常见问题#ai-issues'},
                            {text: '如何启用播放器自动搜索并下载弹幕功能?', link: '/常见问题#enable-auto-download'},
                            {text: '如何自定义弹幕文件存储路径?', link: '/常见问题#custom-storage'},
                        ]
                    },
                    {
                        text: '问题反馈',
                        link: '/问题反馈',
                        collapsed: true,
                        items: [
                            {text: 'GitHub Issues', link: '/问题反馈#github-issues'},
                            {text: 'Telegram 频道私聊', link: '/问题反馈#telegram-频道私聊'},
                        ]
                    },
                    {
                        text: '更新日志',
                        link: '/更新日志',
                    },
                    {
                        text: '参与开发',
                        link: '/dev/',
                        collapsed: true,
                        items: [
                            {text: '开发流程', link: '/dev/开发流程'},
                            {text: '环境配置', link: '/dev/环境配置'},
                            {text: '项目结构', link: '/dev/项目结构'},
                        ]
                    },
                ]
            }
        ],
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/l429609201/misaka_danmu_server'
            },
            {
                icon: 'telegram',
                link: "https://t.me/misaka_danmaku"
            }
        ],
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭'
                                }
                            }
                        }
                    }
                }
            }
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        editLink: {
            pattern: 'https://github.com/l429609201/misaka_danmu_docs/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
        outline: {
            level: 'deep',
            label: '页面导航'
        },
        footer: {
            message: '基于 AGPL-3.0 许可发布',
            copyright: 'Copyright © 2025 -  御坂网络弹幕服务'
        },
        notFound: {
            quote: '页面不存在, 将在3秒后自动跳转到首页',
            linkText: '回到首页'
        }
    },
    head: [
        [
            "meta",
            {
                name: "author", content: "l429609201"
            },
        ],
        [
            "meta",
            {
                name: "keywords",
                content: "御坂网络弹幕服务,misaka,danmu,弹幕,dandanplay,emby,jellyfin"
            },
        ],
        // Open Graph
        ["meta", {property: "og:type", content: "website"}],
        ["meta", {property: "og:title", content: "御坂网络弹幕服务 - 自托管弹幕聚合与管理"}],
        ["meta", {property: "og:description", content: "一个功能强大的自托管弹幕聚合与管理服务，兼容 dandanplay API 规范"}],
        ["meta", {property: "og:url", content: "https://docs.misaka10876.top"}],
        ["meta", {property: "og:site_name", content: "御坂网络弹幕服务"}],
        [
            "meta",
            {
                property: "og:image",
                content: "https://docs.misaka10876.top/logo.png"
            },
        ],
        ["meta", {property: "og:image:width", content: "1280"}],
        ["meta", {property: "og:image:height", content: "640"}],
        ["meta", {property: "og:locale", content: "zh_CN"}],

        // Twitter Cards
        ["meta", {name: "twitter:card", content: "summary_large_image"}],
        ["meta", {name: "twitter:title", content: "御坂网络弹幕服务 - 自托管弹幕聚合与管理"}],
        ["meta", {name: "twitter:description", content: "一个功能强大的自托管弹幕聚合与管理服务，兼容 dandanplay API 规范"}],
        [
            "meta",
            {
                name: "twitter:image",
                content: "https://docs.misaka10876.top/logo.png"
            },
        ],
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['script', {src: '/custom.js'}],
        ['meta', {name: "theme-color", id: "themeColorMeta", content: "#ffffff"}],
    ],
    lastUpdated: true,
    markdown: {
        image: {
            lazyLoading: false
        }
    },
    sitemap: {
        hostname: 'https://docs.misaka10876.top'
    }
})
