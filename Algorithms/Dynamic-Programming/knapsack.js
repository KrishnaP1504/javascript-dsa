// 0/1 Knapsack Problem Implementation
// Time Complexity: O(n*W) where n is number of items and W is capacity
// Space Complexity: O(n*W)

/**
 * Solves the 0/1 Knapsack problem using dynamic programming
 * @param {number} capacity - Maximum weight capacity of knapsack
 * @param {number[]} weights - Array of item weights
 * @param {number[]} values - Array of item values
 * @param {number} n - Number of items
 * @returns {number} Maximum value that can be achieved
 */
function knapsack(capacity, weights, values, n) {
    // Create a 2D array for dynamic programming
    // dp[i][w] represents the maximum value that can be achieved
    // with first i items and weight capacity w
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
    // Build table dp[][] in bottom-up manner
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i-1] <= w) {
                // If item can be included, take maximum of:
                // 1. Item is included: value of current item + value of remaining capacity
                // 2. Item is not included: value without current item
                dp[i][w] = Math.max(
                    values[i-1] + dp[i-1][w - weights[i-1]],
                    dp[i-1][w]
                );
            } else {
                // If current item's weight is more than capacity,
                // don't include it
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    
    // Return the maximum value that can be put in a knapsack of given capacity
    return dp[n][capacity];
}

/**
 * Function to get the selected items that give the maximum value
 * @param {number} capacity - Maximum weight capacity of knapsack
 * @param {number[]} weights - Array of item weights
 * @param {number[]} values - Array of item values
 * @param {number} n - Number of items
 * @returns {number[]} Array indicating which items were selected (1 for selected, 0 for not selected)
 */
function getSelectedItems(capacity, weights, values, n) {
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
    // Fill the dp table
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i-1] <= w) {
                dp[i][w] = Math.max(
                    values[i-1] + dp[i-1][w - weights[i-1]],
                    dp[i-1][w]
                );
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    
    // Backtrack to find selected items
    let selected = new Array(n).fill(0);
    let w = capacity;
    
    for (let i = n; i > 0; i--) {
        if (dp[i][w] !== dp[i-1][w]) {
            selected[i-1] = 1;
            w = w - weights[i-1];
        }
    }
    
    return selected;
}

// Example usage:
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 8;
const n = weights.length;

console.log("Knapsack Problem Example:");
console.log("Weights:", weights);
console.log("Values:", values);
console.log("Capacity:", capacity);

const maxValue = knapsack(capacity, weights, values, n);
console.log("\nMaximum value possible:", maxValue);

const selected = getSelectedItems(capacity, weights, values, n);
console.log("\nSelected items (1 means selected):", selected);

// Print selected items details
console.log("\nSelected items details:");
selected.forEach((isSelected, index) => {
    if (isSelected) {
        console.log(`Item ${index + 1}: Weight = ${weights[index]}, Value = ${values[index]}`);
    }
}); 
