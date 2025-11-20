"use strict";   // Prevents accidental globals + helps debugging

// ***********************************************
// Q3 – Transaction Validator
// ***********************************************

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

/*
Hoisting Note:
- let & const are NOT hoisted like var.
- Functions declared with function keyword ARE hoisted.
- All variables here are declared before use, so no hoisting issues.
*/

// Arrays to store categorized results
let validTransactions = [];
let invalidTransactions = [];

/**
 * Custom error class for cleaner identification
 */
class TransactionError extends Error {
    constructor(message, type) {
        super(message);
        this.type = type; // identify category of error
    }
}

/**
 * Validator function to analyze a transaction
 */
function validateTransaction(tx) {

    // BREAKPOINT: Place a breakpoint here while debugging to watch `tx`, `tx.id`, `tx.amount`
    // debugger;  // <- uncomment in browser devtools

    // Checking for null entry
    if (tx === null) {
        throw new TransactionError("Null transaction entry", "NULL_ENTRY");
    }

    // Missing ID
    if (!tx.id && tx.id !== 0) {
        throw new TransactionError("Transaction ID missing", "MISSING_ID");
    }

    // Missing amount
    if (tx.amount === undefined) {
        throw new TransactionError("Transaction amount missing", "MISSING_AMOUNT");
    }

    // Negative amount
    if (tx.amount < 0) {
        throw new TransactionError("Negative transaction amount", "NEGATIVE_AMOUNT");
    }

    // If all checks passed → valid
    return true;
}

// ***********************************************
// PROCESSING TRANSACTIONS
// ***********************************************

console.log("======= Transaction Validation Report =======\n");

for (let i = 0; i < transactions.length; i++) {
    const tx = transactions[i];

    try {
        const result = validateTransaction(tx);

        if (result === true) {
            validTransactions.push(tx);
            console.log(`Transaction ${tx.id} ✔ VALID`);
        }

    } catch (err) {
        invalidTransactions.push({ transaction: tx, error: err.type });
        console.log(`Transaction Error ❌: ${err.message} (Type: ${err.type})`);
    }
}

console.log("\n================ FINAL REPORT ================\n");

console.log(`Successful Transactions: ${validTransactions.length}`);
console.log(validTransactions);

console.log("\nFailed Transactions: " + invalidTransactions.length);
console.log(invalidTransactions);

console.log("\n=============================================");
