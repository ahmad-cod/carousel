const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let slideIndex = 1;

const showSlide = n => {
    let i;
    let slides = document.getElementsByClassName('carousel_slide');
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length}

    for(i=0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    } 
    slides[slideIndex - 1].style.display = 'block';
}
showSlide(slideIndex)
// Next / previous controls
const plusSlides = n => showSlide(slideIndex += n);

// Thumbnail image control
const currentSlide = n => showSlide(slideIndex = n)