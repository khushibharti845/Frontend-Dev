"use strict";  // Prevents implicit globals & catches silent errors

// ****************************************************
// Q2 – Employee Bonus Calculator
// ****************************************************

const employees = [
    { name: "Amit",  salary: "45000", years: "5" },
    { name: "Sara",  salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

// NOTE on Hoisting:
// Variables declared with let/const are NOT hoisted like var.
// Using strict mode + let/const ensures no accidental global variables.

// Function to calculate bonus for each employee
function calculateBonus(emp) {
    try {
        // Debugging Observation:
        // If any field is missing or cannot be converted, Number() may give NaN.
        // Accessing emp.salary or emp.years when missing → undefined → Number(undefined) → NaN.

        if (!emp.name || !emp.salary || !emp.years) {
            throw new Error(`Missing property in employee data: ${JSON.stringify(emp)}`);
        }

        // Convert salary and years to numbers
        const salaryNum = Number(emp.salary);
        const yearsNum = Number(emp.years);

        if (isNaN(salaryNum) || isNaN(yearsNum)) {
            throw new Error(`Invalid numeric conversion for: ${emp.name}`);
        }

        // Bonus logic
        const bonus = yearsNum > 3 ? salaryNum * 0.10 : salaryNum * 0.05;

        // Template string formatted output
        console.log(`
------------------------------
Employee: ${emp.name}
Salary:   ₹${salaryNum}
Years:    ${yearsNum}
Bonus:    ₹${bonus}
------------------------------
        `);

    } catch (error) {
        console.log(`ERROR: ${error.message}`);
    }
}

console.log("======== Employee Bonus Report ========\n");

// Loop through all employees
for (let i = 0; i < employees.length; i++) {
    calculateBonus(employees[i]);
}

console.log("\n=======================================");
