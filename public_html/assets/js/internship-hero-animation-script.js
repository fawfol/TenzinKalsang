document.addEventListener("DOMContentLoaded", function () {
    const grids = document.querySelectorAll(".floater-image-grid");
    const images = document.querySelectorAll(".floater-image");
    const headingText = document.querySelector(".silhouette-text");
    const hoverTexts = document.querySelectorAll(".hover-text");

    grids.forEach((grid, index) => {
        let targetX = 0, targetY = 0; // Cursor target position
        let currentX = 0, currentY = 0; // Current image position
        const originalX = 0, originalY = 0; // Fixed original position
        let isMoving = false;

        function animate() {
            if (!isMoving) return;

            //lerp
            currentX += (targetX - currentX) * 0.03;
            currentY += (targetY - currentY) * 0.03;

            //static grid
            images[index].style.transform = `translate(${currentX}px, ${currentY}px)`;

            requestAnimationFrame(animate);
        }
        grid.addEventListener("mouseenter", function () {
            isMoving = true;
            requestAnimationFrame(animate);
            headingText.style.opacity = 0;

            //image in the hovered grid visible
            images[index].classList.add("hovered");
            images[index].classList.remove("not-hovered");

            //hover text for this specific grid
            hoverTexts[index].style.opacity = "1";

            //hover text for other grids hideen
            hoverTexts.forEach((text, textIndex) => {
                if (textIndex !== index) {
                    text.style.opacity = "0";
                }
            });

            //other images in different grids invisible and apply the box style
            images.forEach((otherImage, otherIndex) => {
                if (otherIndex !== index) {
                    otherImage.classList.add("not-hovered");
                    otherImage.classList.remove("hovered");
                }
            });
        });

        grid.addEventListener("mousemove", function (event) {
            const rect = grid.getBoundingClientRect();
            const offsetX = rect.width / 2;
            const offsetY = rect.height / 2;

            //updating target position for smooth movement
            targetX = event.clientX - rect.left - offsetX;
            targetY = event.clientY - rect.top - offsetY;
        });

        grid.addEventListener("mouseleave", function () {
            isMoving = true;
            targetX = originalX;
            targetY = originalY;
            requestAnimationFrame(animate);
            headingText.style.opacity = 1;

            //all images back to the hovered state when the mouse leaves the grid
            images.forEach((otherImage) => {
                otherImage.classList.remove("not-hovered");
                otherImage.classList.add("hovered");
            });

            // hde all hover texts when leaving the grid
            hoverTexts.forEach((text) => {
                text.style.opacity = "0";
            });
        });
    });
});
