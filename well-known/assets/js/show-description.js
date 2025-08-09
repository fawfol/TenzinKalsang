function toggleDescription(button) {
    const description = button.previousElementSibling;
    
    if (description.classList.contains("expanded")) {
        description.classList.remove("expanded");
        button.innerHTML = "See More v";
    } else {
        description.classList.add("expanded");
        button.innerHTML = "See Less ʌ";
    }
}
