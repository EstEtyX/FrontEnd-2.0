const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const closeButtons = document.querySelectorAll(".js-close-menu");

let scrollPosition = 0;

const openMenu = () => {
  scrollPosition = window.scrollY;

  document.body.style.top = `-${scrollPosition}px`;
  document.body.classList.add("no-scroll");
  document.body.style.position = "fixed";
  document.body.style.width = "100%";

  mobileMenu.classList.add("is-open");
};

const closeMenu = () => {
  document.body.classList.remove("no-scroll");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";

  window.scrollTo(0, scrollPosition);

  mobileMenu.classList.remove("is-open");
};

menuBtnOpen.addEventListener("click", openMenu);

closeButtons.forEach(button => {
  button.addEventListener("click", closeMenu);
});

// ESC
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
    closeMenu();
  }
});

mobileMenu.addEventListener(
  "touchmove",
  event => {
    event.stopPropagation();
  },
  { passive: false },
);

document.addEventListener(
  "touchmove",
  event => {
    if (mobileMenu.classList.contains("is-open")) {
      event.preventDefault();
    }
  },
  { passive: false },
);

// const mobileMenu = document.querySelector(".mobile-menu");
// const menuBtnOpen = document.querySelector(".menu-btn-open");
// const closeButtons = document.querySelectorAll(".js-close-menu");

// const openMenu = () => {
//   mobileMenu.classList.add("is-open");
//   document.body.classList.add("no-scroll");
// };

// const closeMenu = () => {
//   mobileMenu.classList.remove("is-open");
//   document.body.classList.remove("no-scroll");
// };

// menuBtnOpen.addEventListener("click", openMenu);

// closeButtons.forEach(button => {
//   button.addEventListener("click", closeMenu);
// });

// document.addEventListener("keydown", event => {
//   if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
//     closeMenu();
//   }
// });

// const mobileMenu = document.querySelector(".mobile-menu");
// const menuBtnOpen = document.querySelector(".menu-btn-open");
// const closeButtons = document.querySelectorAll(".js-close-menu");

// const openMenu = () => mobileMenu.classList.add("is-open");
// const closeMenu = () => mobileMenu.classList.remove("is-open");

// menuBtnOpen.addEventListener("click", openMenu);

// closeButtons.forEach(button => {
//   button.addEventListener("click", closeMenu);
// });

// document.addEventListener("keydown", event => {
//   if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
//     closeMenu();
//   }
// });

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
