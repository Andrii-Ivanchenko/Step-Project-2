let navigationMenuItem = document.querySelector(".navigation-menu");
document.querySelector(".adaptive-menu__bars").addEventListener("click", (event) => {
  if (document.querySelector(".menu-toggle").checked) {
    document.querySelector(".navigation-menu").classList.add("adaptive-menu");
  } else {
    document.querySelector(".navigation-menu").classList.remove("adaptive-menu");
    removeAllActiveElements(navigationMenuItem);
  }
});
document.querySelector(".section-heading--vertically-spaced").addEventListener("click", (event) => {
  document.querySelector(".navigation-menu").classList.remove("adaptive-menu");
  document.querySelector(".menu-toggle").checked = false;
});
document.querySelector(".navigation-menu").addEventListener("click", (event) => {
  if (window.innerWidth < 490) {
    removeAllActiveElements(navigationMenuItem);
    if (event.target.classList.contains("navigation__link")) {
      event.target.classList.add("menu-link-active");
      event.target.parentNode.classList.add("menu-item-active");
    }
  }
});
const removeAllActiveElements = function (menuItems) {
  for (let i = 0; i < menuItems.children.length; i++) {
    menuItems.children[i].classList.remove("menu-item-active");
  }
};
