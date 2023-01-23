let headerBurger = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu");
let body = document.getElementsByTagName("body");

function toggleBurgerMenu() {
  headerBurger, headerMenu.classList.toggle("active");
  body.classList.toggle("lock");
}

headerBurger.addEventListener("click", toggleBurgerMenu);

/** Btn menu */

let clickBtn = document.querySelector(".header__btn-link");

clickBtn.addEventListener("click", function () {
  let headerMenu = document
    .querySelector(".header__btn-menu")
    .classList.toggle("open");
});

/* Accordion*/
$(document).ready(function () {
  $(".accordion__title").click(function (event) {
    if ($(".accordion").hasClass("one")) {
      $(".accordion__title").not($(this)).removeClass("active");
      $(".accordion__text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

/**------------Slider reviews------------------------- */

$(document).ready(function () {
  $(".carousel__box-lists").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    appendArrows: $(".arrow__btns"),
    prevArrow:
      '<button id="prev" type="button" class="slick-prevBtn slick-arrow"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z" /></svg></button>',
    nextArrow:
      '<button id="next" type="button" class="slick-nextBtn slick-arrow"><svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.7968 0.792893C13.1873 0.402369 13.8205 0.402369 14.211 0.792893L18.711 5.29289C19.1015 5.68342 19.1015 6.31658 18.711 6.70711L14.211 11.2071C13.8205 11.5976 13.1873 11.5976 12.7968 11.2071C12.4063 10.8166 12.4063 10.1834 12.7968 9.79289L15.5897 7H2.00391C1.45162 7 1.00391 6.55228 1.00391 6C1.00391 5.44772 1.45162 5 2.00391 5H15.5897L12.7968 2.20711C12.4063 1.81658 12.4063 1.18342 12.7968 0.792893Z" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  });
});
