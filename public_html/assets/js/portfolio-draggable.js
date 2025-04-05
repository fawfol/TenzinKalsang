const draggable = document.getElementById('draggable');

    let offsetX, offsetY;

    draggable.addEventListener('mousedown', (e) => {
        // Calculate the offset between the mouse position and the top-left corner of the div
        offsetX = e.clientX - draggable.getBoundingClientRect().left;
        offsetY = e.clientY - draggable.getBoundingClientRect().top;

        // Add event listeners for mousemove and mouseup
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });

    function mouseMoveHandler(e) {
        // Set the new position of the div
        draggable.style.left = (e.clientX - offsetX) + 'px';
        draggable.style.top = (e.clientY - offsetY) + 'px';
    }

    function mouseUpHandler() {
        // Remove the event listeners when the mouse is released
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }