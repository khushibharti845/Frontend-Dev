"use strict";

// Custom Error Classes
class DivideByZeroError extends Error {
    constructor(message) {
        super(message);
        this.name = "DivideByZeroError";
    }
}

class NegativeRootError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeRootError";
    }
}

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function smartCalculator(op, a, b) {
    let result;

    try {
        switch (op) {

            case "add":
                result = a + b;
                break;

            case "subtract":
                result = a - b;
                break;

            case "divide":
                if (b === 0) throw new DivideByZeroError("Cannot divide by zero");
                result = a / b;
                break;

            case "power":
                result = Math.pow(a, b);
                break;

            case "root":
                if (a < 0) throw new NegativeRootError("Cannot take square root of negative number");
                result = Math.sqrt(a);
                break;

            default:
                throw new InvalidOperationError(`'${op}' is not a valid operation`);
        }

        console.log(`
==============================
 OPERATION SUCCESSFUL ✔
------------------------------
 Operation  : ${op}
 Numbers    : ${a}, ${b}
 Result     : ${result}
==============================
        `);

    } catch (err) {

        console.log(`
==============================
 OPERATION FAILED ✖
------------------------------
 Operation  : ${op}
 Error Type : ${err.name}
 Message    : ${err.message}
==============================
        `);
    }
}

// Run all operations
for (let op of operations) {
    smartCalculator(op, num1, num2);
}
