"use strict";

function addStep(message, isSuccess = true, isCompleted = false) {
    const pipeline = document.getElementById('pipeline');
    const step = document.createElement('div');
    step.className = `step ${isSuccess ? 'success' : 'failed'} ${isCompleted ? 'completed' : ''}`;
    step.textContent = message;
    pipeline.appendChild(step);
    console.log(message);
}

function takeOrder() {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000 + 1000;
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve();
            } else {
                reject("Failed to take order");
            }
        }, delay);
    });
}

function prepare() {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000 + 1000;
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve();
            } else {
                reject("Failed to prepare food");
            }
        }, delay);
    });
}

function pack() {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000 + 1000;
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve();
            } else {
                reject("Failed to pack order");
            }
        }, delay);
    });
}

function dispatch() {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000 + 1000;
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve();
            } else {
                reject("Failed to dispatch");
            }
        }, delay);
    });
}

function deliver() {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000 + 1000;
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve();
            } else {
                reject("Failed to deliver");
            }
        }, delay);
    });
}

async function runPipeline() {
    const pipeline = document.getElementById('pipeline');
    pipeline.innerHTML = '';
    
    try {
        addStep("Start Pipeline");
        
        await takeOrder();
        addStep("Step 1: Order taken");
        
        await prepare();
        addStep("Step 2: Food prepared");
        
        await pack();
        addStep("Step 3: Package ready");
        
        await dispatch();
        addStep("Step 4: Out for delivery");
        
        await deliver();
        addStep("Delivery completed!", true, true);
        
    } catch (error) {
        addStep(`Pipeline failed: ${error}`, false);
    }
}

document.getElementById('startDelivery').addEventListener('click', runPipeline);