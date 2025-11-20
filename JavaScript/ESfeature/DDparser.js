const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays to store results
let validNumbers = [];
let invalidNumbers = [];

// Report header
console.log("----- Dynamic Data Parser Report -----\n");

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    // Convert to different data types
    const num = Number(value);
    const bool = Boolean(value);
    const str = String(value);

    console.log(`Index ${i}:`);
    console.log(` Original:`, value);
    console.log(` Number:`, num);
    console.log(` Boolean:`, bool);
    console.log(` String:`, str);

    // Check for valid numeric values
    if (!isNaN(num) && value !== " " && value !== "100px") {
        validNumbers.push(num);
    } else {
        invalidNumbers.push(value);
    }

    console.log("---------------------------");
}

// Final report
console.log("\n===== FINAL REPORT =====");

console.log("Valid Numeric Values:");
console.log(validNumbers);

console.log("\nInvalid Numeric Values:");
console.log(invalidNumbers);

console.log("========================");
