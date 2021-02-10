/* #Page Animation
  ======================================================= */

const pageAnimation = gsap.timeline();

pageAnimation
  .from('.page-animation', {
    y: '100%',
    duration: .3
  })
  .from('.page-animation .blue-box', {
    y: '100%',
    duration: .3
  })
  .to('.page-animation', {
    y: '-100%',
    duration: .3,
    delay: .5
  });

/* #Hamburger Menu
  ======================================================= */

const header = document.querySelector('.header');
const hamburgerIcon = document.querySelector('.header-hamburger');
const body = document.querySelector('body');
const headerLinks = document.querySelectorAll('.header a');
const headerClose = document.querySelector('.header .close-icon');

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

headerClose.addEventListener('click', (e) => {
  header.classList.remove('menu-open');
  body.classList.toggle('no-scroll');
});

document.addEventListener('click', (e) => {
  if (header.classList.contains('menu-open') && !e.target.closest('.header')) {
    header.classList.remove('menu-open');
    body.classList.toggle('no-scroll');
  }
});

headerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    header.classList.remove('menu-open');
    body.classList.remove('no-scroll');
  });
});