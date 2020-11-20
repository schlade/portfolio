const card = document.querySelector(".card");
const container = document.querySelector(".card-container");

const circle = document.querySelector(".circle");
const title = document.querySelector(".title h2");

if ( window.innerWidth > 1025 ) {
    container.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
        card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    });
    
    // Animate in
    container.addEventListener("mouseenter", e => {
        card.style.transition = "none";
        circle.style.boxShadow = "0px 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2)";
        circle.style.transform = "translateZ(6rem)";
        circle.style.borderRadius = "50%";
        circle.style.width = "40rem";
        circle.style.height = "40rem";
        title.style.transform = "translateZ(12rem)";
        title.style.color = "var(--color)";
    });
    
    // Animate out
    container.addEventListener("mouseleave", e => {
        card.style.transition = "all 0.5s ease";
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        circle.style.boxShadow = "none";
        circle.style.transform = "translateZ(0)";
        circle.style.borderRadius = "0";
        circle.style.width = "42rem";
        circle.style.height = "18rem";
        title.style.transform = "translateZ(0) rotateX(0deg)";
        title.style.color = "var(--white)";
    });
}

let allHeight = window.innerHeight;
let header = document.querySelector('header').offsetHeight;
let footer = document.querySelector('footer').offsetHeight;
let subNav = document.getElementById('subnav').offsetHeight;
let mainHeight = allHeight - header - footer - subNav;

if ( window.innerHeight > 840 || window.innerWidth < 1025 ) {
    document.querySelector('main.thank-you').style.height = mainHeight + 'px';
};

