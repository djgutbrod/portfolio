document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn10 = document.getElementById("scroll-btn10");
    const targetElement10 = document.getElementById("endPage");

    function smoothScroll(target, duration) {
        const startPosition = window.pageYOffset;
        const targetPosition = target.getBoundingClientRect().top;
        const distance = targetPosition;
        let startTime = null;

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    scrollBtn10.addEventListener("click", function () {
        smoothScroll(targetElement10, 1000);
    });
});
