window.addEventListener('DOMContentLoaded', () => {
  //slider
  const slides = document.querySelector('.promo__slides'),
    slide = document.querySelectorAll('.promo__slide'),
    prevBtn = document.querySelector('.promo__slide__direction_prev'),
    nextBtn = document.querySelector('.promo__slide__direction_next'),
    indicators = document.querySelectorAll('.promo__slide__indicator');
  
  let slideIndex = 0;
  const slideWidth = slide[0].clientWidth;
  let interval;
  let touchstartX = 0;
  let touchendX = 0;

  function initSlider() {
    interval = setInterval(() => {
      navigateSlide(1);
    }, 5000);
  }

  function navigateSlide(direction) {
    clearInterval(interval);
    if (direction === -1) {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = slide.length - 1;
      }
    } else if (direction === 1) {
      slideIndex++;
      if (slideIndex > slide.length - 1) {
        slideIndex = 0;
      }
    }

    slides.style.transition = "transform 0.4s ease-in-out";
    slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;

    indicators.forEach((indicator) => {
      indicator.classList.remove('promo__slide__indicator_active');
    });
    indicators[slideIndex].classList.add('promo__slide__indicator_active');

    interval = setInterval(() => {
      navigateSlide(1);
    }, 5000);
  }

  prevBtn.addEventListener('click', () => {
    navigateSlide(-1);
  });

  nextBtn.addEventListener('click', () => {
    navigateSlide(1);
  });

  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      slideIndex = i;
      slides.style.transition = "transform 0.4s ease-in-out";
      slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;

      indicators.forEach((indicator) => {
        indicator.classList.remove('promo__slide__indicator_active');
      });
      indicator.classList.add('promo__slide__indicator_active');

      clearInterval(interval);
      interval = setInterval(() => {
        navigateSlide(1);
      }, 5000);
    });
  });

  slides.addEventListener('touchstart', (e) => {
    touchstartX = e.touches[0].clientX;
  });

  slides.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].clientX;
    handleGesture();
  });

  function handleGesture() {
    if (touchendX < touchstartX) {
      navigateSlide(1);
    }

    if (touchendX > touchstartX) {
      navigateSlide(-1);
    }
  }

  initSlider();


  // gallery 
  Fancybox.bind('[data-fancybox="gallery"]', {
  });
});