window.addEventListener('DOMContentLoaded', () => {
  //swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  
  autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
});

  // gallery 
  Fancybox.bind('[data-fancybox="gallery"]', {
  // Custom option
  });
});