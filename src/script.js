const btn = document.getElementById('blessingBtn');
const wishCard = document.getElementById('wishCard');
const wishText = document.getElementById('wishText');
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const wishes = [
  '蛇年行大运，阖家幸福，心想事成！',
  '福满门庭，万事顺遂，日日欢喜！',
  '前程似锦，平安喜乐，财运亨通！'
];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function fireworkBurst(x, y, n = 26) {
  const particles = Array.from({ length: n }, () => ({
    x,
    y,
    r: Math.random() * 2 + 1,
    a: Math.random() * Math.PI * 2,
    v: Math.random() * 3 + 2,
    life: 1,
    color: Math.random() > 0.5 ? '#FFD700' : '#FF6B6B'
  }));

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = 0;
    particles.forEach((p) => {
      if (p.life <= 0) return;
      p.x += Math.cos(p.a) * p.v;
      p.y += Math.sin(p.a) * p.v;
      p.v *= 0.97;
      p.life -= 0.02;
      alive++;

      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    if (alive > 0) requestAnimationFrame(tick);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  requestAnimationFrame(tick);
}

btn.addEventListener('click', () => {
  wishCard.hidden = false;
  wishText.textContent = wishes[Math.floor(Math.random() * wishes.length)];
  if (!reduceMotion) {
    fireworkBurst(window.innerWidth * 0.35, window.innerHeight * 0.35);
    setTimeout(() => fireworkBurst(window.innerWidth * 0.65, window.innerHeight * 0.35), 220);
  }
});
