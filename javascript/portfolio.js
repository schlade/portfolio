// Portfolio Display
const projects = {
	all: document.getElementsByClassName("portfolio-display"),
	work: document.getElementsByClassName("work"),
	personal: document.getElementsByClassName("personal"),
	sub: {
		htmlcss: document.getElementsByClassName("htmlcss"),
		photoshop: document.getElementsByClassName("photoshop"),
		illustrator: document.getElementsByClassName("illustrator"),
		indesign: document.getElementsByClassName("indesign"),
		premierepro: document.getElementsByClassName("premierepro"),
		aftereffects: document.getElementsByClassName("aftereffects"),
		blender: document.getElementsByClassName("blender"),
		other: document.getElementsByClassName("other")
	}

};

function filterSelection() {

	const cats = document.getElementById("portfolio-sort-btn").children
	const subCats = document.getElementById("portfolio-filter-btn").children;

	let activeCat
	let activeSubCats = []

	for (let e of cats) {
		if (e.classList.value == "active") {
			activeCat = e.id;
		}
	}

	for (let e of subCats) {
		if (e.classList.value == "active") {
			activeSubCats.push(e.id)
		}
	}

	for (let project of projects.all[0].children) {
		if (activeCat == "all" ? true : project.classList.value.includes(activeCat)) {
			if (activeSubCats.length == 0) {
				console.log(project)
				project.style.display = "block";
			} else if (checkForCats(project, activeSubCats)) {
				project.style.display = "block";
			} else {
				project.style.display = "none";
			}
		} else {
			project.style.display = "none";
		}
	}

};

function checkForCats(project, cats) {
	for (let cat of cats) {
		if (project.classList.value.includes(cat)) {
			return true;
		}
	}
	return false;
}

function toggleCat(pressed) {
	const elements = document.getElementById("portfolio-sort-btn").children
	console.log(pressed)

	for (let e of elements) {
		if (e.id == pressed) {
			e.classList.value = "active";
		} else {
			e.classList.value = "";
		}
	}

	filterSelection();
}

function toggleSubCat(pressed) {
	const e = document.getElementById(pressed);
	console.log(pressed)

	if (e.classList.value == "active") {
		e.classList.value = ""
	} else {
		e.classList.value = "active"
	}

	filterSelection()
}


// Portfolio Maincourse Nav & Header

var prevScrollPosition = window.pageYOffset;

window.onscroll = function portfolioNav() {
	let currentScrollPosition = window.pageYOffset;
	// MOBILE
	// Checks if device width is smaller than 611px
	if (window.innerWidth < 611) {
		if (prevScrollPosition > currentScrollPosition) {
			document.getElementById("portfolio-nav").style.top = "80px";
			document.querySelector("header").style.top = "0px";
		} else {
			document.getElementById("portfolio-nav").style.top = "-166px";
			document.querySelector("header").style.top = "-226px";
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