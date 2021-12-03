// Swiper

var swiper = new Swiper(".gallery", {
  slidesPerView: 6,
  spaceBetween: 17,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});
