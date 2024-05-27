let currentInput = '';
let previousInput = '';
let operation = null;

function clearScreen() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateScreen();
}

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateScreen();
}

function chooseOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentInput = computation;
    operation = null;
    previousInput = '';
    updateScreen();
}

function updateScreen() {
    document.getElementById('screen').innerText = currentInput;
}