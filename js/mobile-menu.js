const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const closeButtons = document.querySelectorAll(".menu-btn-close");

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
