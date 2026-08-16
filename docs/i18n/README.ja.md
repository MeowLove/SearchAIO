# SearchAIO — オールインワン検索ポータル

<div align="center">
  <p>
    <a href="../../README.md">English</a> | <a href="README.zh-CN.md">简体中文</a> | <a href="README.ru.md">Русский</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.ar.md">العربية</a> | <a href="README.pt-BR.md">Português (Brasil)</a> | <b>日本語</b> | <a href="README.de.md">Deutsch</a>
  </p>
</div>

[![GitHub Stars](https://img.shields.io/github/stars/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/stargazers) [![License](https://img.shields.io/github/license/MeowLove/SearchAIO?style=flat-square&color=blue)](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)

**SearchAIO** は従来の検索エンジンと最新の AI サービスを一つの検索ハブにまとめ、検索手順を共有できるチュートリアルリンクも作成できます。

**[📖 プロジェクト紹介](https://www.cxthhhhh.com/search-aio/)** | **[➡️ オンラインデモ](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**

![SearchAIO スクリーンショット](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_Screenshot_EN.png)

## ✨ 主な機能

- ウェブ検索、専門検索、AI サービスの合計 76 件をすばやく切り替え。
- 各エンジンの用途説明を表示し、目的に合ったツールを選択。
- 中国語、英語、ロシア語、スペイン語、フランス語、アラビア語、ブラジルポルトガル語、日本語、ドイツ語に対応。
- ライト/ダークテーマ、レスポンシブ表示、ブラウザ内だけに保存されるお気に入り。
- 検索の流れを共有できるチュートリアルリンクを作成。

## 🚀 使い方

### 個人検索ハブとして使う

https://github.com/user-attachments/assets/41f9c122-5d37-46cb-99c3-886bb2dab3d0

1. **[オンラインデモ](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)** を開きます。
2. エンジンを選び、検索語を入力して `Enter` または検索ボタンを押します。
3. `google: 検索語` または `!g 検索語` で直接ルーティングできます。

### チュートリアルリンクを作成する

1. 実演するエンジンを選び、質問を入力します。
2. 「チュートリアルリンクを作成（コピー）」をクリックします。
3. 検索方法を学ぶ人にリンクを送ります。

## 🛠️ 開発とデプロイ

HTML、CSS、Vanilla JavaScript、ES Modules で構成され、実行時依存はありません。`src/*.js` を変更したら `npm run build:static` を実行し、公開時は `SearchAIO.html` を `index.html` に変更します。エンジン設定の変更後は `SearchAIO.html?selftest=1` または `npm test` で確認できます。

[ARCHITECTURE.md](../../ARCHITECTURE.md) を参照してください。[Issues](https://github.com/MeowLove/SearchAIO/issues) とコントリビューションを歓迎します。ライセンスは [GPL-3.0](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE) です。
