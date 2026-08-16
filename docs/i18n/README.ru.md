# SearchAIO — универсальный поисковый портал

![Версия](https://img.shields.io/badge/version-2.3.0-blue?style=flat-square)

[![GitHub Stars](https://img.shields.io/github/stars/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/stargazers)
[![Fork](https://img.shields.io/github/forks/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/network/members)
[![License](https://img.shields.io/github/license/MeowLove/SearchAIO?style=flat-square&color=blue)](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)
[![Project Page](https://img.shields.io/badge/Страница%20проекта-Website-green?style=flat-square)](https://www.cxthhhhh.com/search-aio/)

**SearchAIO** объединяет основные поисковые системы и современные AI-чаты в ежедневном поисковом центре и создаёт ссылки для демонстрации поиска.

**[📖 О проекте](https://www.cxthhhhh.com/search-aio/)** | **[➡️ Демо-версия](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**

<div align="center"><p><a href="../../README.md">English</a> | <a href="README.zh-CN.md">简体中文</a> | <b>Русский</b> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.ar.md">العربية</a> | <a href="README.pt-BR.md">Português (Brasil)</a> | <a href="README.ja.md">日本語</a> | <a href="README.de.md">Deutsch</a></p></div>

![Скриншот SearchAIO](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_Screenshot_RU.png)

---

## ✨ Возможности

- **Две функции**: личная стартовая страница для поиска среди 76 сервисов и ссылки-демонстрации полного процесса поиска.
- **Широкая поддержка**: Google, Bing, Baidu, Яндекс, DuckDuckGo, ChatGPT, Copilot, Perplexity и другие.
- **Интернационализация**: китайский, английский, русский, испанский, французский, арабский, бразильский португальский, японский и немецкий; выбор хранится локально.
- **Тёмная/светлая тема**, адаптивный интерфейс и отсутствие runtime-зависимостей.
- **Описания движков** помогают выбрать подходящий инструмент.

---

## 🚀 Использование

### Личный поисковый центр

https://github.com/user-attachments/assets/41f9c122-5d37-46cb-99c3-886bb2dab3d0

1. Откройте **[демо-версию](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2. Выберите поисковую систему из списка.
3. Введите запрос в строку поиска.
4. Нажмите `Enter` или кнопку поиска, чтобы открыть результаты в новой вкладке.

### Создание обучающей ссылки

https://github.com/user-attachments/assets/0bb11175-036f-464b-b8a1-6721d973e057

1. Откройте **[демо-версию](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2. Выберите демонстрируемую поисковую систему.
3. Введите вопрос в строку поиска.
4. Нажмите **«Создать обучающую ссылку (копировать)»**.
5. При поддержке **«Поделиться напрямую»** открывает системное меню отправки.
6. Отправьте ссылку человеку, которому нужно освоить поиск.

---

## 🛠️ Технологии

- **HTML5**
- **CSS3** (CSS-переменные для тем)
- **Чистый JavaScript** (ES6+)

`SearchAIO.html` — исходный файл приложения; при публикации переименуйте его в `index.html`. Код разделён на реестр движков, i18n, настройки, URL-маршрутизацию, анимацию обучения и UI-модули. При прямом открытии используется standalone runtime, а HTTP-публикация использует ES Modules.

## ⌨️ Быстрая маршрутизация и обслуживание

- Используйте `google: запрос` или `!g запрос`; псевдонимы каждого движка показаны в подсказке кнопки.
- `Ctrl/Cmd + K` фокусирует поиск, `Alt + ↑/↓` меняет движок, `Esc` закрывает подсказки или окна.
- Избранное хранится только в текущем браузере; история поиска не собирается.
- После изменения реестра откройте `SearchAIO.html?selftest=1` или выполните `npm test`.
- После изменения `src/*.js` выполните `npm run build:static`, затем переименуйте `SearchAIO.html` в `index.html`.

См. [ARCHITECTURE.md](../../ARCHITECTURE.md).

---

## 🤝 Участие

Приветствуются вклад, сообщения о проблемах и предложения; смотрите [issues](https://github.com/MeowLove/SearchAIO/issues).

## 📄 Лицензия

Проект распространяется по **GPL-3.0**; подробности в [LICENSE](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE).
