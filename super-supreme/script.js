document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.scappa button');
  if (!btn) return;

  btn.addEventListener('mouseover', function() {
    const randomX = Math.random() * (window.innerWidth - btn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
});