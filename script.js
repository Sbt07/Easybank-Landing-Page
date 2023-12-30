const navbarTogglebtn = document.querySelector('.navbar-toggle-btn');
const navbarNav = document.querySelector('.navbar-nav');

const navbarToggleFunc = function () {
    navbarTogglebtn.classList.toggle('active');
    navbarNav.classList.toggle('active');
}
navbarTogglebtn.addEventListener('click', navbarToggleFunc);