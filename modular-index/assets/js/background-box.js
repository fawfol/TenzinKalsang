//random backgroun dbox placement
document.addEventListener("DOMContentLoaded", function () {
    const numBoxes = 42; // Adjust for density
    const pageHeight = document.body.scrollHeight;
    const pageWidth = window.innerWidth;

    for (let i = 0; i < numBoxes; i++) {
        let box = document.createElement("div");
        box.classList.add("box");

        box.style.top = Math.random() * pageHeight + "px";
        box.style.left = Math.random() * pageWidth + "px";

        box.style.animationDelay = Math.random() * 1.5 + "s";

        document.body.appendChild(box);
    }
});
