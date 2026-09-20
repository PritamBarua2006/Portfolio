/* =========================================================
   DARK MODE
========================================================= */

const themeButton = document.getElementById("theme-toggle");


// Load previously selected theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀️";
}


// Toggle theme
themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("main section[id]");

const navLinks = document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 160;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});