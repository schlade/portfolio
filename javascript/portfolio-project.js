// Portfolio Projects Header

var prevScrollPosition = window.pageYOffset;

window.onscroll = function portfolioNav() {
    let currentScrollPosition = window.pageYOffset;
    // Checks if device width is smaller than 611px (Mobile)
    if (window.innerWidth < 611) {
        if (prevScrollPosition > currentScrollPosition) {
            document.querySelector("header").style.top = "0px";
        } else {
            document.querySelector("header").style.top = "-80px";
        }
    }
    // Checks if device width is between 610px and 1024px (Tablet)
    if (window.innerWidth > 610 && window.innerWidth < 1025) {
        if (prevScrollPosition > currentScrollPosition) {
            document.querySelector("header").style.top = "0px";
        } else {
            document.querySelector("header").style.top = "-70px";
        }
    }
    // Updates previous scroll position
    prevScrollPosition = currentScrollPosition;
};