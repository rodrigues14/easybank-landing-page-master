/* menu mobile */
const btnMobile = document.querySelector('#btn-mobile');


function toggleMenu() {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');

    const iconBtn = document.querySelector('#icon-btn');

    if (nav.classList.contains('active')) {
        iconBtn.setAttribute('src', './images/icon-close.svg');
    } else {
        iconBtn.setAttribute('src', './images/icon-hamburger.svg');
    }
}

btnMobile.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
})