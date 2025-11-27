"use strict";

function addOutput(message, type) {
    const output = document.getElementById('output');
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    entry.textContent = message;
    output.appendChild(entry);
}

function runScheduler() {
    const output = document.getElementById('output');
    output.innerHTML = '';
    
    console.log("Start");
    addOutput("Start", "sync");
    
    setTimeout(() => {
        console.log("Timeout callback");
        addOutput("Timeout callback (Macrotask)", "macro");
    }, 0);
    
    Promise.resolve().then(() => {
        console.log("Promise callback");
        addOutput("Promise callback (Microtask)", "micro");
    });
    
    console.log("Synchronous log");
    addOutput("Synchronous log", "sync");
    
    console.log("End");
    addOutput("End", "sync");
}

document.getElementById('runScheduler').addEventListener('click', runScheduler);