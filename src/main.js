import { ENGINES, ENGINE_GROUPS, getEngine, validateEngineRegistry } from './config/engines.js';
import { SUPPORTED_LANGUAGES, translate } from './i18n/translations.js';
import { loadPreferences, savePreferences } from './services/preferences.js';
import { buildSearchSubmission, buildTutorialUrl, getTutorialRequest, parseSearchInput } from './services/router.js';
import { playTutorial } from './features/tutorial.js';
import { runSelfTest } from './selftest.js';

const byId = (id) => document.getElementById(id);
const elements = {
  shell: byId('app-shell'), logo: byId('engine-logo'), wordmark: byId('engine-wordmark'), input: byId('search-input'), form: byId('search-form'),
  engineChip: byId('engine-chip'), engineChipIcon: byId('engine-chip-icon'), engineChipName: byId('engine-chip-name'),
  searchButton: byId('search-button'), clearButton: byId('clear-query'),
  suggestions: byId('engine-suggestions'), footerRouteHint: byId('footer-route-hint'), engineGroups: byId('engine-groups'),
  engineDescription: byId('engine-description'), favoriteButton: byId('favorite-toggle'), enginePanel: byId('engine-panel'),
  tutorialPanel: byId('tutorial-panel'), copyLinkButton: byId('copy-link-button'), shareLinkButton: byId('share-link-button'), languageSwitcher: byId('language-switcher'),
  themeToggle: byId('theme-toggle'), cursor: byId('tutorial-cursor'), toastRegion: byId('toast-region'),
  shortcutsButton: byId('shortcuts-button'), shortcutsDialog: byId('shortcuts-dialog'), closeShortcuts: byId('close-shortcuts'),
  engineCatalogDialog: byId('engine-catalog-dialog'), engineCatalogSearch: byId('engine-catalog-search'), engineCatalogGroups: byId('engine-catalog-groups'), closeEngineCatalog: byId('close-engine-catalog')
};

const COMPACT_ENGINE_LIMIT = 8;

const urlParams = new URLSearchParams(window.location.search);
const preferences = loadPreferences();
const state = {
  ...preferences,
  selectedEngineId: getEngine(preferences.selectedEngineId).id,
  suggestionIndex: -1,
  tutorial: getTutorialRequest()
};

if (SUPPORTED_LANGUAGES.includes(urlParams.get('lang'))) state.language = urlParams.get('lang');
if (['light', 'dark'].includes(urlParams.get('theme'))) state.theme = urlParams.get('theme');
if (state.tutorial) state.selectedEngineId = state.tutorial.engine.id;

function currentEngine() {
  return getEngine(state.selectedEngineId);
}

function t(key, values) {
  return translate(state.language, key, values);
}

function persist() {
  savePreferences({
    language: state.language,
    theme: state.theme,
    selectedEngineId: state.selectedEngineId,
    favorites: state.favorites
  });
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  elements.toastRegion.append(toast);
  window.setTimeout(() => toast.remove(), 3600);
}

function groupLabel(category) {
  return t(ENGINE_GROUPS.find((group) => group.id === category)?.labelKey || 'groupWeb');
}

function createEngineButton(engine, { onSelect } = {}) {
  const isPending = engine.availability === 'pending';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'engine-button';
  button.classList.toggle('engine-button--pending', isPending);
  button.disabled = isPending;
  button.setAttribute('aria-pressed', String(engine.id === state.selectedEngineId));
  button.title = isPending ? t('enginePending', { engine: engine.name }) : `${engine.name} (${engine.aliases[0]}: / !${engine.bangs[0]})`;
  const logo = engine.logo ? document.createElement('img') : document.createElement('span');
  if (engine.logo) {
    logo.src = engine.logo;
    logo.alt = '';
  } else {
    logo.className = 'engine-mark';
    logo.textContent = engine.name.slice(0, 1);
  }
  const name = document.createElement('span');
  name.textContent = engine.name;
  button.append(logo, name);
  if (isPending) {
    const status = document.createElement('small');
    status.className = 'engine-status';
    status.textContent = t('statusPending');
    button.append(status);
  } else {
    button.addEventListener('click', () => {
      setEngine(engine.id);
      onSelect?.();
    });
  }
  return button;
}

function compactEngines(engines) {
  if (engines.length <= COMPACT_ENGINE_LIMIT) return engines;
  const selected = engines.find((engine) => engine.id === state.selectedEngineId);
  const visible = engines.slice(0, COMPACT_ENGINE_LIMIT);
  if (selected && !visible.some((engine) => engine.id === selected.id)) visible[visible.length - 1] = selected;
  return visible;
}

function catalogMatches(engine, value) {
  const needle = value.trim().toLowerCase().replace(/^!/, '').replace(/:$/, '');
  if (!needle) return true;
  return [engine.name, engine.id, ...engine.aliases, ...engine.bangs].some((candidate) => candidate.toLowerCase().includes(needle));
}

function renderEngineCatalog() {
  const filter = elements.engineCatalogSearch.value;
  elements.engineCatalogGroups.replaceChildren();
  for (const group of ENGINE_GROUPS) {
    const engines = ENGINES.filter((engine) => engine.category === group.id && catalogMatches(engine, filter));
    if (!engines.length) continue;
    const section = document.createElement('section');
    section.className = 'engine-catalog-group';
    section.dataset.engineCategory = group.id;
    const heading = document.createElement('h3');
    heading.textContent = groupLabel(group.id);
    const buttons = document.createElement('div');
    buttons.className = 'engine-catalog-buttons';
    engines.forEach((engine) => buttons.append(createEngineButton(engine, {
      onSelect: () => {
        elements.engineCatalogDialog.close();
        elements.input.focus();
      }
    })));
    section.append(heading, buttons);
    elements.engineCatalogGroups.append(section);
  }
  if (!elements.engineCatalogGroups.childElementCount) {
    const empty = document.createElement('p');
    empty.className = 'engine-catalog-empty';
    empty.textContent = t('catalogEmpty');
    elements.engineCatalogGroups.append(empty);
  }
}

function openEngineCatalog(categoryId) {
  elements.engineCatalogSearch.value = '';
  renderEngineCatalog();
  elements.engineCatalogDialog.showModal();
  elements.engineChip.setAttribute('aria-expanded', 'true');
  elements.engineCatalogSearch.focus();
  if (!categoryId) return;
  window.requestAnimationFrame(() => {
    const target = elements.engineCatalogGroups.querySelector(`[data-engine-category="${categoryId}"]`);
    if (target) {
      elements.engineCatalogGroups.scrollTo({
        top: target.offsetTop - elements.engineCatalogGroups.offsetTop,
        behavior: 'instant'
      });
    }
  });
}

function renderEngineGroups() {
  elements.engineGroups.replaceChildren();
  const favoriteEngines = ENGINES.filter((engine) => state.favorites.includes(engine.id));
  if (favoriteEngines.length) {
    const favorites = document.createElement('section');
    favorites.className = 'engine-group engine-group--favorites';
    const heading = document.createElement('h3');
    heading.textContent = t('groupFavorites');
    const buttons = document.createElement('div');
    buttons.className = 'engine-buttons';
    favoriteEngines.forEach((engine) => buttons.append(createEngineButton(engine)));
    favorites.append(heading, buttons);
    elements.engineGroups.append(favorites);
  }

  const categoryGrid = document.createElement('div');
  categoryGrid.className = 'engine-category-grid';
  for (const group of ENGINE_GROUPS) {
    const engines = ENGINES.filter((engine) => engine.category === group.id);
    const wrapper = document.createElement('section');
    wrapper.className = 'engine-group engine-group--card';
    wrapper.classList.toggle('has-active-engine', engines.some((engine) => engine.id === state.selectedEngineId));
    const header = document.createElement('div');
    header.className = 'engine-group-header';
    const heading = document.createElement('h3');
    heading.textContent = t(group.labelKey);
    const showAll = document.createElement('button');
    showAll.type = 'button';
    showAll.className = 'engine-group-show-all';
    showAll.textContent = t('catalogOpen', { count: engines.length });
    showAll.addEventListener('click', () => openEngineCatalog(group.id));
    const buttons = document.createElement('div');
    buttons.className = 'engine-buttons';
    compactEngines(engines).forEach((engine) => buttons.append(createEngineButton(engine)));
    header.append(heading, showAll);
    wrapper.append(header, buttons);
    categoryGrid.append(wrapper);
  }
  elements.engineGroups.append(categoryGrid);
}

function renderSuggestions(matches = []) {
  elements.suggestions.replaceChildren();
  state.suggestionIndex = matches.length ? Math.min(state.suggestionIndex, matches.length - 1) : -1;
  matches.forEach((engine, index) => {
    const isPending = engine.availability === 'pending';
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'suggestion-item';
    item.role = 'option';
    item.id = `engine-suggestion-${engine.id}`;
    item.disabled = isPending;
    item.setAttribute('aria-selected', String(index === state.suggestionIndex));
    const logo = engine.logo ? document.createElement('img') : document.createElement('span');
    if (engine.logo) {
      logo.src = engine.logo;
      logo.alt = '';
    } else {
      logo.className = 'engine-mark';
      logo.textContent = engine.name.slice(0, 1);
    }
    const details = document.createElement('span');
    const name = document.createElement('strong');
    name.textContent = engine.name;
    const route = document.createElement('small');
    route.textContent = `${engine.aliases[0]}: · !${engine.bangs[0]}`;
    details.append(name, document.createElement('br'), route);
    const category = document.createElement('small');
    category.textContent = isPending ? t('statusPending') : groupLabel(engine.category);
    item.append(logo, details, category);
    if (!isPending) {
      item.addEventListener('click', () => {
        setEngine(engine.id);
        elements.input.value = '';
        hideSuggestions();
        elements.input.focus();
      });
    }
    elements.suggestions.append(item);
  });
  elements.suggestions.classList.toggle('is-hidden', matches.length === 0);
  elements.input.setAttribute('aria-expanded', String(matches.length > 0));
  elements.input.setAttribute('aria-activedescendant', state.suggestionIndex >= 0 ? `engine-suggestion-${matches[state.suggestionIndex].id}` : '');
}

function hideSuggestions() {
  state.suggestionIndex = -1;
  elements.suggestions.classList.add('is-hidden');
  elements.suggestions.replaceChildren();
  elements.input.setAttribute('aria-expanded', 'false');
  elements.input.removeAttribute('aria-activedescendant');
}

function matchingEngines(value) {
  const raw = value.trim();
  const bangMatch = [...raw.matchAll(/(?:^|\s)!([a-z0-9-]+)(?=\s|$)/gi)].at(-1);
  const prefixMatch = raw.match(/^([a-z0-9-]+):/i);
  const needle = (bangMatch?.[1] || prefixMatch?.[1] || raw).toLowerCase().replace(/^!/, '').replace(/:$/, '');
  if (!needle) return [];
  return ENGINES.filter((engine) => [engine.name, engine.id, ...engine.aliases, ...engine.bangs].some((candidate) => candidate.toLowerCase().includes(needle))).slice(0, 7);
}

function updateEngineChipOffset() {
  window.requestAnimationFrame(() => {
    const chipWidth = Math.ceil(elements.engineChip.getBoundingClientRect().width);
    elements.form.style.setProperty('--engine-chip-offset', `${chipWidth + 24}px`);
  });
}

function render() {
  const engine = currentEngine();
  document.documentElement.lang = state.language === 'zh' ? 'zh-CN' : state.language;
  document.documentElement.dir = state.language === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dataset.theme = state.theme;
  document.title = t('pageTitle');
  document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  elements.input.placeholder = t('searchPlaceholder');
  elements.searchButton.textContent = t('search');
  elements.engineChipName.textContent = engine.name;
  elements.engineChip.title = engine.name;
  elements.engineChip.setAttribute('aria-label', `${t('switchEngine')}: ${engine.name}`);
  elements.engineChipIcon.replaceChildren();
  if (engine.logo) {
    const logo = document.createElement('img');
    logo.src = engine.logo;
    logo.alt = '';
    elements.engineChipIcon.append(logo);
  } else {
    elements.engineChipIcon.textContent = engine.name.slice(0, 1);
  }
  elements.shareLinkButton.classList.toggle('is-hidden', !supportsSystemShare());
  elements.shell.classList.toggle('is-tutorial', Boolean(state.tutorial));
  elements.shell.classList.remove('engine-profile--assistant', 'engine-profile--minimal');
  if (engine.profile !== 'search') elements.shell.classList.add(`engine-profile--${engine.profile}`);
  document.documentElement.style.setProperty('--accent', engine.accent);
  elements.logo.classList.toggle('is-hidden', !engine.logo);
  elements.wordmark.classList.toggle('is-hidden', Boolean(engine.logo));
  if (engine.logo) {
    elements.logo.src = engine.logo;
    elements.logo.alt = engine.name;
    elements.logo.dataset.noInvert = String(Boolean(engine.noInvert));
  } else {
    elements.wordmark.textContent = engine.name;
  }
  elements.engineDescription.textContent = engine.descriptionKey
    ? t(engine.descriptionKey, { engine: engine.name })
    : t('engineGenericDescription', { engine: engine.name, category: groupLabel(engine.category) });
  const isFavorite = state.favorites.includes(engine.id);
  elements.favoriteButton.textContent = isFavorite ? '★' : '☆';
  elements.favoriteButton.title = t(isFavorite ? 'favoriteRemove' : 'favoriteAdd');
  elements.favoriteButton.setAttribute('aria-label', elements.favoriteButton.title);
  elements.favoriteButton.setAttribute('aria-pressed', String(isFavorite));
  elements.footerRouteHint.textContent = t('shortcutRoute', { prefix: engine.aliases[0], bang: engine.bangs[0] });
  elements.languageSwitcher.querySelectorAll('button').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === state.language)));
  elements.themeToggle.textContent = state.theme === 'dark' ? '☀' : '◐';
  elements.themeToggle.setAttribute('aria-label', state.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  updateEngineChipOffset();
  renderEngineGroups();
}

function setEngine(engineId, { announce = true } = {}) {
  state.selectedEngineId = getEngine(engineId).id;
  persist();
  render();
  if (announce) showToast(t('selectedEngine', { engine: currentEngine().name }));
}

function updateInputUi() {
  const value = elements.input.value;
  elements.clearButton.classList.toggle('is-hidden', !value);
  if (state.tutorial) return;
  state.suggestionIndex = -1;
  renderSuggestions(matchingEngines(value));
}

function openDestination(submission) {
  if (submission.type === 'form') {
    const form = document.createElement('form');
    form.method = submission.method.toLowerCase();
    form.action = submission.action;
    form.target = '_blank';
    form.rel = 'noopener noreferrer';
    form.hidden = true;
    Object.entries(submission.fields).forEach(([name, value]) => {
      const field = document.createElement('input');
      field.type = 'hidden';
      field.name = name;
      field.value = value;
      form.append(field);
    });
    document.body.append(form);
    form.submit();
    form.remove();
    return;
  }
  const destination = window.open('', '_blank');
  if (!destination) {
    showToast(t('popupBlocked'));
    return;
  }
  destination.opener = null;
  destination.location.replace(submission.url);
}

async function copyPrompt(query) {
  try {
    await navigator.clipboard.writeText(query);
    return true;
  } catch {
    return false;
  }
}

function copyPromptInBackground(query) {
  void copyPrompt(query).then((copied) => showToast(copied ? t('promptCopied') : t('promptCopyFailed')));
}

function performSearch() {
  const route = parseSearchInput(elements.input.value, state.selectedEngineId);
  if (!route.query) {
    showToast(t('emptyQuery'));
    elements.input.focus();
    return;
  }
  if (route.engine.id !== state.selectedEngineId) setEngine(route.engine.id, { announce: false });
  openDestination(buildSearchSubmission(route.engine, route.query));
  if (route.engine.promptBased) copyPromptInBackground(route.query);
}

function supportsSystemShare() {
  if (typeof navigator.share !== 'function') return false;
  if (typeof navigator.canShare !== 'function') return true;
  try { return navigator.canShare({ url: window.location.href }); } catch { return false; }
}

function getTutorialContext() {
  const route = parseSearchInput(elements.input.value, state.selectedEngineId);
  if (!route.query) {
    showToast(t('emptyQuery'));
    elements.input.focus();
    return null;
  }
  if (route.engine.id !== state.selectedEngineId) setEngine(route.engine.id, { announce: false });
  const url = buildTutorialUrl({ engine: route.engine, query: route.query, language: state.language, theme: state.theme });
  return { route, url };
}

async function copyTutorialLink() {
  const context = getTutorialContext();
  if (!context) return;
  try {
    await navigator.clipboard.writeText(context.url);
    showToast(t('copied'));
  } catch {
    window.prompt(t('copyFailed'), context.url);
  }
}

async function shareTutorial() {
  const context = getTutorialContext();
  if (!context) return;
  if (!supportsSystemShare()) {
    showToast(t('shareFailed'));
    return;
  }
  const { route, url } = context;
  const shareText = `${route.query} | ${route.engine.name} | SearchAIO`;
  try {
    await navigator.share({ title: `SearchAIO | ${route.engine.name}`, text: shareText, url });
    showToast(t('shared'));
  } catch (error) {
    if (error?.name !== 'AbortError') showToast(t('shareFailed'));
  }
}

function toggleFavorite() {
  const id = currentEngine().id;
  state.favorites = state.favorites.includes(id) ? state.favorites.filter((favorite) => favorite !== id) : [...state.favorites, id];
  persist();
  render();
}

function cycleEngine(direction) {
  const index = ENGINES.findIndex((engine) => engine.id === state.selectedEngineId);
  const next = ENGINES[(index + direction + ENGINES.length) % ENGINES.length];
  setEngine(next.id);
}

function activateSuggestion() {
  const item = elements.suggestions.querySelector(`[aria-selected="true"]`);
  item?.click();
}

function bindEvents() {
  elements.form.addEventListener('submit', (event) => { event.preventDefault(); void performSearch(); });
  elements.engineChip.addEventListener('click', () => openEngineCatalog());
  elements.copyLinkButton.addEventListener('click', copyTutorialLink);
  elements.shareLinkButton.addEventListener('click', shareTutorial);
  elements.favoriteButton.addEventListener('click', toggleFavorite);
  elements.clearButton.addEventListener('click', () => { elements.input.value = ''; updateInputUi(); elements.input.focus(); });
  elements.input.addEventListener('input', updateInputUi);
  elements.input.addEventListener('focus', updateInputUi);
  elements.input.addEventListener('keydown', (event) => {
    const count = elements.suggestions.querySelectorAll('.suggestion-item').length;
    if (!count) return;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      state.suggestionIndex = event.key === 'ArrowDown' ? (state.suggestionIndex + 1) % count : (state.suggestionIndex - 1 + count) % count;
      renderSuggestions(matchingEngines(elements.input.value));
    }
    if (event.key === 'Enter' && state.suggestionIndex >= 0) { event.preventDefault(); activateSuggestion(); }
    if (event.key === 'Escape') hideSuggestions();
  });
  elements.languageSwitcher.addEventListener('click', (event) => {
    const language = event.target.closest('button')?.dataset.language;
    if (!language || language === state.language) return;
    state.language = language;
    persist();
    render();
  });
  elements.themeToggle.addEventListener('click', () => { state.theme = state.theme === 'dark' ? 'light' : 'dark'; persist(); render(); });
  elements.shortcutsButton.addEventListener('click', () => elements.shortcutsDialog.showModal());
  elements.closeShortcuts.addEventListener('click', () => elements.shortcutsDialog.close());
  elements.shortcutsDialog.addEventListener('click', (event) => { if (event.target === elements.shortcutsDialog) elements.shortcutsDialog.close(); });
  elements.closeEngineCatalog.addEventListener('click', () => elements.engineCatalogDialog.close());
  elements.engineCatalogDialog.addEventListener('click', (event) => { if (event.target === elements.engineCatalogDialog) elements.engineCatalogDialog.close(); });
  elements.engineCatalogDialog.addEventListener('close', () => elements.engineChip.setAttribute('aria-expanded', 'false'));
  elements.engineCatalogSearch.addEventListener('input', renderEngineCatalog);
  document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); elements.input.focus(); }
    if (event.altKey && event.key === 'ArrowUp') { event.preventDefault(); cycleEngine(-1); }
    if (event.altKey && event.key === 'ArrowDown') { event.preventDefault(); cycleEngine(1); }
    if (event.key === 'Escape') {
      hideSuggestions();
      if (elements.shortcutsDialog.open) elements.shortcutsDialog.close();
      if (elements.engineCatalogDialog.open) elements.engineCatalogDialog.close();
    }
  });
}

function beginTutorialIfRequested() {
  if (!state.tutorial) return;
  elements.enginePanel.classList.add('is-hidden');
  elements.tutorialPanel.classList.add('is-hidden');
  elements.engineChip.disabled = true;
  document.querySelectorAll('.corner-ribbon').forEach((ribbon) => ribbon.classList.add('is-hidden'));
  elements.input.value = '';
  hideSuggestions();
  window.setTimeout(() => playTutorial({
    cursor: elements.cursor, input: elements.input, submitButton: elements.searchButton,
    engine: state.tutorial.engine, query: state.tutorial.query
  }), 500);
}

function bootstrap() {
  if (currentEngine().availability === 'pending') state.selectedEngineId = 'google';
  const problems = validateEngineRegistry();
  bindEvents();
  render();
  beginTutorialIfRequested();
  if (urlParams.has('selftest')) {
    const result = runSelfTest();
    showToast(result.passed ? 'SearchAIO self-test passed.' : t('registryError', { details: result.problems.join('; ') }));
  } else if (problems.length) {
    showToast(t('registryError', { details: problems.join('; ') }));
  }
}

bootstrap();
