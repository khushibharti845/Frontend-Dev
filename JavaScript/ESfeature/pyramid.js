"use strict";

/*
 q6_pyramidGenerator.js
 - Uses let for block-scoped loop variables (recommended)
 - Outer loop limit is read from command-line: node q6_pyramidGenerator.js 5
 - Default limit = 5
 - All output via console.log
 - Add a breakpoint on the "debugger;" line to inspect variables in VS Code / Node inspector
*/

(function main() {
  // Read user input from CLI (node). If not provided or invalid, use default 5.
  const raw = process.argv[2];
  const defaultLimit = 5;
  const limit = Number.isInteger(Number(raw)) && Number(raw) > 0 ? Number(raw) : defaultLimit;

  console.log("Q6 – Pyramid Pattern Generator (let version)");
  console.log(`Using outer loop limit = ${limit}\n`);

  // Outer loop controls number of lines
  for (let i = 1; i <= limit; i++) {
    // debugger; // <-- place breakpoint here to watch i and lineStr during debugging
    // Build the line by appending "*"
    let lineStr = "";
    for (let j = 1; j <= i; j++) {
      // Using let for j ensures j is block scoped to this inner loop iteration
      lineStr += (j === 1 ? "*" : " *");
    }
    console.log(lineStr);
  }

  console.log("\n-- Observations (let) --");
  console.log("1) 'let' creates block-scoped bindings. Each iteration gets its own 'i' and 'j'.");
  console.log("2) No accidental variable reuse across iterations.");
  console.log("3) Best for loops where you might set breakpoints or use closures inside loop bodies.\n");
})();
