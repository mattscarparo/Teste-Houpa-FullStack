var currentNumberWrapper = document.gtElementById('currentNumber');
var currentNumber = 0;

function increment() {
currentNumber = currentNumber + 1;
currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
currentNumber = currentNumber - 1;
currentNumberWrapper.innerHTML = currentNumber;
}