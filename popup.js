// Popup script

document.addEventListener('DOMContentLoaded', function () {
    // Code to execute when the popup HTML has been completely loaded

    // Example button click event
    const removeCommentsButton = document.getElementById('removeCommentsButton');
    removeCommentsButton.addEventListener('click', function () {
        // Get the code input from the textarea
        const codeInput = document.getElementById('codeInput').value;

        // Call the removeComments function from KodeHelp.js
        const codeWithoutComments = removeComments(codeInput);

        // Update the result textarea with the code without comments
        document.getElementById('result').value = codeWithoutComments;

        // Enable the Copy button
        document.getElementById('copyCodeButton').disabled = false;
    });

    // Example code restoration button click event
    const restoreCommentsButton = document.getElementById('restoreCommentsButton');
    restoreCommentsButton.addEventListener('click', function () {
        // Get the code input from the textarea
        const codeInput = document.getElementById('codeInput').value;

        // Get the comments input from the textarea
        const commentsInput = document.getElementById('commentsInput').value.split('\n');

        // Call the restoreComments function from KodeHelp.js
        const restoredCode = restoreComments(codeInput, commentsInput);

        // Update the result textarea with the restored code
        document.getElementById('result').value = restoredCode;

        // Disable the Copy button
        document.getElementById('copyCodeButton').disabled = true;
    });

    // Example language detection button click event
    const detectLanguageButton = document.getElementById('detectLanguageButton');
    detectLanguageButton.addEventListener('click', function () {
        // Get the code input from the textarea
        const codeInput = document.getElementById('codeInput').value;

        // Call the detectLanguage function from KodeHelp.js
        const language = detectLanguage(codeInput);

        // Update the language display
        document.getElementById('language').innerText = "Detected language: " + language;
    });

    // Copy code button click event
    const copyCodeButton = document.getElementById('copyCodeButton');
    copyCodeButton.addEventListener('click', function () {
        // Get the result textarea
        const resultTextarea = document.getElementById('result');

        // Select the text in the textarea
        resultTextarea.select();

        // Copy the selected text to the clipboard
        document.execCommand('copy');

        // Deselect the text
        resultTextarea.setSelectionRange(0, 0);
    });
});
