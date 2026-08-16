# SearchAIO — Das All-in-One-Suchportal

<div align="center">
  <p>
    <a href="../../README.md">English</a> | <a href="README.zh-CN.md">简体中文</a> | <a href="README.ru.md">Русский</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.ar.md">العربية</a> | <a href="README.pt-BR.md">Português (Brasil)</a> | <a href="README.ja.md">日本語</a> | <b>Deutsch</b>
  </p>
</div>

[![GitHub Stars](https://img.shields.io/github/stars/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/stargazers) [![License](https://img.shields.io/github/license/MeowLove/SearchAIO?style=flat-square&color=blue)](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)

**SearchAIO** bündelt klassische Suchmaschinen und moderne KI-Dienste in einem täglichen Suchzentrum und erstellt teilbare Links, die den Suchablauf demonstrieren.

**[📖 Projektvorstellung](https://www.cxthhhhh.com/search-aio/)** | **[➡️ Online-Demo](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**

![SearchAIO-Screenshot](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_Screenshot_EN.png)

## ✨ Funktionen

- Schneller Wechsel zwischen 76 Web-, Fach- und KI-Suchdiensten.
- Eine Beschreibung für jedes Ziel hilft bei der Auswahl des passenden Werkzeugs.
- Unterstützt Chinesisch, Englisch, Russisch, Spanisch, Französisch, Arabisch, brasilianisches Portugiesisch, Japanisch und Deutsch.
- Helles/dunkles Design, responsive Oberfläche und lokale Favoriten; Einstellungen bleiben im Browser.
- Erstellen Sie teilbare Links, die den Suchablauf vorführen.

## 🚀 Verwendung

### Als persönliches Suchzentrum

https://github.com/user-attachments/assets/41f9c122-5d37-46cb-99c3-886bb2dab3d0

1. Öffnen Sie die **[Online-Demo](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2. Wählen Sie eine Suchmaschine, geben Sie eine Anfrage ein und drücken Sie `Enter` oder die Suchtaste.
3. Verwenden Sie `google: Anfrage` oder `!g Anfrage`, um direkt weiterzuleiten.

### Tutorial-Link erstellen

1. Wählen Sie die vorzuführende Suchmaschine und geben Sie eine Frage ein.
2. Klicken Sie auf „Tutorial-Link erstellen (kopieren)“.
3. Senden Sie den Link an die Person, die den Suchablauf lernen soll.

## 🛠️ Entwicklung und Bereitstellung

Das Projekt verwendet HTML, CSS, Vanilla JavaScript und ES Modules ohne Laufzeitabhängigkeiten. Nach Änderungen an `src/*.js` führen Sie `npm run build:static` aus; zur Bereitstellung benennen Sie `SearchAIO.html` in `index.html` um. Nach Änderungen am Suchmaschinenregister öffnen Sie `SearchAIO.html?selftest=1` oder führen `npm test` aus.

Siehe [ARCHITECTURE.md](../../ARCHITECTURE.md). [Issues](https://github.com/MeowLove/SearchAIO/issues) und Beiträge sind willkommen. Lizenz: [GPL-3.0](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE).
