const hamburger = document.querySelector('.sidebar-btn');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  sidebar.classList.toggle('extend');
});
