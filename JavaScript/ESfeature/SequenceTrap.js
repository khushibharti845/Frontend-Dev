"use strict";

// var is hoisted → undefined if used before this line
var score = 50;

// Arrow functions are NOT hoisted (TDZ applies)
const announce = () => {
    console.log("Game started");
};

let status = "ready";

const startGame = () => {
    console.log(status);
};

console.log(score);   // 50
announce();           // Game started
startGame();          // ready
