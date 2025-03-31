// Get hamburger and navbar elements
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Add event listener to toggle the navbar
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Remove active class when resizing above 768px
window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
});

new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
