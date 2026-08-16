# SearchAIO — オールインワン検索ポータル

![バージョン](https://img.shields.io/badge/version-2.3.0-blue?style=flat-square)

[![GitHub Stars](https://img.shields.io/github/stars/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/stargazers)
[![Fork](https://img.shields.io/github/forks/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/network/members)
[![License](https://img.shields.io/github/license/MeowLove/SearchAIO?style=flat-square&color=blue)](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)
[![Project Page](https://img.shields.io/badge/Project%20Page-Website-green?style=flat-square)](https://www.cxthhhhh.com/search-aio/)

**SearchAIO** は従来の検索エンジンと最新の AI チャットを日常の検索ハブに集約し、検索手順全体を示す共有リンクを作成します。

**[📖 プロジェクト紹介](https://www.cxthhhhh.com/search-aio/)** | **[➡️ オンラインデモ](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**

<div align="center"><p><a href="../../README.md">English</a> | <a href="README.zh-CN.md">简体中文</a> | <a href="README.ru.md">Русский</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.ar.md">العربية</a> | <a href="README.pt-BR.md">Português (Brasil)</a> | <b>日本語</b> | <a href="README.de.md">Deutsch</a></p></div>

![SearchAIO スクリーンショット](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_Screenshot_EN.png)

---

## ✨ 機能

- **二つの機能**：76 のサービスを検索する個人用開始ページ、または全手順を示すチュートリアルリンク。
- **幅広い対応**：Google、Bing、Baidu、Yandex、DuckDuckGo、ChatGPT、Copilot、Perplexity など。
- **国際化**：中国語、英語、ロシア語、スペイン語、フランス語、アラビア語、ブラジルポルトガル語、日本語、ドイツ語に対応し、選択はローカル保存。
- **ライト/ダークテーマ**、レスポンシブ UI、実行時依存なし。
- **エンジン説明**により適切なツールを選択可能。

---

## 🚀 使い方

### 個人検索ハブとして

https://github.com/user-attachments/assets/41f9c122-5d37-46cb-99c3-886bb2dab3d0

1. **[オンラインデモ](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)** を開きます。
2. 一覧から検索エンジンを選びます。
3. 検索欄にクエリを入力します。
4. `Enter` またはメインの検索ボタンで新しいタブに結果を開きます。

### チュートリアルリンクを作成

https://github.com/user-attachments/assets/0bb11175-036f-464b-b8a1-6721d973e057

1. **[オンラインデモ](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)** を開きます。
2. 実演するエンジンを選びます。
3. 検索欄に質問を入力します。
4. **「チュートリアルリンクを作成（コピー）」** をクリックします。
5. 対応環境では **「直接共有」** がシステム共有を開きます。
6. 検索を学ぶ人にリンクを送ります。

---

## 🛠️ 技術スタック

- **HTML5**
- **CSS3**（テーマ用 CSS 変数）
- **Vanilla JavaScript**（ES6+）

`SearchAIO.html` はソースファイルです。公開時は `index.html` に変更します。コードはエンジンレジストリ、i18n、設定、URL ルーティング、チュートリアルアニメーション、UI モジュールに分割されています。直接開く場合は standalone runtime、HTTP 配信では ES Modules を使用します。

## ⌨️ 直接ルーティングと保守

- `google: クエリ` または `!g クエリ` を使用します。各ボタンのツールチップに別名があります。
- `Ctrl/Cmd + K` で検索欄にフォーカス、`Alt + ↑/↓` でエンジン切替、`Esc` で候補やダイアログを閉じます。
- お気に入りは現在のブラウザ内だけに保存され、検索履歴は収集しません。
- レジストリ変更後は `SearchAIO.html?selftest=1` を開くか、`npm test` を実行します。
- `src/*.js` 変更後は `npm run build:static` を実行し、`SearchAIO.html` を `index.html` に変更します。

[ARCHITECTURE.md](../../ARCHITECTURE.md) を参照してください。

---

## 🤝 コントリビューション

貢献、問題報告、機能要望を歓迎します。[issues](https://github.com/MeowLove/SearchAIO/issues) をご確認ください。

## 📄 ライセンス

本プロジェクトは **GPL-3.0** ライセンスです。詳細は [LICENSE](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE) を参照してください。
