document.addEventListener('DOMContentLoaded', function() { // Put this so that it waits first to load full js and HTML before acting. prevends from nog being able to load certain selectors, if js if faster loaded than html 

    let currentInput = ""; // Variable to store current input

    function updateDisplay() { // Shows number of clicked button in display
        document.getElementById("displayValue").innerHTML = currentInput;
    }

    function appendToInput(value) {  // Appends next clicked digits to the current input
        currentInput += value;
        updateDisplay();
    }

    function clearInput() { // Function to clear display when funtion is called by clicking on clear button
        currentInput = "";
        updateDisplay();
    }

    function operate(num1, num2, operator) {  // function to do the actual math 
        num1 = parseFloat(num1); // converts string num1 to number
        num2 = parseFloat(num2); // "" "" 

        let result;

        switch (operator) { // does the actual math 
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                return NaN; 
        }

        clearInput(); 
        currentInput = result.toString();
        updateDisplay();
        //this block of code does the following: 
        // - The current input is cleared to prepare for new input.
        // - The result is converted to a string and assigned to the current input.
        // - The display is updated to show the new current input, which now holds the result of the calculation.
    }

    // To get the user input when clicked on a number button 
    document.getElementById("1").onclick = function() {
        appendToInput("1");
    };

    document.getElementById("2").onclick = function() {
        appendToInput("2");
    };
 
    document.getElementById("3").onclick = function() {
        appendToInput("3");
    };

    document.getElementById("4").onclick = function() {
        appendToInput("4");
    };

    document.getElementById("5").onclick = function() {
        appendToInput("5");
    };

    document.getElementById("6").onclick = function() {
        appendToInput("6");
    };

    document.getElementById("7").onclick = function() {
        appendToInput("7");
    };

    document.getElementById("8").onclick = function() {
        appendToInput("8");
    };
    
    document.getElementById("9").onclick = function() {
        appendToInput("9");
    };

    document.getElementById("0").onclick = function() {
        appendToInput("0");
    };

    document.getElementById(".").onclick = function() {
        appendToInput(".");
    };

    // Clear button, so when is clicked on clear button, clearInput function is called and display is emptied. 
    document.querySelector(".clearbutton button").onclick = function() {
        clearInput();
    };

    // Operator buttons, this block of code ensures: 
    // that each operator button within the .operatorbuttons container has a click event listener. 
    // When any of these buttons is clicked, the associated operator symbol is appended to the current input, 
    // allowing the user to build a mathematical expression for subsequent calculation.
    const operatorButtons = document.querySelectorAll(".operatorbuttons button");
    operatorButtons.forEach(function(button) {
        button.onclick = function() {
            appendToInput(button.textContent);
        };
    });

    // Equal button
    document.getElementById("=").onclick = function() {
        // Split the input string into operands and operator
        const [num1, operator, num2] = currentInput.split(/([\+\-\*\/])/);

        if (num1 && operator && num2) {
            operate(num1, num2, operator);
        }
    };
});

// still need to do: 
// number of digits exceeds the display limit when user is clicking more then 20 digits in a row, must not accept input greater then 20.  
// if operate() has run and user clicks number button after, number is added in line of the shown result. needs to empty display before starting new operation 
// make digits shown exactly in the middle of the display 

    