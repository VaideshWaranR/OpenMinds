// Slider Logic for Multiple Sections
function initSlider(sectionClass, prevBtnClass, nextBtnClass) {
    const slides = document.querySelector(`.${sectionClass} .slides`);
    const prevBtn = document.querySelector(`.${prevBtnClass}`);
    const nextBtn = document.querySelector(`.${nextBtnClass}`);
    
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll(`.${sectionClass} .slide`).length;

    nextBtn.addEventListener('click', () => {
        // If it's the last slide, go back to the first slide
        if (currentSlide === totalSlides - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        slides.style.transform = `translateX(-${currentSlide * 33.33}%)`;
    });

    prevBtn.addEventListener('click', () => {
        // If it's the first slide, go to the last slide
        if (currentSlide === 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide--;
        }
        slides.style.transform = `translateX(-${currentSlide * 33.33}%)`;
    });

}

// Initialize sliders for each section
initSlider('events-slider', 'events-prev', 'events-next');
initSlider('courses-slider', 'courses-prev', 'courses-next');
initSlider('about-slider', 'about-prev', 'about-next');

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu.querySelectorAll('a');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show'); // Close the menu when a link is clicked
        });
    });
});
