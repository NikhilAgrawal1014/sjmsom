document.addEventListener('DOMContentLoaded', function() {
    const galleryInner = document.querySelector('.gallery-inner');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryButtonPrev = document.querySelector('#prev');
    const galleryButtonNext = document.querySelector('#next');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    let currentIndex = 0;
    const totalItems = galleryItems.length;
    const interval = 5000; // 5 seconds

    function updateGallery() {
        const offset = -currentIndex * 100;
        galleryInner.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first image
        }
        updateGallery();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1; // Loop back to the last image
        }
        updateGallery();
    }

    galleryButtonNext.addEventListener('click', nextSlide);
    galleryButtonPrev.addEventListener('click', prevSlide);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, interval);

    // Toggle nav menu for smaller screens
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
// JavaScript for the Faculty Achievements Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let index = 0;

    function showSlide(n) {
        if (n >= slideCount) index = 0;
        else if (n < 0) index = slideCount - 1;
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    document.querySelector('.next').addEventListener('click', function() {
        index++;
        showSlide(index);
    });

    document.querySelector('.prev').addEventListener('click', function() {
        index--;
        showSlide(index);
    });

    // Auto slide every 5 seconds
    setInterval(function() {
        index++;
        showSlide(index);
    }, 5000);
});
