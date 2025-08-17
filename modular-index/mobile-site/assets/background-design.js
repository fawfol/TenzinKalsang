function createCircle() {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    // Random size between 20px and 150px
    const size = Math.random() * 100 + 20;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    // Random position within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const maxX = viewportWidth - size;
    const maxY = viewportHeight - size;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    circle.style.animation = `appear 3s ease-out forwards`;

    document.body.appendChild(circle);
}

function createCirclesOnce() {
    for (let i = 0; i < 12; i++) { 
        createCircle();
    }
}

// Run once after 1 second
setTimeout(() => createCirclesOnce(), 1000);