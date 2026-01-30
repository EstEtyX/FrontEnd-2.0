// const mobileMenu = document.querySelector(".mobile-menu");
// const menuBtnOpen = document.querySelector(".menu-btn-open");
// const menuBtnClose = document.querySelector(".menu-btn-close");

// const toggleMenu = () => mobileMenu.classList.toggle("is-open");

// const disableScroll = () =>
//   document.body.classList.toggle("is-scroll-disabled");

// menuBtnOpen.addEventListener("click", toggleMenu);
// menuBtnClose.addEventListener("click", toggleMenu);

// menuBtnOpen.addEventListener("click", disableScroll);
// menuBtnClose.addEventListener("click", disableScroll);

const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const closeButtons = document.querySelectorAll(".js-close-menu");

const openMenu = () => mobileMenu.classList.add("is-open");
const closeMenu = () => mobileMenu.classList.remove("is-open");

menuBtnOpen.addEventListener("click", openMenu);

closeButtons.forEach(button => {
  button.addEventListener("click", closeMenu);
});