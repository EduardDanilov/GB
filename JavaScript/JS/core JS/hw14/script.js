const leftBlock = document.querySelector('.left_block');
const rightBlock = document.querySelector('.right_block');
const sliderContainer = document.querySelector('.slider_container');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');

let slideIndex = 0;

function showSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[slideIndex].style.display = 'block';
}

function currentSlide(dotIndex) {
    slideIndex = dotIndex;
    showSlides();
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}

function previousSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

dots.forEach((el, index) => {
    el.addEventListener('click', () => {
        currentSlide(index);
    });
});

leftBlock.addEventListener('click', previousSlide);
rightBlock.addEventListener('click', nextSlide);

showSlides();