var mySwiper = new Swiper('.hotel-swiper', {
  // Optional parameters
    loop: true,

  
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button__next',
    prevEl: '.slider-button__prev',

  },

  effect: 'fade',

  keyboard: {
    enabled: true},

});

var miSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  keyboard: {
    enabled: true
  },
  
});

var mySlider = new Swiper('.packages-slider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    el: '.swiper-pagination',
    clickable: true,
  },

  keyboard: {
    enabled: true
  },

});



