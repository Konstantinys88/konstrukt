
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation'),
    hamburger = document.querySelector('.hamburger'),
    overlay = document.querySelector('.overlay');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navigation_active');
        overlay.classList.toggle('overlay_active');
    });

    // menuItem.forEach(item => {
    //     item.addEventListener('click', () => {
    //         hamburger.classList.toggle('hamburger_active');
    //         menu.classList.toggle('navigation__wrapper_active');
    //     });
    // });
});
