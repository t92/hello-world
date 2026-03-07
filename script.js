const btn = document.getElementById('cta');

btn?.addEventListener('click', () => {
  document.body.classList.toggle('chaos');
  btn.textContent = document.body.classList.contains('chaos')
    ? '混沌已加强（再点恢复）'
    : '点我启动混沌';
});

window.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'g') {
    document.body.classList.toggle('chaos');
  }
});
