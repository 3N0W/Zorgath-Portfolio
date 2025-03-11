// Toggle Responsive Navigation
const menuToggle = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });

            // Close menu after clicking on a mobile link
            if (window.innerWidth <= 768) {
                navMenu.classList.remove("show");
            }
        }
    });
});

// Interactive Hover Glow Effect on Buttons
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.boxShadow = "0px 0px 20px rgba(255, 215, 0, 0.8)";
    });
    button.addEventListener("mouseleave", () => {
        button.style.boxShadow = "0px 0px 10px gold";
    });
});