import assert from 'node:assert/strict';
import test from 'node:test';
import { ENGINES } from '../src/config/engines.js';
import { SUPPORTED_LANGUAGES, TRANSLATIONS } from '../src/i18n/translations.js';

test('every supported locale provides the UI and engine description keys', () => {
  const englishKeys = Object.keys(TRANSLATIONS.en);
  assert.deepEqual(SUPPORTED_LANGUAGES, ['zh', 'en', 'ru', 'es', 'fr', 'ar', 'pt-BR', 'ja', 'de']);

  for (const language of SUPPORTED_LANGUAGES) {
    assert.ok(TRANSLATIONS[language], `missing ${language} dictionary`);
    assert.deepEqual(englishKeys.filter((key) => !TRANSLATIONS[language][key]), [], `missing ${language} UI keys`);
    assert.deepEqual(ENGINES.filter((engine) => !TRANSLATIONS[language][engine.descriptionKey]).map((engine) => engine.id), [], `missing ${language} engine descriptions`);
  }

  for (const language of ['es', 'fr', 'ar', 'pt-BR', 'ja', 'de']) {
    assert.deepEqual(ENGINES.filter((engine) => TRANSLATIONS[language][engine.descriptionKey] === TRANSLATIONS.en[engine.descriptionKey]).map((engine) => engine.id), [], `${language} descriptions fall back to English`);
  }
});
