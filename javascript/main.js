// JavaScript Document
// BURGER MENU

function navToggle() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("menu-open");
};

// PORTFOLIO MAINCOURSE NAV

let prevScrollPosition = window.pageYOffset;

window.onscroll = function portfolioNav() {
  var currentScrollPosition = window.pageYOffset;
  // MOBILE
  // Checks if device width is smaller than 611px
  if (window.innerWidth < 611) {
    if (prevScrollPosition > currentScrollPosition) {
      document.getElementById("portfolio-nav").style.top = "80px";
    } else {
      document.getElementById("portfolio-nav").style.top = "-86px";
    }
  }
  // TABLET
  // Checks if device width is between 611px and 1024px
  if (window.innerWidth > 610 && window.innerWidth < 1025) {
    if (prevScrollPosition > currentScrollPosition) {
      document.getElementById("portfolio-nav").style.top = "70px";
    } else {
      document.getElementById("portfolio-nav").style.top = "-32px";
    }
  }
  // DESKTOP
  // Checks if device width is bigger than 1024px
  if (window.innerWidth > 1024) {
    if (prevScrollPosition > currentScrollPosition) {
      document.getElementById("portfolio-nav").style.top = "90px";
    } else {
      document.getElementById("portfolio-nav").style.top = "30px";
    }
  }
  // Updates previous scroll position
  prevScrollPosition = currentScrollPosition;
};


// REMEMBER SCROLL POSITION
var sidebar = document.querySelector("body");

var top = localStorage.getItem("sidebar-scroll");
if (top !== null) {
  sidebar.scrollTop = parseInt(top, 10);
}

window.addEventListener("beforeunload", () => {
  localStorage.setItem("sidebar-scroll", sidebar.scrollTop);
});