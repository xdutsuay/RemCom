// Content script

// This script runs on web pages to interact with their content

// Example: Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Example: Log the message received from the background script
    console.log('Message received from background script:', message);

    // Example: Send a response back to the background script
    sendResponse('Response from content script');
});
