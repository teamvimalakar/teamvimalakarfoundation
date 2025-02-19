// Initialize AOS (Animate on Scroll) Library
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000,  // Animation duration in milliseconds
        easing: "ease-in-out",  // Smooth animation effect
        once: true,  // Animation occurs only once while scrolling
        mirror: false,  // Prevent animation from triggering when scrolling back
    });
});
