/* #Hero Video Animation
  ======================================================= */
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const heroVideo1 = document.querySelector('.hero-video-1');
const heroVideo2 = document.querySelector('.hero-video-2');

// Go To Section
function goToSection(section, duration) {
  gsap.to(window, {
    scrollTo: {y: section, autoKill: false},
    duration: duration,
    ease: Power4.easeOut
  });
}

// Restart Videos
function restartVideos() {
  heroVideos = document.querySelectorAll('.hero video');
  heroVideos.forEach((video) => {
    setTimeout(function() {
      video.currentTime = 0;
      video.play();
    }, 1500);
  });
}

// Hero Animation From Top
let heroAnimationTop = gsap.timeline({onStart: restartVideos, paused: true});
heroAnimationTop
.from('.hero-animation-top', {
  y: '-100%',
  duration: .3
})
.from('.hero-animation-top .blue-box', {
  y: '-100%',
  duration: .3
})
.to('.hero-animation-top', {
  y: '100%',
  duration: .3,
  delay: .5
})

// Hero Animation From Bottom
let heroAnimationBottom = gsap.timeline({onStart: restartVideos, paused: true});
heroAnimationBottom
.from('.hero-animation-bottom', {
  y: '100%',
  duration: .3
})
.from('.hero-animation-bottom .blue-box', {
  y: '100%',
  duration: .3
})
.to('.hero-animation-bottom', {
  y: '-100%',
  duration: .3,
  delay: .5
})

// Going to video 2
ScrollTrigger.create({
  trigger: heroVideo1,
  start: "100% 100%",
  onEnter: () => {
    goToSection(heroVideo2, 1);
    heroAnimationBottom.restart();
    gsap.to('.hero-video-1 video', { opacity: 0, delay: .5 });
  }
});

// Returning to video 1
ScrollTrigger.create({
  trigger: heroVideo1,
  end: "100% 2%",
  onEnterBack: () => { 
    goToSection(heroVideo1, 1);
    heroAnimationTop.restart();
    gsap.to('.hero-video-1 video', { opacity: 1, delay: .5 });
  }
});

// Stabilazing scroll on video 2
ScrollTrigger.create({
  trigger: heroVideo2,
  end: "100% 60%",
  onEnterBack: () => { 
    goToSection(heroVideo2, .5)
  }
});


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