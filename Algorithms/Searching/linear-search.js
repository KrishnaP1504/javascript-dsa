/**
 * Linear Search Algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {Array} arr - The array to search through
 * @param {*} target - The value to find
 * @returns {number} - Returns the index of target if found, -1 otherwise
 */
function linearSearch(arr, target) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If current element matches target, return its index
        if (arr[i] === target) {
            return i;
        }
    }
    // If target is not found, return -1
    return -1;
}

// Example usage:
const numbers = [5, 2, 9, 1, 7, 6, 3];

console.log(linearSearch(numbers, 7));  // Output: 4
console.log(linearSearch(numbers, 10)); // Output: -1

/**
 * Linear Search with Object Array
 * @param {Array} arr - Array of objects to search through
 * @param {string} property - Property name to search by
 * @param {*} target - Value to find
 * @returns {number} - Returns the index of target if found, -1 otherwise
 */
function linearSearchObjects(arr, property, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][property] === target) {
            return i;
        }
    }
    return -1;
}

// Example usage with objects:
const users = [
    { id: 1, name: "krishna" },
    { id: 2, name: "krish" },
    { id: 3, name: "madhav" },
    { id: 4, name: "mira" }
];

console.log(linearSearchObjects(users, "name", "krishna")); // Output: 1
console.log(linearSearchObjects(users, "id", 3));        // Output: 2 
