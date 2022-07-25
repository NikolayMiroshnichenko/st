const openBtn = document.querySelector('.js-open-menu');
const closeBtns = document.querySelectorAll('.js-close-menu');
const headerWapp = document.querySelector('.js-header-menu');

closeBtns.forEach(element => {
    element.addEventListener('click', () => {
        headerWapp.style.display = 'none'
    })
});

openBtn.addEventListener('click', () => {
    headerWapp.style.display = 'block'
})