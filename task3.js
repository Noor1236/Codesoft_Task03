

let expression = '';

function appendValue(value) {
    expression += value;
    document.getElementById('result').value = expression;
}

function appendOperator(operator) {
    expression += operator;
    document.getElementById('result').value = expression;
}

function calculateResult() {
    try {
        const result = eval(expression);
            document.getElementById('result').value = result;
            expression = result.toString();
    } catch (error) {
            document.getElementById('result').value = 'Error';
    }
}

function clearCalculator() {
    expression = '';
    document.getElementById('result').value = '';
}





