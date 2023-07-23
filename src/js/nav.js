// SECTION
/// EVENT LISTENERS
window.addEventListener("scroll", function () {
  let nav = document.getElementById("nav");
  nav.classList.toggle("down", window.scrollY > 0);
});

//  SECTION
/// EVENT LISTENERS
window.addEventListener("resize", function () {
  let linkList = document.querySelector(".navigation");
  if (window.innerWidth > 1080) {
    closeMenu();
  }
});
/// FUNCTIONS
const toggleMenu = () => {
  let navActive = document.querySelector(".navigation.active");
  if (navActive) {
    closeMenu();
  } else {
    openMenu();
  }
};
const openMenu = () => {
  let html = document.querySelector("html");
  let linkList = document.querySelector(".navigation");

  html.classList.add("noOverflow");
  linkList.classList.add("active");
  console.log("Test");
};
const closeMenu = () => {
  let html = document.querySelector("html");
  let linkList = document.querySelector(".navigation");

  html.classList.remove("noOverflow");
  linkList.classList.remove("active");
};
