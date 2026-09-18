document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('active'));
  }
  document.querySelectorAll('.year').forEach((year) => {
    year.textContent = new Date().getFullYear();
  });
});
