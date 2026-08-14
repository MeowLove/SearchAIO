import assert from 'node:assert/strict';
import test from 'node:test';
import { ENGINES, validateEngineRegistry } from '../src/config/engines.js';

test('engine registry has unique routes and complete URL templates', () => {
  assert.deepEqual(validateEngineRegistry(), []);
  assert.equal(ENGINES.length, 76);
  assert.ok(ENGINES.every((engine) => engine.promptBased || engine.searchUrl.includes('%s')));
  assert.ok(ENGINES.every((engine) => engine.logo?.startsWith('./img/')));
  assert.equal(ENGINES.some((engine) => engine.id === 'phind'), false);
  assert.deepEqual(ENGINES.filter((engine) => engine.category === 'web').length, 14);
  assert.deepEqual(ENGINES.filter((engine) => engine.category === 'specialized').length, 47);
  assert.deepEqual(ENGINES.filter((engine) => engine.category === 'ai').length, 15);
  assert.equal(ENGINES.find((engine) => engine.id === 'you')?.availability, undefined);
  assert.deepEqual(ENGINES.filter((engine) => engine.category === 'ai').slice(-3).map((engine) => engine.id), ['copilot', 'gemini', 'you']);
  assert.deepEqual(ENGINES.find((engine) => engine.id === 'google-ai')?.bangs, ['ai', 'gm']);
  assert.equal(ENGINES.find((engine) => engine.id === 'duck-ai')?.searchUrl, 'https://duck.ai/chat?q=%s');
  assert.equal(ENGINES.find((engine) => engine.id === 'google-patents')?.searchUrl, 'https://patents.google.com/?q=%s');
});
