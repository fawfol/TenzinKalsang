// cjeck if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

//fade-in effect when element is in viewport
function checkFadeIn() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('fade-in-visible'); // Add the fade-in class
        }
    });
}

//scroll event listener to check when elements are in view
window.addEventListener('scroll', checkFadeIn);