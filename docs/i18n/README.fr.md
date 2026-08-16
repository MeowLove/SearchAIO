# SearchAIO — Portail de recherche tout-en-un

![Version](https://img.shields.io/badge/version-2.3.0-blue?style=flat-square)

[![GitHub Stars](https://img.shields.io/github/stars/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/stargazers)
[![Fork](https://img.shields.io/github/forks/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/network/members)
[![License](https://img.shields.io/github/license/MeowLove/SearchAIO?style=flat-square&color=blue)](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)
[![Project Page](https://img.shields.io/badge/Project%20Page-Website-green?style=flat-square)](https://www.cxthhhhh.com/search-aio/)

**SearchAIO** réunit les moteurs traditionnels et les chats IA dans un centre de recherche quotidien, avec des liens partageables qui montrent tout le parcours de recherche.

**[📖 Présentation du projet](https://www.cxthhhhh.com/search-aio/)** | **[➡️ Démo en ligne](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**

<div align="center"><p><a href="../../README.md">English</a> | <a href="README.zh-CN.md">简体中文</a> | <a href="README.ru.md">Русский</a> | <a href="README.es.md">Español</a> | <b>Français</b> | <a href="README.ar.md">العربية</a> | <a href="README.pt-BR.md">Português (Brasil)</a> | <a href="README.ja.md">日本語</a> | <a href="README.de.md">Deutsch</a></p></div>

![Capture SearchAIO](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_Screenshot_EN.png)

---

## ✨ Fonctionnalités

- **Deux fonctions** : page d’accueil personnelle parmi 76 services, ou liens de tutoriel montrant le processus complet.
- **Large prise en charge** : Google, Bing, Baidu, Yandex, DuckDuckGo, ChatGPT, Copilot, Perplexity et plus encore.
- **Internationalisation** : chinois, anglais, russe, espagnol, français, arabe, portugais brésilien, japonais et allemand ; le choix est conservé localement.
- **Thèmes clair/sombre**, interface responsive et aucune dépendance d’exécution.
- **Descriptions des moteurs** pour choisir le bon outil.

---

## 🚀 Utilisation

### Centre de recherche personnel

https://github.com/user-attachments/assets/41f9c122-5d37-46cb-99c3-886bb2dab3d0

1. Ouvrez la **[démo en ligne](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2. Choisissez un moteur dans la liste.
3. Saisissez votre requête dans le champ de recherche.
4. Appuyez sur `Entrée` ou le bouton principal pour rechercher dans un nouvel onglet.

### Créer un lien de tutoriel

https://github.com/user-attachments/assets/0bb11175-036f-464b-b8a1-6721d973e057

1. Ouvrez la **[démo en ligne](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2. Choisissez le moteur à présenter.
3. Saisissez la question dans le champ de recherche.
4. Cliquez sur **« Créer un lien de tutoriel (copier) »**.
5. Si disponible, **« Partager directement »** ouvre la feuille de partage système.
6. Envoyez le lien à la personne qui doit apprendre à rechercher.

---

## 🛠️ Technologies

- **HTML5**
- **CSS3** (variables CSS pour les thèmes)
- **JavaScript natif** (ES6+)

`SearchAIO.html` est le fichier source ; pour publier, renommez-le en `index.html`. Le code est séparé en registre de moteurs, i18n, préférences, routage URL, animation de tutoriel et modules UI. L’ouverture directe utilise le runtime autonome ; le déploiement HTTP utilise ES Modules.

## ⌨️ Routage rapide et maintenance

- Utilisez `google: requête` ou `!g requête` ; chaque bouton expose ses alias dans son infobulle.
- `Ctrl/Cmd + K` cible la recherche, `Alt + ↑/↓` change de moteur et `Esc` ferme suggestions ou dialogues.
- Les favoris restent dans le navigateur actuel ; aucun historique de recherche n’est collecté.
- Après modification du registre, ouvrez `SearchAIO.html?selftest=1` ou lancez `npm test`.
- Après modification de `src/*.js`, lancez `npm run build:static`, puis renommez `SearchAIO.html` en `index.html`.

Voir [ARCHITECTURE.md](../../ARCHITECTURE.md).

---

## 🤝 Contribution

Contributions, signalements et demandes sont bienvenus ; consultez les [issues](https://github.com/MeowLove/SearchAIO/issues).

## 📄 Licence

Le projet est sous licence **GPL-3.0**. Voir [LICENSE](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE).
