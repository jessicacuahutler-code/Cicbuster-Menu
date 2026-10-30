const toggleButton = document.querySelector("#toggle-button");
const hiddenMessage = document.querySelector("#hidden-message");

toggleButton.addEventListener("click", function () {
    console.log("Button clicked");
    hiddenMessage.classList.toggle("hidden");
});

console.log({ toggleButton, hiddenMessage });