let validResults = [];

// Construct the main calculation table
document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

while (true) {
    let inputX = prompt("Enter the first number (x):");
    if (inputX === null) break;

    let operator = prompt("Enter an arithmetic operator (+, -, *, /, %):");
    if (operator === null) break;

    let inputY = prompt("Enter the second number (y):");
    if (inputY === null) break;

    let result;
    let xNum = parseFloat(inputX);
    let yNum = parseFloat(inputY);

    // Validation matching assignment specifications
    if (isNaN(xNum) || isNaN(yNum)) {
        result = "wrong input number";
    } else {
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
                // Unrecognized operators (like 'a') display computation error
                result = "computation error";
                break;
        }
    }

    document.write("<tr><td>" + inputX + "</td><td>" + operator + "</td><td>" + inputY + "</td><td>" + result + "</td></tr>");
}

document.write("</table>");

// Construct Summary Table immediately below if valid results exist
if (validResults.length > 0) {
    let min = Math.min(...validResults);
    let max = Math.max(...validResults);
    let total = validResults.reduce((acc, curr) => acc + curr, 0);
    let avg = total / validResults.length;

    document.write("<table>");
    document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}