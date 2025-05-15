const btnelement = document.querySelector("button");
const spanElement = document.getElementById("updateContent");

btnelement.onclick = function () {
    const yourName = prompt("Please enter your name");
    spanElement.textContent = yourName;
}