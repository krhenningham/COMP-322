// Arrays to store valid calculation results for the summary table
let validResults = [];

// Open the main calculation table
document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

// Loop to repeatedly prompt user until "Cancel" is clicked
while (true) {
    let inputX = prompt("Enter the first number (x):");
    
    // If user clicks "Cancel" on the first prompt, exit the loop
    if (inputX === null) {
        break;
    }

    let operator = prompt("Enter an arithmetic operator (+, -, *, /, %):");
    
    // If user clicks "Cancel" on the operator prompt, exit the loop
    if (operator === null) {
        break;
    }

    let inputY = prompt("Enter the second number (y):");
    
    // If user clicks "Cancel" on the second number prompt, exit the loop
    if (inputY === null) {
        break;
    }

    let result;
    let xNum = parseFloat(inputX);
    let yNum = parseFloat(inputY);

    // Validation: Check if x or y are non-numeric using isNaN(...)
    if (isNaN(xNum) || isNaN(yNum)) {
        result = "wrong input number";
    } else {
        // Evaluate based on the operator
        switch (operator) {
            case "+":
                result = xNum + yNum;
                validResults.push(result);
                break;
            case "-":
                result = xNum - yNum;
                validResults.push(result);
                break;
            case "*":
                result = xNum * yNum;
                validResults.push(result);
                break;
            case "/":
                if (yNum === 0) {
                    result = "computation error";
                } else {
                    result = xNum / yNum;
                    validResults.push(result);
                }
                break;
            case "%":
                if (yNum === 0) {
                    result = "computation error";
                } else {
                    result = xNum % yNum;
                    validResults.push(result);
                }
                break;
            default:
                result = "computation error";
                break;
        }
    }

    // Write the current calculation row to the table
    document.write("<tr><td>" + inputX + "</td><td>" + operator + "</td><td>" + inputY + "</td><td>" + result + "</td></tr>");
}

// Close the main calculation table
document.write("</table>");

// Summary Table Construction (Only if valid results exist)
if (validResults.length > 0) {
    let min = Math.min(...validResults);
    let max = Math.max(...validResults);
    let total = validResults.reduce((acc, curr) => acc + curr, 0);
    let avg = total / validResults.length;

    document.write("<h2>Summary Statistics</h2>");
    document.write("<table>");
    document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
} else {
    document.write("<p><em>No valid calculations were recorded for summary statistics.</em></p>");
}