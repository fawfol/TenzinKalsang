document.addEventListener("DOMContentLoaded", function () {
    const quoteBox = document.querySelector(".quote-content-box");

    let isAnimated = false;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isAnimated) {
                    quoteBox.classList.remove("unarise");
                    quoteBox.classList.add("arise");
                    isAnimated = true;
                } else if (!entry.isIntersecting && isAnimated) {
                    quoteBox.classList.remove("arise");
                    isAnimated = false;
                    quoteBox.classList.add("unarise");
                }
            });
        },
        { threshold: 0.9 }
    );

    observer.observe(quoteBox);
});
