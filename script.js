const navbar = document.querySelector("#navbar");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const overlay = document.createElement("div");



/* =========================================================
   NAVBAR
========================================================= */


window.addEventListener("scroll", () =>{

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

/* =========================================================
    MOBILE MENU
========================================================= */

overlay.classList.add("mobile-overlay");

document.body.appendChild(overlay);

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-active");
    overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

    navLinks.classList.remove("mobile-active");
    overlay.classList.remove("active");

});

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-active");
        overlay.classList.remove("active");

    });

});