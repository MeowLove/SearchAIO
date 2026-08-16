# SearchAIO — Portal de búsqueda todo en uno

![Versión](https://img.shields.io/badge/version-2.3.0-blue?style=flat-square)

[![GitHub Stars](https://img.shields.io/github/stars/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/stargazers)
[![Fork](https://img.shields.io/github/forks/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/network/members)
[![License](https://img.shields.io/github/license/MeowLove/SearchAIO?style=flat-square&color=blue)](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)
[![Project Page](https://img.shields.io/badge/Project%20Page-Website-green?style=flat-square)](https://www.cxthhhhh.com/search-aio/)

**SearchAIO** integra buscadores tradicionales y chats de IA en un centro de búsqueda diario, y crea enlaces compartibles que demuestran todo el proceso.

**[📖 Introducción al proyecto](https://www.cxthhhhh.com/search-aio/)** | **[➡️ Demo en línea](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**

<div align="center"><p><a href="../../README.md">English</a> | <a href="README.zh-CN.md">简体中文</a> | <a href="README.ru.md">Русский</a> | <b>Español</b> | <a href="README.fr.md">Français</a> | <a href="README.ar.md">العربية</a> | <a href="README.pt-BR.md">Português (Brasil)</a> | <a href="README.ja.md">日本語</a> | <a href="README.de.md">Deutsch</a></p></div>

![Captura de SearchAIO](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_Screenshot_EN.png)

---

## ✨ Funciones

- **Dos funciones**: página de inicio personal para buscar en 76 servicios y enlaces de tutorial que muestran el proceso completo.
- **Amplio soporte**: Google, Bing, Baidu, Yandex, DuckDuckGo, ChatGPT, Copilot, Perplexity y más.
- **Internacionalización**: chino, inglés, ruso, español, francés, árabe, portugués de Brasil, japonés y alemán; la elección se guarda localmente.
- **Tema claro/oscuro**, diseño adaptable y cero dependencias de ejecución.
- **Descripciones de motores** para elegir la herramienta adecuada.

---

## 🚀 Cómo usar

### Como centro de búsqueda personal

https://github.com/user-attachments/assets/41f9c122-5d37-46cb-99c3-886bb2dab3d0

1. Visita la **[demo en línea](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2. Elige un motor de la lista.
3. Escribe la consulta en la barra de búsqueda.
4. Pulsa `Enter` o el botón principal para buscar en una pestaña nueva.

### Crear un enlace de tutorial

https://github.com/user-attachments/assets/0bb11175-036f-464b-b8a1-6721d973e057

1. Visita la **[demo en línea](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2. Elige el motor que quieres demostrar.
3. Escribe la pregunta en la barra de búsqueda.
4. Haz clic en **«Crear enlace de tutorial (copiar)»**.
5. Cuando esté disponible, **«Compartir directamente»** abre el panel del sistema.
6. Envía el enlace a quien necesite aprender a buscar.

---

## 🛠️ Tecnologías

- **HTML5**
- **CSS3** (variables CSS para temas)
- **JavaScript nativo** (ES6+)

`SearchAIO.html` es el archivo fuente; para publicar, renómbralo a `index.html`. El código se divide entre registro de motores, i18n, preferencias, rutas URL, animación de tutorial y módulos de interfaz. Al abrir el archivo directamente usa el runtime independiente; por HTTP usa ES Modules.

## ⌨️ Rutas rápidas y mantenimiento

- Usa `google: consulta` o `!g consulta`; cada botón muestra sus alias en la ayuda emergente.
- `Ctrl/Cmd + K` enfoca la búsqueda, `Alt + ↑/↓` cambia de motor y `Esc` cierra sugerencias o diálogos.
- Los favoritos solo viven en el navegador actual; no se recopila historial.
- Tras modificar el registro, abre `SearchAIO.html?selftest=1` o ejecuta `npm test`.
- Tras modificar `src/*.js`, ejecuta `npm run build:static` y renombra `SearchAIO.html` a `index.html`.

Consulta [ARCHITECTURE.md](../../ARCHITECTURE.md).

---

## 🤝 Contribuir

Se aceptan contribuciones, incidencias y solicitudes; consulta [issues](https://github.com/MeowLove/SearchAIO/issues).

## 📄 Licencia

El proyecto usa la licencia **GPL-3.0**. Consulta [LICENSE](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE).
