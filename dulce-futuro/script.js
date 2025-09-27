document.addEventListener('DOMContentLoaded', () => {
    // TOGGLE MENU DE NAVEGACIÓN EN MÓVIL
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });

    // FUNCIONALIDADES DE ACCESIBILIDAD
    const textSizeIncrease = document.getElementById('text-size-increase');
    const textSizeDecrease = document.getElementById('text-size-decrease');
    const contrastToggle = document.getElementById('contrast-toggle');
    const readerModeToggle = document.getElementById('reader-mode-toggle');

    let currentFontSize = 16; // Tamaño de fuente base en píxeles

    textSizeIncrease.addEventListener('click', () => {
        currentFontSize += 2;
        document.body.style.fontSize = `${currentFontSize}px`;
    });

    textSizeDecrease.addEventListener('click', () => {
        currentFontSize -= 2;
        document.body.style.fontSize = `${currentFontSize}px`;
    });

    contrastToggle.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    readerModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('reader-mode');
    });

    // NAVEGACIÓN SUAVE AL CLICAR EN ENLACES DE ANCLA
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
