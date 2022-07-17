const openBtn = document.querySelector('.js-open-menu');
const closeBtn = document.querySelector('.js-close-menu');
const headerWapp = document.querySelector('.js-header-menu');

closeBtn.addEventListener('click', () => {
    headerWapp.style.display = 'none'
})


openBtn.addEventListener('click', () => {
    headerWapp.style.display = 'block'
})