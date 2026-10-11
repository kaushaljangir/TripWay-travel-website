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

/* =========================================================
    PACKAGE FILTER
========================================================= */

function filterPackages(category, button) {

    const cards =
        document.querySelectorAll(".package-card");

    document
        .querySelectorAll(".filter-btn")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    cards.forEach(card => {

        const type = card.dataset.type;

        if (category === "all" || type === category) {

            card.style.display = "block";

            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, 10);

        } else {

            card.style.opacity = "0";
            card.style.transform = "translateY(15px)";

            setTimeout(() => {
                card.style.display = "none";
            }, 250);

        }

    });

}

/* =========================================================
SEARCH
========================================================= */

function searchPackages() {

    const destination =
        document
            .getElementById("searchDestination")
            .value
            .toLowerCase()
            .trim();

    const type =
        document.getElementById("searchType").value;

    const duration =
        document.getElementById("searchDuration").value;

    const cards =
        document.querySelectorAll(".package-card");

    let found = false;

    cards.forEach(card => {

        const cardDestination =
            card.dataset.destination.toLowerCase();

        const cardType =
            card.dataset.type;

        const cardDuration =
            Number(card.dataset.duration);

        let match = true;

        if (
            destination &&
            !cardDestination.includes(destination)
        ) {
            match = false;
        }

        if (
            type &&
            cardType !== type
        ) {
            match = false;
        }

        if (duration === "1-3" &&
            !(cardDuration >= 1 && cardDuration <= 3)) {
            match = false;
        }

        if (duration === "4-7" &&
            !(cardDuration >= 4 && cardDuration <= 7)) {
            match = false;
        }

        if (duration === "8-14" &&
            !(cardDuration >= 8 && cardDuration <= 14)) {
            match = false;
        }

        if (duration === "15+" && cardDuration < 15) {
            match = false;
        }

        if (match) {

            card.style.display = "block";
            found = true;

        } else {

            card.style.display = "none";

        }

    });

    document
        .getElementById("packages")
        .scrollIntoView({
            behavior: "smooth"
        });

    if (!found) {

        showToast(
            "No packages found. Try another search."
        );

    } else {

        showToast(
            "Packages updated!"
        );

    }

}

/* =========================================================
TOAST NOTIFICATION
========================================================= */

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}