# SearchAIO — Portal de búsqueda todo en uno

<div align="center">
  <p>
    <a href="../../README.md">English</a> | <a href="README.zh-CN.md">简体中文</a> | <a href="README.ru.md">Русский</a> | <b>Español</b> | <a href="README.fr.md">Français</a> | <a href="README.ar.md">العربية</a> | <a href="README.pt-BR.md">Português (Brasil)</a> | <a href="README.ja.md">日本語</a> | <a href="README.de.md">Deutsch</a>
  </p>
</div>

[![GitHub Stars](https://img.shields.io/github/stars/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/stargazers) [![License](https://img.shields.io/github/license/MeowLove/SearchAIO?style=flat-square&color=blue)](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)

**SearchAIO** reúne buscadores tradicionales y servicios de IA en un centro de búsqueda diario y permite crear enlaces que demuestran el proceso de búsqueda.

**[📖 Introducción al proyecto](https://www.cxthhhhh.com/search-aio/)** | **[➡️ Demo en línea](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**

![Captura de SearchAIO](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_Screenshot_EN.png)

## ✨ Funciones

- Cambia rápidamente entre 76 servicios de búsqueda web, especializada e IA.
- Consulta una descripción de cada motor para elegir la herramienta adecuada.
- Disponible en chino, inglés, ruso, español, francés, árabe, portugués de Brasil, japonés y alemán.
- Tema claro/oscuro, diseño adaptable y favoritos locales; las preferencias no salen del navegador.
- Genera enlaces compartibles que muestran el proceso de búsqueda.

## 🚀 Uso

### Centro de búsqueda personal

https://github.com/user-attachments/assets/41f9c122-5d37-46cb-99c3-886bb2dab3d0

1. Visita la **[demo en línea](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2. Elige un motor, escribe una consulta y pulsa `Enter` o el botón de búsqueda.
3. Usa `google: consulta` o `!g consulta` para dirigir la búsqueda directamente.

### Enlace de tutorial

1. Elige el motor que quieres mostrar e introduce una pregunta.
2. Haz clic en «Crear enlace de tutorial (copiar)».
3. Envía el enlace a quien necesite aprender el flujo de búsqueda.

## 🛠️ Desarrollo y despliegue

El proyecto usa HTML, CSS, JavaScript nativo y ES Modules, sin dependencias de ejecución. Tras cambiar `src/*.js`, ejecuta `npm run build:static`; al desplegar, renombra `SearchAIO.html` como `index.html`. Después de cambiar el registro de motores, abre `SearchAIO.html?selftest=1` o ejecuta `npm test`.

Consulta [ARCHITECTURE.md](../../ARCHITECTURE.md). Se agradecen las [issues](https://github.com/MeowLove/SearchAIO/issues) y contribuciones. Licencia [GPL-3.0](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE).
