const swiperBanner = new Swiper("#main-banner", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 24,
  loop: true,
  speed: "1000",
  autoplay: {
    delay: 5000,
  },
  slidePrevClass: "swiper-slide-prev-50",
  slideNextClass: "swiper-slide-next-50",
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass: "swiper-pagination-bullet-active bg-blue-950",
  },
})

const swiperRoomIdeas = new Swiper("#room-ideas", {
  slidesPerView: "auto",
  spaceBetween: 24,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: "auto",
    },
    1024: {
      slidesPerView: 3,
    },
  },
})

const swiperRooms = new Swiper("#rooms", {
  slidesPerView: "auto",
  spaceBetween: 24,
  breakpoints: {
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: "auto",
    },
    1024: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 6,
    },
  },
})
