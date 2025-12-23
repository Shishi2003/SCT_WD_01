// Navbar scroll effect
window.addEventListener("scroll", () => {
    document.getElementById("navbar")
        .classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
});
