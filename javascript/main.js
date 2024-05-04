// Cookie Banner
const cookieBanner = document.querySelector("#cookie-banner");
const cookieButton = document.querySelector("#cookie-btn");

cookieButton.addEventListener("click", () => {
    cookieBanner.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
});

// Burger Menu
function navToggle() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("menu-open");
};

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieBanner.classList.add("active");
    }
}, 2000);

// Remember Scroll Position
var sidebar = document.querySelector("body");
var top     = localStorage.getItem("sidebar-scroll");

if (top !== null) {
    sidebar.scrollTop = parseInt(top, 10);
}

window.addEventListener("beforeunload", () => {
    localStorage.setItem("sidebar-scroll", sidebar.scrollTop);
});
