const open = document.querySelector('#open');
const close = document.querySelector('#close');
const popupContainer = document.querySelector('.popup-container');

open.addEventListener('click',event => {
    popupContainer.classList.add('active');
})

close.addEventListener('click',event => {
    popupContainer.classList.remove('active');
})