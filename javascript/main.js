// Burger Menu
function navToggle() {
	const nav = document.getElementById("nav");
	nav.classList.toggle("menu-open");
};

// Cookie Banner
// https://www.youtube.com/watch?v=R_-oGJBg3nw
const cookieContainer = document.querySelector("#cookie-container");
const cookieButton = document.querySelector("#cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);

// Remember Scroll Position
var sidebar = document.querySelector("body");

var top = localStorage.getItem("sidebar-scroll");

if (top !== null) {
	sidebar.scrollTop = parseInt(top, 10);
}

window.addEventListener("beforeunload", () => {
	localStorage.setItem("sidebar-scroll", sidebar.scrollTop);
});
