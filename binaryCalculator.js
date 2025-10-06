function binaryCalculator(a, b, operation) {
    // Convert binary strings to decimal numbers
    const num1 = parseInt(a, 2);
    const num2 = parseInt(b, 2);

    let result;

    // Perform the requested operation
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            result = Math.floor(num1 / num2);
            break;
        default:
            return 'Invalid operation';
    }

    // Convert the result back to binary string
    return result.toString(2);
}

// Example usage:
console.log(binaryCalculator('1010', '110', 'add'));       // Output: '10000' (10 + 6 = 16)
console.log(binaryCalculator('1010', '110', 'subtract'));  // Output: '100'   (10 - 6 = 4)
console.log(binaryCalculator('1010', '110', 'multiply'));  // Output: '111100' (10 * 6 = 60)
console.log(binaryCalculator('1010', '10', 'divide'));     // Output: '101'   (10 / 2 = 5)
