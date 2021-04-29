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

if (document.querySelector(".functional-food")) {
const textTitle = document.querySelector(".functional-food__title").textContent;
const textSlogan = document.querySelector(".functional-food__slogan").textContent;

function trimString(str, count) {
  if (window.innerWidth <= 767) {
    return str.length > count ? str.slice(0, count) + '...' : str;
  } else {
    return str;
  }
}


window.addEventListener("load", () => {
  document.querySelector(".functional-food__title").textContent = trimString(textTitle, 75);
  document.querySelector(".functional-food__slogan").textContent = trimString(textSlogan, 135);
});

window.addEventListener("resize", () => {
  document.querySelector(".functional-food__title").textContent = trimString(textTitle, 75);
  document.querySelector(".functional-food__slogan").textContent = trimString(textSlogan, 135);
});
}
