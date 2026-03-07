const fireworks = document.getElementById('fireworks');
const fireBtn = document.getElementById('fire-btn');
const colors = ['#ffd76a', '#ff6b6b', '#a0e7e5', '#f9f871', '#fcbf49'];

function burst(x = 50, y = 45, count = 18) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.className = 'spark';
    s.style.left = `${x}%`;
    s.style.top = `${y}%`;
    s.style.color = colors[Math.floor(Math.random() * colors.length)];
    const angle = (Math.PI * 2 * i) / count;
    const dist = 32 + Math.random() * 68;
    s.style.setProperty('--x', `${Math.cos(angle) * dist}px`);
    s.style.setProperty('--y', `${Math.sin(angle) * dist}px`);
    fireworks.appendChild(s);
    setTimeout(() => s.remove(), 980);
  }
}

fireBtn.addEventListener('click', () => burst(50, 48, 22));
fireBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    fireBtn.click();
  }
});

setTimeout(() => burst(48, 42, 20), 320);
setTimeout(() => burst(56, 54, 16), 760);
