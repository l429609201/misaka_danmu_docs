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
            src: '/icon.svg',
            alt: 'logo',
        },
        nav: [
            {text: '首页', link: '/'},
            {
                text: '快速入门',
                items: [
                    {text: '快速开始', link: '/快速开始'},
                    {text: '客户端配置', link: '/客户端配置'},
                ]
            },
            {
                text: '功能配置',
                items: [
                    {text: '元数据源配置', link: '/config/元数据源配置'},
                    {text: 'AI 功能配置', link: '/config/AI功能配置'},
                    {text: 'Webhook 配置', link: '/config/Webhook配置'},
                    {text: 'Telegram Bot', link: '/config/Telegram机器人'},
                ]
            },
            {
                text: '高级功能',
                items: [
                    {text: '弹幕功能配置', link: '/advanced/弹幕功能配置'},
                    {text: '弹幕源管理', link: '/advanced/弹幕源管理'},
                ]
            },
            {
                text: '运维优化',
                items: [
                    {text: 'MySQL 优化', link: '/ops/MySQL内存优化'},
                    {text: '常见问题', link: '/常见问题'},
                ]
            },
        ],
        sidebar: [
            {
                text: '快速入门',
                items: [
                    {text: '快速开始', link: '/快速开始'},
                    {text: '客户端配置', link: '/客户端配置'},
                ]
            },
            {
                text: '功能配置',
                items: [
                    {text: '元数据源配置', link: '/config/元数据源配置'},
                    {text: 'AI 功能配置', link: '/config/AI功能配置'},
                    {text: 'Webhook 配置', link: '/config/Webhook配置'},
                    {text: 'Telegram Bot', link: '/config/Telegram机器人'},
                ]
            },
            {
                text: '高级功能',
                items: [
                    {text: '弹幕功能配置', link: '/advanced/弹幕功能配置'},
                    {text: '弹幕源管理', link: '/advanced/弹幕源管理'},
                ]
            },
            {
                text: '运维与优化',
                items: [
                    {text: 'MySQL 优化', link: '/ops/MySQL内存优化'},
                    {text: '常见问题', link: '/常见问题'},
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
                content: "https://docs.misaka10876.top/icon.svg"
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
                content: "https://docs.misaka10876.top/icon.svg"
            },
        ],
        ['link', {rel: 'icon', href: '/favicon.ico'}],
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
