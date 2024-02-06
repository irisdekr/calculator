document.addEventListener('DOMContentLoaded', function() { // Put this so that it waits first to load full js and HTML before acting. prevends from nog being able to load certain selectors, if js if faster loaded than html 

    document.getElementById("1").onclick = function() {myFunction1()};
        function myFunction1() {
            document.getElementById("displayValue").innerHTML = "1";
        }
// deze input in variabele opslaan en dan appenden aan een string. zodat getal ook 12 kan worden ipv maar 1 nummerig getal

        document.getElementById("2").onclick = function() {myFunction2()};
        function myFunction2() {
            document.getElementById("displayValue").innerHTML = "2";
        }

    const num1 = document.getElementById("")
    const num2 = document.getElementById("")
    const operator = document.getElementById("")

    function operate(num1, num2, operator) {
        if (operator = "+") {
            result = num1 + num2; 
        } else if (operator = "-") {
            result = num1 - num2; 
        } else if (operator = "*") {
            result = num1 * num2; 
        } else if (operator = "/") {
            result = num1 / num2; 
        }
    }

}); 

// klik op getal 1 button --> onclick event --> functie creeeren die getal in display vertoont 
// getal van button verschijnt in display
// getal uit display wordt opgeslagen om gebruikt te worden in som
// klik operator  --> onclick event --> functie creeeren die operator in display vertoont 
// operator verschijnt in display
// operator uit display wordt opgeslagen om gebruikt te worden in som
// klik op getal 2 button  --> onclick event --> functie creeeren die getal in display vertoont 
// getal 2 verschijnt in display 
// getal uit display wordt opgeslagen om gebruikt te worden in som
// klik op = -->  onclick event --> functie creeeren die som uitvoert van num1, num2 en operator 
// uitkomst som verschijnt in display 
    