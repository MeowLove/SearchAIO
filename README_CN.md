# SearchAIO - 多合一全能搜索门户

[![GitHub Stars](https://img.shields.io/github/stars/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/stargazers)
[![Fork](https://img.shields.io/github/forks/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/network/members)
[![License](https://img.shields.io/github/license/MeowLove/SearchAIO?style=flat-square&color=blue)](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)
[![Project Page](https://img.shields.io/badge/项目主页-Website-green?style=flat-square)](https://www.cxthhhhh.com/search-aio/)

**SearchAIO** 是一个强大的多合一搜索门户，它从一个有趣的“让我帮你搜索”工具，演变成一个多功能的日常搜索中心。它无缝集成了各大主流传统搜索引擎和前沿的AI聊天工具，在一个优雅的界面中提供了两种独特的功能。

**[📖 项目介绍](https://www.cxthhhhh.com/search-aio/)** | **[➡️ 在线体验 (Demo)](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**

<div align="center">
  <p>
    <b>简体中文</b> | <a href="README.md">English</a> | <a href="README_RU.md">Русский</a>
  </p>
</div>

![SearchAIO 截图](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_Screenshot_CN.png)

---

## ✨ 功能亮点

-   **双重功能**:
    -   **多合一搜索中心**: 可作为您的个人起始页，在 76 个搜索与 AI 服务之间快速切换并进行搜索。
    -   **“让我帮你搜索”工具**: 生成一个可分享的链接，它会向他人演示从输入问题到点击搜索的完整动画过程。
-   **广泛的引擎支持**: 集成了谷歌、必应、百度、Yandex、DuckDuckGo、ChatGPT、Copilot、Perplexity等。
-   **国际化 (i18n)**: 完全支持英语 (English)、中文 (ZH) 和俄语 (Русский)，语言选择会保存在本地。
-   **夜间/日间模式**: 提供美观的、可切换主题的界面，能够自动适应您的系统偏好，也可以手动切换。
-   **完全响应式设计**: 在桌面、平板和移动设备上提供无缝的体验。
-   **零运行时依赖**: 使用原生 HTML、CSS 和 ES Modules 构建。没有框架、没有编译步骤，可部署至任意静态主机。
-   **信息丰富**: 为每个搜索引擎提供了简介，帮助用户根据需求选择最合适的工具。

---

## 🚀 如何使用

### 作为个人搜索中心

![如何作为个人搜索中心使用](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_As_a_Personal_Search_Hub.gif)

1.  访问**[在线体验 (Demo)](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**。
2.  从列表中选择您偏好的搜索引擎。
3.  在搜索框中输入您的查询内容。
4.  按下`回车键`或点击主搜索按钮，即可在新标签页中执行搜索。

### 生成“教学”链接

![如何生成教学链接](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_To_Generate_a_Tutorial_Link.gif)

1.  访问**[在线体验 (Demo)](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**。
2.  选择您想要演示的搜索引擎。
3.  在搜索框中输入别人问你的那个问题。
4.  点击底部的 **“生成教程链接（复制）”**，复制纯教学 URL。
5.  系统支持时可使用 **“直接分享”**，将搜索内容、搜索引擎和教学 URL 一同交给系统分享面板。
6.  将链接发送给那个需要学习如何搜索的人！

---

## 🛠️ 技术栈

-   **HTML5**
-   **CSS3** (使用CSS变量实现主题化)
-   **原生 JavaScript** (ES6+)

`SearchAIO.html` 就是应用源文件；正式部署时将它改名为 `index.html`。源码按职责拆分为搜索引擎注册表、国际化、偏好设置、URL 路由、教程动画与界面模块。直接双击文件时会使用 standalone runtime，HTTP 部署时使用 ES Modules。

## ⌨️ 快捷路由与维护

- 输入 `google: 关键词` 或 `!g 关键词` 可直接路由到 Google；其他可用路由在引擎选择按钮的悬浮提示中显示。
- `Ctrl/Cmd + K` 聚焦搜索框，`Alt + ↑/↓` 切换搜索引擎，`Esc` 关闭建议或弹窗。
- 点击星标可在当前浏览器中收藏搜索引擎；不会上传或记录搜索内容。
- `Google AI Mode` 是 Gemini 的推荐替代入口：输入 `google-ai: 问题`、`gm: 问题`、`!ai 问题` 或 `!gm 问题` 会尝试使用 Google 的 AI Mode URL 适配参数；Google 可能因地区、账号或重定向回退到普通搜索。Gemini 原入口保留在 AI 列表末尾，仅打开 Gemini 首页；ChatGPT、Copilot、Claude、DeepSeek、Qwen、豆包等会明确标记为“复制提示词”，不会伪装成已自动输入。
- 修改搜索引擎配置后，可打开 `SearchAIO.html?selftest=1` 检查注册表，或在已安装 Node.js 的环境运行 `npm test`。
- 修改 `src/*.js` 后运行 `npm run build:static`，再将 `SearchAIO.html` 改名为 `index.html` 发布。

产品边界、模块分工和新增引擎的校验规则见 [`ARCHITECTURE.md`](ARCHITECTURE.md)。

---

## 🤝 贡献

欢迎提交贡献、问题和功能请求！请随时查看 [Issues 页面](https://github.com/MeowLove/SearchAIO/issues)。

## 📄 开源许可

本项目采用 **GPL-3.0 许可证**。详情请见 [LICENSE](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE) 文件。
