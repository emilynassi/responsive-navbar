const $menuBtn = document.querySelector(".mobile-menu-btn");
const $navbar = document.querySelector(".navbar");
const $navItems = [...document.querySelectorAll(".nav-item")];

function setDropDownClass() {
  $navItems.forEach((el) => {
    if (el.querySelectorAll(".dropdown-menu").length) {
      el.querySelector(".nav-link").classList.add("has-dropdown");
    }
  });
}

function handleMobileMenu(event) {
  event.preventDefault();
  event.currentTarget.classList.toggle("open");
  $navbar.classList.toggle("open");
}

function handleMobileDropdown(event) {
  event.preventDefault();

  if (event.target.closest(".has-dropdown") && event.view.innerWidth < 1024) {
    event.target.closest(".nav-item").classList.toggle("open");
  }
}

function handleResize(event) {
  const { innerWidth } = event.target;

  if (innerWidth >= 1024) {
    closeMenu();
  }
}

function handleOffMenuClick(event) {
  event.preventDefault();
  if (!event.target.closest("nav") && !event.target.closest(".nav-item")) {
    closeMenu();
  }
}

function closeMenu() {
  $navbar.classList.remove("open");
  $menuBtn.classList.remove("open");
  $navItems.forEach((el) => {
    if (el.querySelectorAll(".dropdown-menu").length) {
      el.classList.remove("open");
    }
  });
}

$menuBtn.addEventListener("click", handleMobileMenu);
$navbar.addEventListener("click", handleMobileDropdown);
window.addEventListener("resize", handleResize);
window.addEventListener("click", handleOffMenuClick);

setDropDownClass();
