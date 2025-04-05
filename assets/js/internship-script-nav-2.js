let lastScrollTop = 0; // Variable to keep track of the last scroll position
const navbar = document.getElementById('navbar'); // Get the navbar element

// Listen for scroll events
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Get the current scroll position
    
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('nav-hidden'); // Hide the navbar
    } else {
        // Scrolling up
        navbar.classList.remove('nav-hidden'); // Show the navbar
    }

    // Update the last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
