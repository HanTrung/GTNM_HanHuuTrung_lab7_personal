let currentInput = '';
let currentOperation = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    currentOperation = operation;
    currentInput += ' ' + operation + ' ';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    updateDisplay();
}

function calculateResult() {
    const parts = currentInput.split(' ');
    const num1 = parseFloat(parts[0]);
    const operator = parts[1];
    const num2 = parseFloat(parts[2]);

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
