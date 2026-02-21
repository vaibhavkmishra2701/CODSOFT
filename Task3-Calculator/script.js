// getting the display
var display = document.getElementById("display");
var currentInput = "0";

// this function adds numbers and operators to the display
function appendValue(value) {
    if (currentInput === "0" && value !== ".") {
        currentInput = value;
    } else {
        currentInput = currentInput + value;
    }
    display.textContent = currentInput;
}

// clear everything
function clearDisplay() {
    currentInput = "0";
    display.textContent = "0";
}

// delete last character
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === "") {
        currentInput = "0";
    }
    display.textContent = currentInput;
}

// calculate the answer
function calculateResult() {
    try {
        var result = eval(currentInput);

        if (result === undefined || isNaN(result)) {
            display.textContent = "Error";
            currentInput = "0";
        } else if (result === Infinity) {
            display.textContent = "Error";
            currentInput = "0";
        } else {
            currentInput = result.toString();
            display.textContent = currentInput;
        }
    } catch (error) {
        display.textContent = "Error";
        currentInput = "0";
    }
}

// keyboard support
document.addEventListener("keydown", function(event) {
    var key = event.key;

    if (key >= "0" && key <= "9") {
        appendValue(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendValue(key);
    } else if (key === ".") {
        appendValue(".");
    } else if (key === "Enter" || key === "=") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
