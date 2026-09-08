// =============== Swiper First Aid Animation ===============
if (innerWidth < 768) {
  var swiper = new Swiper(".first-aid .firstAidSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".first-aid .swiper-button-next",
      prevEl: ".first-aid .swiper-button-prev",
    },
  });
} else if (innerWidth < 1200) {
  var swiper = new Swiper(".first-aid .firstAidSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".first-aid .swiper-button-next",
      prevEl: ".first-aid .swiper-button-prev",
    },
  });
} else if (innerWidth >= 992) {
  var swiper = new Swiper(".first-aid .firstAidSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".first-aid .swiper-button-next",
      prevEl: ".first-aid .swiper-button-prev",
    },
  });
}

// =============== Swiper Medicines Animation ===============
if (innerWidth < 768) {
  var swiper = new Swiper(".medicines .medicinesSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".medicines .swiper-button-next",
      prevEl: ".medicines .swiper-button-prev",
    },
  });
} else if (innerWidth < 1200) {
  var swiper = new Swiper(".medicines .medicinesSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".medicines .swiper-button-next",
      prevEl: ".medicines .swiper-button-prev",
    },
  });
} else if (innerWidth >= 992) {
  var swiper = new Swiper(".medicines .medicinesSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".medicines .swiper-button-next",
      prevEl: ".medicines .swiper-button-prev",
    },
  });
}

// =============== Swiper Hospitals Animation ===============
if (innerWidth < 768) {
  var swiper = new Swiper(".hospitals .hospitalsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".hospitals .swiper-button-next",
      prevEl: ".hospitals .swiper-button-prev",
    },
  });
} else if (innerWidth < 1200) {
  var swiper = new Swiper(".hospitals .hospitalsSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".hospitals .swiper-button-next",
      prevEl: ".hospitals .swiper-button-prev",
    },
  });
} else if (innerWidth >= 992) {
  var swiper = new Swiper(".hospitals .hospitalsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".hospitals .swiper-button-next",
      prevEl: ".hospitals .swiper-button-prev",
    },
  });
}
