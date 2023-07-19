/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/assets/js/product-details.js ***!
  \******************************************/
const swiperThumbnail = new Swiper("#product-thumbnail", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 24,
})

const swiperImages = new Swiper("#product-images", {
  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass: "swiper-pagination-bullet-active bg-blue-950",
  },
  thumbs: {
    swiper: swiperThumbnail,
  },
  breakpoints: {
    640: {
      spaceBetween: 24,
    },
  },
})

/******/ })()
;
//# sourceMappingURL=product-details.js.map