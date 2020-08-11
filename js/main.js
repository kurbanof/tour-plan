$(document).ready(function () {
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
      enabled: true
    },

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

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom__visible");

  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  };

  //cardButton
  var cardButton = $("[data-toggle=modal]");
  var closeCardButton = $(".modal__close");
  cardButton.on("click", openModal);
  closeCardButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  };
  //Обработка формы
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Phone number is required",
        }
      }
    });
  });
  
  $(".newsletter__subscribe").validate({
    errorClass: "invalid-newsletter",
    messages: {
      email: {
        required: "Email uncorrect",
        email: "Email uncorrect"
      }
    }  
  });

  $(document).ready(function () {
    $("#news-email").mask("email")
  });

  $(document).ready(function () {
    $("#input_email").mask("email")
  });

  $(document).ready(function () {
    $('.mask-tel').mask('+7(000) 000-0000');
  });


  AOS.init();

  const footInput = document.querySelector('#footer-name');

  footInput.addEventListener('input', (e) => {
    if (!(/^[А-Яа-яa-zA-Z\s]*$/g.test(e.target.value)))
      e.target.value = e.target.value.slice(0, -1)
  });

  const modInput = document.querySelector('#modal-name');

  modInput.addEventListener('input', (e) => {
    if (!(/^[А-Яа-яa-zA-Z\s]*$/g.test(e.target.value)))
      e.target.value = e.target.value.slice(0, -1)
  });

  function init() {
    var imgDefer = document.getElementsByTagName("img");
    for (var i = 0; i < imgDefer.length; i++) {
      if (imgDefer[i].getAttribute("data-src")) {
        imgDefer[i].setAttribute(
          "src",
          imgDefer[i].getAttribute("data-src")
        );
      }
    }
  }
  window.onload = init;

  


});


