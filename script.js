let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;


function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    
    const offset = -index * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}


function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}


function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

showSlide(currentSlide);
