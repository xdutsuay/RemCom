// Background script

// This script handles background tasks and context switching between different files

// Example: Listen for messages from content scripts
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Example: Log the message received from the content script
    console.log('Message received from content script:', message);

    // Example: Send a response back to the content script
    sendResponse('Response from background script');
});

// Example: Open a new tab with a specific URL when the extension is installed
chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({ url: 'https://example.com/welcome' });
});
