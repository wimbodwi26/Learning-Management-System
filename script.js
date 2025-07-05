
//fitur content 6
const container = document.querySelector('.Content-hal-6');
const scrollLeftBtn = document.getElementById('scrollLeft')
const scrollRightBtn = document.getElementById('scrollRight')

scrollLeftBtn.addEventListener('click', () => {
    container.scrollBy({ left: -300, behavior: 'smooth'});
});

scrollRightBtn.addEventListener('click', () => {
    container.scrollBy({ left: 300, behavior: 'smooth'});
});

//hamberger menu
const toggleBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});