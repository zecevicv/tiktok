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

/* #Slider Initialization
  ======================================================= */
window.addEventListener('load', () => {
  // Home - Get Inspired Slider
  const getInspiredSlider = document.querySelector('.get-inspired .swiper-container');
  new Swiper(getInspiredSlider, {
    slidesPerView: 1,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 1
      },
    },
    navigation: {
      nextEl: getInspiredSlider.closest('.slider').querySelector('.swiper-button-next'),
      prevEl: getInspiredSlider.closest('.slider').querySelector('.swiper-button-prev'),
    },
  });

  // Home - News Slider
  new Swiper('.news .swiper-container', {
    slidesPerView: 3,
    breakpoints: {
      0: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      },
    },
  });
});