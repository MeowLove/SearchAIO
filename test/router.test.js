import assert from 'node:assert/strict';
import test from 'node:test';
import { getEngine } from '../src/config/engines.js';
import { buildDestinationUrl, buildSearchSubmission, parseSearchInput } from '../src/services/router.js';

test('prefix routes a query and strips the prefix', () => {
  const route = parseSearchInput('perplexity: release notes', 'google');
  assert.equal(route.engine.id, 'perplexity');
  assert.equal(route.query, 'release notes');
});

test('a bang can appear inside a query and takes precedence over the selected engine', () => {
  const route = parseSearchInput('release notes !pplx', 'google');
  assert.equal(route.engine.id, 'perplexity');
  assert.equal(route.query, 'release notes');
});

test('destination URLs encode a query and Google lucky uses its dedicated endpoint', () => {
  const url = buildDestinationUrl(getEngine('google'), 'a & b', { lucky: true });
  assert.equal(url, 'https://www.google.com/search?btnI=I&q=a%20%26%20b');
});

test('Google AI Mode uses the explicit udm=50 route', () => {
  const url = buildDestinationUrl(getEngine('google-ai'), 'compare electric cars');
  assert.equal(url, 'https://www.google.com/search?udm=50&q=compare%20electric%20cars');
});

test('gm routes to the Google AI Mode replacement', () => {
  const route = parseSearchInput('gm: compare electric cars', 'google');
  assert.equal(route.engine.id, 'google-ai');
  assert.equal(route.query, 'compare electric cars');
});

test('prompt-based engines open their base URL', () => {
  assert.equal(buildDestinationUrl(getEngine('chatgpt'), 'summarize this'), 'https://chatgpt.com/');
  assert.equal(buildDestinationUrl(getEngine('copilot'), 'summarize this'), 'https://copilot.microsoft.com/');
  assert.equal(buildDestinationUrl(getEngine('claude'), 'summarize this'), 'https://claude.ai/new');
});

test('Perplexity uses its standard search path', () => {
  const url = buildDestinationUrl(getEngine('perplexity'), 'release notes');
  assert.equal(url, 'https://www.perplexity.ai/search/?q=release%20notes');
});

test('Gemini remains a prompt fallback at the end of the AI registry', () => {
  assert.equal(getEngine('gemini').searchUrl, 'https://gemini.google.com/app');
});

test('a declared HTML form route builds an encoded POST submission', () => {
  const submission = buildSearchSubmission({
    formSubmission: {
      method: 'POST',
      action: 'https://example.test/search',
      fields: { query: '%s', source: 'searchaio' }
    }
  }, 'a & b');
  assert.deepEqual(submission, {
    type: 'form',
    method: 'POST',
    action: 'https://example.test/search',
    fields: { query: 'a%20%26%20b', source: 'searchaio' }
  });
});
