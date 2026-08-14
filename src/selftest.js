import { validateEngineRegistry } from './config/engines.js';

export function runSelfTest() {
  const problems = validateEngineRegistry();
  return { passed: problems.length === 0, problems };
}
