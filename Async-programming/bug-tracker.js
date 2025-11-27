"use strict";

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.2;
            
            if (shouldFail) {
                reject("API failed to fetch bugs");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

function displayBugs(bugs) {
    const bugList = document.getElementById('bugList');
    
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Index</th>
                <th>Bug Description</th>
            </tr>
        </thead>
        <tbody>
            ${bugs.map((bug, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${bug}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    
    bugList.innerHTML = '';
    bugList.appendChild(table);
    
    console.table(bugs.map((bug, index) => ({ Index: index + 1, Bug: bug })));
}

function showMessage(message, isError = false) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = isError ? 'error' : 'success';
    messageDiv.style.display = 'block';
    
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);
}

document.getElementById('fetchBugs').addEventListener('click', () => {
    const bugList = document.getElementById('bugList');
    bugList.innerHTML = '<p>Loading bugs...</p>';
    
    getBugs()
        .then(bugs => {
            displayBugs(bugs);
            showMessage('Bugs fetched successfully!');
        })
        .catch(error => {
            bugList.innerHTML = '';
            showMessage(error, true);
            console.error(error);
        });
});