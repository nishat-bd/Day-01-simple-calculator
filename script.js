document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentInput = '';

    window.appendValue = function (value) {
        if (display.innerText === '0' && value !== '.') {
            currentInput = value;
        } else {
            currentInput += value;
        }
        display.innerText = currentInput;
    };

    window.clearDisplay = function () {
        currentInput = '';
        display.innerText = '0';
    };

    window.calculate = function () {
        try {
            const result = eval(currentInput);
            display.innerText = result;
            currentInput = result.toString();
        } catch (error) {
            display.innerText = 'Error';
            currentInput = '';
        }
    };
});
