let carouselIntervals = [];

export function initCardCarousels({
    carouselSelector = ".card-carousel",
    imageSelector = ".carousel-image",
    dotSelector = ".dot",
    intervalTime = 3000
} = {}) {
    // Clear existing intervals (important for re-renders)
    carouselIntervals.forEach(clearInterval);
    carouselIntervals = [];

    document.querySelectorAll(carouselSelector).forEach(carousel => {
        const images = carousel.querySelectorAll(imageSelector);
        const dots = carousel.querySelectorAll(dotSelector);
        let index = 0;

        if (!images.length) return;

        function showSlide(i) {
            images.forEach(img => img.classList.remove("active"));
            dots.forEach(dot => dot.classList.remove("active"));

            images[i].classList.add("active");
            dots[i]?.classList.add("active");

            index = i;
        }

        dots.forEach(dot => {
            dot.addEventListener("click", () => {
                showSlide(Number(dot.dataset.index));
            });
        });

        showSlide(0);

        const interval = setInterval(() => {
            showSlide((index + 1) % images.length);
        }, intervalTime);

        carouselIntervals.push(interval);
    });
}
