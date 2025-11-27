"use strict";

function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server A deployed successfully");
            } else {
                reject("Server A deployment failed");
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server B deployed successfully");
            } else {
                reject("Server B deployment failed");
            }
        }, 3000);
    });
}

function updateServerStatus(serverId, message, isError = false) {
    const element = document.getElementById(serverId);
    element.textContent = message;
    element.style.color = isError ? '#dc3545' : '#28a745';
}

function addResult(message, isError = false) {
    const results = document.getElementById('results');
    const resultDiv = document.createElement('div');
    resultDiv.className = `result ${isError ? 'error' : 'success'}`;
    resultDiv.textContent = message;
    results.appendChild(resultDiv);
    console.log(message);
}

function startDeployment() {
    const results = document.getElementById('results');
    results.innerHTML = '';
    
    updateServerStatus('serverA', 'Deploying...');
    updateServerStatus('serverB', 'Deploying...');
    
    addResult('Starting deployment...');
    
    const promiseA = serverA()
        .then(result => {
            updateServerStatus('serverA', 'Deployed ✓');
            return result;
        })
        .catch(error => {
            updateServerStatus('serverA', 'Failed ✗', true);
            throw error;
        });
    
    const promiseB = serverB()
        .then(result => {
            updateServerStatus('serverB', 'Deployed ✓');
            return result;
        })
        .catch(error => {
            updateServerStatus('serverB', 'Failed ✗', true);
            throw error;
        });
    
    Promise.race([promiseA, promiseB])
        .then(result => {
            addResult(`Fastest response: ${result}`);
        })
        .catch(error => {
            addResult(`First failure: ${error}`, true);
        });
    
    Promise.all([promiseA, promiseB])
        .then(results => {
            addResult('Deployment completed for all servers');
            results.forEach(result => addResult(result));
        })
        .catch(error => {
            addResult(`Deployment failed: ${error}`, true);
        });
}

document.getElementById('startDeployment').addEventListener('click', startDeployment);