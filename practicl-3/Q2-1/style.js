function rectangleArea(length, width) {
    return length * width;
}

function triangleArea(base, height) {
    return 0.5 * base * height;
}

function circleArea(radius) {
    return Math.PI * radius * radius;
}

let shape = prompt("Choose a shape:").toLowerCase();

function calculateArea() {
    let area;
    switch (shape) {
        case 'rectangle':
            const rectLength = parseFloat(prompt("Enter the length of the rectangle:"));
            const rectWidth = parseFloat(prompt("Enter the width of the rectangle:"));
            area = rectangleArea(rectLength, rectWidth);
            break;
        case 'triangle':
            const triBase = parseFloat(prompt("Enter the base length of the triangle:"));
            const triHeight = parseFloat(prompt("Enter the height of the triangle:"));
            area = triangleArea(triBase, triHeight);
            break;
        case 'circle':
            const circleRadius = parseFloat(prompt("Enter the radius of the circle:"));
            area = circleArea(circleRadius);
            break;
        default:
            console.log("Invalid choice.");
            return;
    }
    console.log(`The area of the ${shape} is: ${area.toFixed(2)}`);
}

calculateArea();