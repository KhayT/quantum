const mobileMenu = document.querySelector(".menu");
const navUl = document.querySelector(".header__nav");

mobileMenu.addEventListener("click", function () {
  navUl.classList.toggle("show");
});
