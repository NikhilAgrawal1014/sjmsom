// JavaScript for sliding photo gallery
const gallery = document.querySelector('.gallery-inner');
const slides = document.querySelectorAll('.gallery-item');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let index = 0;

const updateGallery = () => {
    gallery.style.transform = `translateX(${-index * 100}%)`;
};

next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateGallery();
});

prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateGallery();
});

setInterval(() => {
    next.click();
}, 5000);

// JavaScript for faculty achievements slider
const slidesContainer = document.querySelector('.slides');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let slideIndex = 0;

const updateSlides = () => {
    slidesContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
};

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slidesContainer.children.length;
    updateSlides();
});

prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slidesContainer.children.length) % slidesContainer.children.length;
    updateSlides();
});

// JavaScript for responsive navigation
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
