import { SUPPORTED_LANGUAGES } from '../i18n/translations.js';

const STORAGE_KEY = 'searchaio.preferences.v2';

function safeRead() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}

function detectLanguage() {
  const code = navigator.language?.toLowerCase() || 'en';
  if (code.startsWith('zh')) return 'zh';
  if (code.startsWith('ru')) return 'ru';
  if (code.startsWith('es')) return 'es';
  if (code.startsWith('fr')) return 'fr';
  if (code.startsWith('ar')) return 'ar';
  if (code.startsWith('pt')) return 'pt-BR';
  if (code.startsWith('ja')) return 'ja';
  if (code.startsWith('de')) return 'de';
  return 'en';
}

export function loadPreferences() {
  const saved = safeRead();
  return {
    language: SUPPORTED_LANGUAGES.includes(saved.language) ? saved.language : detectLanguage(),
    theme: ['light', 'dark'].includes(saved.theme) ? saved.theme : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    selectedEngineId: typeof saved.selectedEngineId === 'string' ? saved.selectedEngineId : 'google',
    favorites: Array.isArray(saved.favorites) ? saved.favorites : []
  };
}

export function savePreferences(preferences) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences)); } catch { /* Storage may be unavailable in private contexts. */ }
}
