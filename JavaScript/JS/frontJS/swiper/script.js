const slidersContainer = document.querySelector(".slider_images");
const sliderImages = Array.from(slidersContainer.querySelectorAll("img"));
const swiperLeftButton = document.querySelector(".swiper_left");
const swiperRightButton = document.querySelector(".swiper_right");
let currentSlideIndex = 0;

const showSlide = () => {
    sliderImages.forEach((slide, index) => {
        slide.style.display = index === currentSlideIndex ? "block" : "none";
    });
};

const showNextSlider = () => {
    currentSlideIndex = (currentSlideIndex + 1) % sliderImages.length;
    showSlide();
};

const showPreviousSlider = () => {
    currentSlideIndex = (currentSlideIndex - 1 + sliderImages.length) % sliderImages.length;
    showSlide();
};

swiperLeftButton.addEventListener("click", showPreviousSlider);
swiperRightButton.addEventListener("click", showNextSlider);

showSlide();