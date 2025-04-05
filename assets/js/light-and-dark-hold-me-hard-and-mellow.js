// light-and-dark-hold-me-hard-and-mellow.js
document.addEventListener("DOMContentLoaded", function() {
    // Create the black-text CSS rule in JavaScript
    const style = document.createElement('style');
    style.innerHTML = '.black-text { color: black !important; }';
    document.head.appendChild(style);


    function applyBlackText() {
        const allElements = document.querySelectorAll('*');

        allElements.forEach(element => {
            const style = window.getComputedStyle(element);
            const color = style.color;

            // Convert color to RGB array
            const rgbValues = color.match(/\d+/g);

            if (!rgbValues || rgbValues.length < 3) {
                return; // Skip elements where color cannot be determined
            }

            const red = parseInt(rgbValues[0]);
            const green = parseInt(rgbValues[1]);
            const blue = parseInt(rgbValues[2]);

            // Check if the color is close to white (adjust threshold as needed)
            const threshold = 240; // Adjust this threshold as needed
            if (red > threshold && green > threshold && blue > threshold) {
                element.classList.add('black-text');
            }
        });
    }

    function removeBlackText() {
        const allElements = document.querySelectorAll('*');

        allElements.forEach(element => {
            element.classList.remove('black-text');
        });
    }

    function toggleTheme() {
        let toggle = document.getElementById("themeToggle");
        
        if (toggle.checked) {
            // Light mode
            document.body.style.backgroundColor = "white";
            applyBlackText(); // Apply black text when light mode is ON
        } else {
            // Dark mode
            document.body.style.backgroundColor = "rgb(33, 33, 33)";
            removeBlackText(); // Remove black text when dark mode is ON
        }
    }

    // Attach the toggleTheme function to the themeToggle checkbox
    let themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("change", toggleTheme);
});
