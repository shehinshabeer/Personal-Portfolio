let menu = document.querySelector('#menu-icon');  // Correcting the selector to match the ID
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', '&amp; Designer.'],
    typeSpeed: 50,
});
