/* #Hero Video Animation
  ======================================================= */
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const heroVideo1 = document.querySelector('.hero-video-1');
const heroVideo2 = document.querySelector('.hero-video-2');

// Scroll To Section flag
// To not trigger Animations
// When scrolling to section
let scrollToSection = false;

// Go To Section
function goToSection(section, duration) {
  const scroll = gsap.timeline();

  scroll.to(window, {
    scrollTo: {y: section, autoKill: false},
    duration: duration,
    ease: Power4.easeOut,
  });

  scroll.eventCallback("onComplete", function() {
    scrollToSection = false;
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
    if (!scrollToSection) {
      goToSection(heroVideo2, 1);
      heroAnimationBottom.restart();
      gsap.to('.hero-video-1 video', { opacity: 0, delay: .5 });
      if (window.innerWidth < 1024) {
        body.classList.add('no-scroll');
        setTimeout(function() {
          body.classList.remove('no-scroll');
        }, 500);
      }
    }
  }
});

// Returning to video 1
ScrollTrigger.create({
  trigger: heroVideo1,
  end: "100% 5%",
  onEnterBack: () => { 
    if (!scrollToSection) {
      goToSection(heroVideo1, 1);
      heroAnimationTop.restart();
      gsap.to('.hero-video-1 video', { opacity: 1, delay: .5 });
      if (window.innerWidth < 1024) {
        body.classList.add('no-scroll');
        setTimeout(function() {
          body.classList.remove('no-scroll');
        }, 500);
      }
    }
  }
});

// Stabilazing scroll on video 2
ScrollTrigger.create({
  trigger: heroVideo2,
  end: "100% 60%",
  onEnterBack: () => { 
    if (!scrollToSection) {
      goToSection(heroVideo2, .5)
      if (window.innerWidth < 1024) {
        body.classList.add('no-scroll');
        setTimeout(function() {
          body.classList.remove('no-scroll');
        }, 500);
      }
    }
  }
});

// Header Links that should scroll to sections
const scrollToGetInspired = document.querySelector('#scrollToGetInspired');
const scrollToNews = document.querySelector('#scrollToNews');

scrollToGetInspired.addEventListener('click', (e) => {
  const getInspired = document.querySelector('.get-inspired');
  if (getInspired) {
    e.preventDefault();
    scrollToSection = true;
    goToSection(getInspired, 1);
  }
});

scrollToNews.addEventListener('click', (e) => {
  const news = document.querySelector('.news');
  if (news) {
    e.preventDefault();
    scrollToSection = true;
    goToSection(news, 1);
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
      centeredSlides: false,
      autoplay: {
        delay: 2500,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.32,
          centeredSlides: true
        },
        1024: {
          slidesPerView: 1,
          centeredSlides: false
        },
      },
      pagination: {
        el: getInspiredSlider.closest('.slider').querySelector('.swiper-pagination'),
      },
      navigation: {
        nextEl: getInspiredSlider.closest('.slider').querySelector('.swiper-button-next'),
        prevEl: getInspiredSlider.closest('.slider').querySelector('.swiper-button-prev'),
      },
    });
  }
});