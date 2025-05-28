const expressionInput = document.getElementById('expression');
const result = document.getElementById('result');
const historyList = document.getElementById('history');

function evaluateExpression() {
    const expression = expressionInput.value.trim();

    try {
        if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
            throw new Error("Invalid characters in expression");
        }

        const evaluatedResult = math.evaluate(expression);
        result.innerText = `Result: ${evaluatedResult}`;
        addToHistory(expression, evaluatedResult);
    } catch (err) {
        result.innerText = `Error: ${err.message}`;
    }
}

function append(value) {
    expressionInput.value += value;
}

function clearExpression() {
    expressionInput.value = '';
    result.innerText = 'Result: ';
}

function addToHistory(expression, evaluatedResult) {
    const li = document.createElement('li');
    li.textContent = `${expression} = ${evaluatedResult}`;
    historyList.prepend(li);
}
