document.addEventListener("DOMContentLoaded", function () {
    const distinctionBlog = document.querySelector(".distinction-blog");

    function revealOnScroll() {
        const rect = distinctionBlog.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.8) { // Trigger when 80% of the div is visible
            distinctionBlog.classList.add("show");
            window.removeEventListener("scroll", revealOnScroll); // Run only once
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on load in case it's already in view
});
