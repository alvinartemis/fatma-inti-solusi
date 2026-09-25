// ```javascript
/* =========================================================
   CV FATMA INTI SOLUSI
   Main JavaScript
   ========================================================= */


/* =========================================================
   01. MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.textContent = isOpen ? "Close" : "Menu";

    });


    /* Close menu when navigation link is clicked */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.textContent = "Menu";

        });

    });

}


/* =========================================================
   02. NAVBAR ON SCROLL
   ========================================================= */

const header = document.querySelector(".site-header");

function handleNavbarScroll() {

    if (!header) return;

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleNavbarScroll);


/* =========================================================
   03. SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".section-header, " +
    ".about-content, " +
    ".company-stats, " +
    ".expertise-item, " +
    ".project-card, " +
    ".approach-item, " +
    ".client-logo, " +
    ".team-member, " +
    ".insight-card, " +
    ".contact-content"
);


/*
    IntersectionObserver akan mendeteksi ketika
    elemen masuk ke layar.
*/

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   04. AUTOMATIC COPYRIGHT YEAR
   ========================================================= */

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.textContent =
        `© ${currentYear} CV Fatma Inti Solusi. All rights reserved.`;

}


/* =========================================================
   05. ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-menu a");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);


/* =========================================================
   06. PAGE LOADED
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    handleNavbarScroll();
    updateActiveNavigation();

});
// ```
