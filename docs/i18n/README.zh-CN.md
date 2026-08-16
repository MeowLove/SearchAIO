# SearchAIO - 多合一全能搜索门户

[![GitHub Stars](https://img.shields.io/github/stars/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/stargazers)
[![Fork](https://img.shields.io/github/forks/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/network/members)
[![License](https://img.shields.io/github/license/MeowLove/SearchAIO?style=flat-square&color=blue)](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)
[![Project Page](https://img.shields.io/badge/项目主页-Website-green?style=flat-square)](https://www.cxthhhhh.com/search-aio/) [![版本](https://img.shields.io/badge/version-2.3.0-blue?style=flat-square)](https://github.com/MeowLove/SearchAIO/releases)

**SearchAIO** 将主流搜索引擎与前沿 AI 聊天服务整合为日常搜索中心，并提供可分享的“让我帮你搜索”演示链接。

**[📖 项目介绍](https://www.cxthhhhh.com/search-aio/)** | **[➡️ 在线体验](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**

<div align="center"><p><a href="../../README.md">English</a> | <b>简体中文</b> | <a href="README.ru.md">Русский</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.ar.md">العربية</a> | <a href="README.pt-BR.md">Português (Brasil)</a> | <a href="README.ja.md">日本語</a> | <a href="README.de.md">Deutsch</a></p></div>

![SearchAIO 截图](../media/SearchAIO_Screenshot_CN.png)

---

## ✨ 功能

- **双重功能**：作为个人起始页在 76 个搜索与 AI 服务之间快速搜索；或生成展示完整搜索过程的可分享教程链接。
- **广泛的引擎支持**：集成 Google、Bing、Baidu、Yandex、DuckDuckGo、ChatGPT、Copilot、Perplexity 等。
- **国际化**：支持中文、英语、俄语、西班牙语、法语、阿拉伯语、巴西葡萄牙语、日语和德语，并在本地保存选择。
- **深色/浅色模式**：自动适应系统偏好，也可手动切换。
- **完全响应式**：适配桌面、平板与移动设备。
- **零运行时依赖**：原生 HTML、CSS、ES Modules，无框架即可部署。
- **引擎简介**：为每个搜索引擎提供用途说明，便于选择工具。

---

## 🚀 使用方法

### 作为个人搜索中心

https://github.com/user-attachments/assets/41f9c122-5d37-46cb-99c3-886bb2dab3d0

1. 访问 **[在线体验](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**。
2. 从列表中选择搜索引擎。
3. 在搜索框中输入查询内容。
4. 按 `Enter` 或点击主搜索按钮，在新标签页中搜索。

### 生成“教程”链接

https://github.com/user-attachments/assets/0bb11175-036f-464b-b8a1-6721d973e057

1. 访问 **[在线体验](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**。
2. 选择需要演示的搜索引擎。
3. 在搜索框中输入问题。
4. 点击 **“生成教程链接（复制）”**，复制教程 URL。
5. 在支持时使用 **“直接分享”** 打开系统分享面板。
6. 将链接发送给需要学习搜索流程的人。

---

## 🛠️ 技术栈

- **HTML5**
- **CSS3**（使用 CSS 变量实现主题）
- **原生 JavaScript**（ES6+）

`SearchAIO.html` 是应用源文件；部署时改名为 `index.html`。代码按引擎注册表、i18n、偏好设置、URL 路由、教程动画和 UI 模块拆分；直接打开文件使用 standalone runtime，HTTP 部署使用 ES Modules。

## ⌨️ 快捷路由与维护

- 使用 `google: 关键词` 或 `!g 关键词` 直接路由；每个引擎按钮的提示中列出别名。
- `Ctrl/Cmd + K` 聚焦搜索框，`Alt + ↑/↓` 切换引擎，`Esc` 关闭建议或对话框。
- 收藏只保存于当前浏览器，不收集搜索历史。
- 修改引擎注册表后打开 `SearchAIO.html?selftest=1`，或在 Node.js 环境运行 `npm test`。
- 修改 `src/*.js` 后运行 `npm run build:static`，然后将 `SearchAIO.html` 改名为 `index.html` 部署。

详见 [ARCHITECTURE.md](../../ARCHITECTURE.md)。

---

## 🤝 贡献

欢迎贡献、问题和功能建议，请查看 [issues 页面](https://github.com/MeowLove/SearchAIO/issues)。

## 📄 许可证

本项目采用 **GPL-3.0** 许可证，详见 [LICENSE](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)。
