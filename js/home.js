/* #Slider Initialization
  ======================================================= */

window.addEventListener('load', () => {
  // Home - Get Inspired Slider
  const getInspiredSlider = document.querySelector('.get-inspired .swiper-container');
  if (getInspiredSlider) {
    new Swiper(getInspiredSlider, {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 2500,
      },
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
  }

  // Home - News Slider
  new Swiper('.news .swiper-container', {
    slidesPerView: 3,
    simulateTouch: false,
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