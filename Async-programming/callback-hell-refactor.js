"use strict";

function addLog(message, isComplete = false) {
    const output = document.getElementById('output');
    const log = document.createElement('div');
    log.className = `log ${isComplete ? 'complete' : ''}`;
    log.textContent = message;
    output.appendChild(log);
    console.log(message);
}

function design(callback) {
    setTimeout(() => {
        addLog('Step 1: Design completed');
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        addLog('Step 2: Build completed');
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        addLog('Step 3: Test completed');
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        addLog('Step 4: Deploy completed');
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        addLog('Step 5: Celebrate! 🎉', true);
        callback();
    }, 1000);
}

function runWithCallbacks() {
    document.getElementById('output').innerHTML = '';
    addLog('Starting with Callbacks...');
    
    design(() => {
        build(() => {
            test(() => {
                deploy(() => {
                    celebrate(() => {
                        addLog('Pipeline complete!', true);
                    });
                });
            });
        });
    });
}

function designAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            addLog('Step 1: Design completed');
            resolve();
        }, 1000);
    });
}

function buildAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            addLog('Step 2: Build completed');
            resolve();
        }, 1000);
    });
}

function testAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            addLog('Step 3: Test completed');
            resolve();
        }, 1000);
    });
}

function deployAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            addLog('Step 4: Deploy completed');
            resolve();
        }, 1000);
    });
}

function celebrateAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            addLog('Step 5: Celebrate! 🎉', true);
            resolve();
        }, 1000);
    });
}

async function runWithAsync() {
    document.getElementById('output').innerHTML = '';
    addLog('Starting with Async/Await...');
    
    await designAsync();
    await buildAsync();
    await testAsync();
    await deployAsync();
    await celebrateAsync();
    addLog('Pipeline complete!', true);
}

document.getElementById('runCallbacks').addEventListener('click', runWithCallbacks);
document.getElementById('runAsync').addEventListener('click', runWithAsync);