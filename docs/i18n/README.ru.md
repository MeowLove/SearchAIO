# SearchAIO — универсальный поисковый портал

<div align="center">
  <p>
    <a href="../../README.md">English</a> | <a href="README.zh-CN.md">简体中文</a> | <b>Русский</b> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.ar.md">العربية</a> | <a href="README.pt-BR.md">Português (Brasil)</a> | <a href="README.ja.md">日本語</a> | <a href="README.de.md">Deutsch</a>
  </p>
</div>

[![GitHub Stars](https://img.shields.io/github/stars/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/stargazers) [![License](https://img.shields.io/github/license/MeowLove/SearchAIO?style=flat-square&color=blue)](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)

**SearchAIO** объединяет традиционный поиск и современные AI-сервисы в едином ежедневном поисковом центре, а также создаёт ссылки для наглядной демонстрации поиска.

**[📖 О проекте](https://www.cxthhhhh.com/search-aio/)** | **[➡️ Демо-версия](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**

![Скриншот SearchAIO](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_Screenshot_RU.png)

## ✨ Возможности

- Быстрое переключение между 76 веб-, специализированными и AI-сервисами.
- Описание назначения каждого движка для осознанного выбора.
- Поддержка китайского, английского, русского, испанского, французского, арабского, бразильского португальского, японского и немецкого языков.
- Светлая и тёмная темы, адаптивный интерфейс и локальные избранные; настройки не покидают браузер.
- Создание ссылок-демонстраций процесса поиска.

## 🚀 Использование

### Личный поисковый центр

https://github.com/user-attachments/assets/41f9c122-5d37-46cb-99c3-886bb2dab3d0

1. Откройте **[демо-версию](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2. Выберите движок, введите запрос и нажмите `Enter` или кнопку поиска.
3. Введите `google: запрос` или `!g запрос`, чтобы сразу направить запрос в нужный движок.

### Обучающая ссылка

1. Выберите движок и введите вопрос.
2. Нажмите «Создать обучающую ссылку (копировать)».
3. Отправьте ссылку пользователю, которому нужно освоить поиск.

## 🛠️ Разработка и публикация

Проект использует HTML, CSS, чистый JavaScript и ES Modules без runtime-зависимостей. После изменений в `src/*.js` выполните `npm run build:static`; для публикации переименуйте `SearchAIO.html` в `index.html`. После изменения реестра движков откройте `SearchAIO.html?selftest=1` или выполните `npm test`.

См. [ARCHITECTURE.md](../../ARCHITECTURE.md). Приветствуются [Issues](https://github.com/MeowLove/SearchAIO/issues) и вклад в проект. Лицензия: [GPL-3.0](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE).
