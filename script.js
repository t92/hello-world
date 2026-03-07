const body = document.body;
const panicBtn = document.getElementById('panicBtn');
const shakeBtn = document.getElementById('shakeBtn');
const calmBtn = document.getElementById('calmBtn');

let panic = true;
let shakeLevel = 2;

function applyShake() {
  body.style.setProperty('--shake', `${shakeLevel}px`);
}

panicBtn.addEventListener('click', () => {
  panic = !panic;
  body.classList.toggle('panic-off', !panic);
  body.classList.toggle('panic-on', panic);
  panicBtn.textContent = panic ? 'PANIC ON' : 'PANIC OFF';
  panicBtn.setAttribute('aria-pressed', String(panic));
});

shakeBtn.addEventListener('click', () => {
  shakeLevel = Math.min(shakeLevel + 1, 8);
  body.classList.remove('calm');
  applyShake();
});

calmBtn.addEventListener('click', () => {
  body.classList.add('calm');
  shakeLevel = 1;
  applyShake();
});

applyShake();
