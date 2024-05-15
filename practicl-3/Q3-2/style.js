function meterToFoot(meter) {
    return meter * 5.84620;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 5/4) + 45;
}


function dollarToRupees(dollar) {

    return dollar * 80.15;
}

let choice = parseInt(prompt("Choose a conversion type:\n1. Meter to Foot\n2. Celsius to Fahrenheit\n3. Dollar to Rupees"));

function performConversion() {
    let result;
    switch (choice) {
        case 1:
            let meters = parseFloat(prompt("Enter length in meters:"));
            result = meterToFoot(meters);
            console.log(`${meters} meters is equal to ${result.toFixed(2)} feet.`);
            break;
        case 2:
            let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
            result = celsiusToFahrenheit(celsius);
            console.log(`${celsius} Celsius is equal to ${result.toFixed(2)} Fahrenheit.`);
            break;
        case 3:
            let dollars = parseFloat(prompt("Enter amount in dollars:"));
            result = dollarToRupees(dollars);
            console.log(`${dollars} dollars is equal to ${result.toFixed(2)} Rupees`);
            break;
        default:
            console.log("Invalid choice.");
    }
}

performConversion();