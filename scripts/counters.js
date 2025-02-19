document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 100; // Adjust speed of counting

    const updateCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = target / speed;

        const update = () => {
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        };
        update();
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
});
