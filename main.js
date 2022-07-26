const mobile_nav = document.querySelector(".nav-link");
const nav_header = document.querySelector(".header");

const toggleNavbar= () => {
    nav_header.classList.toggle("active");
}


mobile_nav.addEventListener("click", ()=> toggleNavbar());