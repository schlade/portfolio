// Burger Menu
function navToggle() {
	const nav = document.getElementById("nav");
	nav.classList.toggle("menu-open");
};


// Remember Scroll Position
var sidebar = document.querySelector("body");

var top = localStorage.getItem("sidebar-scroll");

if (top !== null) {
	sidebar.scrollTop = parseInt(top, 10);
}

window.addEventListener("beforeunload", () => {
	localStorage.setItem("sidebar-scroll", sidebar.scrollTop);
});
