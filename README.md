# SearchAIO - The All-in-One Search Portal

[![GitHub Stars](https://img.shields.io/github/stars/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/stargazers)
[![Fork](https://img.shields.io/github/forks/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/network/members)
[![License](https://img.shields.io/github/license/MeowLove/SearchAIO?style=flat-square&color=blue)](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)
[![Project Page](https://img.shields.io/badge/Project%20Page-Website-green?style=flat-square)](https://www.cxthhhhh.com/search-aio/)

**SearchAIO** is a powerful, all-in-one search portal that evolves from a fun "Let Me Search For You" tool into a versatile daily search hub. It seamlessly integrates major traditional search engines and cutting-edge AI chats, offering two distinct functionalities in one sleek interface.

**[📖 Project Introduction](https://www.cxthhhhh.com/search-aio/)** | **[➡️ Live Demo](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**

<div align="center">
  <p>
    <a href="README_CN.md">简体中文</a> | <b>English</b> | <a href="README_RU.md">Русский</a>
  </p>
</div>

![SearchAIO Screenshot](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_Screenshot_EN.png)

---

## ✨ Features

-   **Dual-Functionality**:
    -   **All-in-One Search Hub**: Use it as your personal start page to quickly search across 76 search and AI services.
    -   **"Let Me Search For You" Tool**: Generate a shareable link that demonstrates the entire search process to others, from typing the query to clicking the search button.
-   **Extensive Engine Support**: Integrates with Google, Bing, Baidu, Yandex, DuckDuckGo, ChatGPT, Copilot, Perplexity, and more.
-   **Internationalization (i18n)**: Fully supports English, Chinese (中文), and Russian (Русский), with language selection saved locally.
-   **Dark/Light Mode**: Offers a beautiful, theme-switchable interface that automatically adapts to your system's preference and can be toggled manually.
-   **Fully Responsive**: Provides a seamless experience across desktop, tablet, and mobile devices.
-   **Zero Runtime Dependencies**: Built with vanilla HTML, CSS, and ES Modules. No framework or build step is required for deployment.
-   **Informative**: Includes descriptions for each search engine, helping users choose the right tool for their needs.

---

## 🚀 How to Use

### As a Personal Search Hub

![How to use SearchAIO as a personal search hub](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_As_a_Personal_Search_Hub.mp4)

1.  Visit the **[Live Demo](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2.  Select your preferred search engine from the list.
3.  Type your query into the search bar.
4.  Press `Enter` or click the main search button to perform the search in a new tab.

### To Generate a "Tutorial" Link

![How to generate a tutorial link with SearchAIO](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_To_Generate_a_Tutorial_Link.gif)

1.  Visit the **[Live Demo](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2.  Select the search engine you want to demonstrate.
3.  Type the question you were asked into the search bar.
4.  Click **"Create tutorial link (copy)"** to copy the exact tutorial URL.
5.  Where supported, **"Share directly"** opens the system share sheet with the query, engine, and tutorial URL.
6.  Send the link to the person who needs to learn how to search!

---

## 🛠️ Tech Stack

-   **HTML5**
-   **CSS3** (with CSS Variables for theming)
-   **Vanilla JavaScript** (ES6+)

`SearchAIO.html` is the application source file; rename it to `index.html` when deploying. Its code is separated into an engine registry, i18n, preferences, URL routing, tutorial animation, and UI modules. Double-clicking the file uses the standalone runtime; HTTP deployments use ES Modules.

## ⌨️ Fast routing and maintenance

- Use `google: query` or `!g query` to route directly; each engine button exposes its aliases in its tooltip.
- `Ctrl/Cmd + K` focuses search, `Alt + ↑/↓` changes engines, and `Esc` closes suggestions or dialogs.
- Favorites stay in the current browser only. Search history is not collected.
- Open `SearchAIO.html?selftest=1` after changing the engine registry, or run `npm test` where Node.js is available.
- After changing `src/*.js`, run `npm run build:static`, then rename `SearchAIO.html` to `index.html` for deployment.

Read [`ARCHITECTURE.md`](ARCHITECTURE.md) for the product contract, module layout, and registry rules.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/MeowLove/SearchAIO/issues).

## 📄 License

This project is licensed under the **GPL-3.0 license**. See the [LICENSE](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE) file for details.
