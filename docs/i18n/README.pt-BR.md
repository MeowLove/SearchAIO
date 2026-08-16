# SearchAIO — Portal de busca completo

![Versão](https://img.shields.io/badge/version-2.3.0-blue?style=flat-square)

[![GitHub Stars](https://img.shields.io/github/stars/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/stargazers)
[![Fork](https://img.shields.io/github/forks/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/network/members)
[![License](https://img.shields.io/github/license/MeowLove/SearchAIO?style=flat-square&color=blue)](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)
[![Project Page](https://img.shields.io/badge/Project%20Page-Website-green?style=flat-square)](https://www.cxthhhhh.com/search-aio/)

O **SearchAIO** reúne buscadores tradicionais e chats de IA em uma central diária de busca e cria links compartilháveis que demonstram todo o processo.

**[📖 Apresentação do projeto](https://www.cxthhhhh.com/search-aio/)** | **[➡️ Demo online](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**

<div align="center"><p><a href="../../README.md">English</a> | <a href="README.zh-CN.md">简体中文</a> | <a href="README.ru.md">Русский</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.ar.md">العربية</a> | <b>Português (Brasil)</b> | <a href="README.ja.md">日本語</a> | <a href="README.de.md">Deutsch</a></p></div>

![Captura do SearchAIO](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_Screenshot_EN.png)

---

## ✨ Recursos

- **Duas funções**: página inicial para pesquisar em 76 serviços ou links de tutorial que mostram o processo completo.
- **Suporte amplo**: Google, Bing, Baidu, Yandex, DuckDuckGo, ChatGPT, Copilot, Perplexity e mais.
- **Internacionalização**: chinês, inglês, russo, espanhol, francês, árabe, português brasileiro, japonês e alemão, com escolha salva localmente.
- **Tema claro/escuro**, layout responsivo e nenhuma dependência de execução.
- **Descrições dos mecanismos** ajudam a escolher a ferramenta certa.

---

## 🚀 Como usar

### Como central de busca pessoal

https://github.com/user-attachments/assets/41f9c122-5d37-46cb-99c3-886bb2dab3d0

1. Acesse a **[demo online](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2. Escolha um mecanismo na lista.
3. Digite a consulta na caixa de busca.
4. Pressione `Enter` ou o botão principal para buscar em outra aba.

### Criar um link de tutorial

https://github.com/user-attachments/assets/0bb11175-036f-464b-b8a1-6721d973e057

1. Acesse a **[demo online](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2. Escolha o mecanismo a demonstrar.
3. Digite a pergunta na caixa de busca.
4. Clique em **“Criar link de tutorial (copiar)”**.
5. Quando disponível, **“Compartilhar diretamente”** abre o painel do sistema.
6. Envie o link a quem precisa aprender a pesquisar.

---

## 🛠️ Tecnologias

- **HTML5**
- **CSS3** (variáveis CSS para temas)
- **JavaScript puro** (ES6+)

`SearchAIO.html` é o arquivo-fonte; renomeie-o para `index.html` ao publicar. O código é separado em registro de mecanismos, i18n, preferências, roteamento de URL, animação de tutorial e módulos de UI. A abertura direta usa o runtime independente; a publicação HTTP usa ES Modules.

## ⌨️ Roteamento rápido e manutenção

- Use `google: consulta` ou `!g consulta`; cada botão mostra seus aliases na dica.
- `Ctrl/Cmd + K` foca a busca, `Alt + ↑/↓` troca o mecanismo e `Esc` fecha sugestões ou diálogos.
- Favoritos ficam apenas no navegador atual; o histórico não é coletado.
- Após alterar o registro, abra `SearchAIO.html?selftest=1` ou execute `npm test`.
- Após alterar `src/*.js`, execute `npm run build:static` e renomeie `SearchAIO.html` para `index.html`.

Consulte [ARCHITECTURE.md](../../ARCHITECTURE.md).

---

## 🤝 Contribuir

Contribuições, problemas e solicitações são bem-vindos; consulte [issues](https://github.com/MeowLove/SearchAIO/issues).

## 📄 Licença

O projeto usa a licença **GPL-3.0**. Consulte [LICENSE](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE).
