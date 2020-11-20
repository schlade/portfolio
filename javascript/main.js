// JavaScript Document

// BURGER MENU

function navToggle() {
  let nav = document.getElementById("nav");
  nav.classList.toggle("menu-open");
};

// PORTFOLIO MAINCOURSE NAV

var prevScrollPosition = window.pageYOffset;
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

// GALLERY

/*var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}*/


// MODALS

/*
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('modal-open')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('modal-open')
}
*/

/*
REMEMBER SCROLL POSITION
*/

var sidebar = document.querySelector("body");

var top = localStorage.getItem("sidebar-scroll");
if (top !== null) {
  sidebar.scrollTop = parseInt(top, 10);
}

window.addEventListener("beforeunload", () => {
  localStorage.setItem("sidebar-scroll", sidebar.scrollTop);
});