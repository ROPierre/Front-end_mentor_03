const shareButtons = document.getElementsByClassName("share");

let tooltip = document.getElementById("tooltip");

// Add Event Listener to all elements in shareButtons
for (let i = 0; i < shareButtons.length; i++) {
    shareButtons[i].addEventListener("click", function () {
        // Setting the rectangle from the element
        const boundBox = this.getBoundingClientRect();
        const x = boundBox.left;
        const y = boundBox.top;
        // Setting the coordinates from the tooltip
        tooltip.style.left = `${x - 130}px`;
        tooltip.style.top = `${y - 70}px`;
        tooltip.className = "visible";
        tooltip.focus();

        shareButtons[i].classList.add("share-active");
    });
    
}

tooltip.addEventListener("focusout", function () {
    console.log('xuxa')
    if (tooltip.classList == "visible") {
        tooltip.classList.remove("visible");
        tooltip.className = "hide";
    } else {
        console.log(0)
    }
})