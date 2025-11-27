"use strict";

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.2;
            if (shouldFail) {
                reject("Profile failed to load");
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.2;
            if (shouldFail) {
                reject("Posts failed to load");
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.2;
            if (shouldFail) {
                reject("Messages failed to load");
            } else {
                resolve("Messages Loaded");
            }
        }, 1000);
    });
}

function addResult(message, isError = false) {
    const results = document.getElementById('results');
    const result = document.createElement('div');
    result.className = `result ${isError ? 'error' : 'success'}`;
    result.textContent = message;
    results.appendChild(result);
    console.log(message);
}

async function loadDashboard() {
    const results = document.getElementById('results');
    results.innerHTML = '';
    
    document.getElementById('profile').textContent = 'Loading...';
    document.getElementById('profile').className = '';
    document.getElementById('posts').textContent = 'Loading...';
    document.getElementById('posts').className = '';
    document.getElementById('messages').textContent = 'Loading...';
    document.getElementById('messages').className = '';
    
    const startTime = Date.now();
    addResult('Dashboard loading started...');
    
    try {
        const results = await Promise.allSettled([
            loadProfile(),
            loadPosts(),
            loadMessages()
        ]);
        
        const endTime = Date.now();
        const totalTime = ((endTime - startTime) / 1000).toFixed(2);
        
        const [profileResult, postsResult, messagesResult] = results;
        
        if (profileResult.status === 'fulfilled') {
            document.getElementById('profile').textContent = profileResult.value;
            document.getElementById('profile').className = 'loaded';
            addResult('✓ Profile loaded successfully');
        } else {
            document.getElementById('profile').textContent = profileResult.reason;
            document.getElementById('profile').className = 'failed';
            addResult(`✗ Profile failed: ${profileResult.reason}`, true);
        }
        
        if (postsResult.status === 'fulfilled') {
            document.getElementById('posts').textContent = postsResult.value;
            document.getElementById('posts').className = 'loaded';
            addResult('✓ Posts loaded successfully');
        } else {
            document.getElementById('posts').textContent = postsResult.reason;
            document.getElementById('posts').className = 'failed';
            addResult(`✗ Posts failed: ${postsResult.reason}`, true);
        }
        
        if (messagesResult.status === 'fulfilled') {
            document.getElementById('messages').textContent = messagesResult.value;
            document.getElementById('messages').className = 'loaded';
            addResult('✓ Messages loaded successfully');
        } else {
            document.getElementById('messages').textContent = messagesResult.reason;
            document.getElementById('messages').className = 'failed';
            addResult(`✗ Messages failed: ${messagesResult.reason}`, true);
        }
        
        addResult(`Total loading time: ${totalTime} seconds`);
        
    } catch (error) {
        addResult(`Error: ${error}`, true);
    }
}

document.getElementById('loadDashboard').addEventListener('click', loadDashboard);