const btns = document.querySelectorAll('.assortment-list__js');
const wrappModal = document.querySelector('.modalWrapp_js');
const modalWrappClose = document.querySelector('.modalWrappOvrlay_close_js');

const openModal = () => { wrappModal.style.display = 'flex' }
modalWrappClose.addEventListener('click', () => { wrappModal.style.display = 'none' })
btns.forEach(item => item.addEventListener('click', openModal))