import { ENGINES, getEngine } from '../config/engines.js';

const normalize = (value) => value.toLowerCase().trim();

function byPrefix(prefix) {
  const route = normalize(prefix).replace(/:$/, '');
  return ENGINES.find((engine) => engine.id === route || engine.aliases.includes(route));
}

function byBang(bang) {
  const route = normalize(bang).replace(/^!/, '');
  return ENGINES.find((engine) => engine.bangs.includes(route));
}

export function parseSearchInput(value, fallbackEngineId) {
  const raw = value.trim();
  let engine = getEngine(fallbackEngineId);
  let query = raw;
  const bangTokens = raw.match(/(?:^|\s)!([a-z0-9-]+)(?=\s|$)/gi) || [];
  const bang = bangTokens.at(-1);

  if (bang) {
    const bangEngine = byBang(bang);
    if (bangEngine) {
      engine = bangEngine;
      query = raw.replace(bang, ' ').replace(/\s{2,}/g, ' ').trim();
      return { engine, query, route: `!${bang.slice(1)}` };
    }
  }

  const prefixMatch = raw.match(/^([a-z0-9-]+):\s*/i);
  if (prefixMatch) {
    const prefixEngine = byPrefix(prefixMatch[1]);
    if (prefixEngine) {
      engine = prefixEngine;
      query = raw.slice(prefixMatch[0].length).trim();
      return { engine, query, route: `${prefixMatch[1]}:` };
    }
  }

  return { engine, query, route: null };
}

function interpolateQuery(template, query) {
  return template.replaceAll('%s', encodeURIComponent(query));
}

function buildFormSubmission(form, query) {
  return {
    type: 'form',
    method: (form.method || 'POST').toUpperCase(),
    action: form.action,
    fields: Object.fromEntries(Object.entries(form.fields || {}).map(([name, value]) => [name, interpolateQuery(String(value), query)]))
  };
}

/**
 * Returns the browser-native operation SearchAIO can perform without calling
 * a third-party private API. URL routes are preferred; form routes are only
 * used when an engine explicitly documents a normal HTML form endpoint.
 */
export function buildSearchSubmission(engine, query, { lucky = false } = {}) {
  const form = lucky && engine.luckyForm ? engine.luckyForm : engine.formSubmission;
  if (form) return buildFormSubmission(form, query);

  const template = lucky && engine.luckyUrl ? engine.luckyUrl : engine.searchUrl;
  return { type: 'url', method: 'GET', url: interpolateQuery(template, query) };
}

export function buildDestinationUrl(engine, query, { lucky = false } = {}) {
  const submission = buildSearchSubmission(engine, query, { lucky });
  return submission.type === 'url' ? submission.url : submission.action;
}

export function buildTutorialUrl({ engine, query, language, theme }) {
  const url = new URL(window.location.href);
  url.search = '';
  url.searchParams.set('mode', 'tutorial');
  url.searchParams.set('s', engine.id);
  url.searchParams.set('q', query);
  url.searchParams.set('lang', language);
  url.searchParams.set('theme', theme);
  return url.toString();
}

export function getTutorialRequest() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q');
  const engineId = params.get('s');
  const isTutorial = params.get('mode') === 'tutorial' || (query && engineId);
  return isTutorial && query && engineId ? { query, engine: getEngine(engineId) } : null;
}
