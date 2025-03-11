const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-list a");

// Function to add/remove sticky class when scrolling
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

// Function to handle the active link highlighting when scrolling
window.addEventListener("scroll", () => {
    let currentSection = "";

    // Loop through all sections
    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    // Highlight the corresponding link
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});

// Smooth scroll effect on navigation clicks
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - navbar.offsetHeight,
            behavior: "smooth"
        });
    });
});
