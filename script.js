const blessings = [
  "愿你岁岁平安，万事胜意！",
  "恭喜发财，红包拿来！",
  "Happy New Year! Wishing you joy, health, and prosperity.",
  "福星高照，心想事成！"
];

let idx = 0;
const blessingEl = document.getElementById('blessing');
const btn = document.getElementById('nextBlessing');

btn.addEventListener('click', () => {
  idx = (idx + 1) % blessings.length;
  blessingEl.style.opacity = '0';
  setTimeout(() => {
    blessingEl.textContent = blessings[idx];
    blessingEl.style.opacity = '1';
  }, 120);
});
