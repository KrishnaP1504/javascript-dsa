/**
 * Factorial Calculator
 * This file contains both recursive and iterative implementations
 * of the factorial function (n!)
 */

/**
 * Recursive Factorial Implementation
 * Time Complexity: O(n)
 * Space Complexity: O(n) due to call stack
 * @param {number} n - The number to calculate factorial for
 * @returns {number} - The factorial of n
 * @throws {Error} - If input is negative or not an integer
 */
function factorialRecursive(n) {
    // Input validation
    if (!Number.isInteger(n) || n < 0) {
        throw new Error('Input must be a non-negative integer');
    }
    
    // Base cases
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Recursive case: n! = n * (n-1)!
    return n * factorialRecursive(n - 1);
}

/**
 * Iterative Factorial Implementation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number} n - The number to calculate factorial for
 * @returns {number} - The factorial of n
 * @throws {Error} - If input is negative or not an integer
 */
function factorialIterative(n) {
    // Input validation
    if (!Number.isInteger(n) || n < 0) {
        throw new Error('Input must be a non-negative integer');
    }
    
    // Handle base cases
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Calculate factorial iteratively
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage and tests
try {
    console.log('Recursive Examples:');
    console.log('0! =', factorialRecursive(0));  // Output: 1
    console.log('1! =', factorialRecursive(1));  // Output: 1
    console.log('5! =', factorialRecursive(5));  // Output: 120
    
    console.log('\nIterative Examples:');
    console.log('0! =', factorialIterative(0));  // Output: 1
    console.log('1! =', factorialIterative(1));  // Output: 1
    console.log('5! =', factorialIterative(5));  // Output: 120
} catch (error) {
    console.error('Error:', error.message);
}

// Export both implementations
module.exports = {
    factorialRecursive,
    factorialIterative
}; 
