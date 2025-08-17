//new page transitions
function startTransition() {
    let firstStrip = document.querySelector('.first');
    let secondStrip = document.querySelector('.second');

    firstStrip.style.animation = "stripMove 0.5s forwards";

    setTimeout(() => {
        secondStrip.style.animation = "stripMove 0.5s forwards";
    }, 500);
    setTimeout(() => {
        window.location.href = "index.html";
    }, 820);
}
//new page transition end
