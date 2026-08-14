import { buildSearchSubmission } from '../services/router.js';

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const nextPaint = () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
const toTransform = (x, y) => `translate(${x}px, ${y}px)`;
const cursorStart = { x: 18, y: 18 };

async function moveCursor(cursor, element, x = 'center') {
  const rect = element.getBoundingClientRect();
  const targetX = (x === 'center' ? rect.left + rect.width / 2 : rect.left + x) - 3;
  const targetY = rect.top + rect.height / 2 - 2;
  const fromX = Number(cursor.dataset.x ?? cursorStart.x);
  const fromY = Number(cursor.dataset.y ?? cursorStart.y);
  const targetTransform = toTransform(targetX, targetY);

  const animation = cursor.animate([
    { transform: toTransform(fromX, fromY) },
    { transform: targetTransform }
  ], {
    duration: 820,
    easing: 'cubic-bezier(.25, 1, .5, 1)',
    fill: 'forwards'
  });

  // Keep the arrow tip, rather than the cursor box centre, on the target.
  cursor.style.transform = targetTransform;
  cursor.dataset.x = String(targetX);
  cursor.dataset.y = String(targetY);
  await animation.finished;
  animation.cancel();
}

async function clickCursor(cursor) {
  cursor.classList.remove('is-clicking');
  // Restart the click ripple when the tutorial clicks a second target.
  void cursor.offsetWidth;
  cursor.classList.add('is-clicking');
  await delay(180);
  cursor.classList.remove('is-clicking');
}

async function typeText(input, text) {
  for (const character of Array.from(text)) {
    input.value += character;
    await delay(55);
  }
}

export async function playTutorial({ cursor, input, submitButton, engine, query }) {
  document.body.classList.add('is-tutorial-running');
  input.disabled = true;
  cursor.style.transform = toTransform(cursorStart.x, cursorStart.y);
  cursor.dataset.x = String(cursorStart.x);
  cursor.dataset.y = String(cursorStart.y);
  cursor.classList.remove('is-hidden');
  // Ensure the start point paints before the first movement begins.
  await nextPaint();
  await delay(320);
  // The input now contains a left engine switcher. Aim at the first usable
  // text position instead of the chip, and derive the offset from responsive
  // CSS padding so desktop and mobile tutorials share the same geometry.
  const inputPaddingLeft = Number.parseFloat(getComputedStyle(input).paddingLeft) || 20;
  const inputTargetOffset = Math.min(input.clientWidth - 30, inputPaddingLeft + 20);
  await moveCursor(cursor, input, inputTargetOffset);
  await clickCursor(cursor);
  input.focus();
  await typeText(input, query);
  await delay(360);
  await moveCursor(cursor, submitButton);
  await clickCursor(cursor);
  submitButton.animate([{ transform: 'scale(1)' }, { transform: 'scale(.96)' }, { transform: 'scale(1)' }], { duration: 230 });
  await delay(280);
  if (engine.promptBased) {
    try { await navigator.clipboard.writeText(query); } catch { /* The user can still copy the query from the tutorial link. */ }
  }
  const submission = buildSearchSubmission(engine, query);
  if (submission.type === 'url') {
    window.location.assign(submission.url);
    return;
  }
  const form = document.createElement('form');
  form.method = submission.method.toLowerCase();
  form.action = submission.action;
  Object.entries(submission.fields).forEach(([name, value]) => {
    const field = document.createElement('input');
    field.type = 'hidden';
    field.name = name;
    field.value = value;
    form.append(field);
  });
  document.body.append(form);
  form.submit();
}
