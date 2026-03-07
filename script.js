const fireworks = document.getElementById('fireworks');
const burstBtn = document.getElementById('burstBtn');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function burst(x, y, count = 28) {
  for (let i = 0; i < count; i += 1) {
    const spark = document.createElement('span');
    spark.className = 'spark';
    const angle = (Math.PI * 2 * i) / count;
    const radius = 26 + Math.random() * 70;
    const dx = `${Math.cos(angle) * radius}px`;
    const dy = `${Math.sin(angle) * radius}px`;

    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.setProperty('--dx', dx);
    spark.style.setProperty('--dy', dy);
    spark.style.color = i % 2 ? '#ffd56b' : '#ff6a88';

    fireworks.appendChild(spark);
    spark.addEventListener('animationend', () => spark.remove(), { once: true });
  }
}

function randomBurst() {
  const rect = fireworks.getBoundingClientRect();
  const x = Math.random() * (rect.width * 0.8) + rect.width * 0.1;
  const y = Math.random() * (rect.height * 0.4) + rect.height * 0.08;
  burst(x, y, 26);
}

if (!reduceMotion) {
  setTimeout(randomBurst, 400);
  setInterval(randomBurst, 2600);
}

burstBtn.addEventListener('click', () => {
  const rect = fireworks.getBoundingClientRect();
  burst(rect.width / 2, rect.height / 2.5, 34);
});

burstBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    burstBtn.click();
  }
});
