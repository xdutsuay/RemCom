// KodeHelp.js
// Main script for code manipulation and language detection

// Function to remove comments from code
function removeComments(code) {
    // Regular expression to match single-line and multi-line comments
    const commentRegex = /\/\*[\s\S]*?\*\/|\/\/.*/g;
    return code.replace(commentRegex, ''); // Replace comments with an empty string
}

// Function to add comments back to code based on the context
function restoreComments(code, comments) {
    let restoredCode = code;
    // Regular expression to match locations where comments were originally present
    const commentMarkerRegex = /\/\*\*COMMENT:(\d+)\*\*\//g;
    let match;
    while ((match = commentMarkerRegex.exec(code)) !== null) {
        const commentIndex = parseInt(match[1]);
        restoredCode = restoredCode.replace(`/**COMMENT:${commentIndex}**/`, comments[commentIndex]);
    }
    return restoredCode;
}

// Function to extract comments and remove them from code, returning both
function extractComments(code) {
    let comments = [];
    let index = 0;
    const codeWithoutComments = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, (match) => {
        comments.push(match);
        return `/**COMMENT:${index++}**/`; // Replace comments with a marker for later restoration
    });
    return { codeWithoutComments, comments };
}

// Function to detect the programming language of the code
function detectLanguage(code) {
    // Implement your language detection logic here
    // This is a simple example that detects JavaScript code
    if (code.includes('function') || code.includes('var') || code.includes('const') || code.includes('let')) {
        return 'JavaScript';
    } else {
        return 'Unknown';
    }
}

// Function to manage context for different files
function manageContext() {
    // Implement context management logic here
}

// Example usage:
const codeWithComments = `
// This is a single-line comment
/*
 * This is a
 * multi-line
 * comment
 */
function add(a, b) {
    // This is another single-line comment
    return a + b; // adding two numbers
}
`;

// Extract comments and remove them from code
const { codeWithoutComments, comments } = extractComments(codeWithComments);
console.log("Code without comments:");
console.log(codeWithoutComments);

// Restore comments to code
const restoredCode = restoreComments(codeWithoutComments, comments);
console.log("\nRestored code with comments:");
console.log(restoredCode);

// Detect language of the code
const language = detectLanguage(codeWithComments);
console.log("\nDetected language:", language);
