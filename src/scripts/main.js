
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navigation_active');
    });

    // menuItem.forEach(item => {
    //     item.addEventListener('click', () => {
    //         hamburger.classList.toggle('hamburger_active');
    //         menu.classList.toggle('navigation__wrapper_active');
    //     });
    // });
});
