//hamburger menu toggle
function toggleSideNav() {
    const sideNav = document.getElementById("side-nav");
    sideNav.classList.toggle("translate-x-full");
}

//close side nav on escape key 
document.addEventListener("keydown", e => {
    if (e.key === "Escape") toggleSideNav();
});

//scroll fade animation
document.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelectorAll(".scroll-fade-up");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.10 //trigger % value
        }
    );
    element.forEach(el => observer.observe(el));
});

//switch between different login forms
function toggleSignup() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
}

function toggleLogin() {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}


const mainHeader = document.getElementById("mainHeader");
const overlayHeader = document.getElementById("overlayHeader");

function handleScroll() {
    if (window.scrollY === 0) {
        //top
        mainHeader.classList.add("-translate-y-full", "opacity-0");
        overlayHeader.classList.remove("opacity-0");
    } else {
        //scrolled
        mainHeader.classList.remove("-translate-y-full", "opacity-0");
        overlayHeader.classList.add("opacity-0");
    }
}

window.addEventListener("scroll", handleScroll);
handleScroll();
