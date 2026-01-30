"use strict";

/**
 * Background slideshow
 *
 * @param {string} elem_id  - apply bg to this element
 * @param {string[]} images - array of image URLs
 * @param {number} interval - change timer (ms)
 */
function cycleBackgroundImages(elem_id, images, interval) {
    if (!images || !images.length) return;

    let x = 0;
    const elem = document.getElementById(elem_id);

    // Preload images
    const preloaded = images.map(src => {
        const img = new Image();
        img.src = src;
        return img;
    });

    function updateBackground() {
        elem.style.backgroundImage = `url(${images[x]})`;
        x = (x + 1) % images.length;
    }

    try {
        updateBackground(); // show first image immediately
        setInterval(updateBackground, interval);

    } catch (err) {
        console.error("Error updating background:", err);
    }
}

const images = [
    "media/porto/porto1.jpg",
    "media/porto/porto2.jpg",
    "media/porto/porto3.jpg"
];

cycleBackgroundImages("location", images, 5000);



//caroussel
$('#recipeCarousel').carousel({
  interval: 2000
})

$('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<3;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});
