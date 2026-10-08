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

/* =========================================================
    SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});