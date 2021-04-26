// Навигация в мобильной версии

const navMain = document.querySelector(".main-navigation");
const navToggle = navMain.querySelector(".main-navigation__toggle");

navMain.classList.remove("main-navigation--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-navigation--closed")) {
    navMain.classList.remove("main-navigation--closed");
    navMain.classList.add("main-navigation--opened");
  } else {
    navMain.classList.add("main-navigation--closed");
    navMain.classList.remove("main-navigation--opened");
  }
});

//Обрезание текста

const textTitle = document.querySelector(".functional-food__title").textContent;
const textSlogan = document.querySelector(".functional-food__slogan").textContent;

function trimString(str, count) {
  return str.length > count ? str.slice(0, count) + '...' : str;
}

if(window.innerWidth <= 767) {
document.querySelector('.functional-food__title').textContent = trimString(textTitle, 75);
} else {
document.querySelector('.functional-food__title').textContent =textTitle;
}

document.querySelector('.functional-food__slogan').textContent = trimString(textSlogan, 135);
