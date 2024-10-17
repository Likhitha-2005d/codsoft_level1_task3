const display = document.getElementById('display');
let firstValue = '';
let secondValue = '';
let operator = '';
let result = '';
const buttons = document.querySelectorAll('button');
buttons.forEach( button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (value === 'AC') {
            firstValue = '';
            secondValue = '';
            operator = '';
            result = '';
            display.innerText = '0';
        } 
        else if (value === '=') {
            if (firstValue && operator && secondValue) {
                result = calculate(firstValue, operator, secondValue);
                display.innerText = result;
                firstValue = result;
                secondValue = '';
                operator = '';
            }
        }
        else if (button.classList.contains('operator')) {
            if (firstValue && !secondValue) {
                operator = value;
            }
        } 
        else if (value === '.') {
            if (!secondValue.includes('.') && operator) {
                secondValue += value;
                display.innerText = secondValue;
            } 
            else if (!firstValue.includes('.') && !operator) {
                firstValue += value;
                display.innerText = firstValue;
            }
        }
        else {
            if (operator) {
                if (!secondValue.includes(value)) {
                    secondValue += value;
                    display.innerText = secondValue;
                }
            }
            else {
                if (firstValue.length < 10) {
                    firstValue += value;
                    display.innerText = firstValue;
                }
            }
        }
    });
});
function calculate(first, operator, second) {
    let result = '';
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);
    if (operator === '+') {
        result = num1 + num2;
    }
    else if (operator === '-') {
        result = num1 - num2;
    }
    else if (operator === '*') {
        result = num1 * num2;
    }
    else if (operator === '/') {
        if (num2 === 0) {
            alert("Error: Division by zero is not allowed.");
            return '0';
        }
        result = num1 / num2;
    }
    return result;
}
