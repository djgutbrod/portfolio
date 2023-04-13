document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn4 = document.getElementById("scroll-btn4");
    const targetElement4 = document.getElementById("about");

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

    scrollBtn4.addEventListener("click", function () {
        smoothScroll(targetElement4, 1000);
    });
});
