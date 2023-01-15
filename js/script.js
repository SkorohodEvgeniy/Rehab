let headerBurger = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu");
let body = document.getElementsByTagName("body");

function toggleBurgerMenu() {
  headerBurger, headerMenu.classList.toggle("active");
  body.classList.toggle("lock");
}

headerBurger.addEventListener("click", toggleBurgerMenu);

/** Btn menu */

let clickBtn = document.querySelector('.header__btn-link');

clickBtn.addEventListener('click', function(){

  let headerMenu = document.querySelector('.header__btn-menu').classList.toggle('open');

});