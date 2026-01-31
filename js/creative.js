"use strict";

/**
 * Background slideshow
 *
 * Tiago 30jan26: added fade for smoother transitions.
 * Check 99c7658d for simpler version without fade.
 *
 * @param {string[]} elemIds - 2 elements to hold the swapping images
 * @param {string[]} images  - array of image URLs
 * @param {number} interval  - change timer (ms)
 * @param {number} fade      - fade duration (ms)
 */
function cycleBackgroundImages(elemIds, images, interval = 5000, fade = 1000) {
    if (!images || !images.length) return;

    let current = 0;
    let [bg1, bg2] = elemIds.map(id => document.getElementById(id));

    // Preload images
    const preloaded = images.map(src => {
        const img = new Image();
        img.src = src;
        return img;
    });

    // update fade duration in CSS
    bg1.style.transitionDuration = `${fade}ms`;
    bg2.style.transitionDuration = `${fade}ms`;

    // start with first image
    bg1.style.backgroundImage = `url(${images[0]})`;
    bg1.style.opacity = "1";

    function updateBackground() {
        const nextImage = images[(current + 1) % images.length];

        bg2.style.backgroundImage = `url(${nextImage})`;
        bg2.style.opacity = "1"; // fade in new img
        bg1.style.opacity = "0"; // fade out old img

        // swap references
        [bg1, bg2] = [bg2, bg1];
        current = (current + 1) % images.length;
    }

    setInterval(updateBackground, interval);
}

const images = [
    "media/porto/porto1.jpg",
    "media/porto/porto2.jpg",
    "media/porto/porto3.jpg"
];

cycleBackgroundImages(["bg1","bg2"], images);

// This makes the navbar close after clicking
$('.navbar-nav a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// carousel config
const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1, // default (mobile)
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,                 // 3 seconds
        disableOnInteraction: false // keep moving after user clicks
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
