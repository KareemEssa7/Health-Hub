// =============== Swiper Medicine Image Animation ===============
var swiper = new Swiper(".image-slider .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".image-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".image-slider .swiper-button-next",
    prevEl: ".image-slider .swiper-button-prev",
  },
});

// =============== Booking Medicine Alert Showing ===============
let overlay = document.querySelector(".alert-overlay");
let bookMedicine = document.querySelector(".book-medicine");
let bookAlert = document.querySelector(".book-alert");
let exitBtnBookAlert = document.querySelector(".book-alert .exit-btn");

let transformAlertShow = (alert) => {
  document.body.style.overflowY = "hidden";
  alert.style.cssText = "left: 50%";
  overlay.style.cssText = "display:block";
};
let transformAlertClose = (alert) => {
  document.body.style.overflowY = "auto";
  alert.style.cssText = "left: -50%";
  overlay.style.cssText = "display:none";
};
bookMedicine.onclick = () => transformAlertShow(bookAlert);
exitBtnBookAlert.onclick = () => transformAlertClose(bookAlert);

// =============== Favourite Medicine ===============
let favBtn = document.querySelectorAll(".description .fav");

favBtn.forEach((fav) => {
  fav.onclick = () => {
    if (fav.classList.contains("fa-regular")) {
      fav.classList.remove("fa-regular");
      fav.classList.add("fa-solid");
      fav.style.color = "#d80032";
    } else {
      fav.classList.remove("fa-solid");
      fav.classList.add("fa-regular");
      fav.style.color = `${getComputedStyle(document.body).getPropertyValue(
        "--header-color"
      )}`;
    }
  };
});
