window.addEventListener('DOMContentLoaded', () => {
    //je sais pas encore
}); 

//menu hamburger
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
})

//on change le header quand on scroll
/*window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled'); 
    }else {
        header.classList.remove('scrolled');
    }
}); */
