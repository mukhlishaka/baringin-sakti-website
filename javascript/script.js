const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});