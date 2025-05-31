window.addEventListener('DOMContentLoaded', () => {
    //je sais pas encore
}); 

//on change le header quand on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled'); 
    }else {
        header.classList.remove('scrolled');
    }
}); 
