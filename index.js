// CALCULAATOR PROGRAM
let display = document.getElementById("display")

function calculation(input) {
    display.value += input
}
function calculate() {
    display.value = eval(display.value)
}
function clearDisplay() {
    display.value = ""
}
function cutOneValue() {
    display.value = display.value.slice(0, display.value.length - 1)
}