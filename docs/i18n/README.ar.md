# SearchAIO — بوابة بحث متكاملة

![الإصدار](https://img.shields.io/badge/version-2.3.0-blue?style=flat-square)

[![GitHub Stars](https://img.shields.io/github/stars/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/stargazers)
[![Fork](https://img.shields.io/github/forks/MeowLove/SearchAIO?style=flat-square&logo=github)](https://github.com/MeowLove/SearchAIO/network/members)
[![License](https://img.shields.io/github/license/MeowLove/SearchAIO?style=flat-square&color=blue)](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE)
[![Project Page](https://img.shields.io/badge/Project%20Page-Website-green?style=flat-square)](https://www.cxthhhhh.com/search-aio/)

**SearchAIO** يجمع محركات البحث التقليدية ومحادثات الذكاء الاصطناعي في مركز بحث يومي، وينشئ روابط قابلة للمشاركة تعرض عملية البحث كاملة.

**[📖 مقدمة المشروع](https://www.cxthhhhh.com/search-aio/)** | **[➡️ التجربة المباشرة](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**

<div dir="rtl" align="center"><p><a href="../../README.md">English</a> | <a href="README.zh-CN.md">简体中文</a> | <a href="README.ru.md">Русский</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <b>العربية</b> | <a href="README.pt-BR.md">Português (Brasil)</a> | <a href="README.ja.md">日本語</a> | <a href="README.de.md">Deutsch</a></p></div>

![لقطة SearchAIO](https://github.com/MeowLove/SearchAIO/raw/main/img/SearchAIO_Screenshot_EN.png)

---

## ✨ المزايا

- **وظيفتان**: صفحة بداية شخصية للبحث في 76 خدمة، أو روابط شرح تعرض المسار كاملاً.
- **دعم واسع**: Google وBing وBaidu وYandex وDuckDuckGo وChatGPT وCopilot وPerplexity وغيرها.
- **تدويل**: الصينية والإنجليزية والروسية والإسبانية والفرنسية والعربية والبرتغالية البرازيلية واليابانية والألمانية، مع حفظ الاختيار محلياً.
- **مظهر فاتح/داكن**، واجهة متجاوبة، ولا اعتماديات تشغيلية.
- **وصف للمحركات** لاختيار الأداة الملائمة.

---

## 🚀 الاستخدام

### كمركز بحث شخصي

https://github.com/user-attachments/assets/41f9c122-5d37-46cb-99c3-886bb2dab3d0

1. افتح **[التجربة المباشرة](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2. اختر محركاً من القائمة.
3. اكتب الاستعلام في مربع البحث.
4. اضغط `Enter` أو زر البحث لفتح النتائج في علامة تبويب جديدة.

### إنشاء رابط شرح

https://github.com/user-attachments/assets/0bb11175-036f-464b-b8a1-6721d973e057

1. افتح **[التجربة المباشرة](https://www.cxthhhhh.com/CXT-Lib/SearchAIO/)**.
2. اختر المحرك الذي تريد عرضه.
3. اكتب السؤال في مربع البحث.
4. اضغط **«إنشاء رابط شرح (نسخ)»**.
5. عند توفرها، تفتح **«مشاركة مباشرة»** لوحة مشاركة النظام.
6. أرسل الرابط لمن يحتاج إلى تعلم البحث.

---

## 🛠️ التقنيات

- **HTML5**
- **CSS3** (متغيرات CSS للمظهر)
- **JavaScript أصلي** (ES6+)

`SearchAIO.html` هو ملف المصدر؛ أعد تسميته إلى `index.html` عند النشر. يقسم الكود إلى سجل محركات، وi18n، وتفضيلات، وتوجيه URL، ورسوم الشرح، ووحدات الواجهة. الفتح المباشر يستخدم runtime المستقل، والنشر عبر HTTP يستخدم ES Modules.

## ⌨️ التوجيه السريع والصيانة

- استخدم `google: استعلام` أو `!g استعلام`؛ تعرض تلميحات الأزرار الأسماء البديلة.
- `Ctrl/Cmd + K` للتركيز، و`Alt + ↑/↓` لتبديل المحرك، و`Esc` لإغلاق الاقتراحات أو النوافذ.
- تبقى المفضلة في المتصفح الحالي فقط ولا يُجمع سجل البحث.
- بعد تغيير السجل، افتح `SearchAIO.html?selftest=1` أو شغّل `npm test`.
- بعد تغيير `src/*.js` شغّل `npm run build:static` ثم أعد تسمية `SearchAIO.html` إلى `index.html`.

راجع [ARCHITECTURE.md](../../ARCHITECTURE.md).

---

## 🤝 المساهمة

نرحب بالمساهمات والمشكلات والطلبات؛ راجع [issues](https://github.com/MeowLove/SearchAIO/issues).

## 📄 الترخيص

المشروع مرخص بـ **GPL-3.0**. راجع [LICENSE](https://github.com/MeowLove/SearchAIO/blob/main/LICENSE).
