import projects from "./projects.js";

// Handle NavBar behavior
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open")
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    })
});


// Generate project elements
const portContainer = document.querySelector(".portfolio")
projects.forEach(project => {
    const aEl = document.createElement("a")
    aEl.href = project.url;
    aEl.className = "portfolio__item";
    aEl.innerHTML = `
        <img src="${project.image}" alt="${project.name}" class="portfolio__img">
    `
    portContainer.appendChild(aEl)
})