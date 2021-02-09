/* #Slider Initialization
  ======================================================= */
window.addEventListener('load', () => {
  if (window.innerWidth > 1024) {
    // Video Slider
    new Swiper('.video-slider .swiper-container', {
      slidesPerView: 1.6,
      centeredSlides: true,
      watchOverflow: true,
      grabCursor: true,
      pagination: {
        el: '.video-slider .swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.video-slider .swiper-button-next',
        prevEl: '.video-slider .swiper-button-prev',
      },
    });
  }
});

/* #Module Functionality
  ======================================================= */
const preLoadModuleBtns = document.querySelectorAll('.video-slider .btn');
const moduleTopBar = document.querySelector('.module-top-bar');
const closeModuleBtn = document.querySelector('.close-icon');
const modules = document.querySelector('.modules');
const videoSlider = document.querySelector('.video-slider .swiper-container');
const playVideoBtns = document.querySelectorAll('.video-play');
const takeQuizBtns = document.querySelectorAll('.take-quiz');
const closeQuizBtn = document.querySelector('.module-top-bar .btn');
const quizModule = document.querySelectorAll('.quiz');

// Pre Load Module
const preLoadModuleHandler = (e) => {
  videoSlider.classList.add('pre-module-load');
  videoSlider.classList.add('swiper-no-swiping');
  moduleTopBar.classList.add('active');
}

// Load Module
const loadModuleHandler = (e) => {
  const moduleId = e.currentTarget.dataset.target;
  const module = document.querySelector('#' + moduleId);
  const moduleVideo = module.querySelector('video');

  modules.classList.add('active');
  module.classList.add('active');
  moduleVideo.play();
  moduleTopBar.classList.add('active');
};

// Close Module
const closeModule = () => {
  const module = document.querySelector('.module.active');

  modules.classList.remove('active');
  if (module) {
    module.classList.remove('active');
  }
  videoSlider.classList.remove('pre-module-load');
  videoSlider.classList.remove('swiper-no-swiping');
  moduleTopBar.classList.remove('active');
  moduleTopBar.classList.remove('quiz-shown');
  if (module) {
    const quiz = module.querySelector('.quiz');
    const quizScreen = quiz.querySelector('.quiz-screen.active');
    const moduleVideo = module.querySelector('video');
    quiz.classList.remove('active');
    moduleVideo.pause();
    moduleVideo.currentTime = 0;
    if (quizScreen) {
      quizScreen.classList.remove('active');
    }
  }
};

// Load Quiz
const loadQuiz = (e) => {
  const module = document.querySelector('.module.active');
  const moduleVideo = module.querySelector('video');
  const quiz = module.querySelector('.quiz');
  const quizScreens = quiz.querySelectorAll('.quiz-screen');
  const answerBtns = quiz.querySelectorAll('.answer-btn');

  moduleVideo.pause();
  moduleTopBar.classList.add('quiz-shown');
  quiz.classList.add('active');
  quizScreens.forEach((screen, index) => {
    if (index === 0) {
      screen.classList.add('active');
    } else {
      screen.classList.remove('active');
    }
  })
  answerBtns.forEach((btn) => {
    btn.classList.remove('true');
    btn.classList.remove('false');
  });
};

// Close Quiz
const closeQuiz = () => {
  const module = document.querySelector('.module.active');
  const moduleVideo = module.querySelector('video');
  const quiz = module.querySelector('.quiz');
  const quizScreen = quiz.querySelector('.quiz-screen.active');
  const answerBtns = quiz.querySelectorAll('.answer-btn');

  moduleVideo.play();
  moduleTopBar.classList.remove('quiz-shown');
  quiz.classList.remove('active');
  quizScreen.classList.remove('active');
  answerBtns.forEach((btn) => {
    btn.classList.remove('true');
    btn.classList.remove('false');
  });
};

// Quiz Handler
const quizHandler = (e) => {
  const quiz = e.currentTarget;
  const quizScreens = quiz.querySelectorAll('.quiz-screen');

  // True/False Answer Btn
  if (e.target.closest('.answer-btn')) {

    // Random answer
    const randomAnswer = Math.floor((Math.random() * 1) + 0.5)
    if (randomAnswer) {
      e.target.closest('.answer-btn').classList.add('true');
    } else {
      e.target.closest('.answer-btn').classList.add('false');
    }

    setTimeout(function () {
      let nextSlide = null;
      for (let i = 0; i < quizScreens.length; i++) {
        // Define the next slide and close current one
        if (quizScreens[i].classList.contains('active')) {
          nextSlide = i + 1;
          quizScreens[i].classList.remove('active');
        }
        // Open next slide
        if (i === nextSlide) {
          quizScreens[nextSlide].classList.add('active');
        }
        // Results Screen
        if (i == quizScreens.length - 1) {
          // Print correct answers
          const correctAnswers = quiz.querySelectorAll('.true');
          quiz.querySelector('.correctAnswersCount').innerHTML = correctAnswers.length;
        }
      }
    }, 1000);
  }

  // Try Again
  if (e.target.closest('.try-again')) {
    loadQuiz();
  }

  // Close Quiz
  if (e.target.closest('.close-quiz')) {
    closeModule();
  }
};

// Event Listeners
preLoadModuleBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    preLoadModuleHandler(e);
  })
})

playVideoBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    loadModuleHandler(e);
  })
})

closeModuleBtn.addEventListener('click', closeModule);

closeQuizBtn.addEventListener('click', closeQuiz);

takeQuizBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    loadQuiz(e);
  });
});

quizModule.forEach((quiz) => {
  quiz.addEventListener('click', (e) => {
    quizHandler(e);
  })
});