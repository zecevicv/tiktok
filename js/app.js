/* #Hamburger Menu
  ======================================================= */

const header = document.querySelector('.header');
const hamburgerIcon = document.querySelector('.header-hamburger');
const body = document.querySelector('body');

hamburgerIcon.addEventListener('click', (e) => {
  header.classList.toggle('menu-open');
  body.classList.toggle('no-scroll');
});

if (window.innerWidth < 1024) {
  document.querySelector('.header-links').style.display = 'none';
  setTimeout(() => {
    document.querySelector('.header-links').style.display = 'block';
  }, 250);
}

document.addEventListener('click', (e) => {
  if (header.classList.contains('menu-open') && !e.target.closest('.header')) {
    header.classList.remove('menu-open');
    body.classList.toggle('no-scroll');
  }
});