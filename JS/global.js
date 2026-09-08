// <!---------- Dark Mode ---------->
let darkMode = document.querySelector(".dark-mode");
let logoItems = document.querySelectorAll("img.logo");
let waves = document.querySelectorAll(".section-wave");
let getMode = localStorage.getItem("mode");
// let icon1 = document.querySelector(".dark-mode .dark");
// let icon2 = document.querySelector(".dark-mode .light");

if (getMode === "dark") {
  document.body.classList.toggle("dark-mode-active");
  logoItems.forEach((logo) => {
    logo.setAttribute("src", "Images/LogoDark.png");
  });
  if (waves.length > 0) {
    waves[0].setAttribute("src", "Images/Waves/WaveDark.svg");
    waves[1].setAttribute("src", "Images/Waves/WaveLight.svg");
    waves[2].setAttribute("src", "Images/Waves/WaveDark.svg");
    waves[1].style.opacity = "0.03";
  }
} else {
  logoItems.forEach((logo) => {
    logo.setAttribute("src", "Images/Logo.png");
  });
  if (waves.length > 0) {
    waves[0].setAttribute("src", "Images/Waves/WaveLight.svg");
    waves[1].setAttribute("src", "Images/Waves/WaveBlue.svg");
    waves[2].setAttribute("src", "Images/Waves/WaveLight.svg");
    waves[1].style.opacity = "0.051";
  }
}
darkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode-active");

  if (document.body.classList.contains("dark-mode-active")) {
    logoItems.forEach((logo) => {
      logo.setAttribute("src", "Images/LogoDark.png");
    });
    if (waves.length > 0) {
      waves[0].setAttribute("src", "Images/Waves/WaveDark.svg");
      waves[1].setAttribute("src", "Images/Waves/WaveLight.svg");
      waves[2].setAttribute("src", "Images/Waves/WaveDark.svg");
      waves[1].style.opacity = "0.03";
    }
  } else {
    logoItems.forEach((logo) => {
      logo.setAttribute("src", "Images/Logo.png");
    });
    if (waves.length > 0) {
      waves[0].setAttribute("src", "Images/Waves/WaveLight.svg");
      waves[1].setAttribute("src", "Images/Waves/WaveBlue.svg");
      waves[2].setAttribute("src", "Images/Waves/WaveLight.svg");
      waves[1].style.opacity = "0.051";
    }
  }

  if (!document.body.classList.contains("dark-mode-active")) {
    return localStorage.setItem("mode", "light");
  }
  localStorage.setItem("mode", "dark");
});

// <!---------- Language Converter ---------->
let getLang = localStorage.getItem("language");
let lang = document.querySelector(".lang");
let langName = document.querySelector(".lang .lang-name");
let langMenu = document.querySelector(".lang .lang-menu");
let langMenuItems = document.querySelectorAll(".lang .lang-menu li");

lang.addEventListener("click", function () {
  if (langMenu.style.display == "flex") {
    langMenu.style.cssText = "display: none;";
  } else {
    langMenu.style.cssText = "display: flex;";
  }
});

let convertToEnglish = () => {
  document.body.style.cssText = "direction: ltr";
  langName.innerHTML = "English";
  lang.style.cssText =
    "left: 0; border-radius: 0 50px 50px 0; padding: 5px 1rem 5px 10px;";
  document.querySelector(".setting").style.cssText = "left: 5px";
  document.querySelector(".scroll-top").style.cssText =
    "left: auto; right: 20px ;transform: translateX(calc(100% + 40px));";

  if (
    document.title.includes("Login") ||
    document.title.includes("Register") ||
    document.title.includes("Forget Password")
  ) {
    document.querySelector(".sidebar svg:nth-of-type(1)").style.cssText =
      "left: -60px; right: auto;";
    document.querySelector(".sidebar svg:nth-of-type(2)").style.cssText =
      "left: 50px; right: auto;";
    if (document.querySelector(".sidebar ul li a")) {
      document.querySelectorAll(".sidebar ul li a").forEach((list) => {
        list.style.cssText = "border-radius: 50px 0 0 50px;";
      });
      document.querySelector(".sidebar ul li a span").style.cssText =
        "right: 0; left: auto;";
    }
    document.querySelector(".home-btn").style.cssText =
      "left: auto; right: 1rem;";
    document.querySelector(".home-btn i").classList.remove("fa-angle-left");
    document.querySelector(".home-btn i").classList.add("fa-angle-right");
    document.querySelectorAll("form > .inputs input").forEach((input) => {
      input.style.cssText = "padding: 5px 10px 5px 35px;";
    });
    document.querySelectorAll("form > .inputs i").forEach((item) => {
      item.style.cssText = "right: auto; left: 10px;";
    });
    if (document.querySelector("form .remember input[type='checkbox']")) {
      document.querySelector(
        "form .remember input[type='checkbox']"
      ).style.cssText = "margin-left: 0; margin-right: 7px;";
    }
  }
  if (document.querySelector("header")) {
    document.querySelector(".menu-bar li a + i").style.cssText =
      "margin-left: 10px; margin-right: 0;";
    document
      .querySelector(".drop-down-menu > a i")
      .classList.remove("fa-angles-left");
    document
      .querySelector(".drop-down-menu > a i")
      .classList.add("fa-angles-right");
    document.querySelector(".login-btns a:last-of-type").style.cssText =
      "margin-left: 1rem; margin-right: 0;";
    document.querySelector(".user ul").style.cssText = "right: 0; left: auto;";
    document.querySelector(".user .user-info span").style.cssText =
      "margin: 0 5px 0 10px;";
    document.querySelectorAll(".user ul li a i").forEach((ele) => {
      ele.style.cssText = "margin-right: 10px; margin-left: 0;";
    });
  }
  if (document.querySelector(".search-bar")) {
    document.querySelector(".search-bar").style.cssText =
      "left: 0; right: auto; flex-direction: row-reverse";
    document.querySelector(".search-bar button").style.cssText =
      "border-radius: 0 30px 30px 0;";
  }
  if (document.title.includes("الرئيسية")) {
    document
      .querySelectorAll(".sections .content .section-arrow")
      .forEach((arrow) => {
        arrow.classList.remove("fa-arrow-left-long");
        arrow.classList.add("fa-arrow-right-long");
      });
  }
  if (document.querySelector(".hospitals")) {
    document.querySelectorAll(".hospital-card .description").forEach((desc) => {
      desc.style.cssText = "direction: ltr";
    });
    document.querySelectorAll(".hospital-card p i").forEach((item) => {
      item.style.cssText = "margin-left: 0; margin-right: 5px;";
    });
    document
      .querySelector(".hospitals a > i")
      .classList.remove("fa-arrow-left");
    document.querySelector(".hospitals a > i").classList.add("fa-arrow-right");
    document.querySelector(".hospitals a > i").style.cssText =
      "margin-right: 0; margin-left: 10px;";
    if (document.querySelector(".first-aid")) {
      document
        .querySelector(".first-aid a > i")
        .classList.remove("fa-arrow-left");
      document
        .querySelector(".first-aid a > i")
        .classList.add("fa-arrow-right");
      document.querySelector(".first-aid a > i").style.cssText =
        "margin-right: 0; margin-left: 10px;";

      document
        .querySelector(".medicines a > i")
        .classList.remove("fa-arrow-left");
      document
        .querySelector(".medicines a > i")
        .classList.add("fa-arrow-right");
      document.querySelector(".medicines a > i").style.cssText =
        "margin-right: 0; margin-left: 10px;";
    }
  }
  if (document.querySelector(".medicine-card")) {
    document.querySelectorAll(".medicine-card").forEach((card) => {
      card.style.cssText = "direction: ltr";
    });
    document
      .querySelectorAll(".medicine-card .card-content .fav")
      .forEach((fav) => {
        fav.style.cssText = "left: auto; right: 0";
      });
    document
      .querySelectorAll(".medicine-card .card-content div i")
      .forEach((i) => {
        i.style.cssText = "margin-left: 0; margin-right: 5px;";
      });
  }
  if (document.querySelector(".hospital-location")) {
    document.querySelectorAll(".hospital-location i").forEach((i) => {
      i.style.cssText = "margin-left: 0; margin-right: 1rem;";
    });
  }
  if (document.querySelector(".news-cards")) {
    document.querySelectorAll(".news-cards .new-icon").forEach((i) => {
      i.style.cssText = "left: auto; right: 5px; transform: rotate(30deg);";
    });
    if (document.querySelector(".news-header")) {
      document
        .querySelector(".news .news-header i")
        .classList.remove("fa-arrow-left-long");
      document
        .querySelector(".news .news-header i")
        .classList.add("fa-arrow-right-long");
      document.querySelector(".news .news-header i").style.cssText =
        "margin-left: 10px; margin-right: 0;";
    }
  }
  if (
    document.querySelector(".subscribe-alert") ||
    document.querySelector(".add-alert") ||
    document.querySelector(".edit-alert")
  ) {
    document.querySelector(".home-btn i").classList.remove("fa-arrow-left");
    document.querySelector(".home-btn i").classList.add("fa-arrow-right");
    document.querySelector(".home-btn").style.cssText =
      "left: auto; right: 30px;";
    document.querySelectorAll(".input input").forEach((input) => {
      input.style.cssText = "direction: ltr;";
    });
    document.querySelectorAll(".input h5").forEach((ele) => {
      ele.style.cssText =
        "margin-right: 2rem; margin-left: 0; text-align: left;";
    });
    if (document.querySelector(".frame-location")) {
      document.querySelector(".frame-location span").style.cssText =
        "text-align: left;";
    }
    if (document.querySelector(".file-input")) {
      document.querySelector(".file-input").style.cssText = "text-align: left;";
      document.querySelector(".file-input > .button").style.cssText =
        "margin-right: 10px; margin-left: 0;";
    }
  }
  if (
    document.querySelector(".image-slider") &&
    document.querySelector(".description")
  ) {
    document.querySelector(".description .fav").style.cssText =
      "right: 2rem; left: auto";
    document.querySelectorAll(".hospital i").forEach((icon) => {
      icon.style.cssText = "margin-left: 0; margin-right: 5px;";
    });
  }

  if (document.querySelector(".content-side")) {
    if (innerWidth > 768) {
      document.querySelector(
        ".side"
      ).style.cssText = `background: url(Images/SideBarBackgroundReverse.png); 
      background-position: right top; background-repeat: no-repeat; 
      background-size: cover; right: 200%`;
      document
        .querySelectorAll(".side .card-item:not(:first-of-type)")
        .forEach((card) => {
          card.style.cssText = "transform: translateX(50px);";
          card.addEventListener("mouseover", () => {
            card.style.cssText = "transform: translateX(100px);";
          });
          card.addEventListener("mouseleave", () => {
            card.style.cssText = "transform: translateX(50px);";
          });
        });
      document.querySelector(".side .active").style.cssText =
        "transform: translateX(100px);";
      document.querySelector(".content-side").style.cssText =
        "padding: 10rem 2rem 4rem 9rem;";
    }
    document.querySelector("form .helpfull label:first-of-type").style.cssText =
      "border-right: 1px solid var(--line-color); border-left: 0;";
    document.querySelectorAll(".opinion .user-box .img-box").forEach((img) => {
      img.style.cssText = "margin-right: 1rem; margin-left: 0;";
    });
    document.querySelector(".burger-sidebar").style.cssText =
      "left: 1rem; right: auto";
    document.querySelectorAll(".content-side > ul").forEach((list) => {
      list.style.cssText = " margin-left: 2rem; margin-right: 0;";
    });
  }

  if (document.querySelector("form .inputGroup")) {
    document.querySelectorAll("form .inputGroup label").forEach((input) => {
      input.style.cssText =
        "left: 0; right: auto; margin-left: 0.5em; margin-right: 0;";
    });
  }
  if (document.querySelector(".sidebar")) {
    document.querySelectorAll(".sidebar-links .link-title i").forEach((ele) => {
      ele.style.cssText = "margin-right: 10px; margin-left: 0;";
    });
    document.querySelectorAll(".sidebar-links .sub-lists i").forEach((ele) => {
      ele.style.cssText = "margin-right: 10px; margin-left: 0;";
    });
    if (document.querySelector(".content .user-information")) {
      document.querySelector(".content .profile .user").style.cssText =
        "left: 200px; right: auto";
      document.querySelector(".content .username").style.cssText =
        "left: 190px; right: auto";
    }
    if (document.querySelector(".table-header")) {
      document.querySelector(".table-header .btn-add i").style.cssText =
        "margin-right: 5px; margin-left: 0;";
    }
  }
};

let convertToArabic = () => {
  document.body.style.cssText = "direction: rtl";
  langName.innerHTML = "العربية";
  lang.style.cssText =
    "right: 0; border-radius: 50px 0 0 50px; padding: 5px 10px 5px 1rem;";
  document.querySelector(".setting").style.cssText = "right: 5px";
  document.querySelector(".scroll-top").style.cssText =
    "right: auto; left: 20px ;transform: translateX(calc(-100% - 40px));";

  if (
    document.title.includes("Login") ||
    document.title.includes("Register") ||
    document.title.includes("Forget Password")
  ) {
    document.querySelector(".sidebar svg:nth-of-type(1)").style.cssText =
      "left: auto; right: -60px;";
    document.querySelector(".sidebar svg:nth-of-type(2)").style.cssText =
      "left: auto; right: 0;";
    if (document.querySelector(".sidebar ul li a")) {
      document.querySelectorAll(".sidebar ul li a").forEach((list) => {
        list.style.cssText = "border-radius: 0 50px 50px 0;";
      });
      document.querySelector(".sidebar ul li a span").style.cssText =
        "right: auto; left: 0;";
    }
    document.querySelector(".home-btn").style.cssText =
      "left: 1rem; right: auto;";
    document.querySelector(".home-btn i").classList.remove("fa-angle-right");
    document.querySelector(".home-btn i").classList.add("fa-angle-left");
    document.querySelectorAll("form > .inputs input").forEach((input) => {
      input.style.cssText = "padding: 5px 35px 5px 10px;";
    });
    document.querySelectorAll("form > .inputs i").forEach((item) => {
      item.style.cssText = "right: 10px; left: auto;";
    });
    if (document.querySelector("form .remember input[type='checkbox']")) {
      document.querySelector(
        "form .remember input[type='checkbox']"
      ).style.cssText = "margin-left: 7px; margin-right: 0;";
    }
  }

  if (document.querySelector("header")) {
    document.querySelector(".menu-bar li a + i").style.cssText =
      "margin-right: 10px; margin-left: 0;";
    document
      .querySelector(".drop-down-menu > a i")
      .classList.remove("fa-angles-right");
    document
      .querySelector(".drop-down-menu > a i")
      .classList.add("fa-angles-left");
    document.querySelector(".login-btns a:last-of-type").style.cssText =
      "margin-right: 1rem; margin-left: 0;";
    document.querySelector(".user ul").style.cssText = "right: auto; left: 0;";
    document.querySelector(".user .user-info span").style.cssText =
      "margin: 0 10px 0 5px;";
    document.querySelectorAll(".user ul li a i").forEach((ele) => {
      ele.style.cssText = "margin-left: 10px; margin-right: 0;";
    });
  }
  if (document.querySelector(".search-bar")) {
    document.querySelector(".search-bar").style.cssText =
      "right: 0; left: auto; flex-direction: row";
    document.querySelector(".search-bar button").style.cssText =
      "border-radius: 30px 0 0 30px;";
  }
  if (document.title.includes("الرئيسية")) {
    document
      .querySelectorAll(".sections .content .section-arrow")
      .forEach((arrow) => {
        arrow.classList.remove("fa-arrow-right-long");
        arrow.classList.add("fa-arrow-left-long");
      });
  }
  if (document.querySelector(".hospitals")) {
    document.querySelectorAll(".hospital-card p i").forEach((item) => {
      item.style.cssText = "margin-left: 5px; margin-right: 0;";
    });
    document
      .querySelector(".hospitals a > i")
      .classList.remove("fa-arrow-right");
    document.querySelector(".hospitals a > i").classList.add("fa-arrow-left");
    document.querySelector(".hospitals a > i").style.cssText =
      "margin-right: 10px; margin-left: 0;";
    if (document.querySelector(".first-aid")) {
      document
        .querySelector(".first-aid a > i")
        .classList.remove("fa-arrow-right");
      document.querySelector(".first-aid a > i").classList.add("fa-arrow-left");
      document.querySelector(".first-aid a > i").style.cssText =
        "margin-right: 10px; margin-left: 0;";

      document
        .querySelector(".medicines a > i")
        .classList.remove("fa-arrow-right");
      document.querySelector(".medicines a > i").classList.add("fa-arrow-left");
      document.querySelector(".medicines a > i").style.cssText =
        "margin-right: 10px; margin-left: 0;";
    }
  }
  if (document.querySelector(".medicine-card")) {
    document
      .querySelectorAll(".medicine-card .card-content .fav")
      .forEach((fav) => {
        fav.style.cssText = "left: 0; right: auto";
      });
    document
      .querySelectorAll(".medicine-card .card-content div i")
      .forEach((i) => {
        i.style.cssText = "margin-left: 5px; margin-right: 0;";
      });
  }
  if (document.querySelector(".hospital-location")) {
    document.querySelectorAll(".hospital-location i").forEach((i) => {
      i.style.cssText = "margin-left: 1rem; margin-right: 0;";
    });
  }
  if (document.querySelector(".news-cards")) {
    document.querySelectorAll(".news-cards .new-icon").forEach((i) => {
      i.style.cssText = "left: 5px; right: auto; transform: rotate(-30deg);";
    });
    if (document.querySelector(".news-header")) {
      document
        .querySelector(".news .news-header i")
        .classList.remove("fa-arrow-right-long");
      document
        .querySelector(".news .news-header i")
        .classList.add("fa-arrow-left-long");
      document.querySelector(".news .news-header i").style.cssText =
        "margin-right: 10px; margin-left: 0;";
    }
  }
  if (
    document.querySelector(".subscribe-alert") ||
    document.querySelector(".add-alert") ||
    document.querySelector(".edit-alert")
  ) {
    document.querySelector(".home-btn i").classList.remove("fa-arrow-right");
    document.querySelector(".home-btn i").classList.add("fa-arrow-left");
    document.querySelector(".home-btn").style.cssText =
      "left: 30px; right: auto;";
    document.querySelectorAll(".input input").forEach((input) => {
      input.style.cssText = "direction: rtl;";
    });
    document.querySelectorAll(".input h5").forEach((ele) => {
      ele.style.cssText =
        "margin-right: 0; margin-left: 2rem; text-align: right;";
    });
    if (document.querySelector(".frame-location")) {
      document.querySelector(".frame-location span").style.cssText =
        "text-align: right;";
    }
    if (document.querySelector(".file-input")) {
      document.querySelector(".file-input").style.cssText =
        "text-align: right;";
      document.querySelector(".file-input > .button").style.cssText =
        "margin-right: 0; margin-left: 10px;";
    }
  }
  if (
    document.querySelector(".image-slider") &&
    document.querySelector(".description")
  ) {
    document.querySelector(".description .fav").style.cssText =
      "right: auto; left: 2rem";
    document.querySelectorAll(".hospital i").forEach((icon) => {
      icon.style.cssText = "margin-left: 5px; margin-right: 0;";
    });
  }
  
  if (document.querySelector(".content-side")) {
    if (innerWidth > 768) {
      document.querySelector(
        ".side"
      ).style.cssText = `background: url(Images/SideBarBackground.png); 
      background-position: left top; background-repeat: no-repeat; 
      background-size: cover; right: -200%`;
      document
        .querySelectorAll(".side .card-item:not(:first-of-type)")
        .forEach((card) => {
          card.style.cssText = "transform: translateX(-50px);";
          card.addEventListener("mouseover", () => {
            card.style.cssText = "transform: translateX(-100px);";
          });
          card.addEventListener("mouseleave", () => {
            card.style.cssText = "transform: translateX(-50px);";
          });
        });
      document.querySelector(".side .active").style.cssText =
        "transform: translateX(-100px);";
      document.querySelector(".content-side").style.cssText =
        "padding: 10rem 9rem 4rem 2rem;";
    }
    document.querySelector("form .helpfull label:first-of-type").style.cssText =
      "border-left: 1px solid var(--line-color); border-right: 0;";
    document.querySelectorAll(".opinion .user-box .img-box").forEach((img) => {
      img.style.cssText = "margin-left: 1rem; margin-right: 0;";
    });
    document.querySelector(".burger-sidebar").style.cssText =
      "right: 1rem; left: auto";
    document.querySelectorAll(".content-side > ul").forEach((list) => {
      list.style.cssText = " margin-right: 2rem; margin-left: 0;";
    });
  }
  
  if (document.querySelector("form .inputGroup")) {
    document.querySelectorAll("form .inputGroup label").forEach((input) => {
      input.style.cssText =
        "left: auto; right: 0; margin-left: 0; margin-right: 0.5em;";
    });
  }
  if (document.querySelector(".sidebar")) {
    document.querySelectorAll(".sidebar-links .link-title i").forEach((ele) => {
      ele.style.cssText = "margin-left: 10px; margin-right: 0;";
    });
    document.querySelectorAll(".sidebar-links .sub-lists i").forEach((ele) => {
      ele.style.cssText = "margin-left: 10px; margin-right: 0;";
    });
    if (document.querySelector(".content .user-information")) {
      document.querySelector(".content .profile .user").style.cssText =
        "right: 200px; left: auto";
      document.querySelector(".content .username").style.cssText =
        "right: 190px; left: auto";
    }
    if (document.querySelector(".table-header")) {
      document.querySelector(".table-header .btn-add i").style.cssText =
        "margin-left: 5px; margin-right: 0;";
    }
  }
};

if (getLang === "english") {
  convertToEnglish();

  langMenuItems.forEach((ele) => {
    ele.classList.remove("active-lang");
  });
  document.querySelector(".en").classList.add("active-lang");
}

langMenuItems.forEach((list) => {
  list.addEventListener("click", function () {
    window.location.reload();

    if (!this.classList.contains("active-lang")) {
      if (langName.innerHTML == "العربية") {
        convertToEnglish();
      } else {
        convertToArabic();
      }
    }

    langMenuItems.forEach((ele) => {
      ele.classList.remove("active-lang");
    });
    this.classList.add("active-lang");

    if (langName.innerHTML !== "العربية") {
      return localStorage.setItem("language", "english");
    }
    localStorage.setItem("language", "arabic");
  });
});

// <!---------- Mobile Menu Bar ---------->
let burger = document.querySelector("header .burger-list");
let nav = document.querySelector(".menu-bar");
let navSpan1 = document.querySelector(
  "header .burger-list span:nth-of-type(1)"
);
let navSpan2 = document.querySelector(
  "header .burger-list span:nth-of-type(2)"
);
let navSpan3 = document.querySelector(
  "header .burger-list span:nth-of-type(3)"
);

let navBurger = () => {
  // navSpan1.classList.toggle("close");
  navSpan1.classList.toggle("close1");
  navSpan2.classList.toggle("close2");
  // navSpan3.classList.toggle("close");
  navSpan3.classList.toggle("close3");
  if (nav.style.visibility === "hidden" || nav.style.visibility === "") {
    nav.style.cssText =
      "padding: 2rem 0;visibility: visible; max-height: 500px;";
  } else {
    nav.style.cssText = "padding: 0;visibility: hidden; max-height: 0;";
  }
};
if (burger) {
  burger.onclick = function (e) {
    navBurger();
  };
}

// =============== User Login Menu ===============
let user_clicker = document.querySelector("header .user");
let menu = document.querySelector("header .user ul");
let arrow = document.querySelector("header .user .user-info i");
if (user_clicker) {
  user_clicker.onclick = function () {
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "flex";
      arrow.style.transform = "translateY(15px)";
    } else {
      menu.style.display = "none";
      arrow.style.transform = "translateY(0)";
    }
  };
}

// <!---------- Scroll To Top ---------->
let scrollBtn = document.querySelector(".scroll-top");
let header = document.querySelector("header");

window.onscroll = function () {
  if (this.scrollY >= 120) {
    scrollBtn.classList.add("show-scroll");
    header.classList.add("background");
  } else {
    scrollBtn.classList.remove("show-scroll");
    header.classList.remove("background");
  }
};
scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
