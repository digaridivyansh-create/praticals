let fontSize = 16;
let bgToggle = false;

const heading = document.getElementById("heading");
const input = document.getElementById("inputText");
const para = document.getElementById("para");

document.getElementById("btnHeading").addEventListener("click", function () {
    if (input.value !== "") {
        heading.innerText = input.value;
    }
});

document.getElementById("btnBg").addEventListener("click", function () {
    bgToggle = !bgToggle;
    document.body.style.backgroundColor = bgToggle ? "#cce5ff" : "#e6e6e6";
});

document.getElementById("btnFont").addEventListener("click", function () {
    fontSize += 2;
    para.style.fontSize = fontSize + "px";
});

document.getElementById("btnToggle").addEventListener("click", function () {
    para.style.display = (para.style.display === "none") ? "block" : "none";
});

document.getElementById("btnReset").addEventListener("click", function () {
    heading.innerText = "Welcome to JavaScript Lab";
    input.value = "";
    document.body.style.backgroundColor = "#e6e6e6";
    para.style.display = "block";
    fontSize = 16;
    para.style.fontSize = "16px";
});