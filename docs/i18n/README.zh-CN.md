# SearchAIO - 多合一全能搜索门户

<div align="center">
  <p>
    <a href="../../README.md">English</a> | <b>简体中文</b> | <a href="README.ru.md">Русский</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.ar.md">العربية</a> | <a href="README.pt-BR.md">Português (Brasil)</a> | <a href="README.ja.md">日本語</a> | <a href="README.de.md">Deutsch</a>
  </p>
</div>

[![GitHub Stars](https://img.shields.io/github/stars/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/stargazers) [![License](https://img.shields.io/github/license/MeowLove/SearchAIO?style=flat-square&color=blue)](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)

**SearchAIO** 将传统搜索引擎和前沿 AI 服务汇集到一个简洁的日常搜索中心，同时支持“让我帮你搜索”的可分享演示链接。

**[📖 项目介绍](https://www.cxthhhhh.com/search-aio/)** | **[➡️ 在线体验](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**

![SearchAIO 截图](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_Screenshot_CN.png)

## ✨ 功能亮点

- 在 76 个网页搜索、垂直搜索与 AI 服务之间快速切换。
- 为每个引擎提供用途简介，便于选择合适工具。
- 支持中文、英语、俄语、西班牙语、法语、阿拉伯语、巴西葡萄牙语、日语和德语。
- 支持深色/浅色主题、响应式布局与本地收藏；偏好不会离开当前浏览器。
- 可生成可分享的教程链接，演示从输入查询到跳转搜索的过程。

## 🚀 如何使用

### 作为个人搜索中心

https://github.com/user-attachments/assets/41f9c122-5d37-46cb-99c3-886bb2dab3d0

1. 访问 **[在线体验](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**。
2. 选择搜索引擎，输入查询，然后按 `Enter` 或点击搜索按钮。
3. 可输入 `google: 关键词` 或 `!g 关键词` 直接路由到指定引擎。

### 生成教程链接

1. 选择需要演示的搜索引擎并输入问题。
2. 点击“生成教程链接（复制）”。
3. 将链接发送给需要学习搜索流程的人。

## 🛠️ 开发与部署

项目使用 HTML、CSS、原生 JavaScript 和 ES Modules，无运行时依赖。修改 `src/*.js` 后运行 `npm run build:static`；部署时将 `SearchAIO.html` 改名为 `index.html`。修改引擎配置后可打开 `SearchAIO.html?selftest=1` 或运行 `npm test`。

详见 [ARCHITECTURE.md](../../ARCHITECTURE.md)。欢迎提交 [Issues](https://github.com/MeowLove/SearchAIO/issues) 和贡献。本项目采用 [GPL-3.0](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE) 许可证。
