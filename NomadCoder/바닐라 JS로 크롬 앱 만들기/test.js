const range = document.querySelector(".slider_range");
let sliderView = document.querySelector("#slider_value_view");
const playBtn = document.querySelector("button");
const inputValue = document.querySelector("#input_value");
const inputText = document.querySelector("#input_text");
const machineValue = document.querySelector("#machine_value");
const wonlost = document.querySelector("#won_lost");
const divShow = document.querySelector("#divShow");

function playBtnFn() {
    playBtn.addEventListener("click", function() {
        inputValue.innerHTML = inputText.value;
        machineValue.innerHTML = Math.floor(Math.random() * range.value+1);

        divShow.setAttribute("style", "display: block");
        if(machineValue.textContent === inputValue.textContent) {
            wonlost.innerHTML = 'You Won!'
        } else {
            wonlost.innerHTML = 'You Lost!'
        }
    })
}

function rangeSlider() {
    range.addEventListener('input', function() {
        sliderView.innerHTML = range.value;
    })
}

function init() {
    sliderView.innerHTML = range.value;
    rangeSlider();
    playBtnFn();
}

init();