const btn = document.getElementById('repairBtn');
const statusText = document.getElementById('statusText');

btn.addEventListener('click', () => {
  statusText.textContent = statusText.textContent === 'Signal weak'
    ? 'Signal restored'
    : 'Signal weak';
});
