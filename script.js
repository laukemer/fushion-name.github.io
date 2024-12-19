let lastScrollY = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Скроллим вниз
        if (currentScrollY > 0) {
            header.style.top = '0';
        }
    } else {
        // Скроллим вверх
        if (currentScrollY === 0) {
            header.style.top = '0';
        } else {
            header.style.top = '-100px';
        }
    }

    lastScrollY = currentScrollY;
});
