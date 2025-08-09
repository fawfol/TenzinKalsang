document.addEventListener("DOMContentLoaded", function () {
    const skillSection = document.querySelector(".skill-section");
    const skillBars = document.querySelectorAll(".range-box div");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    skillBars.forEach((bar) => {
                        bar.classList.add("animate");
                    });
                    observer.unobserve(skillSection); // Stop observing once triggered
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(skillSection);
});
