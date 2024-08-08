let currentNumber = '0';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
    if (currentNumber === '0' || currentNumber === '' || operator === '=') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
    }
    updateDisplay();
}

function setOperator(op) {
    if (currentNumber === '' && op === '-') {
        currentNumber = '-';
        updateDisplay();
        return;
    }

    if (currentNumber === '' || currentNumber === '-') return;

    if (previousNumber !== '') {
        calculate();
    }

    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operator = '=';
    previousNumber = '';
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '0';
    previousNumber = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentNumber;
}