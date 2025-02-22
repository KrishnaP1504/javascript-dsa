// Function to generate Fibonacci series using iteration
function fibonacciSeries(n) {
    // Initialize array to store Fibonacci numbers
    let fib = [0, 1];
    
    // Generate Fibonacci numbers up to nth term
    for (let i = 2; i < n; i++) {
        // Each number is sum of two preceding numbers
        fib[i] = fib[i-1] + fib[i-2];
    }
    
    return fib;
}

// Function to get nth Fibonacci number using recursion
function fibonacciNumber(n) {
    // Base cases
    if (n <= 0) return 0;
    if (n === 1) return 1;
    
    // Recursive case: F(n) = F(n-1) + F(n-2)
    return fibonacciNumber(n-1) + fibonacciNumber(n-2);
}

// Function to generate Fibonacci series using dynamic programming
function fibonacciDP(n) {
    // Create a memoization object to store calculated values
    let memo = {};
    
    function fib(n) {
        // Check if value exists in memo
        if (n in memo) return memo[n];
        
        // Base cases
        if (n <= 0) return 0;
        if (n === 1) return 1;
        
        // Calculate and store result in memo
        memo[n] = fib(n-1) + fib(n-2);
        return memo[n];
    }
    
    // Generate series
    let series = [];
    for (let i = 0; i < n; i++) {
        series.push(fib(i));
    }
    
    return series;
}

// Example usage:
console.log("Iterative Fibonacci series (first 10 numbers):");
console.log(fibonacciSeries(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log("\n7th Fibonacci number using recursion:");
console.log(fibonacciNumber(7)); // 13

console.log("\nDynamic Programming Fibonacci series (first 10 numbers):");
console.log(fibonacciDP(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 
