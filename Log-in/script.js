const toggleBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});