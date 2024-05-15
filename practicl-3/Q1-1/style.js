function add(x, y) {
    return x + y;
}

function subtract(x, y) 
{
    return x - y;
}

function multiply(x, y) 
{
    return x * y;
}

function divide(x, y) 
{
    if (y === 0) {
        return "Error! Division by zero.";
    } else {
        return x / y;
    }
}
function calculator() {
   
    const operation = prompt("Enter operation (+, -, *, /):");

    const num1 =(prompt("Enter first number: "));
    const num2 =(prompt("Enter second number: "));

    let result;

    switch (choice) {
        case '1':
            result = add(num1, num2);
            break;
        case '2':
            result = subtract(num1, num2);
            break;
        case '3':
            result = multiply(num1, num2);
            break;
        case '4':
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid input";
            break;
    }

    console.log("Result:", result);
}

calculator();


