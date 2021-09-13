const shareButtons = document.getElementsByClassName("share");
const closeSocialButton = document.getElementsByClassName("social-close");
let social = document.getElementById("social");

// Add Event Listener to all elements in shareButtons desktop Event
for (let i = 0; i < shareButtons.length; i++) {
    shareButtons[i].addEventListener("click", function () {
        if (window.screen.width > 720) {
            // Setting the rectangle from the element
            const boundBox = this.getBoundingClientRect();
            const x = boundBox.left;
            const y = boundBox.top;
            // Setting the coordinates from the tooltip
            social.style.left = `${x - 130}px`;
            social.style.top = `${y - 70}px`;
            social.classList.add("social-desktop");
            social.classList.add("visible");
            social.focus();
        }
        else {
            social.classList.toggle("visible");
            shareButtons[i].parentNode.classList.toggle("hide");
            social.focus();
        }
        shareButtons[i].classList.add("share-active");
    });
}

for (let i = 0; i < closeSocialButton.length; i++) {
    closeSocialButton[i].addEventListener("click", function () {
        social.classList.toggle("visible");
        shareButtons[i].parentNode.classList.toggle("hide");
        social.focus();
        closeSocialButton[i].classList.add("share-active");
    });
}

social.addEventListener("focusout", function () {
    if (social.classList.contains("social-desktop")) {
        social.classList.remove('visible');
        social.classList.add('hide');
    }
})
