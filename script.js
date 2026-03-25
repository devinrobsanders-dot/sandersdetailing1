// This file contains JavaScript code for the website. 
// It may include functionality for interactive elements, such as form validation, image sliders, or dynamic content loading.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Form validation for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                event.preventDefault();
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for your message!');
            }
        });
    }

    // Example: Image slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    document.getElementById('next-button').addEventListener('click', nextSlide);
    document.getElementById('prev-button').addEventListener('click', prevSlide);

    showSlide(currentSlide);
});